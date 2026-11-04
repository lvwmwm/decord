// Module ID: 10312
// Function ID: 10313
// Name: isAlertOrActionSheetOpen
// Dependencies: [5383, 10313, 6095, 2]
// Exports: isAlertOrActionSheetOpen

// Module 10312 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 6095 */;
import ActionSheetStore from "ActionSheetStore" /* 5383 */;
import AlertStore from "AlertStore" /* 10313 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ActionSheetStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = AlertStore;
  }
  let tmp = null != obj.getContent();
  const tmp2 = null != obj2.getAlert();
  const useAlertStore = useAlertStore2.useAlertStore;
  const tmp3 = useAlertStore.getState().alerts.length > 0;
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
}
