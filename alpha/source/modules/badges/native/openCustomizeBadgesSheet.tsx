// Module ID: 17147
// Function ID: 17148
// Name: openCustomizeBadgesSheet
// Dependencies: [5546, 17148, 2121, 2]
// Exports: openCustomizeBadgesSheet

// Module 17147 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17148, dependencyMap.paths), "Customize Badges", { analyticsLocations });
}
