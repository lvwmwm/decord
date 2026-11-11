// Module ID: 10044
// Function ID: 10045
// Name: openBadgeDetailsSheet
// Dependencies: [5489, 10045, 2118, 2]
// Exports: openBadgeDetailsSheet

// Module 10044 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10045, dependencyMap.paths), c3, arg0);
}
