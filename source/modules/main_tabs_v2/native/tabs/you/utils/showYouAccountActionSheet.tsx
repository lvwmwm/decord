// Module ID: 15170
// Function ID: 115462
// Name: showYouAccountActionSheet
// Dependencies: [15171, 4099, 15172, 1935, 2]
// Exports: showYouAccountActionSheet

// Module 15170 (showYouAccountActionSheet)
import { YOU_ACCOUNT_ACTION_SHEET_KEY as closure_3 } from "YOU_SCREEN_ID";

const result = require("YouStatusRadioGroup").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  let flag2 = arg1;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj = importDefault(4099);
  obj = { statusOnly: flag, disableHapticOnOpen: flag2 };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15172, dependencyMap.paths), closure_3, obj);
};
