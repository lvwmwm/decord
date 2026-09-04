// Module ID: 11476
// Function ID: 11477
// Name: isAlertOrActionSheetOpen
// Dependencies: [4186, 11477, 4867, 2]
// Exports: isAlertOrActionSheetOpen

// Module 11476 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 4867 */;
import closure_2 from "setContent" /* 4186 */;
import closure_3 from "getAlert" /* 11477 */;

require = arg1;
const result = require("set").fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = closure_3;
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
