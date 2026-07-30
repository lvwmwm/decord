// Module ID: 15237
// Function ID: 15238
// Name: showYouAccountActionSheet
// Dependencies: [15238, 4157, 15239, 1959, 2]
// Exports: showYouAccountActionSheet

// Module 15237 (showYouAccountActionSheet)
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
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(15239, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
