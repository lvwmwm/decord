// Module ID: 9949
// Function ID: 9950
// Name: isAlertOrActionSheetOpen
// Dependencies: [5172, 9950, 5868, 2]
// Exports: isAlertOrActionSheetOpen

// Module 9949 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 5868 */;
import ActionSheetStore from "ActionSheetStore" /* 5172 */;
import AlertStore from "AlertStore" /* 9950 */;
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
