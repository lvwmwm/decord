// Module ID: 10134
// Function ID: 10135
// Name: isAlertOrActionSheetOpen
// Dependencies: [5259, 10135, 5960, 2]
// Exports: isAlertOrActionSheetOpen

// Module 10134 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 5960 */;
import ActionSheetStore from "ActionSheetStore" /* 5259 */;
import AlertStore from "AlertStore" /* 10135 */;
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
