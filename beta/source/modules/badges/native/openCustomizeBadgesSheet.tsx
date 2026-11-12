// Module ID: 16837
// Function ID: 16838
// Name: openCustomizeBadgesSheet
// Dependencies: [5406, 16838, 2118, 2]
// Exports: openCustomizeBadgesSheet

// Module 16837 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16838, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
