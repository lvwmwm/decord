// Module ID: 16101
// Function ID: 16102
// Name: openCustomizeBadgesSheet
// Dependencies: [5257, 16102, 2120, 2]
// Exports: openCustomizeBadgesSheet

// Module 16101 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16102, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
