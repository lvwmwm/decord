// Module ID: 10931
// Function ID: 10932
// Name: openBadgeDetailsSheet
// Dependencies: [5171, 10932, 2002, 2]
// Exports: openBadgeDetailsSheet

// Module 10931 (openBadgeDetailsSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10932, dependencyMap.paths), c3, arg0);
};
