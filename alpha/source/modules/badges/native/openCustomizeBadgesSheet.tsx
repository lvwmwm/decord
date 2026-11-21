// Module ID: 15881
// Function ID: 15882
// Name: openCustomizeBadgesSheet
// Dependencies: [5127, 15882, 2119, 2]
// Exports: openCustomizeBadgesSheet

// Module 15881 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15882, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
