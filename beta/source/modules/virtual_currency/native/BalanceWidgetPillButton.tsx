// Module ID: 10563
// Function ID: 10564
// Name: BalanceWidgetPillButton
// Dependencies: [19, 21, 5281, 8299, 1115, 2]

// Module 10563 (BalanceWidgetPillButton)
import Fragment from "Fragment" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AssetRegistryDefault from "AssetRegistry" /* 8299 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class BalanceWidgetPillButton {
  constructor(onPress) {
    let balance;
    let str;
    let str2;
    let stringResult;
    let variant;
    ({ balance, variant } = onPress);
    onPress = onPress.onPress;
    if (variant === undefined) {
      variant = "tertiary";
    }
    let flag = onPress.accessible;
    if (flag === undefined) {
      flag = true;
    }
    const obj = { variant, onPress, size: "sm", text: str, icon: AssetRegistryDefault, accessible: flag, accessibilityElementsHidden: !flag, importantForAccessibility: str2, accessibilityLabel: stringResult, disabled: null === balance, loading: null === balance };
    str = undefined;
    const Button = components_Button_Button.Button;
    const tmp = jsx;
    if (balance != null) {
      str = balance.toString();
    }
    if (str == null) {
      str = "";
    }
    str2 = "no";
    if (flag) {
      str2 = "auto";
    }
    const intl = tmp2(1115).intl;
    if (null === balance) {
      stringResult = intl.string(tmp2(1115).t.y0WGqP);
    } else {
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { balance: balance.toString() };
      const zPaLL9 = tmp2(1115).t.zPaLL9;
      stringResult = formatToPlainString(zPaLL9, obj2);
    }
    return tmp(Button, obj);
  }
}
const jsx = Fragment.jsx;
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };
