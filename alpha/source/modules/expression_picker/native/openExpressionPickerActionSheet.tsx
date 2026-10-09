// Module ID: 9696
// Function ID: 9697
// Name: openExpressionPickerActionSheet
// Dependencies: [5055, 9697, 2000, 2]
// Exports: openExpressionPickerActionSheet

// Module 9696 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9697, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
