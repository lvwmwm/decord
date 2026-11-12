// Module ID: 11637
// Function ID: 11638
// Name: openBadgeDetailsSheet
// Dependencies: [5406, 11638, 2118, 2]
// Exports: openBadgeDetailsSheet

// Module 11637 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11638, dependencyMap.paths), c3, arg0);
}
