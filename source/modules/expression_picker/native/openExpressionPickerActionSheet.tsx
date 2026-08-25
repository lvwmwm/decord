// Module ID: 10075
// Function ID: 10076
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4347, 10076, 2009, 2]
// Exports: openExpressionPickerActionSheet

// Module 10075 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = set.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10076, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
