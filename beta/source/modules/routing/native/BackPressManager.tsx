// Module ID: 14001
// Function ID: 14002
// Name: BackPressManager
// Dependencies: [17, 4703, 1611, 1483, 1983, 1364, 2]

// Module 14001 (BackPressManager)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1483 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import useKeyboardType from "useKeyboardType" /* 4703 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;
import size from "module_2" /* 2 */;

function handleBackPress() {
  const obj = useKeyboardType;
  const keyboardType = obj.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    const obj2 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    const setKeyboardType = KeyboardUIStore.setKeyboardType;
    KeyboardUIStore;
    setKeyboardType(obj2);
    flag = true;
  }
  return flag;
}
const BackHandler = react_native.BackHandler;
class BackPressManager extends LifecycleManager {
  _initialize() {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const self = this;
      const result = this._initializeGlobalBackPressListener();
    }
  }
  _initializeGlobalBackPressListener() {
    this._backPressEventSubscription = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  }
  _terminate() {
    const _backPressEventSubscription = this._backPressEventSubscription;
    if (_backPressEventSubscription != null) {
      _backPressEventSubscription.remove();
    }
  }
}
const prototype = BackPressManager.prototype;
const backPressManager = new BackPressManager();
let result = size.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;
