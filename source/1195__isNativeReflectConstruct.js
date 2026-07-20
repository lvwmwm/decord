// Module ID: 1195
// Function ID: 13725
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1195 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let tmp2 = (Store) => {
  class BrowserHandoffStore {
    constructor() {
      self = this;
      tmp = BrowserHandoffStore(this, BrowserHandoffStore);
      obj = closure_3(BrowserHandoffStore);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = BrowserHandoffStore;
  callback2(BrowserHandoffStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isHandoffAvailable",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "user",
    get() {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "key",
    get() {
      return null;
    }
  };
  return callback(BrowserHandoffStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "BrowserHandoffStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default tmp2;
