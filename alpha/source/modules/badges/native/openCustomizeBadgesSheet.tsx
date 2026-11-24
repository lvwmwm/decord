// Module ID: 15922
// Function ID: 15923
// Name: openCustomizeBadgesSheet
// Dependencies: [5131, 15923, 2119, 2]
// Exports: openCustomizeBadgesSheet

// Module 15922 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15923, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
