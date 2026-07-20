// Module ID: 13243
// Function ID: 100524
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13243 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleBackPress() {
  let obj = arg1(dependencyMap[6]);
  obj.hideContextMenu();
  const keyboardType = arg1(dependencyMap[7]).getKeyboardType();
  let flag = keyboardType !== arg1(dependencyMap[8]).KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: arg1(dependencyMap[8]).KeyboardTypes.SYSTEM };
    arg1(dependencyMap[9]).setKeyboardType(obj);
    flag = true;
    const obj3 = arg1(dependencyMap[9]);
  }
  return flag;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
arg1(dependencyMap[5]).BackHandler;
let tmp2 = (arg0) => {
  class BackPressManager {
    constructor() {
      self = this;
      tmp = closure_2(this, BackPressManager);
      obj = closure_5(BackPressManager);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = BackPressManager;
  callback2(BackPressManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      if (obj.isAndroid()) {
        const result = self._initializeGlobalBackPressListener();
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_initializeGlobalBackPressListener",
    value() {
      this._backPressEventSubscription = closure_7.addEventListener("hardwareBackPress", closure_9);
    }
  };
  items[1] = obj;
  obj = {
    key: "_terminate",
    value() {
      const _backPressEventSubscription = this._backPressEventSubscription;
      if (null != _backPressEventSubscription) {
        _backPressEventSubscription.remove();
      }
    }
  };
  items[2] = obj;
  return callback(BackPressManager, items);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default tmp2;
