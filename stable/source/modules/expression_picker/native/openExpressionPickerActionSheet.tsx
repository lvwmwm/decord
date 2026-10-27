// Module ID: 10025
// Function ID: 10026
// Name: openExpressionPickerActionSheet
// Dependencies: [5155, 10026, 2002, 2]
// Exports: openExpressionPickerActionSheet

// Module 10025 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10026, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
