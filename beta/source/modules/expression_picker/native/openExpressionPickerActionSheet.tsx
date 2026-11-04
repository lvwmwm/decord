// Module ID: 10234
// Function ID: 10235
// Name: openExpressionPickerActionSheet
// Dependencies: [5258, 10235, 1994, 2]
// Exports: openExpressionPickerActionSheet

// Module 10234 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10235, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
