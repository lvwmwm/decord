// Module ID: 10191
// Function ID: 10192
// Name: useExpressionPickerInsets
// Dependencies: [19, 676, 1629, 5441, 712, 2]
// Exports: default

// Module 10191 (useExpressionPickerInsets)
import noop from "noop";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";

const result = require("useSafeAreaInsets").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let bottom;
  bottom = bottom(1629)().bottom;
  const obj = { safeAreaStyle: null, safeAreaBottomKeyboardAware: null };
  const items = [bottom];
  obj[0] = React.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(5441)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj[1] = sum + bottom(712).space.PX_16;
  return obj;
};
