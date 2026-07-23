// Module ID: 9669
// Function ID: 75316
// Dependencies: [686, 4099, 4100, 2]

// Module 9669
let result = require("IMPACT_LIGHT").fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(uID, memo) {
    let closure_0 = uID;
    const importDefault = memo;
    importDefault(686).wait(() => {
      let obj = uID(outer1_2[1]);
      const result = obj.triggerHapticFeedback(memo(outer1_2[2]).IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key: uID, menu: memo };
      memo(outer1_2[0]).dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    let obj = importDefault(686);
    obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  }
};
