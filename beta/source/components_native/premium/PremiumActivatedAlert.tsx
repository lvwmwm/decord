// Module ID: 10173
// Function ID: 10174
// Name: PremiumActivatedAlert
// Dependencies: [19, 17, 1074, 21, 4836, 5753, 4488, 10174, 10175, 10176, 10177, 10178, 8688, 10179, 10180, 10181, 10182, 10183, 10184, 7511, 10185, 4685, 10186, 10187, 10188, 10189, 10190, 10191, 10192, 10193, 10194, 1115, 4767, 5300, 10195, 10196, 1177, 2]
// Exports: default

// Module 10173 (PremiumActivatedAlert)
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import AlertDefault from "Alert" /* 5300 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import AssetRegistryDefault from "AssetRegistry" /* 10195 */;
import ShineAnimationDefault from "ShineAnimation" /* 10196 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = react_native);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: obj2 };
obj2 = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_9 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((arg0) => {
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
let closure_11 = createStyles.createStyles((arg0) => {
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
  let obj15;
  let tmp4Result10;
  let tmp4Result11;
  let tmp4Result12;
  let tmp4Result18;
  let tmp7Result8;
  let tmp9;
  subscription = subscription.subscription;
  const onClose = subscription.onClose;
  const tmp = closure_9();
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
  const tmp10 = closure_10(premiumBranding);
  const obj6 = { onClose, confirmText: intl.string(intl5.t.TkTvBz), style: tmp.alert, children: null };
  const tmp11 = closure_11(premiumBranding);
  const tmp4Result = AlertDefault;
  intl = tmp7(1115).intl;
  const obj7 = { style: tmp.header, source: tmp4Result10, children: items };
  const tmp14 = React3;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result10 = tmp4(10174);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result10 = tmp4(10175);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result10 = tmp4(10176);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result10 = tmp4(10177);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result10 = tmp4(10178);
  }
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result11 = tmp4(10183);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result11 = tmp4(10184);
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result11 = tmp4(10185);
        }
      }
    }
    tmp4Result11 = tmp4(7511);
  }
  items = [, , ];
  const obj8 = { source: tmp4Result11, style: tmp9.logo };
  items[0] = metroImportDefault(_false, obj8);
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj9 = { source: AssetRegistryDefault, style: tmp.logoPlusPremiumGuild };
    tmp16Result = tmp16(tmp17, obj9);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result12 = tmp4(8688);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result12 = tmp4(10179);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result12 = tmp4(10180);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result12 = tmp4(10181);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result12 = tmp4(10182);
  }
  const obj10 = { source: tmp4Result12, style: items1 };
  items1 = [tmp10.headerImage, tmp.headerImage];
  items[2] = metroImportDefault(_false, obj10);
  const items2 = [metroImportAll(tmp14, obj7), ];
  const obj11 = { style: tmp.body, children: null };
  const tmp21 = hasOwnProperty;
  const tmp4Result13 = ShineAnimationDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result14;
    const tmp7Result = shared;
    if (tmp7Result.isThemeDark(tmp6)) {
      tmp4Result14 = tmp4(10186);
    } else {
      tmp4Result14 = tmp4(10187);
    }
    tmp4Result18 = tmp4Result14;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    let tmp4Result15;
    const tmp7Result5 = shared;
    if (tmp7Result5.isThemeDark(tmp6)) {
      tmp4Result15 = tmp4(10188);
    } else {
      tmp4Result15 = tmp4(10189);
    }
    tmp4Result18 = tmp4Result15;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    let tmp4Result16;
    const tmp7Result6 = shared;
    if (tmp7Result6.isThemeDark(tmp6)) {
      tmp4Result16 = tmp4(10190);
    } else {
      tmp4Result16 = tmp4(10191);
    }
    tmp4Result18 = tmp4Result16;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    let tmp4Result17;
    const tmp7Result7 = shared;
    if (tmp7Result7.isThemeDark(tmp6)) {
      tmp4Result17 = tmp4(10192);
    } else {
      tmp4Result17 = tmp4(10193);
    }
    tmp4Result18 = tmp4Result17;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result18 = tmp4(10194);
  }
  const items3 = [, ];
  const obj12 = { source: tmp4Result18, style: tmp11.animation };
  items3[0] = metroImportDefault(tmp4Result13, obj12);
  const obj13 = { style: tmp.description, children: null };
  const LegacyText = tmp7(1177).LegacyText;
  if (PremiumUtils.Branding.TIER_0 !== premiumBranding) {
    let stringResult;
    if (PremiumUtils.Branding.TIER_1 !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
        const intl3 = tmp7(1115).intl;
        stringResult = intl3.string(tmp7(1115).t.aTUr3Z);
      } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
        const intl2 = tmp7(1115).intl;
        const format = intl2.format;
        const obj14 = { planName: tmp7Result8.getExternalPlanDisplayName(obj15) };
        const YJUUH3 = tmp7(1115).t.YJUUH3;
        obj15 = { planId: null, additionalPlans: null };
        ({ planId: obj20.planId, additionalPlans: obj20.additionalPlans } = renewalMutations);
        tmp7Result8 = PremiumUtils;
        stringResult = format(YJUUH3, obj14);
      }
    }
    obj13.children = stringResult;
    items3[1] = metroImportDefault(LegacyText, obj13);
    obj11.children = items3;
    items2[1] = metroImportAll(tmp21, obj11);
    obj6.children = items2;
    return metroImportAll(tmp4Result, obj6);
  }
  const intl4 = tmp7(1115).intl;
  stringResult = intl4.string(tmp7(1115).t.knvOVz);
};
