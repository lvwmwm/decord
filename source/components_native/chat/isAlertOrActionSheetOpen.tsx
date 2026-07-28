// Module ID: 9487
// Function ID: 73879
// Name: isAlertOrActionSheetOpen
// Dependencies: [3858, 9488, 4507, 2]
// Exports: isAlertOrActionSheetOpen

// Module 9487 (isAlertOrActionSheetOpen)
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
  const useAlertStore = require(4507) /* useAlertStore */.useAlertStore;
  const tmp2 = null != obj2.getAlert();
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};
