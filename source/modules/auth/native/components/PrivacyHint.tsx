// Module ID: 14643
// Function ID: 110415
// Name: PrivacyPolicyDescription
// Dependencies: []
// Exports: default

// Module 14643 (PrivacyPolicyDescription)
function PrivacyPolicyDescription(style) {
  let obj = { style: style.style };
  const intl = arg1(dependencyMap[8]).intl;
  obj = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  obj.children = intl.format(arg1(dependencyMap[8]).t.KI+BSb, obj);
  return callback(arg1(dependencyMap[7]).TextWithIOSLinkWorkaround, obj);
}
function PrivacyPolicyCheckbox(onToggleConsent) {
  let asCheckbox;
  let consent;
  ({ consent, asCheckbox } = onToggleConsent);
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: consent });
  obj = { style: asCheckbox ? tmp.checkbox : tmp.radio, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityRole: checkboxA11yNative.accessibilityRole };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.Y7Kgvf);
  obj.onPress = onToggleConsent.onToggleConsent;
  obj.hitSlop = {};
  if (asCheckbox) {
    obj = { checked: consent };
    let tmp5Result = tmp5(tmp6(tmp7[10]).FormCheckbox, obj);
  } else {
    const obj1 = { selected: consent };
    tmp5Result = tmp5(tmp6(tmp7[11]).FormRow.Radio, obj1);
  }
  const items = [tmp5Result, ];
  const obj2 = { style: tmp.checkboxLabel };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[8]).t.qMDAP0, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  items[1] = callback(arg1(dependencyMap[7]).TextWithIOSLinkWorkaround, obj2);
  obj.children = items;
  return closure_9(closure_4, obj);
}
importAll(dependencyMap[0]);
({ View: closure_3, Pressable: closure_4 } = arg1(dependencyMap[1]));
const usePromoEmailConsentStore = arg1(dependencyMap[2]).usePromoEmailConsentStore;
const useRegistrationUIStore = arg1(dependencyMap[3]).useRegistrationUIStore;
const MarketingURLs = arg1(dependencyMap[4]).MarketingURLs;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ multiItem: {}, checkbox: {}, radio: {}, checkboxLabel: { flex: 1 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

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
      const items = [callback(importDefault(dependencyMap[12]), {}), callback(PrivacyPolicyDescription, {})];
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
  items1 = [callback(importDefault(dependencyMap[12]), {}), ];
  const obj1 = { consent, onToggleConsent };
  onToggleConsent = true;
  obj1.asCheckbox = true;
  items1[1] = callback(PrivacyPolicyCheckbox, obj1);
  obj.children = items1;
  tmp10Result = callback2(closure_3, obj);
};
