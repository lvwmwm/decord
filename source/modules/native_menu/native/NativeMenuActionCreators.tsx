// Module ID: 10579
// Function ID: 10580
// Dependencies: [706, 4449, 4450, 2]

// Module 10579
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

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
