// Module ID: 15638
// Function ID: 15639
// Name: openCustomizeBadgesSheet
// Dependencies: [5155, 15639, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15638 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15639, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
