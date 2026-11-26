// Module ID: 15893
// Function ID: 15894
// Name: openCustomizeBadgesSheet
// Dependencies: [5127, 15894, 2119, 2]
// Exports: openCustomizeBadgesSheet

// Module 15893 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15894, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
