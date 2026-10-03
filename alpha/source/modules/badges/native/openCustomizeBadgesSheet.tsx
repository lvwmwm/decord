// Module ID: 14443
// Function ID: 14444
// Name: openCustomizeBadgesSheet
// Dependencies: [4854, 14444, 1987, 2]
// Exports: openCustomizeBadgesSheet

// Module 14443 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14444, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
