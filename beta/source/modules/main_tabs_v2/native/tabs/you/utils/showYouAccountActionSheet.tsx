// Module ID: 17964
// Function ID: 17965
// Name: showYouAccountActionSheet
// Dependencies: [17965, 5127, 17966, 2119, 2]
// Exports: showYouAccountActionSheet

// Module 17964 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import YouConstants from "YouConstants" /* 17965 */;
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
  obj.openLazy(asyncRequire(17966, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
}
