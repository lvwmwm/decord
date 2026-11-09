// Module ID: 16803
// Function ID: 16804
// Name: openCustomizeBadgesSheet
// Dependencies: [5374, 16804, 2118, 2]
// Exports: openCustomizeBadgesSheet

// Module 16803 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16804, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
