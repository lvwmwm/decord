// Module ID: 15758
// Function ID: 15759
// Name: openCustomizeBadgesSheet
// Dependencies: [5008, 15759, 2119, 2]
// Exports: openCustomizeBadgesSheet

// Module 15758 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15759, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
