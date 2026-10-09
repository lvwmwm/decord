// Module ID: 14797
// Function ID: 14798
// Name: openCustomizeBadgesSheet
// Dependencies: [5055, 14798, 2000, 2]
// Exports: openCustomizeBadgesSheet

// Module 14797 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14798, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
