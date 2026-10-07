// Module ID: 14447
// Function ID: 14448
// Name: openCustomizeBadgesSheet
// Dependencies: [4854, 14448, 1987, 2]
// Exports: openCustomizeBadgesSheet

// Module 14447 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14448, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
