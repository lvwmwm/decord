// Module ID: 11463
// Function ID: 11464
// Name: openBadgeDetailsSheet
// Dependencies: [5258, 11464, 1994, 2]
// Exports: openBadgeDetailsSheet

// Module 11463 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11464, dependencyMap.paths), c3, arg0);
}
