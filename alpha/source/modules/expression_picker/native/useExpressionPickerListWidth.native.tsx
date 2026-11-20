// Module ID: 11162
// Function ID: 11163
// Name: useExpressionPickerListWidth
// Dependencies: [1227, 5023, 1494, 1628, 2]
// Exports: default

// Module 11162 (useExpressionPickerListWidth)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1227 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5023 */;
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
