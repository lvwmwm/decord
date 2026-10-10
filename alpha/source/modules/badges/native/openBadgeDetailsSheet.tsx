// Module ID: 10581
// Function ID: 10582
// Name: openBadgeDetailsSheet
// Dependencies: [5056, 10582, 2000, 2]
// Exports: openBadgeDetailsSheet

// Module 10581 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10582, dependencyMap.paths), c3, arg0);
};
