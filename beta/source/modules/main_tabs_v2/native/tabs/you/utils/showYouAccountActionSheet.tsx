// Module ID: 18443
// Function ID: 18444
// Name: showYouAccountActionSheet
// Dependencies: [18444, 5258, 18445, 1994, 2]
// Exports: showYouAccountActionSheet

// Module 18443 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import YouConstants from "YouConstants" /* 18444 */;
import size from "module_2" /* 2 */;

let closure_3 = YouConstants.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18445, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
}
