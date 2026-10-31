// Module ID: 14497
// Function ID: 14498
// Name: BalanceWidgetPillButton
// Dependencies: [19, 17, 21, 5014, 5634, 9533, 1113, 9491, 2]

// Module 14497 (BalanceWidgetPillButton)
import react_native from "react-native" /* 17 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import IndicatorDot from "IndicatorDot" /* 9491 */;
import AssetRegistryDefault from "AssetRegistry" /* 9533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
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
    let flag2 = onPress.showNotificationBadge;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const obj = { variant, onPress, size: "sm", text: str, icon: AssetRegistryDefault, accessible: flag, accessibilityElementsHidden: !flag, importantForAccessibility: str2, accessibilityLabel: stringResult, disabled: null === balance, loading: null === balance };
    str = undefined;
    const tmp = closure_6();
    const Button = components_Button_Button.Button;
    const tmp2 = hasOwnProperty;
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
    const intl = tmp5(1113).intl;
    if (null === balance) {
      stringResult = intl.string(tmp5(1113).t.y0WGqP);
    } else {
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { balance: balance.toString() };
      const zPaLL9 = tmp5(1113).t.zPaLL9;
      stringResult = formatToPlainString(zPaLL9, obj2);
    }
    const children = [React3(Button, obj), ];
    if (flag2) {
      const obj3 = { style: tmp.notificationBadge, children: React3(IndicatorDot.IndicatorDot, { cutout: "base-lower" }) };
      flag2 = tmp4(tmp3, obj3);
    }
    children[1] = flag2;
    return tmp2(View, { children });
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createStyles({ notificationBadge: { position: "absolute", top: 0, end: 0 } });
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };
