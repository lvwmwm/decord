// Module ID: 10412
// Function ID: 10413
// Name: openExpressionPickerActionSheet
// Dependencies: [5382, 10413, 2123, 2]
// Exports: openExpressionPickerActionSheet

// Module 10412 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10413, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
