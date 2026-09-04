// Module ID: 10212
// Function ID: 10213
// Name: useExpressionPickerInsets
// Dependencies: [19, 673, 1627, 6921, 709, 2]
// Exports: default

// Module 10212 (useExpressionPickerInsets)
import closure_2 from "noop" /* 19 */;
import { EXPRESSION_FOOTER_HEIGHT } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let bottom;
  bottom = bottom(1627)().bottom;
  const obj = { safeAreaStyle: React.useMemo(() => ({ paddingBottom: bottom }), items), safeAreaBottomKeyboardAware: null };
  items = [bottom];
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(6921)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj[1] = sum + bottom(709).space.PX_16;
  return obj;
};
