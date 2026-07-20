// Module ID: 976
// Function ID: 10485
// Name: processEvent
// Dependencies: []
// Exports: deviceContextIntegration

// Module 976 (processEvent)
function processEvent(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg2;
  return fn(this, undefined, undefined, function*() {
    const NATIVE = lib(options[1]).NATIVE;
    const tmp = yield NATIVE.fetchNativeDeviceContexts();
    while (true) {
      let tmp3 = tmp;
      if (tmp2) {
        let tmp5 = tmp;
        let user = tmp2.user;
        let tmp6 = lib;
        let tmp7 = !lib.user;
        let tmp8 = tmp7;
        if (tmp7) {
          tmp8 = user;
        }
        if (tmp8) {
          let tmp9 = lib;
          lib.user = user;
        }
        let tmp10 = tmp;
        let contexts = tmp2.contexts;
        let tmp11 = fingerprint2;
        let str = "unknown";
        if ("unknown" !== fingerprint2.currentState) {
          let tmp12 = contexts;
          let obj = contexts;
          if (!contexts) {
            obj = {};
          }
          let tmp13 = obj;
          contexts = obj;
          let tmp14 = globalThis;
          let _Object = Object;
          let _Object2 = Object;
          obj = {};
          let tmp15 = fingerprint2;
          let str2 = "active";
          obj.in_foreground = "active" === fingerprint2.currentState;
          obj.app = Object.assign(Object.assign({}, obj.app), obj);
        }
        let tmp16 = contexts;
        if (contexts) {
          let tmp17 = lib;
          let tmp18 = globalThis;
          let _Object3 = Object;
          let _Object4 = Object;
          let tmp19 = contexts;
          lib.contexts = Object.assign(Object.assign({}, contexts), lib.contexts);
          if (contexts.app) {
            let tmp20 = lib;
            let _Object5 = Object;
            let _Object6 = Object;
            lib.contexts.app = Object.assign(Object.assign({}, contexts.app), lib.contexts.app);
          }
        }
        let tmp21 = tmp;
        let tags = tmp2.tags;
        if (tags) {
          let tmp23 = lib;
          let tmp24 = globalThis;
          let _Object7 = Object;
          let _Object8 = Object;
          let tmp25 = tags;
          lib.tags = Object.assign(Object.assign({}, tmp22), lib.tags);
        }
        let tmp26 = tmp;
        let extra = tmp2.extra;
        if (extra) {
          let tmp28 = lib;
          let tmp29 = globalThis;
          let _Object9 = Object;
          let _Object10 = Object;
          let tmp30 = extra;
          lib.extra = Object.assign(Object.assign({}, tmp27), lib.extra);
        }
        let tmp31 = tmp;
        let fingerprint = tmp2.fingerprint;
        let combined1 = fingerprint;
        if (!fingerprint) {
          let tmp35 = tmp;
          let str3 = "string";
          let result;
          if ("string" === typeof tmp2.level) {
            let tmp37 = lib;
            let tmp38 = options;
            let num = 2;
            let obj3 = lib(options[2]);
            let tmp39 = tmp;
            result = obj3.severityLevelFromString(tmp2.level);
          }
          let tmp40 = result;
          let tmp41 = lib;
          let tmp42 = !lib.level;
          let tmp43 = tmp42;
          if (tmp42) {
            tmp43 = result;
          }
          if (tmp43) {
            let tmp44 = lib;
            lib.level = result;
          }
          let tmp45 = tmp;
          let environment = tmp2.environment;
          let tmp46 = lib;
          let tmp47 = !lib.environment;
          let tmp48 = tmp47;
          if (tmp47) {
            tmp48 = environment;
          }
          if (tmp48) {
            let tmp49 = lib;
            lib.environment = environment;
          }
          let tmp50 = globalThis;
          let _Array = Array;
          let tmp51 = tmp;
          let mapped;
          if (Array.isArray(tmp2.breadcrumbs)) {
            let breadcrumbs = tmp.breadcrumbs;
            let tmp53 = lib;
            let tmp54 = options;
            let num2 = 3;
            mapped = breadcrumbs.map(lib(options[3]).breadcrumbFromObject);
          }
          let obj4 = mapped;
          if (mapped) {
            let tmp55 = options;
            let maxBreadcrumbs;
            if (null != options) {
              let tmp57 = options;
              maxBreadcrumbs = options.getOptions().maxBreadcrumbs;
            }
            let num3 = 100;
            let num4 = 100;
            if (null !== maxBreadcrumbs) {
              let tmp58 = maxBreadcrumbs;
              num4 = 100;
              if (undefined !== maxBreadcrumbs) {
                num4 = maxBreadcrumbs;
              }
            }
            let tmp59 = num4;
            let tmp61 = mapped;
            breadcrumbs = lib.breadcrumbs;
            let items = breadcrumbs;
            let tmp60 = lib;
            if (!breadcrumbs) {
              items = [];
            }
            let combined = obj4.concat(items);
            let sorted = combined.sort((timestamp, timestamp2) => {
              timestamp = timestamp.timestamp;
              let num = 0;
              if (null !== timestamp) {
                num = 0;
                if (undefined !== timestamp) {
                  num = timestamp;
                }
              }
              timestamp2 = timestamp2.timestamp;
              let num2 = 0;
              if (null !== timestamp2) {
                num2 = 0;
                if (undefined !== timestamp2) {
                  num2 = timestamp2;
                }
              }
              return num - num2;
            });
            tmp60.breadcrumbs = sorted.slice(-num4);
          }
          let tmp62 = lib;
          return lib;
        } else {
          let fingerprint2 = lib.fingerprint;
          if (null === fingerprint2) {
            let items1 = [];
            let tmp34 = combined1;
            combined1 = items1.concat(combined1.filter((arg0) => {
              let fingerprint = fingerprint.fingerprint;
              if (null === fingerprint) {
                fingerprint = [];
              }
              return fingerprint.indexOf(arg0) < 0;
            }));
            tmp32.fingerprint = combined1;
          } else {
            let tmp33 = fingerprint2;
          }
          items1 = fingerprint2;
        }
      } else {
        let tmp4 = lib;
        return lib;
      }
    }
  });
}
const AppState = require(dependencyMap[0]).AppState;
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    const require = arg0;
    const dependencyMap = arg1;
    let AppState = arg2;
    if (!arg2) {
      AppState = Promise;
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

export const deviceContextIntegration = function deviceContextIntegration() {
  return {
    name: "DeviceContext",
    setupOnce() {

    },
    processEvent
  };
};
