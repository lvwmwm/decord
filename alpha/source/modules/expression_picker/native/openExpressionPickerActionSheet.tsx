// Module ID: 11181
// Function ID: 11182
// Name: openExpressionPickerActionSheet
// Dependencies: [5489, 11182, 2118, 2]
// Exports: openExpressionPickerActionSheet

// Module 11181 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11182, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
