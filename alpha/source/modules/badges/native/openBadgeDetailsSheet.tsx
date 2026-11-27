// Module ID: 9874
// Function ID: 9875
// Name: openBadgeDetailsSheet
// Dependencies: [5257, 9875, 2120, 2]
// Exports: openBadgeDetailsSheet

// Module 9874 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9875, dependencyMap.paths), c3, arg0);
}
