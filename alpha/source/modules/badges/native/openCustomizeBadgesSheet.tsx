// Module ID: 14853
// Function ID: 14854
// Name: openCustomizeBadgesSheet
// Dependencies: [5056, 14854, 2000, 2]
// Exports: openCustomizeBadgesSheet

// Module 14853 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14854, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
