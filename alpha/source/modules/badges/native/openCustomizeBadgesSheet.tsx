// Module ID: 15197
// Function ID: 15198
// Name: openCustomizeBadgesSheet
// Dependencies: [5056, 15198, 2000, 2]
// Exports: openCustomizeBadgesSheet

// Module 15197 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15198, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
