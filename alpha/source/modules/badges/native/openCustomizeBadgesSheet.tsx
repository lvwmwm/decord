// Module ID: 16633
// Function ID: 16634
// Name: openCustomizeBadgesSheet
// Dependencies: [5381, 16634, 2123, 2]
// Exports: openCustomizeBadgesSheet

// Module 16633 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16634, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
