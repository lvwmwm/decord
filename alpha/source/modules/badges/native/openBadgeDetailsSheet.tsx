// Module ID: 11622
// Function ID: 11623
// Name: openBadgeDetailsSheet
// Dependencies: [5404, 11623, 2118, 2]
// Exports: openBadgeDetailsSheet

// Module 11622 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11623, dependencyMap.paths), c3, arg0);
}
