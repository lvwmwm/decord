// Module ID: 1086
// Function ID: 12467
// Name: processEvent
// Dependencies: [977]

// Module 1086 (processEvent)
const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return fn(this, undefined, undefined, function*() {
    const options = outer1_1.getOptions();
    const extra = outer1_0.extra;
    const outer1_2 = extra;
    let __sentry_release;
    if (null !== extra) {
      if (undefined !== outer1_2) {
        __sentry_release = outer1_2.__sentry_release;
      }
    }
    if ("string" === typeof __sentry_release) {
      const _HermesInternal = HermesInternal;
      outer1_0.release = "" + outer1_0.extra.__sentry_release;
    } else {
      let release;
      if (null != options) {
        release = options.release;
      }
      if ("string" === typeof release) {
        outer1_0.release = options.release;
      }
    }
    const extra2 = outer1_0.extra;
    const outer1_3 = extra2;
    let __sentry_dist;
    if (null !== extra2) {
      if (undefined !== outer1_3) {
        __sentry_dist = outer1_3.__sentry_dist;
      }
    }
    if ("string" === typeof __sentry_dist) {
      const _HermesInternal2 = HermesInternal;
      outer1_0.dist = "" + outer1_0.extra.__sentry_dist;
    } else {
      let dist;
      if (null != options) {
        dist = options.dist;
      }
      if ("string" === typeof dist) {
        outer1_0.dist = options.dist;
      }
    }
    if (outer1_0.release) {
      if (outer1_0.dist) {
        return outer1_0;
      }
    }
    const NATIVE = callback(table[0]).NATIVE;
    const tmp17 = yield NATIVE.fetchNativeRelease();
    if (tmp17) {
      if (!outer1_0.release) {
        const _HermesInternal3 = HermesInternal;
        outer1_0.release = "" + tmp18.id + "@" + tmp18.version + "+" + tmp18.build;
      }
      if (!outer1_0.dist) {
        const _HermesInternal4 = HermesInternal;
        outer1_0.dist = "" + tmp17.build;
      }
    }
  });
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
arg5.nativeReleaseIntegration = function nativeReleaseIntegration() {
  return {
    name: "Release",
    setupOnce() {

    },
    processEvent
  };
};
