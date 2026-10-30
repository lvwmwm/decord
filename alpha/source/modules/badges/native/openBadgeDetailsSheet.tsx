// Module ID: 11426
// Function ID: 11427
// Name: openBadgeDetailsSheet
// Dependencies: [5253, 11427, 1995, 2]
// Exports: openBadgeDetailsSheet

// Module 11426 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11427, dependencyMap.paths), c3, arg0);
}
