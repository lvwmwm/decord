// Module ID: 10653
// Function ID: 10654
// Name: openExpressionPickerActionSheet
// Dependencies: [5131, 10654, 2119, 2]
// Exports: openExpressionPickerActionSheet

// Module 10653 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10654, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
