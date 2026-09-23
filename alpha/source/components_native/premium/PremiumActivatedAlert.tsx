// Module ID: 11051
// Function ID: 11052
// Name: PremiumActivatedAlert
// Dependencies: [19, 17, 1074, 21, 4827, 5744, 4481, 11052, 11053, 11054, 11055, 11056, 9578, 11057, 11058, 11059, 11060, 11061, 11062, 8412, 11063, 4678, 11064, 11065, 11066, 11067, 11068, 11069, 11070, 11071, 11072, 1115, 4761, 5290, 11073, 11074, 1177, 2]
// Exports: default

// Module 11051 (PremiumActivatedAlert)
import util from "util" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4481 */;
import useThemeDefault from "useTheme" /* 4761 */;
import common_AlertDefault from "common/Alert" /* 5290 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4827);
let obj2 = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5744).DARK_PRIMARY_300_LIGHT_PRIMARY_400 } };
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4827);
let closure_10 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.TIER_0 === arg0) {
    const obj2 = { headerImage: { marginLeft: -27, width: 88, top: 18 } };
    return obj2;
  } else if (tmp(4481).Branding.TIER_1 === arg0) {
    const obj3 = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj3;
  } else if (tmp(4481).Branding.BUNDLE === arg0) {
    const obj4 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj4;
  } else if (tmp(4481).Branding.TIER_2 === arg0) {
    const obj5 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj5;
  } else if (tmp(4481).Branding.PREMIUM_GUILD === arg0) {
    const obj = { headerImage: { marginLeft: -54, width: 140, top: 18 } };
    return obj;
  }
});
createStyles = fn(4827);
let closure_11 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.BUNDLE === arg0) {
    const obj2 = { animation: { borderRadius: 6 } };
    return obj2;
  } else {
    if (tmp(4481).Branding.TIER_0 !== arg0) {
      if (tmp(4481).Branding.TIER_1 !== arg0) {
        if (tmp(4481).Branding.TIER_2 !== arg0) {
          if (tmp(4481).Branding.PREMIUM_GUILD === arg0) {
            const obj = { animation: { borderRadius: 9 } };
            return obj;
          }
        }
      }
    }
    const obj3 = { animation: { borderRadius: 5 } };
    return obj3;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
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
  const premiumBranding = PremiumUtils.getPremiumBranding(renewalMutations);
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    const obj2 = { logo: { width: 82, height: 44 } };
    let tmp9 = obj2;
  } else if (tmp7(4481).Branding.TIER_1 === premiumBranding) {
    const obj3 = { logo: { width: 82, height: 32 } };
    tmp9 = obj3;
  } else {
    if (tmp7(4481).Branding.BUNDLE !== premiumBranding) {
      if (tmp7(4481).Branding.TIER_2 !== premiumBranding) {
        if (tmp7(4481).Branding.PREMIUM_GUILD === premiumBranding) {
          const obj4 = { logo: { width: 82, height: 18 } };
          tmp9 = obj4;
        }
      }
    }
    const obj5 = { logo: { width: 79, height: 32 } };
    tmp9 = obj5;
  }
  const tmp10 = closure_10(premiumBranding);
  const obj6 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  const tmp11 = closure_11(premiumBranding);
  const intl = tmp7(1115).intl;
  obj6.confirmText = intl.string(util.t.TkTvBz);
  obj6.style = tmp.alert;
  const obj7 = { style: tmp.header, source: null, children: null };
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result10 = tmp4(11052);
  } else if (tmp7(4481).Branding.TIER_1 === premiumBranding) {
    tmp4Result10 = tmp4(11053);
  } else if (tmp7(4481).Branding.TIER_2 === premiumBranding) {
    tmp4Result10 = tmp4(11054);
  } else if (tmp7(4481).Branding.BUNDLE === premiumBranding) {
    tmp4Result10 = tmp4(11055);
  } else if (tmp7(4481).Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result10 = tmp4(11056);
  }
  obj7.source = tmp4Result10;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result11 = tmp4(11061);
  } else if (tmp7(4481).Branding.TIER_1 === premiumBranding) {
    tmp4Result11 = tmp4(11062);
  } else {
    if (tmp7(4481).Branding.BUNDLE !== premiumBranding) {
      if (tmp7(4481).Branding.TIER_2 !== premiumBranding) {
        if (tmp7(4481).Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result11 = tmp4(11063);
        }
      }
    }
    tmp4Result11 = tmp4(8412);
  }
  const items = [React5(React3, { source: tmp4Result11, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj9 = { source: tmp4(11073), style: tmp.logoPlusPremiumGuild };
    tmp16Result = tmp16(tmp17, obj9);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result12 = tmp4(9578);
  } else if (tmp7(4481).Branding.TIER_1 === premiumBranding) {
    tmp4Result12 = tmp4(11057);
  } else if (tmp7(4481).Branding.TIER_2 === premiumBranding) {
    tmp4Result12 = tmp4(11058);
  } else if (tmp7(4481).Branding.BUNDLE === premiumBranding) {
    tmp4Result12 = tmp4(11059);
  } else if (tmp7(4481).Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result12 = tmp4(11060);
  }
  const obj10 = { source: tmp4Result12, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj10.style = items1;
  items[2] = React5(React3, obj10);
  obj7.children = items;
  const items2 = [React6(React4, obj7), ];
  const obj11 = { style: tmp.body, children: null };
  const obj8 = { source: tmp4Result11, style: tmp9.logo };
  const tmp21 = hasOwnProperty;
  const tmp4Result = common_AlertDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    if (tmp7Result.isThemeDark(tmp6)) {
      let tmp4Result14 = tmp4(11064);
    } else {
      tmp4Result14 = tmp4(11065);
    }
    tmp7Result = tmp7(4678);
  } else {
    if (tmp7(4481).Branding.TIER_1 === premiumBranding) {
      if (tmp7Result5.isThemeDark(tmp6)) {
        let tmp4Result15 = tmp4(11066);
      } else {
        tmp4Result15 = tmp4(11067);
      }
      let tmp4Result18 = tmp4Result15;
      tmp7Result5 = tmp7(4678);
    } else if (tmp7(4481).Branding.TIER_2 === premiumBranding) {
      if (tmp7Result6.isThemeDark(tmp6)) {
        let tmp4Result16 = tmp4(11068);
      } else {
        tmp4Result16 = tmp4(11069);
      }
      tmp4Result18 = tmp4Result16;
      tmp7Result6 = tmp7(4678);
    } else if (tmp7(4481).Branding.BUNDLE === premiumBranding) {
      if (tmp7Result7.isThemeDark(tmp6)) {
        let tmp4Result17 = tmp4(11070);
      } else {
        tmp4Result17 = tmp4(11071);
      }
      tmp4Result18 = tmp4Result17;
      tmp7Result7 = tmp7(4678);
    } else if (tmp7(4481).Branding.PREMIUM_GUILD === premiumBranding) {
      tmp4Result18 = tmp4(11072);
    }
    const obj12 = { source: tmp4Result18, style: tmp11.animation };
    const items3 = [tmp16(tmp4Result13, obj12), ];
    const obj13 = { style: tmp.description, children: null };
    if (tmp7(4481).Branding.TIER_0 !== premiumBranding) {
      if (tmp7(4481).Branding.TIER_1 !== premiumBranding) {
        if (tmp7(4481).Branding.TIER_2 === premiumBranding) {
          const intl3 = tmp7(1115).intl;
          let stringResult = intl3.string(tmp7(1115).t.aTUr3Z);
        } else if (tmp7(4481).Branding.BUNDLE === premiumBranding) {
          const intl2 = tmp7(1115).intl;
          const obj14 = { planName: null };
          ({ planId: obj20.planId, additionalPlans: obj20.additionalPlans } = renewalMutations);
          obj14.planName = tmp7(4481).getExternalPlanDisplayName({ planId: null, additionalPlans: null });
          stringResult = intl2.format(tmp7(1115).t.YJUUH3, obj14);
          const obj15 = { planId: null, additionalPlans: null };
          const tmp7Result8 = tmp7(4481);
        }
      }
      obj13.children = stringResult;
      items3[1] = tmp16(tmp7(1177).LegacyText, obj13);
      obj11.children = items3;
      items2[1] = tmp12(tmp21, obj11);
      obj6.children = items2;
      return tmp12(tmp4Result, obj6);
    }
    const intl4 = tmp7(1115).intl;
    stringResult = intl4.string(tmp7(1115).t.knvOVz);
  }
};
