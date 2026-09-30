// Module ID: 11244
// Function ID: 11245
// Name: isAlertOrActionSheetOpen
// Dependencies: [4551, 11245, 5401, 2]
// Exports: isAlertOrActionSheetOpen

// Module 11244 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 5401 */;
import ActionSheetStore from "ActionSheetStore" /* 4551 */;
import AlertStore from "AlertStore" /* 11245 */;

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
