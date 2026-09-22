// Module ID: 14529
// Function ID: 14530
// Name: BackPressManager
// Dependencies: [17, 8790, 4504, 1609, 1481, 1898, 1363, 2]

// Module 14529 (BackPressManager)
import _mod17 from "module_17" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useKeyboardType from "useKeyboardType" /* 4504 */;
import ContextMenuState from "ContextMenuState" /* 8790 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

function handleBackPress() {
  ContextMenuState.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    const obj3 = { type: tmp(1609).KeyboardTypes.SYSTEM };
    tmp(1481).setKeyboardType(obj3);
    flag = true;
    const tmpResult = tmp(1481);
  }
  return flag;
}
_mod17.BackHandler;
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
let result = size.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;
