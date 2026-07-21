// Module ID: 14976
// Function ID: 112753
// Name: showYouAccountActionSheet
// Dependencies: []
// Exports: showYouAccountActionSheet

// Module 14976 (showYouAccountActionSheet)
let closure_3 = require(dependencyMap[0]).YOU_ACCOUNT_ACTION_SHEET_KEY;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  let flag2 = arg1;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj = importDefault(dependencyMap[1]);
  obj = { statusOnly: flag, disableHapticOnOpen: flag2 };
  obj.openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_3, obj);
};
