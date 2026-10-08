// Module ID: 10051
// Function ID: 10052
// Name: PremiumActivatedAlert
// Dependencies: [19, 17, 1085, 21, 5090, 5974, 4726, 10052, 10053, 10054, 10055, 10056, 7144, 7145, 10057, 10058, 10059, 10060, 10061, 8070, 10062, 4929, 10063, 10064, 10065, 10066, 10067, 10068, 10069, 10070, 10071, 1126, 558, 576, 4991, 10072, 10073, 1200, 5394, 2]

// Module 10051 (PremiumActivatedAlert)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtils from "PremiumUtils" /* 4726 */;
import shared from "shared" /* 4929 */;
import useThemeDefault from "useTheme" /* 4991 */;
import AlertDefault from "Alert" /* 5394 */;
import LegacyTokens from "LegacyTokens" /* 5974 */;
import AssetRegistryDefault from "AssetRegistry" /* 10071 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10072 */;
import ShineAnimationDefault from "ShineAnimation" /* 10073 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function getActivatedImage(cResult, arg1) {
  if (PremiumUtils.Branding.TIER_0 === cResult) {
    let tmp10Result;
    const tmpResult = shared;
    if (tmpResult.isThemeDark(arg1)) {
      tmp10Result = tmp10(10063);
    } else {
      tmp10Result = tmp10(10064);
    }
    return tmp10Result;
  } else if (PremiumUtils.Branding.TIER_1 === cResult) {
    let tmp8Result;
    const tmpResult4 = shared;
    if (tmpResult4.isThemeDark(arg1)) {
      tmp8Result = tmp8(10065);
    } else {
      tmp8Result = tmp8(10066);
    }
    return tmp8Result;
  } else if (PremiumUtils.Branding.TIER_2 === cResult) {
    let tmp6Result;
    const tmpResult5 = shared;
    if (tmpResult5.isThemeDark(arg1)) {
      tmp6Result = tmp6(10067);
    } else {
      tmp6Result = tmp6(10068);
    }
    return tmp6Result;
  } else if (PremiumUtils.Branding.BUNDLE === cResult) {
    let tmp4Result;
    const tmpResult6 = shared;
    if (tmpResult6.isThemeDark(arg1)) {
      tmp4Result = tmp4(10069);
    } else {
      tmp4Result = tmp4(10070);
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
({ Image: c3, View: closure_4, StyleSheet } = react_native);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerBackground: obj2, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: obj3 };
obj2 = { width: undefined, height: 100 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_8 = createStyles(obj);
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
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
let closure_10 = createStyles.createStyles((arg0) => {
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
  const tmp4 = closure_8();
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
  const tmp12 = closure_9(tmp9);
  const tmp13 = closure_10(tmp9);
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
      tmp7Result = tmp7(10052);
    } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
      tmp7Result = tmp7(10053);
    } else if (PremiumUtils.Branding.TIER_2 === tmp9) {
      tmp7Result = tmp7(10054);
    } else if (PremiumUtils.Branding.BUNDLE === tmp9) {
      tmp7Result = tmp7(10055);
    } else if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
      tmp7Result = tmp7(10056);
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
      let tmp7Result3;
      if (PremiumUtils.Branding.TIER_0 === tmp9) {
        tmp7Result3 = tmp7(10060);
      } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
        tmp7Result3 = tmp7(10061);
      } else {
        if (PremiumUtils.Branding.BUNDLE !== tmp9) {
          if (PremiumUtils.Branding.TIER_2 !== tmp9) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
              tmp7Result3 = tmp7(10062);
            }
          }
        }
        tmp7Result3 = tmp7(8070);
      }
      cResult[8] = tmp9;
      cResult[9] = tmp7Result3;
      tmp20 = tmp7Result3;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] === tmp11.logo) {
      let tmp22;
      if (cResult[11] === tmp20) {
        tmp22 = cResult[12];
      }
      if (cResult[13] === tmp9) {
        let tmp26;
        let tmp30;
        if (cResult[14] === tmp4.logoPlusPremiumGuild) {
          tmp26 = cResult[15];
        }
        if (cResult[16] !== tmp9) {
          let tmp7Result4;
          if (PremiumUtils.Branding.TIER_0 === tmp9) {
            tmp7Result4 = tmp7(7144);
          } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
            tmp7Result4 = tmp7(7145);
          } else if (PremiumUtils.Branding.TIER_2 === tmp9) {
            tmp7Result4 = tmp7(10057);
          } else if (PremiumUtils.Branding.BUNDLE === tmp9) {
            tmp7Result4 = tmp7(10058);
          } else if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
            tmp7Result4 = tmp7(10059);
          }
          cResult[16] = tmp9;
          cResult[17] = tmp7Result4;
          tmp30 = tmp7Result4;
        } else {
          tmp30 = cResult[17];
        }
        if (cResult[18] === tmp12.headerImage) {
          let tmp32;
          if (cResult[19] === tmp4.headerImage) {
            tmp32 = cResult[20];
          }
          if (cResult[21] === tmp30) {
            let tmp33;
            if (cResult[22] === tmp32) {
              tmp33 = cResult[23];
            }
            if (cResult[24] === tmp4.header) {
              if (cResult[25] === tmp33) {
                if (cResult[26] === tmp18) {
                  if (cResult[27] === tmp22) {
                    let tmp37;
                    if (cResult[28] === tmp26) {
                      tmp37 = cResult[29];
                    }
                    if (cResult[30] === tmp9) {
                      let tmp42;
                      if (cResult[31] === tmp8) {
                        tmp42 = cResult[32];
                      }
                      if (cResult[33] === tmp13.animation) {
                        let tmp45;
                        if (cResult[34] === tmp42) {
                          tmp45 = cResult[35];
                        }
                        if (cResult[36] === tmp9) {
                          let tmp49;
                          if (cResult[37] === renewalMutations) {
                            tmp49 = cResult[38];
                          }
                          if (cResult[39] === tmp4.description) {
                            let tmp52;
                            if (cResult[40] === tmp49) {
                              tmp52 = cResult[41];
                            }
                            if (cResult[42] === tmp4.body) {
                              if (cResult[43] === tmp45) {
                                let tmp55;
                                if (cResult[44] === tmp52) {
                                  tmp55 = cResult[45];
                                }
                                if (cResult[46] === onClose) {
                                  if (cResult[47] === tmp4.alert) {
                                    if (cResult[48] === tmp37) {
                                      let tmp59;
                                      if (cResult[49] === tmp55) {
                                        tmp59 = cResult[50];
                                      }
                                      return tmp59;
                                    }
                                  }
                                }
                                const obj6 = { onClose, confirmText: tmp14, style: _alert, children: items };
                                items = [tmp37, tmp55];
                                const tmp61 = metroImportDefault(AlertDefault, obj6);
                                cResult[46] = onClose;
                                cResult[47] = tmp4.alert;
                                cResult[48] = tmp37;
                                cResult[49] = tmp55;
                                cResult[50] = tmp61;
                                tmp59 = tmp61;
                              }
                            }
                            const obj7 = { style: tmp41, children: items1 };
                            items1 = [tmp45, tmp52];
                            const tmp58 = metroImportDefault(React3, obj7);
                            cResult[42] = tmp4.body;
                            cResult[43] = tmp45;
                            cResult[44] = tmp52;
                            cResult[45] = tmp58;
                            tmp55 = tmp58;
                          }
                          const obj8 = { style: tmp48, children: tmp49 };
                          const tmp54 = metroRequire(native.LegacyText, obj8);
                          cResult[39] = tmp4.description;
                          cResult[40] = tmp49;
                          cResult[41] = tmp54;
                          tmp52 = tmp54;
                        }
                        const tmp51 = getDescription(tmp9, renewalMutations);
                        cResult[36] = tmp9;
                        cResult[37] = renewalMutations;
                        cResult[38] = tmp51;
                        tmp49 = tmp51;
                      }
                      const obj9 = { source: tmp42, style: tmp13.animation };
                      const tmp47 = metroRequire(ShineAnimationDefault, obj9);
                      cResult[33] = tmp13.animation;
                      cResult[34] = tmp42;
                      cResult[35] = tmp47;
                      tmp45 = tmp47;
                    }
                    const tmp44 = getActivatedImage(tmp9, tmp8);
                    cResult[30] = tmp9;
                    cResult[31] = tmp8;
                    cResult[32] = tmp44;
                    tmp42 = tmp44;
                  }
                }
              }
            }
            const obj10 = { style: header, children: items2 };
            items2 = [tmp18, tmp22, tmp26, tmp33];
            const tmp40 = metroImportDefault(React3, obj10);
            cResult[24] = tmp4.header;
            cResult[25] = tmp33;
            cResult[26] = tmp18;
            cResult[27] = tmp22;
            cResult[28] = tmp26;
            cResult[29] = tmp40;
            tmp37 = tmp40;
          }
          const obj11 = { source: tmp30, style: tmp32 };
          const tmp36 = metroRequire(_false, obj11);
          cResult[21] = tmp30;
          cResult[22] = tmp32;
          cResult[23] = tmp36;
          tmp33 = tmp36;
        }
        const items3 = [tmp12.headerImage, tmp4.headerImage];
        cResult[18] = tmp12.headerImage;
        cResult[19] = tmp4.headerImage;
        cResult[20] = items3;
        tmp32 = items3;
      }
      let tmp27 = null;
      if (tmp9 === PremiumUtils.Branding.BUNDLE) {
        const obj12 = { source: AssetRegistryDefault2, style: tmp4.logoPlusPremiumGuild };
        tmp27 = metroRequire(_false, obj12);
      }
      cResult[13] = tmp9;
      cResult[14] = tmp4.logoPlusPremiumGuild;
      cResult[15] = tmp27;
      tmp26 = tmp27;
    }
    const obj13 = { source: tmp20, style: tmp11.logo };
    const tmp25 = metroRequire(_false, obj13);
    cResult[10] = tmp11.logo;
    cResult[11] = tmp20;
    cResult[12] = tmp25;
    tmp22 = tmp25;
  }
  const obj14 = { source: tmp16, style: tmp4.headerBackground };
  const tmp19 = metroRequire(_false, obj14);
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
  let tmp4Result5;
  let tmp4Result6;
  let tmp4Result7;
  let tmp9;
  subscription = subscription.subscription;
  const onClose = subscription.onClose;
  const tmp = closure_8();
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
  const tmp10 = closure_9(premiumBranding);
  const obj6 = { onClose, confirmText: intl.string(intl4.t.TkTvBz), style: tmp.alert, children: items2 };
  const tmp11 = closure_10(premiumBranding);
  const tmp4Result = AlertDefault;
  intl = tmp7(1126).intl;
  const obj7 = { style: tmp.header, children: items };
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result5 = tmp4(10052);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result5 = tmp4(10053);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result5 = tmp4(10054);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result5 = tmp4(10055);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result5 = tmp4(10056);
  }
  items = [, , , ];
  const obj8 = { source: tmp4Result5, style: tmp.headerBackground };
  items[0] = metroRequire(_false, obj8);
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result6 = tmp4(10060);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result6 = tmp4(10061);
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result6 = tmp4(10062);
        }
      }
    }
    tmp4Result6 = tmp4(8070);
  }
  const obj9 = { source: tmp4Result6, style: tmp9.logo };
  items[1] = metroRequire(_false, obj9);
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: AssetRegistryDefault2, style: tmp.logoPlusPremiumGuild };
    tmp15Result = tmp15(tmp16, obj10);
  }
  items[2] = tmp15Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    tmp4Result7 = tmp4(7144);
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result7 = tmp4(7145);
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result7 = tmp4(10057);
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result7 = tmp4(10058);
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result7 = tmp4(10059);
  }
  const obj11 = { source: tmp4Result7, style: items1 };
  items1 = [tmp10.headerImage, tmp.headerImage];
  items[3] = metroRequire(_false, obj11);
  items2 = [metroImportDefault(React3, obj7), ];
  const obj12 = { style: tmp.body, children: items3 };
  const obj13 = { source: getActivatedImage(premiumBranding, tmp6), style: tmp11.animation };
  const tmp4Result8 = ShineAnimationDefault;
  items3 = [metroRequire(tmp4Result8, obj13), ];
  const obj14 = { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) };
  const LegacyText = tmp7(1200).LegacyText;
  items3[1] = metroRequire(LegacyText, obj14);
  items2[1] = metroImportDefault(React3, obj12);
  return metroImportDefault(tmp4Result, obj6);
});
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default tmp7;
