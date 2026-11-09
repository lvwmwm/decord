// Module ID: 18795
// Function ID: 18796
// Name: showYouAccountActionSheet
// Dependencies: [18796, 5374, 18797, 2118, 2]
// Exports: showYouAccountActionSheet

// Module 18795 (showYouAccountActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import YouConstants from "YouConstants" /* 18796 */;
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
  obj.openLazy(asyncRequire(18797, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
}
