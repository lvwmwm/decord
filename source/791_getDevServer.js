// Module ID: 791
// Function ID: 8938
// Name: getDevServer
// Dependencies: [792, 794, 973]

// Module 791 (getDevServer)
const require = arg1;
const dependencyMap = arg6;
function getDevServer() {
  const Devtools = require(973) /* reactNativeVersion */.ReactNativeLibraries.Devtools;
  let devServer;
  if (null !== Devtools) {
    if (undefined !== obj) {
      devServer = obj.getDevServer();
    }
  }
  return devServer;
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      step(iter.next());
    });
    return _Promise;
  };
}
arg5.fetchSourceContext = function fetchSourceContext(arg0) {
  let closure_0 = arg0;
  return fn(this, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      const promise = new Promise((arg0) => {
        const callback = arg0;
        let obj = callback(outer3_1[0]);
        const stealthXhr = obj.createStealthXhr();
        if (stealthXhr) {
          const tmp6 = outer3_3();
          let combined;
          if (tmp6) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp6.url + "__sentry/context";
          }
          if (combined) {
            stealthXhr.open("POST", tmp9, true);
            stealthXhr.setRequestHeader("Content-Type", "application/json");
            let _JSON = JSON;
            obj = { stack: outer2_0 };
            stealthXhr.send(JSON.stringify(obj));
            stealthXhr.onreadystatechange = () => {
              if (stealthXhr.readyState === callback(outer4_1[0]).XHR_READYSTATE_DONE) {
                if (200 !== stealthXhr.status) {
                  callback(outer3_0);
                }
                const _JSON = JSON;
                const parsed = JSON.parse(stealthXhr.responseText);
                const _Array = Array;
                if (Array.isArray(parsed.stack)) {
                  tmp8(parsed.stack);
                } else {
                  tmp8(outer3_0);
                }
              }
            };
            stealthXhr.onerror = () => {
              callback(outer3_0);
            };
          } else {
            const debug = callback(outer3_1[1]).debug;
            debug.error("Could not fetch source context. No dev server URL found.");
            tmp(outer2_0);
          }
        } else {
          tmp(outer2_0);
        }
      });
      return promise;
    }
  });
};
arg5.parseErrorStack = function parseErrorStack(arg0) {
  if (require(973) /* reactNativeVersion */.ReactNativeLibraries.Devtools) {
    const Devtools = require(973) /* reactNativeVersion */.ReactNativeLibraries.Devtools;
    return Devtools.parseErrorStack(arg0);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
arg5.symbolicateStackTrace = function symbolicateStackTrace(arg0, arg1) {
  if (require(973) /* reactNativeVersion */.ReactNativeLibraries.Devtools) {
    const Devtools = require(973) /* reactNativeVersion */.ReactNativeLibraries.Devtools;
    return Devtools.symbolicateStackTrace(arg0, arg1);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
arg5.getDevServer = getDevServer;
