// Module ID: 10110
// Function ID: 10111
// Name: openBadgeDetailsSheet
// Dependencies: [5552, 10111, 2121, 2]
// Exports: openBadgeDetailsSheet

// Module 10110 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10111, dependencyMap.paths), c3, arg0);
}
