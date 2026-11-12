// Module ID: 10385
// Function ID: 10386
// Name: openExpressionPickerActionSheet
// Dependencies: [5406, 10386, 2118, 2]
// Exports: openExpressionPickerActionSheet

// Module 10385 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10386, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
