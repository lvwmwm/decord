// Module ID: 15808
// Function ID: 15809
// Name: openCustomizeBadgesSheet
// Dependencies: [5196, 15809, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15808 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15809, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
