// Module ID: 9490
// Function ID: 73954
// Name: isAlertOrActionSheetOpen
// Dependencies: [3823, 9491, 4472, 2]
// Exports: isAlertOrActionSheetOpen

// Module 9490 (isAlertOrActionSheetOpen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  let obj2 = arg2;
  if (arg1 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  let tmp = null != obj.getContent();
  const useAlertStore = require(4472) /* useAlertStore */.useAlertStore;
  const tmp2 = null != obj2.getAlert();
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};
