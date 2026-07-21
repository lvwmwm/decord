// Module ID: 15860
// Function ID: 121377
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15860 (_isNativeReflectConstruct)
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
let closure_9 = importDefault(dependencyMap[6]);
const getIconById = arg1(dependencyMap[7]).getIconById;
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("AppIconPremiumManager");
const DEFAULT = arg1(dependencyMap[10]).FreemiumAppIconIds.DEFAULT;
let closure_14 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost" };
let tmp4 = (arg0) => {
  class AppIconPremiumManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AppIconPremiumManager);
      items1 = [...items];
      obj = closure_7(AppIconPremiumManager);
      tmp2 = closure_6;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.actions = {
        APP_STATE_UPDATE(arg0) {
              return tmp2Result.handleAppStateUpdate(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const importDefault = AppIconPremiumManager;
  callback3(AppIconPremiumManager, arg0);
  let obj = {
    key: "handleAppStateUpdate",
    value(state) {
      const self = this;
      state = state.state;
      if (obj.isIOS()) {
        let tmp = "active" === state;
      } else {
        tmp = "background" === state;
      }
      if (tmp) {
        const result = self.validateAndResetIfNeeded();
      }
    }
  };
  const items = [obj, , ];
  obj = { key: "validateAndResetIfNeeded" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function validateAndResetIfNeeded() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "resetIcon",
    value(arg0, premiumType) {
      const callback = arg0;
      const AppIconPremiumManager = arg2;
      const obj = callback(closure_2[12]);
      const setAppIconResult = callback(closure_2[12]).setAppIcon(closure_13, premiumType);
      callback(closure_2[12]).setAppIcon(closure_13, premiumType).then(() => {
        let obj = arg2(closure_2[14]);
        obj = { previous_icon_id: arg0, reset_to_icon_id: closure_13, reset_reason: arg2 };
        obj.track(constants.APP_ICON_AUTO_RESET, obj);
      }).catch((arg0) => {
        closure_12.error("Failed to reset app icon:", arg0);
      });
    }
  };
  items[2] = obj;
  return callback2(AppIconPremiumManager, items);
}(importDefault(dependencyMap[15]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default tmp4;
