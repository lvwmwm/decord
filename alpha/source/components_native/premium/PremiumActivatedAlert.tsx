// Module ID: 10559
// Function ID: 10560
// Name: PremiumActivatedAlert
// Dependencies: [19, 17, 1072, 21, 5009, 6772, 2048, 10560, 10561, 10562, 10563, 10564, 9909, 10565, 10566, 10567, 10568, 10569, 10570, 8527, 10571, 5016, 10572, 10573, 10574, 10575, 10576, 10577, 10578, 10579, 10580, 1114, 5248, 6025, 5712, 10581, 10582, 1188, 2]
// Exports: default

// Module 10559 (PremiumActivatedAlert)
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AlertDefault from "Alert" /* 6025 */;
import LegacyTokens from "LegacyTokens" /* 6772 */;
import AssetRegistryDefault from "AssetRegistry" /* 10581 */;
import ShineAnimationDefault from "ShineAnimation" /* 10582 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: c3, StyleSheet } = react_native);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerBackground: obj2, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: obj3 };
obj2 = { width: undefined, height: 100 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles(obj);
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.TIER_0 === arg0) {
    return { headerImage: { marginLeft: -27, width: 88, top: 18 } };
  } else if (PremiumUtils.Branding.TIER_1 === arg0) {
    return { headerImage: { marginLeft: -27, width: 87, top: 18 } };
  } else if (PremiumUtils.Branding.BUNDLE === arg0) {
    return { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
  } else if (PremiumUtils.Branding.TIER_2 === arg0) {
    return { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
    return { headerImage: { marginLeft: -54, width: 140, top: 18 } };
  }
});
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.BUNDLE === arg0) {
    return { animation: { borderRadius: 6 } };
  } else {
    if (PremiumUtils.Branding.TIER_0 !== arg0) {
      if (PremiumUtils.Branding.TIER_1 !== arg0) {
        if (PremiumUtils.Branding.TIER_2 !== arg0) {
          if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
            return { animation: { borderRadius: 9 } };
          }
        }
      }
    }
    return { animation: { borderRadius: 5 } };
  }
});
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(subscription) {
  let intl;
  let items;
  let items1;
  let obj16;
  let tmp4Result15;
  let tmp4Result17;
  let tmp4Result20;
  let tmp4Result26;
  let tmp7Result8;
  let tmp9;
  subscription = subscription.subscription;
  const onClose = subscription.onClose;
  const tmp = closure_7();
  let renewalMutations = subscription;
  if (null != subscription.renewalMutations) {
    const _Object = Object;
    renewalMutations = subscription;
    if (0 !== Object.keys(subscription.renewalMutations).length) {
      renewalMutations = subscription;
      if (subscription.renewalMutations.paymentGatewayPlanId !== subscription.paymentGatewayPlanId) {
        renewalMutations = subscription;
        if (subscription.status !== SubscriptionStatusTypes.CANCELED) {
          renewalMutations = subscription.renewalMutations;
        }
      }
    }
  }
  const tmp6 = useThemeDefault();
  const obj = PremiumUtils;
  const premiumBranding = obj.getPremiumBranding(renewalMutations);
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp9 = { logo: { width: 82, height: 44 } };
    const obj2 = { logo: { width: 82, height: 44 } };
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp9 = { logo: { width: 82, height: 32 } };
    const obj3 = { logo: { width: 82, height: 32 } };
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp9 = { logo: { width: 82, height: 18 } };
          const obj4 = { logo: { width: 82, height: 18 } };
        }
      }
    }
    tmp9 = { logo: { width: 79, height: 32 } };
    const obj5 = { logo: { width: 79, height: 32 } };
  }
  const tmp10 = closure_8(premiumBranding);
  const obj6 = { onClose, confirmText: intl.string(intl5.t.TkTvBz), style: tmp.alert, children: null };
  const tmp11 = closure_9(premiumBranding);
  const tmp4Result = AlertDefault;
  intl = tmp7(1114).intl;
  const obj7 = { style: tmp.header, children: items };
  const tmp4Result14 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result15 = tmp4(10560);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = tmp4(10561);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = tmp4(10562);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = tmp4(10563);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = tmp4(10564);
  }
  items = [, , , ];
  const obj8 = { source: tmp4Result15, style: tmp.headerBackground };
  items[0] = hasOwnProperty(tmp4Result14, obj8);
  const tmp4Result16 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result17 = tmp4(10569);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result17 = tmp4(10570);
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result17 = tmp4(10571);
        }
      }
    }
    tmp4Result17 = tmp4(8527);
  }
  const obj9 = { source: tmp4Result17, style: tmp9.logo };
  items[1] = hasOwnProperty(tmp4Result16, obj9);
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: AssetRegistryDefault, style: tmp.logoPlusPremiumGuild };
    const tmp4Result18 = FastImageDefault;
    tmp15Result = tmp15(tmp4Result18, obj10);
  }
  items[2] = tmp15Result;
  const tmp4Result19 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result20 = tmp4(9909);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result20 = tmp4(10565);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result20 = tmp4(10566);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result20 = tmp4(10567);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result20 = tmp4(10568);
  }
  const obj11 = { source: tmp4Result20, style: items1 };
  items1 = [tmp10.headerImage, tmp.headerImage];
  items[3] = hasOwnProperty(tmp4Result19, obj11);
  const items2 = [metroRequire(_false, obj7), ];
  const obj12 = { style: tmp.body, children: null };
  const tmp4Result21 = ShineAnimationDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result22;
    const tmp7Result = shared;
    if (tmp7Result.isThemeDark(tmp6)) {
      tmp4Result22 = tmp4(10572);
    } else {
      tmp4Result22 = tmp4(10573);
    }
    tmp4Result26 = tmp4Result22;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    let tmp4Result23;
    const tmp7Result5 = shared;
    if (tmp7Result5.isThemeDark(tmp6)) {
      tmp4Result23 = tmp4(10574);
    } else {
      tmp4Result23 = tmp4(10575);
    }
    tmp4Result26 = tmp4Result23;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    let tmp4Result24;
    const tmp7Result6 = shared;
    if (tmp7Result6.isThemeDark(tmp6)) {
      tmp4Result24 = tmp4(10576);
    } else {
      tmp4Result24 = tmp4(10577);
    }
    tmp4Result26 = tmp4Result24;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    let tmp4Result25;
    const tmp7Result7 = shared;
    if (tmp7Result7.isThemeDark(tmp6)) {
      tmp4Result25 = tmp4(10578);
    } else {
      tmp4Result25 = tmp4(10579);
    }
    tmp4Result26 = tmp4Result25;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result26 = tmp4(10580);
  }
  const items3 = [, ];
  const obj13 = { source: tmp4Result26, style: tmp11.animation };
  items3[0] = hasOwnProperty(tmp4Result21, obj13);
  const obj14 = { style: tmp.description, children: null };
  const LegacyText = tmp7(1188).LegacyText;
  if (PremiumUtils.Branding.TIER_0 !== premiumBranding) {
    let stringResult;
    if (PremiumUtils.Branding.TIER_1 !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
        const intl3 = tmp7(1114).intl;
        stringResult = intl3.string(tmp7(1114).t.aTUr3Z);
      } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
        const intl2 = tmp7(1114).intl;
        const format = intl2.format;
        const obj15 = { planName: tmp7Result8.getExternalPlanDisplayName(obj16) };
        const YJUUH3 = tmp7(1114).t.YJUUH3;
        obj16 = { planId: null, additionalPlans: null };
        ({ planId: obj21.planId, additionalPlans: obj21.additionalPlans } = renewalMutations);
        tmp7Result8 = PremiumUtils;
        stringResult = format(YJUUH3, obj15);
      }
    }
    obj14.children = stringResult;
    items3[1] = hasOwnProperty(LegacyText, obj14);
    obj12.children = items3;
    items2[1] = metroRequire(_false, obj12);
    obj6.children = items2;
    return metroRequire(tmp4Result, obj6);
  }
  const intl4 = tmp7(1114).intl;
  stringResult = intl4.string(tmp7(1114).t.knvOVz);
};
