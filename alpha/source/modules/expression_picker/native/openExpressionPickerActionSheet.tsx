// Module ID: 9723
// Function ID: 9724
// Name: openExpressionPickerActionSheet
// Dependencies: [4796, 9724, 1980, 2]
// Exports: openExpressionPickerActionSheet

// Module 9723 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9724, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
