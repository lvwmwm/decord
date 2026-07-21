// Module ID: 13349
// Function ID: 101504
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13349 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateEnabledState() {
  const currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = arg1(dependencyMap[6]).isZoomedExperimentEnabled();
    const obj2 = arg1(dependencyMap[6]);
  }
  if (result) {
    if (!closure_9) {
      importDefault(dependencyMap[7]).enableTouchLogging();
      closure_9 = true;
      const obj3 = importDefault(dependencyMap[7]);
    }
  }
  if (!result) {
    if (closure_9) {
      importDefault(dependencyMap[7]).disableTouchLogging();
      closure_9 = false;
      while (true) {
        let tmp13 = __exception;
        // continue
      }
      const obj4 = importDefault(dependencyMap[7]);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = false;
let tmp2 = (arg0) => {
  class TouchEventAnalyticsManager {
    constructor() {
      self = this;
      tmp = closure_3(this, TouchEventAnalyticsManager);
      obj = closure_6(TouchEventAnalyticsManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = TouchEventAnalyticsManager;
  callback2(TouchEventAnalyticsManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      callback5();
      closure_8.addChangeListener(callback5);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      closure_8.removeChangeListener(closure_11);
      if (closure_9) {
        callback(closure_2[7]).disableTouchLogging();
        closure_9 = false;
        while (true) {
          let tmp5 = __exception;
          // continue
        }
        const obj = callback(closure_2[7]);
      }
    }
  };
  items[1] = obj;
  return callback(TouchEventAnalyticsManager, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default tmp2;
