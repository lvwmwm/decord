// Module ID: 15671
// Function ID: 15672
// Name: openCustomizeBadgesSheet
// Dependencies: [5171, 15672, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15671 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15672, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
