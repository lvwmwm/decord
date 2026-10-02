// Module ID: 4531
// Function ID: 4532
// Name: ToastActionCreators
// Dependencies: [585, 2]

// Module 4531 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj = {
  open(toastProps) {
    importDefault = toastProps;
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "TOAST_OPEN", toastProps };
      return obj.dispatch(obj2);
    });
  },
  close() {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "TOAST_CLOSE" });
    });
  }
};
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default obj;
