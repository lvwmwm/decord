// Module ID: 11652
// Function ID: 11653
// Name: openBadgeDetailsSheet
// Dependencies: [5382, 11653, 2123, 2]
// Exports: openBadgeDetailsSheet

// Module 11652 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11653, dependencyMap.paths), c3, arg0);
}
