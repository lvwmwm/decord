// Module ID: 791
// Function ID: 8937
// Name: getDevServer
// Dependencies: []

// Module 791 (getDevServer)
function getDevServer() {
  const Devtools = arg1(arg6[2]).ReactNativeLibraries.Devtools;
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
    arg1 = arg0;
    const arg6 = arg1;
    const getDevServer = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  };
}
arg5.fetchSourceContext = function fetchSourceContext(arg0) {
  const arg1 = arg0;
  return fn(this, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      const promise = new Promise((arg0) => {
        let obj = arg0(stealthXhr[0]);
        const stealthXhr = obj.createStealthXhr();
        if (stealthXhr) {
          const tmp6 = callback();
          let combined;
          if (tmp6) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp6.url + "__sentry/context";
          }
          if (combined) {
            stealthXhr.open("POST", tmp9, true);
            stealthXhr.setRequestHeader("Content-Type", "application/json");
            const _JSON = JSON;
            obj = { stack: arg0 };
            stealthXhr.send(JSON.stringify(obj));
            stealthXhr.onreadystatechange = () => {
              if (stealthXhr.readyState === arg0(stealthXhr[0]).XHR_READYSTATE_DONE) {
                if (200 !== stealthXhr.status) {
                  arg0(arg0);
                }
                const _JSON = JSON;
                const parsed = JSON.parse(stealthXhr.responseText);
                const _Array = Array;
                if (Array.isArray(parsed.stack)) {
                  tmp8(parsed.stack);
                } else {
                  tmp8(arg0);
                }
              }
            };
            stealthXhr.onerror = () => {
              arg0(arg0);
            };
          } else {
            const debug = arg0(stealthXhr[1]).debug;
            debug.error("Could not fetch source context. No dev server URL found.");
            tmp(arg0);
          }
        } else {
          tmp(arg0);
        }
      });
      return promise;
    }
  });
};
arg5.parseErrorStack = function parseErrorStack(arg0) {
  if (arg1(arg6[2]).ReactNativeLibraries.Devtools) {
    const Devtools = arg1(arg6[2]).ReactNativeLibraries.Devtools;
    return Devtools.parseErrorStack(arg0);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
arg5.symbolicateStackTrace = function symbolicateStackTrace(arg0, arg1) {
  if (arg1(arg6[2]).ReactNativeLibraries.Devtools) {
    const Devtools = arg1(arg6[2]).ReactNativeLibraries.Devtools;
    return Devtools.symbolicateStackTrace(arg0, arg1);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
arg5.getDevServer = getDevServer;
