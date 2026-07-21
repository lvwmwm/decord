// Module ID: 9482
// Function ID: 73889
// Name: isAlertOrActionSheetOpen
// Dependencies: []
// Exports: isAlertOrActionSheetOpen

// Module 9482 (isAlertOrActionSheetOpen)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  let obj2 = arg2;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  let tmp = null != obj.getContent();
  const useAlertStore = arg1(dependencyMap[2]).useAlertStore;
  const tmp2 = null != obj2.getAlert();
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};
