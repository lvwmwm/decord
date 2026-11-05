// Module ID: 10320
// Function ID: 10321
// Name: isAlertOrActionSheetOpen
// Dependencies: [5385, 10321, 6098, 2]
// Exports: isAlertOrActionSheetOpen

// Module 10320 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 6098 */;
import ActionSheetStore from "ActionSheetStore" /* 5385 */;
import AlertStore from "AlertStore" /* 10321 */;
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
