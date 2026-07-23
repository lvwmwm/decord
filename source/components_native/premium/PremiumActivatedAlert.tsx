// Module ID: 7161
// Function ID: 57837
// Name: getHeaderBackground
// Dependencies: [31, 27, 653, 33, 4130, 4973, 3776, 7162, 7163, 7164, 7165, 7166, 7115, 7116, 7167, 7168, 7169, 7170, 7171, 7172, 7173, 3976, 7174, 7175, 7176, 7177, 7178, 7179, 7180, 7181, 7182, 1212, 4066, 4561, 7183, 7184, 1273, 2]
// Exports: default

// Module 7161 (getHeaderBackground)
import "getSystemLocale";
import get_ActivityIndicator from "registerAsset";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function getHeaderBackground(arg0) {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === arg0) {
    return importDefault(7162);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === arg0) {
    return importDefault(7163);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === arg0) {
    return importDefault(7164);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === arg0) {
    return importDefault(7165);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
    return importDefault(7166);
  }
}
function getHeaderImage(premiumBranding) {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === premiumBranding) {
    return importDefault(7115);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === premiumBranding) {
    return importDefault(7116);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === premiumBranding) {
    return importDefault(7167);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === premiumBranding) {
    return importDefault(7168);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === premiumBranding) {
    return importDefault(7169);
  }
}
function getLogo(arg0) {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === arg0) {
    return importDefault(7170);
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === arg0) {
    return importDefault(7171);
  } else {
    if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE !== arg0) {
      if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 !== arg0) {
        if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
          return importDefault(7173);
        }
      }
    }
    return importDefault(7172);
  }
}
function getActivatedImage(premiumBranding, arg1) {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === premiumBranding) {
    if (obj4.isThemeDark(arg1)) {
      let tmp22Result = tmp22(7174);
    } else {
      tmp22Result = tmp22(7175);
    }
    return tmp22Result;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === premiumBranding) {
    if (obj3.isThemeDark(arg1)) {
      let tmp17Result = tmp17(7176);
    } else {
      tmp17Result = tmp17(7177);
    }
    return tmp17Result;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === premiumBranding) {
    if (obj2.isThemeDark(arg1)) {
      let tmp12Result = tmp12(7178);
    } else {
      tmp12Result = tmp12(7179);
    }
    return tmp12Result;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === premiumBranding) {
    if (obj.isThemeDark(arg1)) {
      let tmp7Result = tmp7(7180);
    } else {
      tmp7Result = tmp7(7181);
    }
    return tmp7Result;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === premiumBranding) {
    return importDefault(7182);
  }
}
function getDescription(arg0, arg1) {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 !== arg0) {
    if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 !== arg0) {
      if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === arg0) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        return intl2.string(require(1212) /* getSystemLocale */.t.aTUr3Z);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        let obj = {};
        obj = {};
        ({ planId: obj3.planId, additionalPlans: obj3.additionalPlans } = arg1);
        obj.planName = require(3776) /* _createForOfIteratorHelperLoose */.getExternalPlanDisplayName(obj);
        return intl.format(require(1212) /* getSystemLocale */.t.YJUUH3, obj);
      }
    }
  }
  const intl3 = require(1212) /* getSystemLocale */.intl;
  return intl3.string(require(1212) /* getSystemLocale */.t.knvOVz);
}
({ Image: closure_3, ImageBackground: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 } };
_createForOfIteratorHelperLoose = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
_createForOfIteratorHelperLoose.description = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === arg0) {
    let obj = { headerImage: { marginLeft: -27, width: 88, top: 18 } };
    return obj;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === arg0) {
    obj = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === arg0) {
    const obj1 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj1;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj2;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
    obj = { headerImage: { marginLeft: -54, width: 140, top: 18 } };
    return obj;
  }
});
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === arg0) {
    let obj = {};
    obj = { borderRadius: 6 };
    obj.animation = obj;
    return obj;
  } else {
    if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 !== arg0) {
      if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 !== arg0) {
        if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 !== arg0) {
          if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
            obj = {};
            const obj1 = { borderRadius: 9 };
            obj.animation = obj1;
            return obj;
          }
        }
      }
    }
    const obj2 = {};
    const obj3 = { borderRadius: 5 };
    obj2.animation = obj3;
    return obj2;
  }
});
const result = require("ME").fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
  const tmp = _createForOfIteratorHelperLoose();
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
  let obj = require(3776) /* _createForOfIteratorHelperLoose */;
  const premiumBranding = obj.getPremiumBranding(renewalMutations);
  if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === premiumBranding) {
    obj = { logo: { width: 82, height: 44 } };
    let tmp13 = obj;
  } else if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === premiumBranding) {
    obj = { logo: { width: 82, height: 32 } };
    tmp13 = obj;
  } else {
    if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE !== premiumBranding) {
      if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 !== premiumBranding) {
        if (require(3776) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === premiumBranding) {
          const obj1 = { logo: { width: 82, height: 18 } };
          tmp13 = obj1;
        }
      }
    }
    const obj2 = { logo: { width: 79, height: 32 } };
    tmp13 = obj2;
  }
  const tmp4 = importDefault;
  const tmp6 = importDefault(4066)();
  const tmp14 = callback3(premiumBranding);
  const obj3 = { onClose: onClose.onClose };
  const tmp15 = callback4(premiumBranding);
  const intl = tmp7(1212).intl;
  obj3.confirmText = intl.string(require(1212) /* getSystemLocale */.t.TkTvBz);
  obj3.style = tmp.alert;
  const obj4 = { style: tmp.header, source: getHeaderBackground(premiumBranding) };
  const obj5 = { source: getLogo(premiumBranding), style: tmp13.logo };
  const items = [callback(closure_3, obj5), , ];
  let tmp19 = null;
  if (premiumBranding === require(3776) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE) {
    const obj6 = { source: importDefault(7183), style: tmp.logoPlusPremiumGuild };
    tmp19 = callback(closure_3, obj6);
  }
  items[1] = tmp19;
  const tmp18 = closure_4;
  const tmp4Result = tmp4(4561);
  const items1 = [tmp14.headerImage, tmp.headerImage];
  items[2] = callback(closure_3, { source: getHeaderImage(premiumBranding), style: items1 });
  obj4.children = items;
  const items2 = [callback2(tmp18, obj4), ];
  const obj8 = { style: tmp.body };
  const obj9 = {};
  const obj7 = { source: getHeaderImage(premiumBranding), style: items1 };
  obj9.source = getActivatedImage(premiumBranding, tmp6);
  obj9.style = tmp15.animation;
  const items3 = [callback(importDefault(7184), obj9), ];
  const obj10 = { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) };
  items3[1] = callback(require(1273) /* Button */.LegacyText, obj10);
  obj8.children = items3;
  items2[1] = callback2(closure_5, obj8);
  obj3.children = items2;
  return callback2(tmp4Result, obj3);
};
