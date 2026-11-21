// Module ID: 11269
// Function ID: 11270
// Name: openExpressionPickerActionSheet
// Dependencies: [5127, 11270, 2119, 2]
// Exports: openExpressionPickerActionSheet

// Module 11269 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11270, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
