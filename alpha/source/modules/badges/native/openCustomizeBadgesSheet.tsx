// Module ID: 16477
// Function ID: 16478
// Name: openCustomizeBadgesSheet
// Dependencies: [5258, 16478, 1994, 2]
// Exports: openCustomizeBadgesSheet

// Module 16477 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16478, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
