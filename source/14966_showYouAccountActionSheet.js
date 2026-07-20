// Module ID: 14966
// Function ID: 112695
// Name: showYouAccountActionSheet
// Dependencies: [0, 4294967295, 0, 0, 0]
// Exports: showYouAccountActionSheet

// Module 14966 (showYouAccountActionSheet)
import { YOU_ACCOUNT_ACTION_SHEET_KEY as closure_3 } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

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
