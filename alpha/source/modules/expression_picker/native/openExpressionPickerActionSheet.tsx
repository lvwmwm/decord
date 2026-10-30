// Module ID: 10214
// Function ID: 10215
// Name: openExpressionPickerActionSheet
// Dependencies: [5253, 10215, 1995, 2]
// Exports: openExpressionPickerActionSheet

// Module 10214 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10215, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
