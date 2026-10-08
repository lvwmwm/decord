// Module ID: 9991
// Function ID: 9992
// Name: NativeMenuActionCreators
// Dependencies: [584, 5055, 5056, 2]

// Module 9991 (NativeMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5056 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj = {
  showNativeMenu(key, memo) {
    let menu;
    importDefault = memo;
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj2 = DispatcherDefault;
      const obj3 = { type: "SHOW_NATIVE_MENU", key, menu };
      obj2.dispatch(obj3);
    });
  },
  hideNativeMenu(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default obj;
