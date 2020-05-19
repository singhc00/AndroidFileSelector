// Empty constructor
function FileSelector() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
FileSelector.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'FileSelector', 'show', [options]);
}

// Installation constructor that binds FileSelector to window
FileSelector.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.fileSelector = new FileSelector();
  return window.plugins.fileSelector;
};
cordova.addConstructor(FileSelector.install);