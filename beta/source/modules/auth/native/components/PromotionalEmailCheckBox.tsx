// Module ID: 15608
// Function ID: 15609
// Name: PromotionalEmailCheckBox
// Dependencies: [19, 17, 6011, 21, 4836, 4548, 15609, 1115, 5929, 4832, 2]
// Exports: default

// Module 15608 (PromotionalEmailCheckBox)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PromoEmailConsentStore from "PromoEmailConsentStore" /* 6011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default function PromotionalEmailCheckBox(style) {
  let accessibilityRole;
  let accessibilityState;
  let closure_0;
  let items;
  let obj4;
  style = style.style;
  const tmp = closure_8();
  const tmp2 = closure_4((required) => required.required);
  const tmp3 = closure_4((checked) => checked.checked);
  _require = tmp3;
  const obj = require("react-native");
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = require("usePromoEmailOptInLabel");
  const promoEmailOptInLabel = obj2.usePromoEmailOptInLabel(require("intl").t.ylFCLt, "REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE");
  let tmp8 = null;
  if (tmp2) {
    const obj3 = { style, children: closure_7(closure_3, obj4) };
    obj4 = {
      accessibilityRole,
      accessibilityLabel: promoEmailOptInLabel,
      accessibilityState,
      onPress() {
          return hasOwnProperty(!closure_0);
        },
      style: tmp.checkboxRow,
      children: items
    };
    const obj5 = { checked: tmp3 };
    items = [closure_6(require("FormCheckbox").FormCheckbox, obj5), ];
    const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: promoEmailOptInLabel };
    items[1] = closure_6(require("Text/Text").Text, obj6);
    tmp8 = closure_6(closure_2, obj3);
  }
  return tmp8;
};
