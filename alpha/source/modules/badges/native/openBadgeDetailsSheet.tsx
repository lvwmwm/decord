// Module ID: 13916
// Function ID: 13917
// Name: openBadgeDetailsSheet
// Dependencies: [5037, 13917, 2121, 2]
// Exports: openBadgeDetailsSheet

// Module 13916 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13917, dependencyMap.paths), c3, arg0);
}
