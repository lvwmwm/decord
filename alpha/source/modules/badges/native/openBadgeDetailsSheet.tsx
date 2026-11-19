// Module ID: 13898
// Function ID: 13899
// Name: openBadgeDetailsSheet
// Dependencies: [5006, 13899, 2121, 2]
// Exports: openBadgeDetailsSheet

// Module 13898 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13899, dependencyMap.paths), c3, arg0);
}
