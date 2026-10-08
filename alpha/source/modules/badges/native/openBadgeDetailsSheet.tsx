// Module ID: 10556
// Function ID: 10557
// Name: openBadgeDetailsSheet
// Dependencies: [5054, 10557, 1999, 2]
// Exports: openBadgeDetailsSheet

// Module 10556 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10557, dependencyMap.paths), c3, arg0);
};
