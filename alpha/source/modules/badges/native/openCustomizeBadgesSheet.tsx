// Module ID: 16744
// Function ID: 16745
// Name: openCustomizeBadgesSheet
// Dependencies: [5404, 16745, 2118, 2]
// Exports: openCustomizeBadgesSheet

// Module 16744 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16745, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
