// Module ID: 12371
// Function ID: 12372
// Name: isAlertOrActionSheetOpen
// Dependencies: [5490, 12372, 6207, 2]
// Exports: isAlertOrActionSheetOpen

// Module 12371 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 6207 */;
import ActionSheetStore from "ActionSheetStore" /* 5490 */;
import AlertStore from "AlertStore" /* 12372 */;
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
