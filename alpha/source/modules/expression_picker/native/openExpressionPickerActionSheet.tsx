// Module ID: 10418
// Function ID: 10419
// Name: openExpressionPickerActionSheet
// Dependencies: [5384, 10419, 2123, 2]
// Exports: openExpressionPickerActionSheet

// Module 10418 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10419, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
