// Module ID: 9797
// Function ID: 76117
// Name: BalanceWidgetPillButton
// Dependencies: [31, 33, 4543, 8709, 1212, 2]

// Module 9797 (BalanceWidgetPillButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
class BalanceWidgetPillButton {
  constructor(arg0) {
    ({ balance, variant } = global);
    if (variant === undefined) {
      variant = "tertiary";
    }
    flag = global.accessible;
    if (flag === undefined) {
      flag = true;
    }
    tmp = null === balance;
    tmp2 = jsx;
    obj = {};
    obj.variant = variant;
    obj.onPress = global.onPress;
    obj.size = "sm";
    str = undefined;
    if (null != balance) {
      str = balance.toString();
    }
    str = "";
    if (null != str) {
    }
    obj.text = str;
    obj.icon = require("registerAsset");
    obj.accessible = flag;
    obj.accessibilityElementsHidden = !flag;
    str2 = "no";
    if (flag) {
      str2 = "auto";
    }
    obj.importantForAccessibility = str2;
    tmp4 = closure_0;
    tmp5 = closure_2;
    intl = require("getSystemLocale").intl;
    if (tmp) {
      stringResult = intl.string(require("getSystemLocale").t.y0WGqP);
    } else {
      obj = {};
      obj.balance = balance.toString();
      stringResult = intl.formatToPlainString(require("getSystemLocale").t.zPaLL9, obj);
    }
    obj.accessibilityLabel = stringResult;
    obj.disabled = tmp;
    obj.loading = tmp;
    return tmp2(require("Button").Button, obj);
  }
}
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const result = require("Button").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };
