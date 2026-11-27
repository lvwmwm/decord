// Module ID: 16108
// Function ID: 16109
// Name: openCustomizeBadgesSheet
// Dependencies: [5257, 16109, 2120, 2]
// Exports: openCustomizeBadgesSheet

// Module 16108 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16109, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
