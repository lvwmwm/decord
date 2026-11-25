// Module ID: 10752
// Function ID: 10753
// Name: openExpressionPickerActionSheet
// Dependencies: [5226, 10753, 2119, 2]
// Exports: openExpressionPickerActionSheet

// Module 10752 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10753, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
}
