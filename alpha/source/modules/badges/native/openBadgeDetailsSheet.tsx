// Module ID: 9873
// Function ID: 9874
// Name: openBadgeDetailsSheet
// Dependencies: [5257, 9874, 2120, 2]
// Exports: openBadgeDetailsSheet

// Module 9873 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9874, dependencyMap.paths), c3, arg0);
}
