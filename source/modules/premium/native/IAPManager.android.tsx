// Module ID: 15934
// Function ID: 122218
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15934 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class IAPManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_1(this, IAPManager);
      items1 = [...items];
      obj = closure_3(IAPManager);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {

            },
        APP_STATE_UPDATE() {

            }
      };
      return tmp2Result;
    }
  }
  const callback = IAPManager;
  callback2(IAPManager, arg0);
  return callback(IAPManager);
}(importDefault(dependencyMap[5]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default tmp2;
