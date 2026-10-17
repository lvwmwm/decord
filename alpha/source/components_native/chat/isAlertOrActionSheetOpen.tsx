// Module ID: 9924
// Function ID: 9925
// Name: isAlertOrActionSheetOpen
// Dependencies: [4897, 9925, 5401, 2]
// Exports: isAlertOrActionSheetOpen

// Module 9924 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 5401 */;
import ActionSheetStore from "ActionSheetStore" /* 4897 */;
import AlertStore from "AlertStore" /* 9925 */;
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
