// Module ID: 9732
// Function ID: 9733
// Name: openBadgeDetailsSheet
// Dependencies: [5131, 9733, 2119, 2]
// Exports: openBadgeDetailsSheet

// Module 9732 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9733, dependencyMap.paths), c3, arg0);
}
