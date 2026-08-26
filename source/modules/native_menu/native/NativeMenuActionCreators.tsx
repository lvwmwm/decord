// Module ID: 10241
// Function ID: 10242
// Dependencies: [709, 4412, 4413, 2]

// Module 10241
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let result = set.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    closure_0 = key;
    importDefault = memo;
    dispatcherDefault.wait(() => {
      let obj = key(closure_1_2[1]);
      const result = obj.triggerHapticFeedback(memo(closure_1_2[2]).IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key, menu: memo };
      memo(closure_1_2[0]).dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    let obj = dispatcherDefault;
    obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  }
};
