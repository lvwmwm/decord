// Module ID: 6656
// Function ID: 51196
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: []
// Exports: default

// Module 6656 (openPremiumPlanSelectionActionSheet)
let closure_3 = require(dependencyMap[0]).PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(dependencyMap[1]).hideActionSheet();
    const obj = importDefault(dependencyMap[1]);
  }
  importDefault(dependencyMap[1]).openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_3, arg0, arg1);
};
