// Module ID: 10099
// Function ID: 10100
// Name: openExpressionPickerActionSheet
// Dependencies: [5196, 10100, 2002, 2]
// Exports: openExpressionPickerActionSheet

// Module 10099 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10100, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
