// Module ID: 16043
// Function ID: 16044
// Name: openCustomizeBadgesSheet
// Dependencies: [5226, 16044, 2119, 2]
// Exports: openCustomizeBadgesSheet

// Module 16043 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16044, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
