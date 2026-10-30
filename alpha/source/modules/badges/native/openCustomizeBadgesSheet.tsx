// Module ID: 16435
// Function ID: 16436
// Name: openCustomizeBadgesSheet
// Dependencies: [5253, 16436, 1995, 2]
// Exports: openCustomizeBadgesSheet

// Module 16435 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16436, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
