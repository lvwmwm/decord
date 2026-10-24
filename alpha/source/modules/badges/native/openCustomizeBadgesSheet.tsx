// Module ID: 15877
// Function ID: 15878
// Name: openCustomizeBadgesSheet
// Dependencies: [5210, 15878, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15877 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15878, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
