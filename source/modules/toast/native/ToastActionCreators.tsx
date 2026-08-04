// Module ID: 3986
// Function ID: 3987
// Name: dispatcher
// Dependencies: [709, 2]

// Module 3986 (dispatcher)
const result = require("set").fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0) {
    const importDefault = arg0;
    importDefault(709).wait(() => {
      let obj = callback(outer1_1[0]);
      obj = { type: "TOAST_OPEN", toastProps: callback };
      return obj.dispatch(obj);
    });
  },
  close() {
    importDefault(709).wait(() => callback(table[0]).dispatch({ type: "TOAST_CLOSE" }));
  }
};
