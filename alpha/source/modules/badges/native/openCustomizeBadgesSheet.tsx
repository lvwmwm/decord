// Module ID: 15690
// Function ID: 15691
// Name: openCustomizeBadgesSheet
// Dependencies: [5171, 15691, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15690 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15691, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
