// Module ID: 1088
// Function ID: 12484
// Name: items
// Dependencies: [65, 1089, 978, 977, 794]
// Exports: sdkInfoIntegration

// Module 1088 (items)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
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
let obj = { name: require("module_1089").SDK_NAME };
obj = { name: require("module_1089").SDK_PACKAGE_NAME, version: require("module_1089").SDK_VERSION };
let items = [obj];
obj.packages = items;
obj.version = require("module_1089").SDK_VERSION;

export const defaultSdkInfo = obj;
export const sdkInfoIntegration = function sdkInfoIntegration() {
  let closure_0 = (function createCachedFetchNativeSdkInfo() {
    const self = this;
    if (obj.notWeb()) {
      if (!obj2.isExpoGo()) {
        let c1 = false;
        let c2 = null;
        return () => outer2_3(self, undefined, undefined, function*() {
          if (outer2_1) {
            return outer2_2;
          } else {
            const NATIVE = callback(outer4_1[3]).NATIVE;
            outer2_2 = yield NATIVE.fetchNativeSdkInfo();
            outer2_1 = true;
          }
        });
      }
      obj2 = callback(outer1_1[2]);
    }
    return () => Promise.resolve(null);
  })();
  return {
    name: "SdkInfo",
    setupOnce() {

    },
    processEvent(arg0) {
      return (function _processEvent(arg0, closure_0) {
        closure_0 = arg0;
        let closure_1 = closure_0;
        return outer2_3(this, undefined, undefined, function*() {
          const tmp = yield outer1_1();
          let str = outer1_0.platform;
          if (!str) {
            str = "javascript";
          }
          outer1_0.platform = str;
          let sdk = outer1_0.sdk;
          if (!sdk) {
            sdk = {};
          }
          outer1_0.sdk = sdk;
          let name = outer1_0.sdk.name;
          if (!name) {
            name = outer4_4.name;
          }
          outer1_0.sdk.name = name;
          let version = outer1_0.sdk.version;
          if (!version) {
            version = outer4_4.version;
          }
          outer1_0.sdk.version = version;
          const items = [];
          let packages = outer1_0.sdk.packages;
          if (!packages) {
            packages = [];
          }
          let items2 = tmp;
          if (tmp) {
            const items1 = [tmp];
            items2 = items1;
          }
          if (!items2) {
            items2 = [];
          }
          outer1_0.sdk.packages = items.concat(outer4_2(packages), outer4_2(items2));
          return outer1_0;
        });
      })(arg0, closure_0);
    }
  };
};
