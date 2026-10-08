// Module ID: 14691
// Function ID: 14692
// Name: openCustomizeBadgesSheet
// Dependencies: [5054, 14692, 1999, 2]
// Exports: openCustomizeBadgesSheet

// Module 14691 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14692, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
