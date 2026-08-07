// Module ID: 15405
// Function ID: 15406
// Name: showYouAccountActionSheet
// Dependencies: [15406, 4270, 15407, 1988, 2]
// Exports: showYouAccountActionSheet

// Module 15405 (showYouAccountActionSheet)
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
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(15407, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
