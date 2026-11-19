// Module ID: 11207
// Function ID: 11208
// Name: openExpressionPickerActionSheet
// Dependencies: [5006, 11208, 2121, 2]
// Exports: openExpressionPickerActionSheet

// Module 11207 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11208, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
