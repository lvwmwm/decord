// Module ID: 11287
// Function ID: 11288
// Name: useExpressionPickerListWidth
// Dependencies: [1227, 5142, 1494, 1628, 2]
// Exports: default

// Module 11287 (useExpressionPickerListWidth)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1227 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5142 */;
import size from "module_2" /* 2 */;

const PADDING_HORIZONTAL = ExpressionPickerConstants.PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default function useExpressionPickerListWidth(arg0) {
  const width = useWindowDimensionsDefault().width;
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
