// Module ID: 15243
// Function ID: 15244
// Name: showYouAccountActionSheet
// Dependencies: [15244, 4157, 15245, 1959, 2]
// Exports: showYouAccountActionSheet

// Module 15243 (showYouAccountActionSheet)
import { YOU_ACCOUNT_ACTION_SHEET_KEY as closure_3 } from "YOU_SCREEN_ID";

const result = require("YouStatusRadioGroup").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(15245, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
