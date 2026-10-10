// Module ID: 10065
// Function ID: 10066
// Name: PremiumActivatedAlert
// Dependencies: [19, 17, 1085, 21, 5092, 5969, 4769, 10066, 10067, 10068, 10069, 10070, 7155, 7156, 10071, 10072, 10073, 10074, 10075, 8096, 10076, 4969, 10077, 10078, 10079, 10080, 10081, 10082, 10083, 10084, 10085, 1126, 558, 576, 5031, 6156, 10086, 10087, 1200, 5398, 2]

// Module 10065 (PremiumActivatedAlert)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtils from "PremiumUtils" /* 4769 */;
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import AlertDefault from "Alert" /* 5398 */;
import LegacyTokens from "LegacyTokens" /* 5969 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AssetRegistryDefault from "AssetRegistry" /* 10085 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10086 */;
import ShineAnimationDefault from "ShineAnimation" /* 10087 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function getActivatedImage(cResult, arg1) {
  if (PremiumUtils.Branding.TIER_0 === cResult) {
    let tmp10Result;
    const tmpResult = shared;
    if (tmpResult.isThemeDark(arg1)) {
      tmp10Result = tmp10(10077);
    } else {
      tmp10Result = tmp10(10078);
    }
    return tmp10Result;
  } else if (PremiumUtils.Branding.TIER_1 === cResult) {
    let tmp8Result;
    const tmpResult4 = shared;
    if (tmpResult4.isThemeDark(arg1)) {
      tmp8Result = tmp8(10079);
    } else {
      tmp8Result = tmp8(10080);
    }
    return tmp8Result;
  } else if (PremiumUtils.Branding.TIER_2 === cResult) {
    let tmp6Result;
    const tmpResult5 = shared;
    if (tmpResult5.isThemeDark(arg1)) {
      tmp6Result = tmp6(10081);
    } else {
      tmp6Result = tmp6(10082);
    }
    return tmp6Result;
  } else if (PremiumUtils.Branding.BUNDLE === cResult) {
    let tmp4Result;
    const tmpResult6 = shared;
    if (tmpResult6.isThemeDark(arg1)) {
      tmp4Result = tmp4(10083);
    } else {
      tmp4Result = tmp4(10084);
    }
    return tmp4Result;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === cResult) {
    return AssetRegistryDefault;
  }
}
function getDescription(arg0, arg1) {
  let obj2;
  let tmpResult;
  if (PremiumUtils.Branding.TIER_0 !== arg0) {
    if (PremiumUtils.Branding.TIER_1 !== arg0) {
      if (PremiumUtils.Branding.TIER_2 === arg0) {
        const intl2 = tmp(1126).intl;
        return intl2.string(intl4.t.aTUr3Z);
      } else {
        const intl = tmp(1126).intl;
        const format = intl.format;
        const obj = { planName: tmpResult.getExternalPlanDisplayName(obj2) };
        const YJUUH3 = tmp(1126).t.YJUUH3;
        obj2 = { planId: null, additionalPlans: null };
        ({ planId: obj3.planId, additionalPlans: obj3.additionalPlans } = arg1);
        tmpResult = PremiumUtils;
        return format(YJUUH3, obj);
      }
    }
  }
  const intl3 = tmp(1126).intl;
  return intl3.string(intl4.t.knvOVz);
}
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
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumActivatedAlert(arg0) {
  let _alert;
  let header;
  let items;
  let items1;
  let items2;
  let onClose;
  let subscription;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(51);
  ({ subscription, onClose } = arg0);
  const tmp4 = closure_7();
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
  const tmp8 = useThemeDefault();
  if (cResult[0] !== renewalMutations) {
    const tmpResult = PremiumUtils;
    const premiumBranding = tmpResult.getPremiumBranding(renewalMutations);
    cResult[0] = renewalMutations;
    cResult[1] = premiumBranding;
    tmp9 = premiumBranding;
  } else {
    tmp9 = cResult[1];
  }
  if (PremiumUtils.Branding.TIER_0 === tmp9) {
    tmp11 = { logo: { width: 82, height: 44 } };
    const obj2 = { logo: { width: 82, height: 44 } };
  } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
    tmp11 = { logo: { width: 82, height: 32 } };
    const obj3 = { logo: { width: 82, height: 32 } };
  } else {
    if (PremiumUtils.Branding.BUNDLE !== tmp9) {
      if (PremiumUtils.Branding.TIER_2 !== tmp9) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
          tmp11 = { logo: { width: 82, height: 18 } };
          const obj4 = { logo: { width: 82, height: 18 } };
        }
      }
    }
    tmp11 = { logo: { width: 79, height: 32 } };
    const obj5 = { logo: { width: 79, height: 32 } };
  }
  const tmp12 = closure_8(tmp9);
  const tmp13 = closure_9(tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t.TkTvBz);
    cResult[2] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  ({ alert: _alert, header } = tmp4);
  if (cResult[3] !== tmp9) {
    let tmp7Result;
    if (PremiumUtils.Branding.TIER_0 === tmp9) {
      tmp7Result = tmp7(10066);
    } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
      tmp7Result = tmp7(10067);
    } else if (PremiumUtils.Branding.TIER_2 === tmp9) {
      tmp7Result = tmp7(10068);
    } else if (PremiumUtils.Branding.BUNDLE === tmp9) {
      tmp7Result = tmp7(10069);
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
      tmp7Result = tmp7(10070);
    }
    cResult[3] = tmp9;
    cResult[4] = tmp7Result;
    tmp16 = tmp7Result;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === tmp4.headerBackground) {
    let tmp18;
    let tmp20;
    if (cResult[6] === tmp16) {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== tmp9) {
      let tmp7Result4;
      if (PremiumUtils.Branding.TIER_0 === tmp9) {
        tmp7Result4 = tmp7(10074);
      } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
        tmp7Result4 = tmp7(10075);
      } else {
        if (PremiumUtils.Branding.BUNDLE !== tmp9) {
          if (PremiumUtils.Branding.TIER_2 !== tmp9) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
              tmp7Result4 = tmp7(10076);
            }
          }
        }
        tmp7Result4 = tmp7(8096);
      }
      cResult[8] = tmp9;
      cResult[9] = tmp7Result4;
      tmp20 = tmp7Result4;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] === tmp11.logo) {
      let tmp22;
      if (cResult[11] === tmp20) {
        tmp22 = cResult[12];
      }
      if (cResult[13] === tmp9) {
        let tmp25;
        let tmp29;
        if (cResult[14] === tmp4.logoPlusPremiumGuild) {
          tmp25 = cResult[15];
        }
        if (cResult[16] !== tmp9) {
          let tmp7Result5;
          if (PremiumUtils.Branding.TIER_0 === tmp9) {
            tmp7Result5 = tmp7(7155);
          } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
            tmp7Result5 = tmp7(7156);
          } else if (PremiumUtils.Branding.TIER_2 === tmp9) {
            tmp7Result5 = tmp7(10071);
          } else if (PremiumUtils.Branding.BUNDLE === tmp9) {
            tmp7Result5 = tmp7(10072);
          } else if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
            tmp7Result5 = tmp7(10073);
          }
          cResult[16] = tmp9;
          cResult[17] = tmp7Result5;
          tmp29 = tmp7Result5;
        } else {
          tmp29 = cResult[17];
        }
        if (cResult[18] === tmp12.headerImage) {
          let tmp31;
          if (cResult[19] === tmp4.headerImage) {
            tmp31 = cResult[20];
          }
          if (cResult[21] === tmp29) {
            let tmp32;
            if (cResult[22] === tmp31) {
              tmp32 = cResult[23];
            }
            if (cResult[24] === tmp4.header) {
              if (cResult[25] === tmp32) {
                if (cResult[26] === tmp18) {
                  if (cResult[27] === tmp22) {
                    let tmp35;
                    if (cResult[28] === tmp25) {
                      tmp35 = cResult[29];
                    }
                    if (cResult[30] === tmp9) {
                      let tmp40;
                      if (cResult[31] === tmp8) {
                        tmp40 = cResult[32];
                      }
                      if (cResult[33] === tmp13.animation) {
                        let tmp43;
                        if (cResult[34] === tmp40) {
                          tmp43 = cResult[35];
                        }
                        if (cResult[36] === tmp9) {
                          let tmp47;
                          if (cResult[37] === renewalMutations) {
                            tmp47 = cResult[38];
                          }
                          if (cResult[39] === tmp4.description) {
                            let tmp50;
                            if (cResult[40] === tmp47) {
                              tmp50 = cResult[41];
                            }
                            if (cResult[42] === tmp4.body) {
                              if (cResult[43] === tmp43) {
                                let tmp53;
                                if (cResult[44] === tmp50) {
                                  tmp53 = cResult[45];
                                }
                                if (cResult[46] === onClose) {
                                  if (cResult[47] === tmp4.alert) {
                                    if (cResult[48] === tmp35) {
                                      let tmp57;
                                      if (cResult[49] === tmp53) {
                                        tmp57 = cResult[50];
                                      }
                                      return tmp57;
                                    }
                                  }
                                }
                                const obj6 = { onClose, confirmText: tmp14, style: _alert, children: items };
                                items = [tmp35, tmp53];
                                const tmp59 = metroRequire(AlertDefault, obj6);
                                cResult[46] = onClose;
                                cResult[47] = tmp4.alert;
                                cResult[48] = tmp35;
                                cResult[49] = tmp53;
                                cResult[50] = tmp59;
                                tmp57 = tmp59;
                              }
                            }
                            const obj7 = { style: tmp39, children: items1 };
                            items1 = [tmp43, tmp50];
                            const tmp56 = metroRequire(_false, obj7);
                            cResult[42] = tmp4.body;
                            cResult[43] = tmp43;
                            cResult[44] = tmp50;
                            cResult[45] = tmp56;
                            tmp53 = tmp56;
                          }
                          const obj8 = { style: tmp46, children: tmp47 };
                          const tmp52 = hasOwnProperty(native.LegacyText, obj8);
                          cResult[39] = tmp4.description;
                          cResult[40] = tmp47;
                          cResult[41] = tmp52;
                          tmp50 = tmp52;
                        }
                        const tmp49 = getDescription(tmp9, renewalMutations);
                        cResult[36] = tmp9;
                        cResult[37] = renewalMutations;
                        cResult[38] = tmp49;
                        tmp47 = tmp49;
                      }
                      const obj9 = { source: tmp40, style: tmp13.animation };
                      const tmp45 = hasOwnProperty(ShineAnimationDefault, obj9);
                      cResult[33] = tmp13.animation;
                      cResult[34] = tmp40;
                      cResult[35] = tmp45;
                      tmp43 = tmp45;
                    }
                    const tmp42 = getActivatedImage(tmp9, tmp8);
                    cResult[30] = tmp9;
                    cResult[31] = tmp8;
                    cResult[32] = tmp42;
                    tmp40 = tmp42;
                  }
                }
              }
            }
            const obj10 = { style: header, children: items2 };
            items2 = [tmp18, tmp22, tmp25, tmp32];
            const tmp38 = metroRequire(_false, obj10);
            cResult[24] = tmp4.header;
            cResult[25] = tmp32;
            cResult[26] = tmp18;
            cResult[27] = tmp22;
            cResult[28] = tmp25;
            cResult[29] = tmp38;
            tmp35 = tmp38;
          }
          const obj11 = { source: tmp29, style: tmp31 };
          const tmp34 = hasOwnProperty(FastImageDefault, obj11);
          cResult[21] = tmp29;
          cResult[22] = tmp31;
          cResult[23] = tmp34;
          tmp32 = tmp34;
        }
        const items3 = [tmp12.headerImage, tmp4.headerImage];
        cResult[18] = tmp12.headerImage;
        cResult[19] = tmp4.headerImage;
        cResult[20] = items3;
        tmp31 = items3;
      }
      let tmp26 = null;
      if (tmp9 === PremiumUtils.Branding.BUNDLE) {
        const obj12 = { source: AssetRegistryDefault2, style: tmp4.logoPlusPremiumGuild };
        const tmp7Result6 = FastImageDefault;
        tmp26 = hasOwnProperty(tmp7Result6, obj12);
      }
      cResult[13] = tmp9;
      cResult[14] = tmp4.logoPlusPremiumGuild;
      cResult[15] = tmp26;
      tmp25 = tmp26;
    }
    const obj13 = { source: tmp20, style: tmp11.logo };
    const tmp24 = hasOwnProperty(FastImageDefault, obj13);
    cResult[10] = tmp11.logo;
    cResult[11] = tmp20;
    cResult[12] = tmp24;
    tmp22 = tmp24;
  }
  const obj14 = { source: tmp16, style: tmp4.headerBackground };
  const tmp19 = hasOwnProperty(FastImageDefault, obj14);
  cResult[5] = tmp4.headerBackground;
  cResult[6] = tmp16;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : (function PremiumActivatedAlert(subscription) {
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let tmp4Result10;
  let tmp4Result12;
  let tmp4Result15;
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
  const obj6 = { onClose, confirmText: intl.string(intl4.t.TkTvBz), style: tmp.alert, children: items2 };
  const tmp11 = closure_9(premiumBranding);
  const tmp4Result = AlertDefault;
  intl = tmp7(1126).intl;
  const obj7 = { style: tmp.header, children: items };
  const tmp4Result9 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result10 = tmp4(10066);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result10 = tmp4(10067);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result10 = tmp4(10068);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result10 = tmp4(10069);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result10 = tmp4(10070);
  }
  items = [, , , ];
  const obj8 = { source: tmp4Result10, style: tmp.headerBackground };
  items[0] = hasOwnProperty(tmp4Result9, obj8);
  const tmp4Result11 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result12 = tmp4(10074);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result12 = tmp4(10075);
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result12 = tmp4(10076);
        }
      }
    }
    tmp4Result12 = tmp4(8096);
  }
  const obj9 = { source: tmp4Result12, style: tmp9.logo };
  items[1] = hasOwnProperty(tmp4Result11, obj9);
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: AssetRegistryDefault2, style: tmp.logoPlusPremiumGuild };
    const tmp4Result13 = FastImageDefault;
    tmp15Result = tmp15(tmp4Result13, obj10);
  }
  items[2] = tmp15Result;
  const tmp4Result14 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result15 = tmp4(7155);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = tmp4(7156);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = tmp4(10071);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = tmp4(10072);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = tmp4(10073);
  }
  const obj11 = { source: tmp4Result15, style: items1 };
  items1 = [tmp10.headerImage, tmp.headerImage];
  items[3] = hasOwnProperty(tmp4Result14, obj11);
  items2 = [metroRequire(_false, obj7), ];
  const obj12 = { style: tmp.body, children: items3 };
  const obj13 = { source: getActivatedImage(premiumBranding, tmp6), style: tmp11.animation };
  const tmp4Result16 = ShineAnimationDefault;
  items3 = [hasOwnProperty(tmp4Result16, obj13), ];
  const obj14 = { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) };
  const LegacyText = tmp7(1200).LegacyText;
  items3[1] = hasOwnProperty(LegacyText, obj14);
  items2[1] = metroRequire(_false, obj12);
  return metroRequire(tmp4Result, obj6);
});
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default tmp7;
