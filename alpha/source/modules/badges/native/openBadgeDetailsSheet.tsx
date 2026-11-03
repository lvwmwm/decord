// Module ID: 11600
// Function ID: 11601
// Name: openBadgeDetailsSheet
// Dependencies: [5381, 11601, 2123, 2]
// Exports: openBadgeDetailsSheet

// Module 11600 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11601, dependencyMap.paths), c3, arg0);
}
