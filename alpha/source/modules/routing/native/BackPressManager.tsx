// Module ID: 14523
// Function ID: 14524
// Name: BackPressManager
// Dependencies: [17, 4947, 1628, 1500, 2001, 1381, 2]

// Module 14523 (BackPressManager)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1500 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import useKeyboardType from "useKeyboardType" /* 4947 */;
import LifecycleManager from "LifecycleManager" /* 2001 */;
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
