// Module ID: 11221
// Function ID: 11222
// Name: openBadgeDetailsSheet
// Dependencies: [5247, 11222, 2000, 2]
// Exports: openBadgeDetailsSheet

// Module 11221 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11222, dependencyMap.paths), c3, arg0);
}
