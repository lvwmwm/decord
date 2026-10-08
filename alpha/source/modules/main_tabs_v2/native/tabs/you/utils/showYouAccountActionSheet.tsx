// Module ID: 16610
// Function ID: 16611
// Name: showYouAccountActionSheet
// Dependencies: [16611, 5054, 16612, 1999, 2]
// Exports: showYouAccountActionSheet

// Module 16610 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import YouConstants from "YouConstants" /* 16611 */;
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
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16612, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
