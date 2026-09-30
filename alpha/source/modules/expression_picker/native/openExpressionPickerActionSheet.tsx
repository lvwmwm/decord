// Module ID: 9935
// Function ID: 9936
// Name: openExpressionPickerActionSheet
// Dependencies: [4830, 9936, 1981, 2]
// Exports: openExpressionPickerActionSheet

// Module 9935 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9936, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
