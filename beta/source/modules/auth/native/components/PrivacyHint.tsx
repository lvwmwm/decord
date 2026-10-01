// Module ID: 15607
// Function ID: 15608
// Name: PrivacyHint
// Dependencies: [19, 17, 6011, 15570, 1074, 21, 4836, 4832, 1115, 4548, 5929, 8053, 15608, 2]
// Exports: default

// Module 15607 (PrivacyHint)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import react_native from "react-native" /* 4548 */;
import Text_Text from "Text/Text" /* 4832 */;
import PromoEmailConsentStore from "PromoEmailConsentStore" /* 6011 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import PromotionalEmailCheckBoxDefault from "PromotionalEmailCheckBox" /* 15608 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let metroImportAll;
function PrivacyPolicyDescription(style) {
  let intl;
  let obj2;
  const obj = { style: style.style, variant: "text-xs/medium", color: "text-muted", children: intl.format(intl3.t["KI+BSb"], obj2) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  obj2 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  return metroImportAll(Text, obj);
}
function PrivacyPolicyCheckbox(onToggleConsent) {
  let asCheckbox;
  let consent;
  let intl;
  let intl2;
  let items;
  let obj6;
  let tmp7Result;
  let tmp9;
  ({ consent, asCheckbox } = onToggleConsent);
  onToggleConsent = onToggleConsent.onToggleConsent;
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = closure_10();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: consent });
  const obj2 = { style: asCheckbox ? tmp.checkbox : tmp.radio, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: intl.string(intl3.t.Y7Kgvf), onPress: onToggleConsent, hitSlop: { top: 11, bottom: 11, left: 11 }, children: items };
  intl = tmp2(1115).intl;
  const tmp5 = React4;
  const tmp6 = React3;
  if (asCheckbox) {
    const obj3 = { checked: consent };
    tmp7Result = tmp7(tmp2(5929).FormCheckbox, obj3);
    tmp9 = tmp7;
  } else {
    const obj4 = { selected: consent };
    tmp7Result = tmp7(tmp2(8053).FormRow.Radio, obj4);
    tmp9 = tmp7;
  }
  items = [tmp7Result, ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: intl2.format(intl3.t.qMDAP0, obj6) };
  const Text = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  obj6 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  items[1] = tmp9(Text, obj5);
  return tmp5(tmp6, obj2);
}
({ View: c3, Pressable: closure_4 } = react_native2);
const usePromoEmailConsentStore = PromoEmailConsentStore.usePromoEmailConsentStore;
const useRegistrationUIStore = RegistrationUIStore.useRegistrationUIStore;
const MarketingURLs = Constants.MarketingURLs;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ multiItem: { flexDirection: "column", gap: 16 }, checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, radio: { flexDirection: "row", alignItems: "center", gap: 8 }, checkboxLabel: { flex: 1 } });
const result = size.fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default function PrivacyHint(arg0) {
  let consent;
  let consentRequired;
  let items;
  let items1;
  let onToggleConsent;
  let tmp10;
  let tmp11Result;
  ({ consent, consentRequired, onToggleConsent } = arg0);
  const tmp = closure_10();
  const tmp2 = usePromoEmailConsentStore((required) => required.required);
  const tmp3 = useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) && tmp2;
  if (!consentRequired) {
    if (tmp3) {
      const obj = { style: tmp.multiItem, children: items };
      items = [metroImportAll(PromotionalEmailCheckBoxDefault, {}), metroImportAll(PrivacyPolicyDescription, {})];
      tmp10 = React4(_false, obj);
    }
    return tmp10;
  }
  if (consentRequired) {
    if (tmp3) {
      const obj2 = { style: tmp.multiItem, children: items1 };
      items1 = [metroImportAll(PromotionalEmailCheckBoxDefault, {}), ];
      const obj3 = { consent, onToggleConsent, asCheckbox: true };
      items1[1] = metroImportAll(PrivacyPolicyCheckbox, obj3);
      tmp11Result = React4(_false, obj2);
    }
    tmp10 = tmp11Result;
  }
  if (consentRequired) {
    const obj4 = { consent, onToggleConsent };
    tmp11Result = tmp11(PrivacyPolicyCheckbox, obj4);
  } else {
    tmp11Result = tmp11(PrivacyPolicyDescription, {});
  }
};
