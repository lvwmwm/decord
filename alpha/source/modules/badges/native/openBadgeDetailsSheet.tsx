// Module ID: 11092
// Function ID: 11093
// Name: openBadgeDetailsSheet
// Dependencies: [5196, 11093, 2002, 2]
// Exports: openBadgeDetailsSheet

// Module 11092 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11093, dependencyMap.paths), c3, arg0);
};
