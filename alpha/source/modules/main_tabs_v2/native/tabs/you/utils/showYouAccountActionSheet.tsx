// Module ID: 16306
// Function ID: 16307
// Name: showYouAccountActionSheet
// Dependencies: [16307, 4854, 16308, 1987, 2]
// Exports: showYouAccountActionSheet

// Module 16306 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import YouConstants from "YouConstants" /* 16307 */;
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
  obj.openLazy(asyncRequire(16308, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
