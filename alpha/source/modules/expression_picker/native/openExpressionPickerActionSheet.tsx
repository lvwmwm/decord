// Module ID: 10124
// Function ID: 10125
// Name: openExpressionPickerActionSheet
// Dependencies: [5211, 10125, 1999, 2]
// Exports: openExpressionPickerActionSheet

// Module 10124 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10125, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
