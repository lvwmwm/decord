// Module ID: 10121
// Function ID: 10122
// Name: openExpressionPickerActionSheet
// Dependencies: [5208, 10122, 2002, 2]
// Exports: openExpressionPickerActionSheet

// Module 10121 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10122, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
