// Module ID: 17442
// Function ID: 17443
// Name: PromotionalEmailCheckBox
// Dependencies: [19, 17, 6670, 21, 4972, 558, 576, 5040, 1125, 6903, 5235, 2]

// Module 17442 (PromotionalEmailCheckBox)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PromoEmailConsentStore from "PromoEmailConsentStore" /* 6670 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: c2, Pressable: c3 } = react_native);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, checkboxLabel: { flex: 1 } });
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PromotionalEmailCheckBox(style) {
  let accessibilityRole;
  let accessibilityState;
  let closure_0;
  let first;
  let items;
  let tmp10;
  let tmp12;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(21);
  style = style.style;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(required) {
      return required.required;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_4;
  const tmp7 = closure_4(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(checked) {
      return checked.checked;
    };
    cResult[1] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp6Result = tmp6(tmp8);
  _require = tmp6Result;
  if (cResult[2] !== tmp6Result) {
    const obj2 = { checked: tmp6Result };
    cResult[2] = tmp6Result;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult = require("react-native");
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp10);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(require("intl").t.ylFCLt);
    cResult[4] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  let tmp14 = null;
  if (tmp7) {
    let tmp15;
    let tmp16;
    let tmp19;
    if (cResult[5] !== tmp6Result) {
      const fn3 = function w() {
        return hasOwnProperty(!closure_0);
      };
      cResult[5] = tmp6Result;
      cResult[6] = fn3;
      tmp15 = fn3;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] !== tmp6Result) {
      const obj3 = { checked: tmp6Result };
      const tmp18 = closure_6(require("FormCheckbox").FormCheckbox, obj3);
      cResult[7] = tmp6Result;
      cResult[8] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] !== tmp4.checkboxLabel) {
      const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.checkboxLabel, children: tmp12 };
      const tmp21 = closure_6(require("Text/Text").Text, obj4);
      cResult[9] = tmp4.checkboxLabel;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] === accessibilityRole) {
      if (cResult[12] === accessibilityState) {
        if (cResult[13] === tmp4.checkboxRow) {
          if (cResult[14] === tmp15) {
            if (cResult[15] === tmp16) {
              let tmp22;
              if (cResult[16] === tmp19) {
                tmp22 = cResult[17];
              }
              if (cResult[18] === style) {
                let tmp26;
                if (cResult[19] === tmp22) {
                  tmp26 = cResult[20];
                }
                tmp14 = tmp26;
              }
              const obj5 = { style, children: tmp22 };
              const tmp29 = closure_6(closure_2, obj5);
              cResult[18] = style;
              cResult[19] = tmp22;
              cResult[20] = tmp29;
              tmp26 = tmp29;
            }
          }
        }
      }
    }
    const obj6 = { accessibilityRole, accessibilityLabel: tmp12, accessibilityState, onPress: tmp15, style: tmp4.checkboxRow, children: items };
    items = [tmp16, tmp19];
    const tmp25 = closure_7(closure_3, obj6);
    cResult[11] = accessibilityRole;
    cResult[12] = accessibilityState;
    cResult[13] = tmp4.checkboxRow;
    cResult[14] = tmp15;
    cResult[15] = tmp16;
    cResult[16] = tmp19;
    cResult[17] = tmp25;
    tmp22 = tmp25;
  }
  return tmp14;
}) : (function PromotionalEmailCheckBox(style) {
  let accessibilityRole;
  let accessibilityState;
  let closure_0;
  let items;
  let obj3;
  style = style.style;
  const tmp = closure_8();
  const tmp2 = closure_4((required) => required.required);
  const tmp3 = closure_4((checked) => checked.checked);
  _require = tmp3;
  const obj = require("react-native");
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.ylFCLt);
  let tmp8 = null;
  if (tmp2) {
    const obj2 = { style, children: closure_7(closure_3, obj3) };
    obj3 = {
      accessibilityRole,
      accessibilityLabel: stringResult,
      accessibilityState,
      onPress() {
          return hasOwnProperty(!closure_0);
        },
      style: tmp.checkboxRow,
      children: items
    };
    const obj4 = { checked: tmp3 };
    items = [closure_6(require("FormCheckbox").FormCheckbox, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: stringResult };
    items[1] = closure_6(require("Text/Text").Text, obj5);
    tmp8 = closure_6(closure_2, obj2);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default tmp6;
