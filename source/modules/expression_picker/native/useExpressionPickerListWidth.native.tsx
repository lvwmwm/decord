// Module ID: 9140
// Function ID: 9141
// Name: useExpressionPickerListWidth
// Dependencies: [1337, 5631, 1492, 1627, 2]
// Exports: default

// Module 9140 (useExpressionPickerListWidth)
import set from "set" /* 2 */;
import ExpressionPickerViewType from "ExpressionPickerViewType" /* 1337 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5631 */;

const PADDING_HORIZONTAL = ExpressionPickerViewType.PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_MAX_WIDTH;
const result = set.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default function useExpressionPickerListWidth(arg0) {
  const rect = useSafeAreaInsetsDefault();
  const diff = useWindowDimensionsDefault().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
