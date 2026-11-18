// Module ID: 11229
// Function ID: 11230
// Name: openExpressionPickerActionSheet
// Dependencies: [5037, 11230, 2121, 2]
// Exports: openExpressionPickerActionSheet

// Module 11229 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11230, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
