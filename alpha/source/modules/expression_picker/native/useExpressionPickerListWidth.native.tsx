// Module ID: 9389
// Function ID: 9390
// Name: useExpressionPickerListWidth
// Dependencies: [1241, 6830, 558, 1496, 1630, 2]

// Module 9389 (useExpressionPickerListWidth)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1241 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PADDING_HORIZONTAL = ExpressionPickerConstants.PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExpressionPickerListWidth(arg0) {
  const width = useWindowDimensionsDefault().width;
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}) : (function useExpressionPickerListWidth(arg0) {
  const width = useWindowDimensionsDefault().width;
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
});
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default tmp2;
