// Module ID: 11274
// Function ID: 11275
// Name: openExpressionPickerActionSheet
// Dependencies: [5127, 11275, 2119, 2]
// Exports: openExpressionPickerActionSheet

// Module 11274 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11275, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
