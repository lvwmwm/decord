// Module ID: 9725
// Function ID: 9726
// Name: openExpressionPickerActionSheet
// Dependencies: [5056, 9726, 2000, 2]
// Exports: openExpressionPickerActionSheet

// Module 9725 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9726, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
