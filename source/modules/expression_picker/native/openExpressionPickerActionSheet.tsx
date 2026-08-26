// Module ID: 10142
// Function ID: 10143
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4411, 10143, 2009, 2]
// Exports: openExpressionPickerActionSheet

// Module 10142 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = set.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10143, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
