// Module ID: 10867
// Function ID: 10868
// Name: openBadgeDetailsSheet
// Dependencies: [4809, 10868, 1981, 2]
// Exports: openBadgeDetailsSheet

// Module 10867 (openBadgeDetailsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

let c3 = "badge-details";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDetailsSheet.tsx");

export const BADGE_DETAILS_SHEET_KEY = "badge-details";
export const openBadgeDetailsSheet = function openBadgeDetailsSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10868, dependencyMap.paths), c3, arg0);
};
