(function() {
"use strict";


var events = {
  _ns: 'local',
  _doc: $(document),
  trigger: function _eventsTrigger(name, opt) {
    name = name + '.' + this._ns;
    var init = opt ? {detail: opt} : {};
    init['type'] = name;
    try {
      this._doc.trigger(init);
    } catch (e) {
      console.log('Triggering event', name, e);
      throw(e);
    }
  },
  on: function _eventsOn(name, handler) {
    name = name + '.' + this._ns;
    this._doc.on(name, handler);
  }
};


function Search() {
  var self = this;
  this._urlPrefix = 'http://api.wordreference.com/0.8/';
  this.term = ko.observable("");
  this.dict = ko.observable("");
  this.externalLink = ko.computed(function _externalLink() {
    var url = self._urlPrefix + self.apiKey +
              '/' + self.dict() + '/' + encodeURIComponent(self.term());
    return url;
  });
  ko.computed(function _watchDict() {
    events.trigger('newLangDict', {dict: self.dict()});
  });
  this.apiKey = '460cd';  // Word reference API key.
};

Search.prototype.wakeUp = function _wakeUp() {
  document.querySelector('#term').focus();
  var lastDict = window.localStorage.getItem('dict');
  if (lastDict) {
    this.dict(lastDict);
  }
};

Search.prototype.search = function _search() {
  events.trigger('loadstart');
  var url = this._urlPrefix + this.apiKey + '/json/' + this.dict() +
            '/' + encodeURIComponent(this.term());
  console.log('search URL', url);
  $.ajax({url: url, dataType: 'jsonp'})
    .done(function(data, textStatus, jqXHR) {
      try {
        console.log('received data');
        var normResults = [];
        for (var termKey in data) {
          if (termKey.substr(0, 4) != 'term') {
            continue;
          }
          // data.term0
          var ob = data[termKey];
          for (var transKey in ob) {
            // PrincipalTranslations, AdditionalTranslations
            for (var arrKey in ob[transKey]) {
              var tr = ob[transKey][arrKey];
              normResults.push(tr);
            }
          }
        }
        console.log('triggering results event');
        events.trigger('results', {results: normResults});
      } catch (e) {
        // Something is swallowing this. Rage.
        console.log('exception:', e);
        throw(e);
      }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log('Failed to get results:', textStatus, errorThrown);
      console.log(jqXHR);
    });
  window.localStorage.setItem('dict', this.dict());
};


function Results() {
  this.results = ko.observableArray([]);
  this.loading = ko.observable(false);
};

Results.prototype.wakeUp = function _wakeUp() {
  var self = this;

  events.on('loadstart', function _loadStart() {
    self.results([]);
    self.loading(true);
    // Something is going on with cached jsonp callbacks. This is a hack.
    setTimeout(function _checkResults() {
      console.log('check results');
      if (self.results().length) {
        self.loading(false);
      }
    }, 200);
  });

  events.on('results', function _results(evt) {
    console.log('got results', evt.detail.results);
    self.results(evt.detail.results);
    self.loading(false);
  });
};


function Loc() {
  var self = this;

  this.locales = {
    'en': {
      'Go': 'Go',
      'Enter word or phrase': 'Enter word or phrase'
    },
    'es': {
      'Go': 'Ir',
      'Enter word or phrase': 'Ingrese palabra o frase'
    },
    'pl': {
      'Go': 'Iść',
      'Enter word or phrase': 'Wpisz słowo lub frazę'
    },
    'pt': {
      'Go': 'Ir',
      'Enter word or phrase': 'Digite palavra ou frase'
    },
    'gr': {
      'Go': 'πάω',
      'Enter word or phrase': 'Εισάγετε λέξη ή φράση'
    },
    'fr': {
      'Go': 'Allez',
      'Enter word or phrase': 'Entrez un mot ou une phrase'
    }
  };
  self._default = 'en';
  self.activeDict = ko.observable(self._default);
  self.dict = ko.computed(function _computedDict() {
    return self.locales[self.activeDict()];
  });
};

Loc.prototype.wakeUp = function _wakeUp() {
  var self = this;

  events.on('newLangDict', function _onNewLangDict(evt) {
    var dict = evt.detail.dict.substr(0, 2);  // Get the origin lang code.
    console.log('Selected new dict', dict);

    if (!self.locales[dict]) {
      console.log('Requested locale', dict, 'does not exist; setting default');
      dict = self._default;
    }

    if (dict != self.activeDict()) {
      self.activeDict(dict);
    }
  });
};

Loc.prototype.translate = function _translate(key) {
  var self = this;
  var loc = self.dict()[key];
  if (!loc) {
    console.log('Key', key, 'has not been localized for', this.activeDict());
    loc = this.locales[this._default][key];
  }
  if (!loc) {
    console.log('Key', key, 'has not been localized at all');
    loc = key;
  }
  return loc;
};


document.addEventListener('DOMContentLoaded', function _onLoad() {
  var loc = new Loc();
  var viewModel = {
    search: new Search(),
    results: new Results(),
    loc: loc
  };
  for (var attr in viewModel) {
    // This is a hook for views to trigger events after everyone else
    // is listening.
    viewModel[attr].wakeUp();
  }

  viewModel['_'] = loc.translate.bind(loc);  // Alias to translate

  ko.applyBindings(viewModel);
});


})();
