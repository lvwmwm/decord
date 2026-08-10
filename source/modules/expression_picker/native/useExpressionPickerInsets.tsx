// Module ID: 9931
// Function ID: 9932
// Name: useExpressionPickerInsets
// Dependencies: [19, 676, 1609, 5369, 712, 2]
// Exports: default

// Module 9931 (useExpressionPickerInsets)
import noop from "noop";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";

const result = require("useSafeAreaInsets").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let bottom;
  bottom = bottom(1609)().bottom;
  const obj = { safeAreaStyle: null, safeAreaBottomKeyboardAware: null };
  const items = [bottom];
  obj[0] = React.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(5369)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj[1] = sum + bottom(712).space.PX_16;
  return obj;
};
