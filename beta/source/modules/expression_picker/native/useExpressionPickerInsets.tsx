// Module ID: 9746
// Function ID: 9747
// Name: useExpressionPickerInsets
// Dependencies: [19, 1074, 1613, 6402, 576, 2]
// Exports: default

// Module 9746 (useExpressionPickerInsets)
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeDefault = tmp(576);
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let items;
  let sum;
  hasCategories = hasCategories.hasCategories;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { safeAreaStyle: react.useMemo(() => ({ paddingBottom: bottom }), items), safeAreaBottomKeyboardAware: sum + nativeDefault.space.PX_16 };
  items = [bottom];
  const bottom2 = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom;
  let num = 0;
  if (hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  sum = bottom2 + num;
  return obj;
};
