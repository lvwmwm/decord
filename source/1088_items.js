// Module ID: 1088
// Function ID: 12483
// Name: items
// Dependencies: []
// Exports: sdkInfoIntegration

// Module 1088 (items)
let closure_2 = importDefault(dependencyMap[0]);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
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
let obj = { name: arg1(dependencyMap[1]).SDK_NAME };
obj = { name: arg1(dependencyMap[1]).SDK_PACKAGE_NAME, version: arg1(dependencyMap[1]).SDK_VERSION };
const items = [obj];
obj.packages = items;
obj.version = arg1(dependencyMap[1]).SDK_VERSION;

export const defaultSdkInfo = obj;
export const sdkInfoIntegration = function sdkInfoIntegration() {
  let closure_0 = function createCachedFetchNativeSdkInfo() {
    const callback = this;
    if (obj.notWeb()) {
      if (!obj2.isExpoGo()) {
        let closure_1 = false;
        let closure_2 = null;
        return () => callback(self, undefined, undefined, function*() {
          if (closure_1) {
            return closure_2;
          } else {
            const NATIVE = callback(closure_1[3]).NATIVE;
            closure_2 = yield NATIVE.fetchNativeSdkInfo();
            closure_1 = true;
          }
        });
      }
      const obj2 = callback(closure_1[2]);
    }
    return () => Promise.resolve(null);
  }();
  return {
    name: "SdkInfo",
    setupOnce() {

    },
    processEvent(arg0) {
      return function _processEvent(arg0, closure_0) {
        return callback(this, undefined, undefined, function*() {
          const tmp = yield closure_1();
          let str = closure_0.platform;
          if (!str) {
            str = "javascript";
          }
          closure_0.platform = str;
          let sdk = closure_0.sdk;
          if (!sdk) {
            sdk = {};
          }
          closure_0.sdk = sdk;
          let name = closure_0.sdk.name;
          if (!name) {
            name = closure_4.name;
          }
          closure_0.sdk.name = name;
          let version = closure_0.sdk.version;
          if (!version) {
            version = closure_4.version;
          }
          closure_0.sdk.version = version;
          const items = [];
          let packages = closure_0.sdk.packages;
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
          closure_0.sdk.packages = items.concat(closure_2(packages), closure_2(items2));
          return closure_0;
        });
      }(arg0, closure_0);
    }
  };
};
