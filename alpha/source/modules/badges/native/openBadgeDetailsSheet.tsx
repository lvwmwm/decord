// Module ID: 10043
// Function ID: 10044
// Name: openBadgeDetailsSheet
// Dependencies: [5489, 10044, 2118, 2]
// Exports: openBadgeDetailsSheet

// Module 10043 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10044, dependencyMap.paths), c3, arg0);
}
