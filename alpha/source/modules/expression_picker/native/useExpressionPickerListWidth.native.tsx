// Module ID: 9427
// Function ID: 9428
// Name: useExpressionPickerListWidth
// Dependencies: [1241, 6837, 558, 1497, 1631, 2]

// Module 9427 (useExpressionPickerListWidth)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1241 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6837 */;
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
