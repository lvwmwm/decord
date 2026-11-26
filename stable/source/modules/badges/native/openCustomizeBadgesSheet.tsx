// Module ID: 17113
// Function ID: 17114
// Name: openCustomizeBadgesSheet
// Dependencies: [5542, 17114, 2121, 2]
// Exports: openCustomizeBadgesSheet

// Module 17113 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17114, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
