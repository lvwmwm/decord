// Module ID: 10547
// Function ID: 10548
// Name: openBadgeDetailsSheet
// Dependencies: [5055, 10548, 2000, 2]
// Exports: openBadgeDetailsSheet

// Module 10547 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10548, dependencyMap.paths), c3, arg0);
};
