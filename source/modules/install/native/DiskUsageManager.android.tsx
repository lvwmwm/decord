// Module ID: 15972
// Function ID: 122491
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15972 (_isNativeReflectConstruct)
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
  class DiskUsageManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = DiskUsageManager(this, DiskUsageManager);
      items1 = [...items];
      obj = closure_3(DiskUsageManager);
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
        APP_STATE_UPDATE() {

            }
      };
      return tmp2Result;
    }
  }
  let closure_0 = DiskUsageManager;
  callback2(DiskUsageManager, arg0);
  let obj = {
    key: "_initialize",
    value() {

    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {

    }
  };
  items[1] = obj;
  return callback(DiskUsageManager, items);
}(importDefault(dependencyMap[5]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/install/native/DiskUsageManager.android.tsx");

export default tmp2;
