// Module ID: 16792
// Function ID: 16793
// Name: openCustomizeBadgesSheet
// Dependencies: [5374, 16793, 2118, 2]
// Exports: openCustomizeBadgesSheet

// Module 16792 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16793, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
