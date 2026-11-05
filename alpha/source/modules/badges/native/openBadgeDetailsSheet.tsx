// Module ID: 11660
// Function ID: 11661
// Name: openBadgeDetailsSheet
// Dependencies: [5384, 11661, 2123, 2]
// Exports: openBadgeDetailsSheet

// Module 11660 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11661, dependencyMap.paths), c3, arg0);
}
