// Module ID: 6245
// Function ID: 56279
// Name: getHeaderBackground
// Dependencies: [31, 27, 653, 33, 4131, 4974, 3777, 6246, 6247, 6248, 6249, 6250, 6191, 6192, 6251, 6252, 6253, 6254, 6255, 6256, 6257, 3977, 6258, 6259, 6260, 6261, 6262, 6263, 6264, 6265, 6266, 1212, 4067, 4562, 6267, 6268, 1273, 2]
// Exports: default

// Module 6245 (getHeaderBackground)
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
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === arg0) {
    return importDefault(6246);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === arg0) {
    return importDefault(6247);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === arg0) {
    return importDefault(6248);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === arg0) {
    return importDefault(6249);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
    return importDefault(6250);
  }
}
function getHeaderImage(premiumBranding) {
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === premiumBranding) {
    return importDefault(6191);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === premiumBranding) {
    return importDefault(6192);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === premiumBranding) {
    return importDefault(6251);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === premiumBranding) {
    return importDefault(6252);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === premiumBranding) {
    return importDefault(6253);
  }
}
function getLogo(arg0) {
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === arg0) {
    return importDefault(6254);
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === arg0) {
    return importDefault(6255);
  } else {
    if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE !== arg0) {
      if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 !== arg0) {
        if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
          return importDefault(6257);
        }
      }
    }
    return importDefault(6256);
  }
}
function getActivatedImage(premiumBranding, arg1) {
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === premiumBranding) {
    if (obj4.isThemeDark(arg1)) {
      let tmp22Result = tmp22(6258);
    } else {
      tmp22Result = tmp22(6259);
    }
    return tmp22Result;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === premiumBranding) {
    if (obj3.isThemeDark(arg1)) {
      let tmp17Result = tmp17(6260);
    } else {
      tmp17Result = tmp17(6261);
    }
    return tmp17Result;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === premiumBranding) {
    if (obj2.isThemeDark(arg1)) {
      let tmp12Result = tmp12(6262);
    } else {
      tmp12Result = tmp12(6263);
    }
    return tmp12Result;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === premiumBranding) {
    if (obj.isThemeDark(arg1)) {
      let tmp7Result = tmp7(6264);
    } else {
      tmp7Result = tmp7(6265);
    }
    return tmp7Result;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === premiumBranding) {
    return importDefault(6266);
  }
}
function getDescription(arg0, arg1) {
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 !== arg0) {
    if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 !== arg0) {
      if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === arg0) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        return intl2.string(require(1212) /* getSystemLocale */.t.aTUr3Z);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        let obj = {};
        obj = {};
        ({ planId: obj3.planId, additionalPlans: obj3.additionalPlans } = arg1);
        obj.planName = require(3777) /* _createForOfIteratorHelperLoose */.getExternalPlanDisplayName(obj);
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
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === arg0) {
    let obj = { headerImage: { marginLeft: -27, width: 88, top: 18 } };
    return obj;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === arg0) {
    obj = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === arg0) {
    const obj1 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj1;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj2;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
    obj = { headerImage: { marginLeft: -54, width: 140, top: 18 } };
    return obj;
  }
});
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE === arg0) {
    let obj = {};
    obj = { borderRadius: 6 };
    obj.animation = obj;
    return obj;
  } else {
    if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 !== arg0) {
      if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 !== arg0) {
        if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 !== arg0) {
          if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === arg0) {
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
  let obj = require(3777) /* _createForOfIteratorHelperLoose */;
  const premiumBranding = obj.getPremiumBranding(renewalMutations);
  if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_0 === premiumBranding) {
    obj = { logo: { width: 82, height: 44 } };
    let tmp13 = obj;
  } else if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_1 === premiumBranding) {
    obj = { logo: { width: 82, height: 32 } };
    tmp13 = obj;
  } else {
    if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE !== premiumBranding) {
      if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.TIER_2 !== premiumBranding) {
        if (require(3777) /* _createForOfIteratorHelperLoose */.Branding.PREMIUM_GUILD === premiumBranding) {
          const obj1 = { logo: { width: 82, height: 18 } };
          tmp13 = obj1;
        }
      }
    }
    const obj2 = { logo: { width: 79, height: 32 } };
    tmp13 = obj2;
  }
  const tmp4 = importDefault;
  const tmp6 = importDefault(4067)();
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
  if (premiumBranding === require(3777) /* _createForOfIteratorHelperLoose */.Branding.BUNDLE) {
    const obj6 = { source: importDefault(6267), style: tmp.logoPlusPremiumGuild };
    tmp19 = callback(closure_3, obj6);
  }
  items[1] = tmp19;
  const tmp18 = closure_4;
  const tmp4Result = tmp4(4562);
  const items1 = [tmp14.headerImage, tmp.headerImage];
  items[2] = callback(closure_3, { source: getHeaderImage(premiumBranding), style: items1 });
  obj4.children = items;
  const items2 = [callback2(tmp18, obj4), ];
  const obj8 = { style: tmp.body };
  const obj9 = {};
  const obj7 = { source: getHeaderImage(premiumBranding), style: items1 };
  obj9.source = getActivatedImage(premiumBranding, tmp6);
  obj9.style = tmp15.animation;
  const items3 = [callback(importDefault(6268), obj9), ];
  const obj10 = { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) };
  items3[1] = callback(require(1273) /* Button */.LegacyText, obj10);
  obj8.children = items3;
  items2[1] = callback2(closure_5, obj8);
  obj3.children = items2;
  return callback2(tmp4Result, obj3);
};
