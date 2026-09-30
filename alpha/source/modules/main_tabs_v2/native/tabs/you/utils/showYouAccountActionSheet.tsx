// Module ID: 16211
// Function ID: 16212
// Name: showYouAccountActionSheet
// Dependencies: [16212, 4830, 16213, 1981, 2]
// Exports: showYouAccountActionSheet

// Module 16211 (showYouAccountActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import YouConstants from "YouConstants" /* 16212 */;
import size from "module_2" /* 2 */;

let closure_3 = YouConstants.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16213, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
