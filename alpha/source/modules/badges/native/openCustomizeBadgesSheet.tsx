// Module ID: 15566
// Function ID: 15567
// Name: openCustomizeBadgesSheet
// Dependencies: [5118, 15567, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15566 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15567, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
