// Module ID: 10240
// Function ID: 10241
// Name: useExpressionPickerInsets
// Dependencies: [19, 1072, 1625, 5607, 575, 2]
// Exports: default

// Module 10240 (useExpressionPickerInsets)
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5607 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeDefault = tmp(575);
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
