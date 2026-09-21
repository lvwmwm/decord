// Module ID: 16319
// Function ID: 16320
// Name: PromotionalEmailCheckBox
// Dependencies: [19, 17, 6833, 21, 4758, 558, 568, 4479, 1119, 5820, 4754, 2]

// Module 16319 (PromotionalEmailCheckBox)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const PromoEmailConsentStore = fn(6833);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let closure_8 = createStyles.createStyles({ checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, checkboxLabel: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(22);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(required) {
      return required.required;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  const tmp6 = closure_4;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f(checked) {
      return checked.checked;
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp6Result = tmp6(tmp8);
  _require = tmp6Result;
  if (cResult[2] !== tmp6Result) {
    const obj2 = { checked: tmp6Result };
    cResult[2] = tmp6Result;
    cResult[3] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  const tmp7 = closure_4(first);
  const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative(tmp10);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (tmp7) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.ylFCLt);
      cResult[4] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp6Result) {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
      cResult[5] = tmp6Result;
      cResult[6] = R;
    } else {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
    }
    if (cResult[7] !== tmp6Result) {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
      const obj3 = { checked: tmp6Result };
      const tmp16 = closure_6(tmp(5820).FormCheckbox, obj3);
      cResult[7] = tmp6Result;
      cResult[8] = tmp16;
    } else {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
      const stringResult1 = obj5.string(tmp(1119).t.ylFCLt);
      cResult[9] = stringResult1;
      const tmp17 = stringResult1;
    } else {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
    }
    if (cResult[10] !== tmp4.checkboxLabel) {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
      const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.checkboxLabel, children: tmp17 };
      const tmp20 = closure_6(tmp(4754).Text, obj4);
      cResult[10] = tmp4.checkboxLabel;
      cResult[11] = tmp20;
    } else {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
    }
    if (cResult[12] === accessibilityRole) {
      class R {
        constructor() {
          return closure_5(!closure_0);
        }
      }
    }
    const obj6 = { accessibilityRole, accessibilityLabel: tmp12, accessibilityState, onPress: tmp14, style: tmp4.checkboxRow, children: null };
    const items = [tmp15, tmp19];
    obj6.children = items;
    const tmp24 = closure_7(closure_3, obj6);
    cResult[12] = accessibilityRole;
    cResult[13] = accessibilityState;
    cResult[14] = tmp4.checkboxRow;
    cResult[15] = tmp19;
    cResult[16] = tmp14;
    cResult[17] = tmp15;
    cResult[18] = tmp24;
  } else {
    class R {
      constructor() {
        return closure_5(!closure_0);
      }
    }
    return null;
  }
}) : ((style) => {
  const tmp = closure_8();
  const tmp3 = closure_4((checked) => checked.checked);
  _require = tmp3;
  const tmp2 = closure_4((required) => required.required);
  const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative({ checked: tmp3 });
  let tmp9 = null;
  if (tmp2) {
    const obj2 = { style: style.style, children: null };
    const obj3 = { accessibilityRole: tmp7, accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
    const intl = tmp4(1119).intl;
    obj3.accessibilityLabel = intl.string(tmp4(1119).t.ylFCLt);
    obj3.accessibilityState = tmp8;
    obj3.onPress = function onPress() {
      return hasOwnProperty(!closure_0);
    };
    obj3.style = tmp.checkboxRow;
    const obj4 = { checked: tmp3 };
    const items = [closure_6(tmp4(5820).FormCheckbox, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
    const intl2 = tmp4(1119).intl;
    obj5.children = intl2.string(tmp4(1119).t.ylFCLt);
    items[1] = closure_6(tmp4(4754).Text, obj5);
    obj3.children = items;
    obj2.children = closure_7(closure_3, obj3);
    tmp9 = closure_6(closure_2, obj2);
  }
  return tmp9;
});
