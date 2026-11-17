// Module ID: 11947
// Function ID: 11948
// Name: openExpressionPickerActionSheet
// Dependencies: [5546, 11948, 2121, 2]
// Exports: openExpressionPickerActionSheet

// Module 11947 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11948, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
