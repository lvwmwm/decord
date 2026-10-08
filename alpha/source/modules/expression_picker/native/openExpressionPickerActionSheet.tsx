// Module ID: 9677
// Function ID: 9678
// Name: openExpressionPickerActionSheet
// Dependencies: [5054, 9678, 1999, 2]
// Exports: openExpressionPickerActionSheet

// Module 9677 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9678, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
