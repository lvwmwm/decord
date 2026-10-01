// Module ID: 4528
// Function ID: 4529
// Name: ToastActionCreators
// Dependencies: [573, 2]

// Module 4528 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
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
