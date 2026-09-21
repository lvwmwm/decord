// Module ID: 10529
// Function ID: 10530
// Name: openExpressionPickerActionSheet
// Dependencies: [4723, 10530, 1980, 2]
// Exports: openExpressionPickerActionSheet

// Module 10529 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10530, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
