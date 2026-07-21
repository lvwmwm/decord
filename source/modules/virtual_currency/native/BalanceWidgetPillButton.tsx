// Module ID: 9789
// Function ID: 76063
// Name: BalanceWidgetPillButton
// Dependencies: []

// Module 9789 (BalanceWidgetPillButton)
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
    obj.icon = importDefault(dependencyMap[3]);
    obj.accessible = flag;
    obj.accessibilityElementsHidden = !flag;
    str2 = "no";
    if (flag) {
      str2 = "auto";
    }
    obj.importantForAccessibility = str2;
    tmp4 = arg1;
    tmp5 = dependencyMap;
    intl = arg1(dependencyMap[4]).intl;
    if (tmp) {
      stringResult = intl.string(tmp4(tmp5[4]).t.y0WGqP);
    } else {
      obj = {};
      obj.balance = balance.toString();
      stringResult = intl.formatToPlainString(tmp4(tmp5[4]).t.zPaLL9, obj);
    }
    obj.accessibilityLabel = stringResult;
    obj.disabled = tmp;
    obj.loading = tmp;
    return tmp2(arg1(dependencyMap[2]).Button, obj);
  }
}
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };
