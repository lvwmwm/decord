// Module ID: 16490
// Function ID: 16491
// Name: openCustomizeBadgesSheet
// Dependencies: [5258, 16491, 1994, 2]
// Exports: openCustomizeBadgesSheet

// Module 16490 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16491, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
