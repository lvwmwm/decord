// Module ID: 10200
// Function ID: 10201
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4448, 10201, 2008, 2]
// Exports: openExpressionPickerActionSheet

// Module 10200 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = set.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10201, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
