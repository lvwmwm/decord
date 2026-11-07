// Module ID: 11605
// Function ID: 11606
// Name: openBadgeDetailsSheet
// Dependencies: [5374, 11606, 2118, 2]
// Exports: openBadgeDetailsSheet

// Module 11605 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11606, dependencyMap.paths), c3, arg0);
}
