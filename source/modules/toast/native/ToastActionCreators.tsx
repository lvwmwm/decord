// Module ID: 3831
// Function ID: 31986
// Name: dispatcher
// Dependencies: [686, 2]

// Module 3831 (dispatcher)
const result = require("set").fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0) {
    const importDefault = arg0;
    importDefault(686).wait(() => {
      let obj = callback(outer1_1[0]);
      obj = { type: "TOAST_OPEN", toastProps: callback };
      return obj.dispatch(obj);
    });
  },
  close() {
    importDefault(686).wait(() => outer1_0(outer1_1[0]).dispatch({ type: "TOAST_CLOSE" }));
  }
};
