// Module ID: 17510
// Function ID: 17511
// Name: showYouAccountActionSheet
// Dependencies: [17511, 5155, 17512, 2002, 2]
// Exports: showYouAccountActionSheet

// Module 17510 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import YouConstants from "YouConstants" /* 17511 */;
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
  obj.openLazy(asyncRequire(17512, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
