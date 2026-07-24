// Module ID: 976
// Function ID: 10491
// Name: processEvent
// Dependencies: [27, 977, 794, 991]
// Exports: deviceContextIntegration

// Module 976 (processEvent)
import { AppState } from "get ActivityIndicator";

function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return fn(this, undefined, undefined, function*() {
    const NATIVE = callback(977).NATIVE;
    const tmp = yield NATIVE.fetchNativeDeviceContexts();
    while (true) {
      let tmp3 = tmp;
      if (tmp2) {
        let tmp5 = tmp;
        let user = tmp2.user;
        let tmp6 = outer1_0;
        let tmp7 = !outer1_0.user;
        let tmp8 = tmp7;
        if (tmp7) {
          tmp8 = user;
        }
        if (tmp8) {
          let tmp9 = outer1_0;
          outer1_0.user = user;
        }
        let tmp10 = tmp;
        let contexts = tmp2.contexts;
        let tmp11 = outer2_2;
        let str = "unknown";
        if ("unknown" !== outer2_2.currentState) {
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
          let tmp15 = outer2_2;
          let str2 = "active";
          obj.in_foreground = "active" === outer2_2.currentState;
          obj.app = Object.assign(Object.assign({}, obj.app), obj);
        }
        let tmp16 = contexts;
        if (contexts) {
          let tmp17 = outer1_0;
          let tmp18 = globalThis;
          let _Object3 = Object;
          let _Object4 = Object;
          let tmp19 = contexts;
          outer1_0.contexts = Object.assign(Object.assign({}, contexts), outer1_0.contexts);
          if (contexts.app) {
            let tmp20 = outer1_0;
            let _Object5 = Object;
            let _Object6 = Object;
            outer1_0.contexts.app = Object.assign(Object.assign({}, contexts.app), outer1_0.contexts.app);
          }
        }
        let tmp21 = tmp;
        let tags = tmp2.tags;
        if (tags) {
          let tmp23 = outer1_0;
          let tmp24 = globalThis;
          let _Object7 = Object;
          let _Object8 = Object;
          let tmp25 = tags;
          outer1_0.tags = Object.assign(Object.assign({}, tmp22), outer1_0.tags);
        }
        let tmp26 = tmp;
        let extra = tmp2.extra;
        if (extra) {
          let tmp28 = outer1_0;
          let tmp29 = globalThis;
          let _Object9 = Object;
          let _Object10 = Object;
          let tmp30 = extra;
          outer1_0.extra = Object.assign(Object.assign({}, tmp27), outer1_0.extra);
        }
        let tmp31 = tmp;
        let fingerprint = tmp2.fingerprint;
        let combined1 = fingerprint;
        if (!fingerprint) {
          let tmp35 = tmp;
          let str3 = "string";
          let result;
          if ("string" === typeof tmp2.level) {
            let tmp37 = callback;
            let tmp38 = dependencyMap;
            let num = 2;
            let obj3 = callback(794);
            let tmp39 = tmp;
            result = obj3.severityLevelFromString(tmp2.level);
          }
          let tmp40 = result;
          let tmp41 = outer1_0;
          let tmp42 = !outer1_0.level;
          let tmp43 = tmp42;
          if (tmp42) {
            tmp43 = result;
          }
          if (tmp43) {
            let tmp44 = outer1_0;
            outer1_0.level = result;
          }
          let tmp45 = tmp;
          let environment = tmp2.environment;
          let tmp46 = outer1_0;
          let tmp47 = !outer1_0.environment;
          let tmp48 = tmp47;
          if (tmp47) {
            tmp48 = environment;
          }
          if (tmp48) {
            let tmp49 = outer1_0;
            outer1_0.environment = environment;
          }
          let tmp50 = globalThis;
          let _Array = Array;
          let tmp51 = tmp;
          let mapped;
          if (Array.isArray(tmp2.breadcrumbs)) {
            let breadcrumbs = tmp.breadcrumbs;
            let tmp53 = callback;
            let tmp54 = dependencyMap;
            let num2 = 3;
            mapped = breadcrumbs.map(callback(991).breadcrumbFromObject);
          }
          let obj4 = mapped;
          if (mapped) {
            let tmp55 = outer1_1;
            let maxBreadcrumbs;
            if (null != outer1_1) {
              let tmp57 = outer1_1;
              maxBreadcrumbs = outer1_1.getOptions().maxBreadcrumbs;
            }
            let outer1_3 = maxBreadcrumbs;
            let num3 = 100;
            let num4 = 100;
            if (null !== maxBreadcrumbs) {
              let tmp58 = outer1_3;
              num4 = 100;
              if (undefined !== outer1_3) {
                num4 = outer1_3;
              }
            }
            let tmp59 = num4;
            let tmp61 = mapped;
            breadcrumbs = outer1_0.breadcrumbs;
            let items = breadcrumbs;
            let tmp60 = outer1_0;
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
          let tmp62 = outer1_0;
          return outer1_0;
        } else {
          let fingerprint2 = outer1_0.fingerprint;
          let outer1_2 = fingerprint2;
          if (null === fingerprint2) {
            let items1 = [];
            let tmp34 = combined1;
            combined1 = items1.concat(combined1.filter((arg0) => {
              let fingerprint = outer2_0.fingerprint;
              if (null === fingerprint) {
                fingerprint = [];
              }
              return fingerprint.indexOf(arg0) < 0;
            }));
            tmp32.fingerprint = combined1;
          } else {
            let tmp33 = outer1_2;
          }
          items1 = outer1_2;
        }
      } else {
        let tmp4 = outer1_0;
        return outer1_0;
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

export const deviceContextIntegration = function deviceContextIntegration() {
  return {
    name: "DeviceContext",
    setupOnce() {

    },
    processEvent
  };
};
