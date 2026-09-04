// Module ID: 14366
// Function ID: 14367
// Name: handleBackPress
// Dependencies: [17, 8597, 4345, 1625, 1496, 4669, 1234, 2]

// Module 14366 (handleBackPress)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useKeyboardType from "useKeyboardType" /* 4345 */;
import initializeDefault from "initialize" /* 4669 */;
import updateContextMenuState from "updateContextMenuState" /* 8597 */;

function handleBackPress() {
  let obj = updateContextMenuState;
  obj.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1625).KeyboardTypes.SYSTEM;
    tmp(1496).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1496);
  }
  return flag;
}
get_ActivityIndicator.BackHandler;
initializeDefault;
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
let result = set.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;
