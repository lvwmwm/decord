// Module ID: 15234
// Function ID: 15235
// Name: openCustomizeBadgesSheet
// Dependencies: [5060, 15235, 2000, 2]
// Exports: openCustomizeBadgesSheet

// Module 15234 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15235, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
