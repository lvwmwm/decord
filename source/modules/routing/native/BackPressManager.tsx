// Module ID: 13816
// Function ID: 13817
// Name: handleBackPress
// Dependencies: [17, 9959, 4239, 1627, 1498, 4720, 500, 2]

// Module 13816 (handleBackPress)
import "initialize";

function handleBackPress() {
  let obj = require(9959) /* updateContextMenuState */;
  obj.hideContextMenu();
  const keyboardType = require(4239) /* useKeyboardType */.getKeyboardType();
  let flag = keyboardType !== require(1627) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1627).KeyboardTypes.SYSTEM;
    tmp(1498).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1498);
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
