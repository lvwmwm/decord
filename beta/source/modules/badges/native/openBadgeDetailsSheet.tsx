// Module ID: 10662
// Function ID: 10663
// Name: openBadgeDetailsSheet
// Dependencies: [4800, 10663, 1981, 2]
// Exports: openBadgeDetailsSheet

// Module 10662 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10663, dependencyMap.paths), c3, arg0);
};
