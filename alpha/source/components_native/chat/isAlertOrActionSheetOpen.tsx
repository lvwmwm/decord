// Module ID: 9998
// Function ID: 9999
// Name: isAlertOrActionSheetOpen
// Dependencies: [5197, 9999, 5896, 2]
// Exports: isAlertOrActionSheetOpen

// Module 9998 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 5896 */;
import ActionSheetStore from "ActionSheetStore" /* 5197 */;
import AlertStore from "AlertStore" /* 9999 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
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
};
