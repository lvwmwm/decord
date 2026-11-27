// Module ID: 10799
// Function ID: 10800
// Name: openExpressionPickerActionSheet
// Dependencies: [5257, 10800, 2120, 2]
// Exports: openExpressionPickerActionSheet

// Module 10799 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10800, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
