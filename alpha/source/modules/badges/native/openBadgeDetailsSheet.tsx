// Module ID: 11132
// Function ID: 11133
// Name: openBadgeDetailsSheet
// Dependencies: [5211, 11133, 1999, 2]
// Exports: openBadgeDetailsSheet

// Module 11132 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11133, dependencyMap.paths), c3, arg0);
};
