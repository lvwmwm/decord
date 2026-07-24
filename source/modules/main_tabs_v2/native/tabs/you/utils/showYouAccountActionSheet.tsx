// Module ID: 15147
// Function ID: 115285
// Name: showYouAccountActionSheet
// Dependencies: [15148, 4098, 15149, 1934, 2]
// Exports: showYouAccountActionSheet

// Module 15147 (showYouAccountActionSheet)
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
  let obj = importDefault(4098);
  obj = { statusOnly: flag, disableHapticOnOpen: flag2 };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15149, dependencyMap.paths), closure_3, obj);
};
