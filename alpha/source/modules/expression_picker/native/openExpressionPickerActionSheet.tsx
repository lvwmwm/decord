// Module ID: 10364
// Function ID: 10365
// Name: openExpressionPickerActionSheet
// Dependencies: [5381, 10365, 2123, 2]
// Exports: openExpressionPickerActionSheet

// Module 10364 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10365, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
