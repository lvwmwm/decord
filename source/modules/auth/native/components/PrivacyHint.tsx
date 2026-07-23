// Module ID: 14769
// Function ID: 112654
// Name: PrivacyPolicyDescription
// Dependencies: [31, 27, 5591, 14731, 653, 33, 4130, 5459, 1212, 3848, 7497, 7495, 14770, 2]
// Exports: default

// Module 14769 (PrivacyPolicyDescription)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { usePromoEmailConsentStore } from "setPromoEmailConsentState";
import { useRegistrationUIStore } from "useRegistrationUIStore";
import { MarketingURLs } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_8;
let closure_9;
const require = arg1;
function PrivacyPolicyDescription(style) {
  let obj = { style: style.style, variant: "text-xs/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t["KI+BSb"], obj);
  return callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
}
function PrivacyPolicyCheckbox(onToggleConsent) {
  let asCheckbox;
  let consent;
  ({ consent, asCheckbox } = onToggleConsent);
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = callback3();
  let obj = require(3848) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: consent });
  obj = { style: asCheckbox ? tmp.checkbox : tmp.radio, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityRole: checkboxA11yNative.accessibilityRole };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.Y7Kgvf);
  obj.onPress = onToggleConsent.onToggleConsent;
  obj.hitSlop = { top: 11, bottom: 11, left: 11 };
  if (asCheckbox) {
    obj = { checked: consent };
    let tmp5Result = tmp5(tmp6(7497).FormCheckbox, obj);
  } else {
    const obj1 = { selected: consent };
    tmp5Result = tmp5(tmp6(7495).FormRow.Radio, obj1);
  }
  const items = [tmp5Result, ];
  const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.qMDAP0, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  items[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj2);
  obj.children = items;
  return closure_9(closure_4, obj);
}
({ View: closure_3, Pressable: closure_4 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ multiItem: { flexDirection: "column", gap: 16 }, checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, radio: { flexDirection: "row", alignItems: "center", gap: 8 }, checkboxLabel: { flex: 1 } });
const result = require("setPromoEmailConsentState").fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default function PrivacyHint(arg0) {
  let consent;
  let consentRequired;
  let onToggleConsent;
  ({ consent, consentRequired, onToggleConsent } = arg0);
  let items1 = callback3();
  const tmp2 = useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) && usePromoEmailConsentStore((required) => required.required);
  if (!consentRequired) {
    if (tmp2) {
      let obj = { style: items1.multiItem };
      const items = [callback(importDefault(14770), {}), callback(PrivacyPolicyDescription, {})];
      obj.children = items;
      return callback2(closure_3, obj);
    }
  }
  if (!consentRequired) {
    if (consentRequired) {
      obj = { consent, onToggleConsent };
      let tmp10Result = tmp10(PrivacyPolicyCheckbox, obj);
    } else {
      tmp10Result = tmp10(PrivacyPolicyDescription, {});
    }
  }
  obj = { style: items1.multiItem };
  items1 = [callback(importDefault(14770), {}), ];
  const obj1 = { consent, onToggleConsent };
  onToggleConsent = true;
  obj1.asCheckbox = true;
  items1[1] = callback(PrivacyPolicyCheckbox, obj1);
  obj.children = items1;
  tmp10Result = callback2(closure_3, obj);
};
