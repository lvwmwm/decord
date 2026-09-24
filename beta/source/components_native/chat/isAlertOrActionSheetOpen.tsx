// Module ID: 11700
// Function ID: 11701
// Name: isAlertOrActionSheetOpen
// Dependencies: [4483, 11701, 5144, 2]
// Exports: isAlertOrActionSheetOpen

// Module 11700 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 5144 */;
import ActionSheetStore from "ActionSheetStore" /* 4483 */;
import AlertStore from "AlertStore" /* 11701 */;

require = fn;
const size = fn(2);
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
  const useAlertStore = useAlertStore2.useAlertStore;
  const tmp2 = null != obj2.getAlert();
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};
