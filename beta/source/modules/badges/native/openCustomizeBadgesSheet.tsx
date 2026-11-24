// Module ID: 15879
// Function ID: 15880
// Name: openCustomizeBadgesSheet
// Dependencies: [5127, 15880, 2119, 2]
// Exports: openCustomizeBadgesSheet

// Module 15879 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15880, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
