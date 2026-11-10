// Module ID: 11614
// Function ID: 11615
// Name: openBadgeDetailsSheet
// Dependencies: [5376, 11615, 2118, 2]
// Exports: openBadgeDetailsSheet

// Module 11614 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11615, dependencyMap.paths), c3, arg0);
}
