// Module ID: 10648
// Function ID: 10649
// Name: openExpressionPickerActionSheet
// Dependencies: [4725, 10649, 1984, 2]
// Exports: openExpressionPickerActionSheet

// Module 10648 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10649, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
