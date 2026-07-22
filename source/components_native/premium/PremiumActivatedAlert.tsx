// Module ID: 7156
// Function ID: 57803
// Name: getHeaderBackground
// Dependencies: []
// Exports: default

// Module 7156 (getHeaderBackground)
function getHeaderBackground(arg0) {
  if (arg1(dependencyMap[6]).Branding.TIER_0 === arg0) {
    return importDefault(dependencyMap[7]);
  } else if (arg1(dependencyMap[6]).Branding.TIER_1 === arg0) {
    return importDefault(dependencyMap[8]);
  } else if (arg1(dependencyMap[6]).Branding.TIER_2 === arg0) {
    return importDefault(dependencyMap[9]);
  } else if (arg1(dependencyMap[6]).Branding.BUNDLE === arg0) {
    return importDefault(dependencyMap[10]);
  } else if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === arg0) {
    return importDefault(dependencyMap[11]);
  }
}
function getHeaderImage(premiumBranding) {
  if (arg1(dependencyMap[6]).Branding.TIER_0 === premiumBranding) {
    return importDefault(dependencyMap[12]);
  } else if (arg1(dependencyMap[6]).Branding.TIER_1 === premiumBranding) {
    return importDefault(dependencyMap[13]);
  } else if (arg1(dependencyMap[6]).Branding.TIER_2 === premiumBranding) {
    return importDefault(dependencyMap[14]);
  } else if (arg1(dependencyMap[6]).Branding.BUNDLE === premiumBranding) {
    return importDefault(dependencyMap[15]);
  } else if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === premiumBranding) {
    return importDefault(dependencyMap[16]);
  }
}
function getLogo(arg0) {
  if (arg1(dependencyMap[6]).Branding.TIER_0 === arg0) {
    return importDefault(dependencyMap[17]);
  } else if (arg1(dependencyMap[6]).Branding.TIER_1 === arg0) {
    return importDefault(dependencyMap[18]);
  } else {
    if (arg1(dependencyMap[6]).Branding.BUNDLE !== arg0) {
      if (arg1(dependencyMap[6]).Branding.TIER_2 !== arg0) {
        if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === arg0) {
          return importDefault(dependencyMap[20]);
        }
      }
    }
    return importDefault(dependencyMap[19]);
  }
}
function getActivatedImage(premiumBranding, arg1) {
  if (arg1(dependencyMap[6]).Branding.TIER_0 === premiumBranding) {
    if (obj4.isThemeDark(arg1)) {
      let tmp22Result = tmp22(tmp23[22]);
    } else {
      tmp22Result = tmp22(tmp23[23]);
    }
    return tmp22Result;
  } else if (arg1(dependencyMap[6]).Branding.TIER_1 === premiumBranding) {
    if (obj3.isThemeDark(arg1)) {
      let tmp17Result = tmp17(tmp18[24]);
    } else {
      tmp17Result = tmp17(tmp18[25]);
    }
    return tmp17Result;
  } else if (arg1(dependencyMap[6]).Branding.TIER_2 === premiumBranding) {
    if (obj2.isThemeDark(arg1)) {
      let tmp12Result = tmp12(tmp13[26]);
    } else {
      tmp12Result = tmp12(tmp13[27]);
    }
    return tmp12Result;
  } else if (arg1(dependencyMap[6]).Branding.BUNDLE === premiumBranding) {
    if (obj.isThemeDark(arg1)) {
      let tmp7Result = tmp7(tmp8[28]);
    } else {
      tmp7Result = tmp7(tmp8[29]);
    }
    return tmp7Result;
  } else if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === premiumBranding) {
    return importDefault(dependencyMap[30]);
  }
}
function getDescription(arg0, arg1) {
  if (arg1(dependencyMap[6]).Branding.TIER_0 !== arg0) {
    if (arg1(dependencyMap[6]).Branding.TIER_1 !== arg0) {
      if (arg1(dependencyMap[6]).Branding.TIER_2 === arg0) {
        const intl2 = arg1(dependencyMap[31]).intl;
        return intl2.string(arg1(dependencyMap[31]).t.aTUr3Z);
      } else {
        const intl = arg1(dependencyMap[31]).intl;
        let obj = {};
        obj = {};
        ({ planId: obj3.planId, additionalPlans: obj3.additionalPlans } = arg1);
        obj.planName = arg1(dependencyMap[6]).getExternalPlanDisplayName(obj);
        return intl.format(arg1(dependencyMap[31]).t.YJUUH3, obj);
      }
    }
  }
  const intl3 = arg1(dependencyMap[31]).intl;
  return intl3.string(arg1(dependencyMap[31]).t.knvOVz);
}
importAll(dependencyMap[0]);
({ Image: closure_3, ImageBackground: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const SubscriptionStatusTypes = arg1(dependencyMap[2]).SubscriptionStatusTypes;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { alert: { 1980234254: 874212868082423800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1546656530: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002121995796 }, header: { "Bool(true)": "\u{1F926}\u{1F3FF}", "Bool(true)": true, "Bool(true)": null, "Bool(true)": 9, "Bool(true)": null }, headerImage: {}, body: { "Null": "a", "Null": "isArray", "Null": "accessibilityRole", "Null": "then", "Null": "r" }, logoPlusPremiumGuild: { padding: "isArray", spriteIndex: "constructor", Date: "prototype" } };
obj = { color: arg1(dependencyMap[5]).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
obj.description = obj;
let closure_9 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles((arg0) => {
  if (arg1(dependencyMap[6]).Branding.TIER_0 === arg0) {
    let obj = { headerImage: {} };
    return obj;
  } else if (arg1(dependencyMap[6]).Branding.TIER_1 === arg0) {
    obj = { headerImage: { "Bool(true)": -1966325487, "Bool(true)": 1534197761, "Bool(true)": 1509949440 } };
    return obj;
  } else if (arg1(dependencyMap[6]).Branding.BUNDLE === arg0) {
    const obj1 = { headerImage: { "Bool(true)": 6, "Bool(true)": 61, "Bool(true)": null } };
    return obj1;
  } else if (arg1(dependencyMap[6]).Branding.TIER_2 === arg0) {
    const obj2 = { headerImage: { <string:141611331>: "isArray", <string:2792350805>: "isArrayBuffer", "Bool(false)": "MISSED_MESSAGES_DEFAULT", "Bool(false)": "%DataViewPrototype%" } };
    return obj2;
  } else if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === arg0) {
    obj = { headerImage: { "Bool(true)": true, "Bool(true)": "/assets/images/native/premium/illustrations", "Bool(true)": 140.5 } };
    return obj;
  }
});
const obj4 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[4]).createStyles((arg0) => {
  if (arg1(dependencyMap[6]).Branding.BUNDLE === arg0) {
    let obj = {};
    obj = { borderRadius: 6 };
    obj.animation = obj;
    return obj;
  } else {
    if (arg1(dependencyMap[6]).Branding.TIER_0 !== arg0) {
      if (arg1(dependencyMap[6]).Branding.TIER_1 !== arg0) {
        if (arg1(dependencyMap[6]).Branding.TIER_2 !== arg0) {
          if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === arg0) {
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
const obj5 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
  const tmp = callback3();
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
  let obj = arg1(dependencyMap[6]);
  const premiumBranding = obj.getPremiumBranding(renewalMutations);
  if (arg1(dependencyMap[6]).Branding.TIER_0 === premiumBranding) {
    obj = { logo: { "Null": "<string:3219914754>", "Null": "<string:4132503554>" } };
    let tmp13 = obj;
  } else if (arg1(dependencyMap[6]).Branding.TIER_1 === premiumBranding) {
    obj = { logo: {} };
    tmp13 = obj;
  } else {
    if (arg1(dependencyMap[6]).Branding.BUNDLE !== premiumBranding) {
      if (arg1(dependencyMap[6]).Branding.TIER_2 !== premiumBranding) {
        if (arg1(dependencyMap[6]).Branding.PREMIUM_GUILD === premiumBranding) {
          const obj1 = { logo: {} };
          tmp13 = obj1;
        }
      }
    }
    const obj2 = { logo: {} };
    tmp13 = obj2;
  }
  const tmp4 = importDefault;
  const tmp6 = importDefault(dependencyMap[32])();
  const tmp14 = callback4(premiumBranding);
  const obj3 = { onClose: onClose.onClose };
  const tmp15 = callback5(premiumBranding);
  const intl = tmp7(tmp5[31]).intl;
  obj3.confirmText = intl.string(arg1(dependencyMap[31]).t.TkTvBz);
  obj3.style = tmp.alert;
  const obj4 = { style: tmp.header, source: getHeaderBackground(premiumBranding) };
  const obj5 = { source: getLogo(premiumBranding), style: tmp13.logo };
  const items = [callback(closure_3, obj5), , ];
  let tmp19 = null;
  if (premiumBranding === arg1(dependencyMap[6]).Branding.BUNDLE) {
    const obj6 = { source: importDefault(dependencyMap[34]), style: tmp.logoPlusPremiumGuild };
    tmp19 = callback(closure_3, obj6);
  }
  items[1] = tmp19;
  const tmp18 = closure_4;
  const tmp4Result = tmp4(dependencyMap[33]);
  const items1 = [tmp14.headerImage, tmp.headerImage];
  items[2] = callback(closure_3, { source: getHeaderImage(premiumBranding), style: items1 });
  obj4.children = items;
  const items2 = [callback2(tmp18, obj4), ];
  const obj8 = { style: tmp.body };
  const obj9 = {};
  const obj7 = { source: getHeaderImage(premiumBranding), style: items1 };
  obj9.source = getActivatedImage(premiumBranding, tmp6);
  obj9.style = tmp15.animation;
  const items3 = [callback(importDefault(dependencyMap[35]), obj9), ];
  const obj10 = { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) };
  items3[1] = callback(arg1(dependencyMap[36]).LegacyText, obj10);
  obj8.children = items3;
  items2[1] = callback2(closure_5, obj8);
  obj3.children = items2;
  return callback2(tmp4Result, obj3);
};
