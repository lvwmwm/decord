// Module ID: 8597
// Function ID: 8598
// Name: useExpressionPickerListWidth
// Dependencies: [1338, 5339, 1474, 1581, 2]
// Exports: default

// Module 8597 (useExpressionPickerListWidth)
import { PADDING_HORIZONTAL } from "ExpressionPickerViewType";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("useWindowDimensions").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default function useExpressionPickerListWidth(arg0) {
  const rect = importDefault(1581)();
  const diff = importDefault(1474)().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
