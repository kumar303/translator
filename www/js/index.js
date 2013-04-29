var events = {
  _ns: 'local',
  _doc: $(document),
  trigger: function _eventsTrigger(name, opt) {
    name = name + '.' + this._ns;
    var init = opt ? {detail: opt} : {};
    init['type'] = name;
    this._doc.trigger(init);
  },
  on: function _eventsOn(name, handler) {
    name = name + '.' + this._ns;
    this._doc.on(name, handler);
  }
};


function Search() {
  this.term = ko.observable("");
  this.dict = ko.observable("");
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
  var url = 'http://api.wordreference.com/0.8/' + this.apiKey +
            '/json/' + this.dict() + '/' + encodeURIComponent(this.term());
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
  this.tr = ko.observable({
    'Go': 'Go',
    'Enter word or phrase': 'Enter word or phrase'
  });
};

Loc.prototype.wakeUp = function _wakeUp() {
};


document.addEventListener('DOMContentLoaded', function _onLoad() {
  var viewModel = {
    search: new Search(),
    results: new Results(),
    loc: new Loc()
  };
  for (var attr in viewModel) {
    // This is a hook for views to trigger events after everyone else
    // is listening.
    viewModel[attr].wakeUp();
  }
  ko.applyBindings(viewModel);
});
