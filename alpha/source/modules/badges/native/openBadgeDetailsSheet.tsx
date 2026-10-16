// Module ID: 10827
// Function ID: 10828
// Name: openBadgeDetailsSheet
// Dependencies: [5118, 10828, 2002, 2]
// Exports: openBadgeDetailsSheet

// Module 10827 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10828, dependencyMap.paths), c3, arg0);
};
