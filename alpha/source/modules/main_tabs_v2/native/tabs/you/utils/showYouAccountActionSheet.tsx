// Module ID: 17407
// Function ID: 17408
// Name: showYouAccountActionSheet
// Dependencies: [17408, 5115, 17409, 2000, 2]
// Exports: showYouAccountActionSheet

// Module 17407 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import YouConstants from "YouConstants" /* 17408 */;
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
  obj.openLazy(asyncRequire(17409, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
