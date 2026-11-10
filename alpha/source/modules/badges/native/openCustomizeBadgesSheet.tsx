// Module ID: 16830
// Function ID: 16831
// Name: openCustomizeBadgesSheet
// Dependencies: [5376, 16831, 2118, 2]
// Exports: openCustomizeBadgesSheet

// Module 16830 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16831, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
