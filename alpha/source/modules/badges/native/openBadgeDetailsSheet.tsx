// Module ID: 11101
// Function ID: 11102
// Name: openBadgeDetailsSheet
// Dependencies: [5196, 11102, 2002, 2]
// Exports: openBadgeDetailsSheet

// Module 11101 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11102, dependencyMap.paths), c3, arg0);
};
