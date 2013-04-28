var events = {
  _target: null,
  trigger: function _eventsTrigger(name, opt) {
    if (!this._target) this.makeTarget();
    var init = opt ? {detail: opt} : null;
    var event = new CustomEvent(name, init);
    this._target.dispatchEvent(event);
  },
  on: function _eventsOn(name, handler) {
    if (!this._target) this.makeTarget();
    this._target.addEventListener(name, handler);
  },
  makeTarget: function _eventsMakeTarget() {
    // Make an orphaned element to stop any unecessary bubbling work.
    this._target = document.createElement('div');
    this._target.attributes.id = 'omni_events_dispatch';
  }
};


function Search() {
  this.term = ko.observable("");
};

Search.prototype.wakeUp = function _wakeUp() {
};

Search.prototype.search = function _search() {
  console.log('searching', this.term());
  var req = new XMLHttpRequest();
  req.onload = function() {
    if (this.status == 200) {
      // FIXME: there is a way to do this in XHR
      var results = JSON.parse(this.responseText);
      var normResults = [];
      for (var termKey in results) {
        if (termKey.substr(0, 4) != 'term') {
          continue;
        }
        // results.term0
        var ob = results[termKey];
        var term = {};
        for (var transKey in ob) {
          term[transKey] = [];
          for (var arrKey in ob[transKey]) {
            term[transKey].push(ob[transKey][arrKey]);
          }
        }
        normResults.push(term);
      }
      events.trigger('results', {results: normResults});
    } else {
      console.log('Failed: code: ' + this.status + ' response: ' + this.responseText);
    }
  };
  req.onerror = function() {
    console.log('Failed to get results');
  }
  req.open('GET', '/fake-results', true);
  req.send();
};


function Results() {
  this.results = ko.observableArray([]);
};

Results.prototype.wakeUp = function _wakeUp() {
  var self = this;
  events.on('results', function _results(evt) {
    console.log('got results', evt.detail.results);
    self.results(evt.detail.results);
  });
}


document.addEventListener('DOMContentLoaded', function _onLoad() {
  var viewModel = {
    search: new Search(),
    results: new Results()
  };
  for (var attr in viewModel) {
    // This is a hook for views to trigger events after everyone else
    // is listening.
    viewModel[attr].wakeUp();
  }
  ko.applyBindings(viewModel);
});
