// Module ID: 3829
// Function ID: 31974
// Dependencies: []

// Module 3829
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0) {
    const importDefault = arg0;
    importDefault(dependencyMap[0]).wait(() => {
      let obj = arg0(closure_1[0]);
      obj = { type: "TOAST_OPEN", toastProps: arg0 };
      return obj.dispatch(obj);
    });
  },
  close() {
    importDefault(dependencyMap[0]).wait(() => callback(closure_1[0]).dispatch({ type: "TOAST_CLOSE" }));
  }
};
