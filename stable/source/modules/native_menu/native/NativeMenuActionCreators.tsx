// Module ID: 10339
// Function ID: 10340
// Name: NativeMenuActionCreators
// Dependencies: [5156, 5157, 584, 2]

// Module 10339 (NativeMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HapticUtils from "HapticUtils" /* 5156 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5157 */;
import size from "module_2" /* 2 */;

let obj = {
  showNativeMenu(key, memo) {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "SHOW_NATIVE_MENU", key, menu: memo };
    obj2.dispatch(obj3);
  },
  hideNativeMenu(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default obj;
