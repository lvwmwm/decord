// Module ID: 13643
// Function ID: 13644
// Name: handleBackPress
// Dependencies: [17, 8539, 4167, 1607, 1478, 4480, 500, 2]

// Module 13643 (handleBackPress)
import "initialize";

function handleBackPress() {
  let obj = require(8539) /* updateContextMenuState */;
  obj.hideContextMenu();
  const keyboardType = require(4167) /* useKeyboardType */.getKeyboardType();
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
