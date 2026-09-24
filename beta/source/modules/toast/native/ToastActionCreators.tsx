// Module ID: 4490
// Function ID: 4491
// Name: ToastActionCreators
// Dependencies: [577, 2]

// Module 4490 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(toastProps) {
    importDefault = toastProps;
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_OPEN", toastProps }));
  },
  close() {
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_CLOSE" }));
  }
};
