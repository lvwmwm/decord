// Module ID: 10374
// Function ID: 10375
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4445, 10375, 2008, 2]
// Exports: openExpressionPickerActionSheet

// Module 10374 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = set.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10375, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
