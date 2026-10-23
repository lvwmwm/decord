// Module ID: 11124
// Function ID: 11125
// Name: openBadgeDetailsSheet
// Dependencies: [5208, 11125, 2002, 2]
// Exports: openBadgeDetailsSheet

// Module 11124 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11125, dependencyMap.paths), c3, arg0);
};
