// Module ID: 16735
// Function ID: 16736
// Name: openCustomizeBadgesSheet
// Dependencies: [5382, 16736, 2123, 2]
// Exports: openCustomizeBadgesSheet

// Module 16735 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16736, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
