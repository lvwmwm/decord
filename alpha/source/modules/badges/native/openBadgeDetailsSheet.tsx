// Module ID: 15288
// Function ID: 15289
// Name: openBadgeDetailsSheet
// Dependencies: [5546, 15289, 2121, 2]
// Exports: openBadgeDetailsSheet

// Module 15288 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15289, dependencyMap.paths), c3, arg0);
}
