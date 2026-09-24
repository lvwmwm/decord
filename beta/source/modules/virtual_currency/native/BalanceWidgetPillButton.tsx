// Module ID: 11521
// Function ID: 11522
// Name: BalanceWidgetPillButton
// Dependencies: [19, 21, 558, 568, 1119, 5220, 9147, 2]

// Module 11521 (BalanceWidgetPillButton)
import c from "c" /* 568 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import _modDef9147 from "module_9147" /* 9147 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ balance, onPress, variant, accessible } = arg0);
  let str = "tertiary";
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] !== balance) {
    let str2;
    if (balance != null) {
      str2 = balance.toString();
    }
    if (str2 == null) {
      str2 = "";
    }
    cResult[0] = balance;
    cResult[1] = str2;
    let tmp5 = str2;
  } else {
    tmp5 = cResult[1];
  }
  let str3 = "no";
  if (undefined === accessible || accessible) {
    str3 = "auto";
  }
  if (cResult[2] === balance) {
    if (cResult[3] === tmp8) {
      if (cResult[5] === tmp4) {
        if (cResult[6] === tmp8) {
          if (cResult[7] === onPress) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp7) {
                if (cResult[10] === str3) {
                  if (cResult[11] === tmp9) {
                    if (cResult[12] === str) {
                      let tmp11 = cResult[13];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = { variant: str, onPress, size: "sm", text: tmp5, icon: _modDef9147, accessible: tmp4, accessibilityElementsHidden: tmp7, importantForAccessibility: str3, accessibilityLabel: cResult[4], disabled: tmp8, loading: tmp8 };
      const tmp14 = jsx(tmp(5220).Button, { variant: str, onPress, size: "sm", text: tmp5, icon: _modDef9147, accessible: tmp4, accessibilityElementsHidden: tmp7, importantForAccessibility: str3, accessibilityLabel: cResult[4], disabled: tmp8, loading: tmp8 });
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      cResult[7] = onPress;
      cResult[8] = tmp5;
      cResult[9] = tmp7;
      cResult[10] = str3;
      cResult[11] = cResult[4];
      cResult[12] = str;
      cResult[13] = tmp14;
      tmp11 = tmp14;
    }
  }
  const intl = tmp(1119).intl;
  if (null === balance) {
    let stringResult = intl.string(tmp(1119).t.y0WGqP);
  } else {
    const obj3 = { balance: balance.toString() };
    stringResult = intl.formatToPlainString(tmp(1119).t.zPaLL9, obj3);
  }
  cResult[2] = balance;
  cResult[3] = null === balance;
  cResult[4] = stringResult;
}) : ((accessible) => {
  ({ balance, variant } = accessible);
  if (variant === undefined) {
    variant = "tertiary";
  }
  let flag = accessible.accessible;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { variant, onPress: accessible.onPress, size: "sm", text: null, icon: null, accessible: null, accessibilityElementsHidden: null, importantForAccessibility: null, accessibilityLabel: null, disabled: null, loading: null };
  let str;
  if (balance != null) {
    str = balance.toString();
  }
  if (str == null) {
    str = "";
  }
  obj.text = str;
  obj.icon = _modDef9147;
  obj.accessible = flag;
  obj.accessibilityElementsHidden = !flag;
  let str2 = "no";
  if (flag) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  const intl = tmp2(1119).intl;
  if (null === balance) {
    let stringResult = intl.string(tmp2(1119).t.y0WGqP);
  } else {
    const obj2 = { balance: balance.toString() };
    stringResult = intl.formatToPlainString(tmp2(1119).t.zPaLL9, obj2);
  }
  obj.accessibilityLabel = stringResult;
  obj.disabled = null === balance;
  obj.loading = null === balance;
  return jsx(components_Button_Button.Button, { variant, onPress: accessible.onPress, size: "sm", text: null, icon: null, accessible: null, accessibilityElementsHidden: null, importantForAccessibility: null, accessibilityLabel: null, disabled: null, loading: null });
});
tmp3.displayName = "BalanceWidgetPillButton";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default tmp3;
export const BalanceWidgetPillButton = tmp3;
