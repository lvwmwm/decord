// Module ID: 9572
// Function ID: 74558
// Name: useExpressionPickerInsets
// Dependencies: [31, 653, 1557, 5160, 689, 2]
// Exports: default

// Module 9572 (useExpressionPickerInsets)
import result from "result";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";

const result = require("useSafeAreaInsets").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  bottom = bottom(1557)().bottom;
  const obj = {};
  const items = [bottom];
  obj.safeAreaStyle = React.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(5160)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + bottom(689).space.PX_16;
  return obj;
};
