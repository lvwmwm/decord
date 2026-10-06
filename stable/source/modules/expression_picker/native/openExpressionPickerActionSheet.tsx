// Module ID: 9851
// Function ID: 9852
// Name: openExpressionPickerActionSheet
// Dependencies: [4801, 9852, 1987, 2]
// Exports: openExpressionPickerActionSheet

// Module 9851 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9852, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
