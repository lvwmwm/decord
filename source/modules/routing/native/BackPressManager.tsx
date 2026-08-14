// Module ID: 13784
// Function ID: 13785
// Name: handleBackPress
// Dependencies: [17, 8662, 4207, 1626, 1497, 4523, 500, 2]

// Module 13784 (handleBackPress)
import "initialize";

function handleBackPress() {
  let obj = require(8662) /* updateContextMenuState */;
  obj.hideContextMenu();
  const keyboardType = require(4207) /* useKeyboardType */.getKeyboardType();
  let flag = keyboardType !== require(1626) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1626).KeyboardTypes.SYSTEM;
    tmp(1497).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1497);
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
