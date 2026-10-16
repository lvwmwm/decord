// Module ID: 9961
// Function ID: 9962
// Name: openExpressionPickerActionSheet
// Dependencies: [5118, 9962, 2002, 2]
// Exports: openExpressionPickerActionSheet

// Module 9961 (openExpressionPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9962, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
