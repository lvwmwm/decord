// Module ID: 10580
// Function ID: 10581
// Name: useExpressionPickerInsets
// Dependencies: [19, 1074, 1612, 7258, 576, 2]
// Exports: default

// Module 10580 (useExpressionPickerInsets)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7258 */;
import noop from "module_19" /* 19 */;

const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { safeAreaStyle: null, safeAreaBottomKeyboardAware: null };
  const items = [bottom];
  obj.safeAreaStyle = noop.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + nativeDefault.space.PX_16;
  return obj;
};
