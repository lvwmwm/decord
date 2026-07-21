// Module ID: 9661
// Function ID: 75262
// Dependencies: []

// Module 9661
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(uID, memo) {
    const require = uID;
    const importDefault = memo;
    importDefault(dependencyMap[0]).wait(() => {
      let obj = arg0(closure_2[1]);
      const result = obj.triggerHapticFeedback(arg1(closure_2[2]).IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key: arg0, menu: arg1 };
      arg1(closure_2[0]).dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  }
};
