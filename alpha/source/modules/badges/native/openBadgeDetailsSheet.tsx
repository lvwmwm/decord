// Module ID: 11167
// Function ID: 11168
// Name: openBadgeDetailsSheet
// Dependencies: [5246, 11168, 1999, 2]
// Exports: openBadgeDetailsSheet

// Module 11167 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11168, dependencyMap.paths), c3, arg0);
};
