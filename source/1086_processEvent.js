// Module ID: 1086
// Function ID: 12462
// Name: processEvent
// Dependencies: []

// Module 1086 (processEvent)
function processEvent(arg0, arg1, arg2) {
  arg1 = arg0;
  const arg6 = arg2;
  return fn(this, undefined, undefined, function*() {
    const options = options.getOptions();
    const extra = lib.extra;
    let __sentry_release;
    if (null !== extra) {
      if (undefined !== extra) {
        __sentry_release = extra.__sentry_release;
      }
    }
    if ("string" === typeof __sentry_release) {
      const _HermesInternal = HermesInternal;
      lib.release = "" + lib.extra.__sentry_release;
    } else {
      let release;
      if (null != options) {
        release = options.release;
      }
      if ("string" === typeof release) {
        lib.release = options.release;
      }
    }
    const extra2 = lib.extra;
    let __sentry_dist;
    if (null !== extra2) {
      if (undefined !== extra2) {
        __sentry_dist = extra2.__sentry_dist;
      }
    }
    if ("string" === typeof __sentry_dist) {
      const _HermesInternal2 = HermesInternal;
      lib.dist = "" + lib.extra.__sentry_dist;
    } else {
      let dist;
      if (null != options) {
        dist = options.dist;
      }
      if ("string" === typeof dist) {
        lib.dist = options.dist;
      }
    }
    if (lib.release) {
      if (lib.dist) {
        return lib;
      }
    }
    const NATIVE = lib(options[0]).NATIVE;
    const tmp17 = yield NATIVE.fetchNativeRelease();
    if (tmp17) {
      if (!lib.release) {
        const _HermesInternal3 = HermesInternal;
        lib.release = "" + tmp18.id + "@" + tmp18.version + "+" + tmp18.build;
      }
      if (!lib.dist) {
        const _HermesInternal4 = HermesInternal;
        lib.dist = "" + tmp17.build;
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
    arg1 = arg0;
    const arg6 = arg1;
    const processEvent = arg3;
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
arg5.nativeReleaseIntegration = function nativeReleaseIntegration() {
  return {
    name: "Release",
    setupOnce() {

    },
    processEvent
  };
};
