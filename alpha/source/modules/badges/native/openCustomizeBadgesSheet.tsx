// Module ID: 16993
// Function ID: 16994
// Name: openCustomizeBadgesSheet
// Dependencies: [5489, 16994, 2118, 2]
// Exports: openCustomizeBadgesSheet

// Module 16993 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16994, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
