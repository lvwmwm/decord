// Module ID: 13987
// Function ID: 13988
// Name: openBadgeDetailsSheet
// Dependencies: [5127, 13988, 2119, 2]
// Exports: openBadgeDetailsSheet

// Module 13987 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13988, dependencyMap.paths), c3, arg0);
}
