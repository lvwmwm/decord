// Module ID: 15920
// Function ID: 15921
// Name: openCustomizeBadgesSheet
// Dependencies: [5211, 15921, 1999, 2]
// Exports: openCustomizeBadgesSheet

// Module 15920 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15921, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
