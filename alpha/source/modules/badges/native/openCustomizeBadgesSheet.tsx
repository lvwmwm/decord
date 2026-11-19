// Module ID: 15794
// Function ID: 15795
// Name: openCustomizeBadgesSheet
// Dependencies: [5006, 15795, 2121, 2]
// Exports: openCustomizeBadgesSheet

// Module 15794 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15795, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
