// Module ID: 10649
// Function ID: 10650
// Name: openBadgeDetailsSheet
// Dependencies: [4796, 10650, 1980, 2]
// Exports: openBadgeDetailsSheet

// Module 10649 (openBadgeDetailsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10650, dependencyMap.paths), c3, arg0);
};
