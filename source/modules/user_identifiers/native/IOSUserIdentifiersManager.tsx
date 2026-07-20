// Module ID: 15951
// Function ID: 122364
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15951 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const NativeModules = arg1(dependencyMap[6]).NativeModules;
let closure_10 = importDefault(dependencyMap[7]);
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
let tmp2 = (arg0) => {
  class IOSUserIdentifiersManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, IOSUserIdentifiersManager);
      items1 = [...items];
      obj = closure_7(IOSUserIdentifiersManager);
      tmp2 = closure_6;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      closure_0 = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.onPostConnectionOpen();
            }
      };
      return tmp2Result;
    }
  }
  const dependencyMap = IOSUserIdentifiersManager;
  callback3(IOSUserIdentifiersManager, arg0);
  let obj = { key: "onPostConnectionOpen" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback(tmp);
  obj.value = function onPostConnectionOpen() {
    return callback2(...arguments);
  };
  const items = [obj, ];
  obj = { key: "syncAppTransactionId" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("syncAppTransactionId");
  obj.value = function syncAppTransactionId(currentUser) {
    return callback(...arguments);
  };
  items[1] = obj;
  return callback2(IOSUserIdentifiersManager, items);
}(importDefault(dependencyMap[14]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_identifiers/native/IOSUserIdentifiersManager.tsx");

export default tmp2;
