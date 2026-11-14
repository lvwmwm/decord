// Module ID: 17111
// Function ID: 17112
// Name: openCustomizeBadgesSheet
// Dependencies: [5552, 17112, 2121, 2]
// Exports: openCustomizeBadgesSheet

// Module 17111 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17112, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
