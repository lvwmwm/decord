// Module ID: 15157
// Function ID: 115413
// Name: showYouAccountActionSheet
// Dependencies: [15158, 4099, 15159, 1935, 2]
// Exports: showYouAccountActionSheet

// Module 15157 (showYouAccountActionSheet)
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
  obj.openLazy(require(1935) /* maybeLoadBundle */(15159, dependencyMap.paths), closure_3, obj);
};
