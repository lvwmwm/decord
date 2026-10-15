// Module ID: 10815
// Function ID: 10816
// Name: openBadgeDetailsSheet
// Dependencies: [5115, 10816, 2000, 2]
// Exports: openBadgeDetailsSheet

// Module 10815 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10816, dependencyMap.paths), c3, arg0);
};
