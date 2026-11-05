// Module ID: 16748
// Function ID: 16749
// Name: openCustomizeBadgesSheet
// Dependencies: [5384, 16749, 2123, 2]
// Exports: openCustomizeBadgesSheet

// Module 16748 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16749, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
