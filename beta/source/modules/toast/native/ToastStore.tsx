// Module ID: 16785
// Function ID: 16786
// Name: ToastStore
// Dependencies: [504, 573, 2]

// Module 16785 (ToastStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

let key;

let c0 = null;
const Store = get_initializedDefault.Store;
class ToastStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.getContent = function getContent() {
      return _null;
    };
    return applyArgumentsResult;
  }
}
ToastStore.displayName = "ToastStore";
const obj = {
  TOAST_OPEN: function handleOpen(toastProps) {
    toastProps = toastProps.toastProps;
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (key === toastProps.key) {
      return false;
    } else {
      key = toastProps;
    }
  },
  TOAST_CLOSE: function handleClose() {
    let c0 = null;
  }
};
const toastStore = new ToastStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default toastStore;
