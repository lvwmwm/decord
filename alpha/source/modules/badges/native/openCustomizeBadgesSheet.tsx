// Module ID: 16146
// Function ID: 16147
// Name: openCustomizeBadgesSheet
// Dependencies: [5246, 16147, 1999, 2]
// Exports: openCustomizeBadgesSheet

// Module 16146 (openCustomizeBadgesSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/openCustomizeBadgesSheet.tsx");

export const openCustomizeBadgesSheet = function openCustomizeBadgesSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16147, dependencyMap.paths), "Customize Badges", { analyticsLocations });
};
