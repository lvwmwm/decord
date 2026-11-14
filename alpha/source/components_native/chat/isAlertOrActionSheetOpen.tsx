// Module ID: 12460
// Function ID: 12461
// Name: isAlertOrActionSheetOpen
// Dependencies: [5553, 12461, 6270, 2]
// Exports: isAlertOrActionSheetOpen

// Module 12460 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 6270 */;
import ActionSheetStore from "ActionSheetStore" /* 5553 */;
import AlertStore from "AlertStore" /* 12461 */;
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
