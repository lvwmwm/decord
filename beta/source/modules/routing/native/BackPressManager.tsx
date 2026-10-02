// Module ID: 14003
// Function ID: 14004
// Name: BackPressManager
// Dependencies: [17, 4705, 1617, 1489, 1989, 1370, 2]

// Module 14003 (BackPressManager)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1489 */;
import KeyboardTypes from "KeyboardTypes" /* 1617 */;
import useKeyboardType from "useKeyboardType" /* 4705 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
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
