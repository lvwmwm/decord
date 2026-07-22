// Module ID: 15989
// Function ID: 122695
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15989 (_isNativeReflectConstruct)
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
  class MetricKitManager {
    constructor() {
      self = this;
      tmp = MetricKitManager(this, MetricKitManager);
      obj = closure_3(MetricKitManager);
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
  let closure_0 = MetricKitManager;
  callback2(MetricKitManager, arg0);
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
  return callback(MetricKitManager, items);
}(importDefault(dependencyMap[5]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/metric_kit_tracker/native/MetricKitManager.android.tsx");

export default tmp2;
