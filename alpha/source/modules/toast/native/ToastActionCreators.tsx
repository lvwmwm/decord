// Module ID: 4768
// Function ID: 4769
// Name: ToastActionCreators
// Dependencies: [4769, 4774, 2]

// Module 4768 (ToastActionCreators)
import toastUtils from "toastUtils" /* 4769 */;
import toastMapping from "toastMapping" /* 4774 */;
import size from "module_2" /* 2 */;

let c2 = null;
let key = null;
let obj = {
  open(key) {
    const obj = toastMapping;
    const toManaToastResult = obj.toManaToast(key);
    let tmp4 = key === key && null != c2;
    if (tmp4) {
      const useToastStore = tmp(4769).useToastStore;
      const currentToastMap = useToastStore.getState().currentToastMap;
      const value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      tmp4 = toast === c2;
    }
    if (!tmp4) {
      c2 = toManaToastResult;
      const tmpResult = toastUtils;
      tmpResult.showToast(toManaToastResult);
    }
  },
  openMana(DEV_IN_APP_NOTIF_TEST_ERROR, arg1) {
    let tmp = key === DEV_IN_APP_NOTIF_TEST_ERROR && null != c2;
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
      const obj = toastUtils;
      obj.showToast(arg1);
      key = DEV_IN_APP_NOTIF_TEST_ERROR;
    }
  },
  close() {
    const obj = toastUtils;
    obj.popToast();
  }
};
const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default obj;
