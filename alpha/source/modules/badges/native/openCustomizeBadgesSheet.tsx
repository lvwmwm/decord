// Module ID: 15530
// Function ID: 15531
// Name: openCustomizeBadgesSheet
// Dependencies: [5115, 15531, 2000, 2]
// Exports: openCustomizeBadgesSheet

// Module 15530 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15531, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
