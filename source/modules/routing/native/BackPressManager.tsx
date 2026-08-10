// Module ID: 13715
// Function ID: 13716
// Name: handleBackPress
// Dependencies: [17, 8599, 4168, 1607, 1478, 4482, 500, 2]

// Module 13715 (handleBackPress)
import "initialize";

function handleBackPress() {
  let obj = require(8599) /* updateContextMenuState */;
  obj.hideContextMenu();
  const keyboardType = require(4168) /* useKeyboardType */.getKeyboardType();
  let flag = keyboardType !== require(1607) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1607).KeyboardTypes.SYSTEM;
    tmp(1478).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1478);
  }
  return flag;
}
require("get ActivityIndicator").BackHandler;
class BackPressManager extends tmp2 {
}
const prototype = BackPressManager.prototype;
prototype["_initialize"] = function _initialize() {
  if (obj.isAndroid()) {
    const self = this;
    const result = this._initializeGlobalBackPressListener();
  }
};
prototype["_initializeGlobalBackPressListener"] = function _initializeGlobalBackPressListener() {
  this._backPressEventSubscription = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
};
prototype["_terminate"] = function _terminate() {
  const _backPressEventSubscription = this._backPressEventSubscription;
  if (_backPressEventSubscription != null) {
    _backPressEventSubscription.remove();
  }
};
const backPressManager = new BackPressManager();
let result = require("useKeyboardType").fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;
