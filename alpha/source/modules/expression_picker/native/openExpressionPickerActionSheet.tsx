// Module ID: 10156
// Function ID: 10157
// Name: openExpressionPickerActionSheet
// Dependencies: [5246, 10157, 1999, 2]
// Exports: openExpressionPickerActionSheet

// Module 10156 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10157, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
