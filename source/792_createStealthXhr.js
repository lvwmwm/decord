// Module ID: 792
// Function ID: 8956
// Name: createStealthXhr
// Dependencies: [793]

// Module 792 (createStealthXhr)
const require = arg1;
const dependencyMap = arg6;
arg5.XHR_READYSTATE_DONE = 4;
arg5.createStealthXhr = function createStealthXhr() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let RN_GLOBAL_OBJ = arguments[0];
    }
    if (RN_GLOBAL_OBJ.XMLHttpRequest) {
      let _XMLHttpRequest = RN_GLOBAL_OBJ.XMLHttpRequest;
      const prototype = _XMLHttpRequest.prototype;
      _XMLHttpRequest = new _XMLHttpRequest();
      if (_XMLHttpRequest.open.__sentry_original__) {
        _XMLHttpRequest.open = _XMLHttpRequest.open.__sentry_original__;
      }
      if (_XMLHttpRequest.send.__sentry_original__) {
        _XMLHttpRequest.send = _XMLHttpRequest.send.__sentry_original__;
      }
      return _XMLHttpRequest;
    } else {
      return null;
    }
  }
  RN_GLOBAL_OBJ = require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ;
};
