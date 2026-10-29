// Module ID: 16383
// Function ID: 16384
// Name: openCustomizeBadgesSheet
// Dependencies: [5247, 16384, 2000, 2]
// Exports: openCustomizeBadgesSheet

// Module 16383 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16384, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
