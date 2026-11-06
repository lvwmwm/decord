// Module ID: 10370
// Function ID: 10371
// Name: openExpressionPickerActionSheet
// Dependencies: [5404, 10371, 2118, 2]
// Exports: openExpressionPickerActionSheet

// Module 10370 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10371, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
