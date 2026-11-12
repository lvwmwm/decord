// Module ID: 11175
// Function ID: 11176
// Name: openExpressionPickerActionSheet
// Dependencies: [5489, 11176, 2118, 2]
// Exports: openExpressionPickerActionSheet

// Module 11175 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11176, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
