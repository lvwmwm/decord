// Module ID: 15766
// Function ID: 15767
// Name: openCustomizeBadgesSheet
// Dependencies: [5192, 15767, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15766 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15767, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
