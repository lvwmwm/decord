// Module ID: 5707
// Function ID: 5708
// Name: ToastActionCreators
// Dependencies: [5708, 2]

// Module 5707 (ToastActionCreators)
import toastUtils from "toastUtils" /* 5708 */;
import size from "module_2" /* 2 */;

let c2 = null;
let c3 = null;
let obj = {
  open(arg0, arg1) {
    let tmp = c3 === arg0 && null != c2;
    if (tmp) {
      const useToastStore = toastUtils.useToastStore;
      const currentToastMap = useToastStore.getState().currentToastMap;
      const value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      tmp = toast === c2;
    }
    if (!tmp) {
      c2 = arg1;
      c3 = arg0;
      const obj = toastUtils;
      obj.showToast(arg1);
    }
  },
  close() {
    const obj = toastUtils;
    obj.popToast();
  }
};
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default obj;
