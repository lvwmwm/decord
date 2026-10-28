// Module ID: 15916
// Function ID: 15917
// Name: openCustomizeBadgesSheet
// Dependencies: [5242, 15917, 2002, 2]
// Exports: openCustomizeBadgesSheet

// Module 15916 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15917, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
