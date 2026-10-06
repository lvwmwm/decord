// Module ID: 14463
// Function ID: 14464
// Name: openCustomizeBadgesSheet
// Dependencies: [4860, 14464, 1987, 2]
// Exports: openCustomizeBadgesSheet

// Module 14463 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14464, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
