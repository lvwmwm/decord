// Module ID: 17504
// Function ID: 17505
// Name: YouExpiringTrialOfferCard
// Dependencies: [19, 17, 13992, 1085, 7151, 1392, 21, 1102, 5092, 587, 17505, 1265, 1126, 558, 576, 4702, 573, 7169, 7161, 17503, 2128, 5088, 4769, 1200, 6184, 9035, 5391, 6903, 2]

// Module 17504 (YouExpiringTrialOfferCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import _modDef4702 from "module_4702" /* 4702 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import ColorConstants from "ColorConstants" /* 7151 */;
import useCountdownDefault from "useCountdown" /* 7161 */;
import NoticeActionCreatorsDefault from "NoticeActionCreators" /* 17505 */;
import react from "react" /* 19 */;
import NoticeStore from "NoticeStore" /* 13992 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const HelpdeskUtilsDefault = tmp(2128);
const UserProfileCardDefault = tmp(6903);
function getNoticeCopy(days, trialPeriod, termsUrl) {
  let formatResult;
  if (days.days > 0) {
    const intl3 = intl4.intl;
    const obj2 = { days: days.days, trialPeriod, termsUrl };
    formatResult = intl3.format(intl4.t.GPqVWT, obj2);
  } else if (days.hours > 0) {
    const intl2 = intl4.intl;
    const obj3 = { hours: days.hours, trialPeriod, termsUrl };
    formatResult = intl2.format(intl4.t.WFMtg1, obj3);
  } else {
    const intl = intl4.intl;
    const format = intl.format;
    const _Math = Math;
    const obj = { minutes: Math.max(days.minutes, 1), trialPeriod, termsUrl };
    const SxXB42 = intl4.t.SxXB42;
    formatResult = format(SxXB42, obj);
  }
  return formatResult;
}
const View = react_native.View;
({ AnalyticEvents: metroRequire, HelpdeskArticles: metroImportDefault, HorizontalGradient: metroImportAll, NoticeTypes: c9 } = Constants);
const Gradients = ColorConstants.Gradients;
let closure_11 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = 10 * DurationsDefault.Millis.SECOND;
let createStyles = createStyles_mod;
let obj = { header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 }, closeButton: { position: "absolute", top: 16, right: 16 }, closeIcon: obj2, linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, primaryCTA: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.round, gap: 4 };
let closure_16 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouExpiringTrialOfferCard(navigateToPremium) {
  let intervalCount1;
  let linearGradient;
  let shouldShowExpiringTrialOfferCard;
  let tmp13;
  let tmp8;
  let tmp9;
  let untilAtLeast;
  let tmp = navigateToPremium;
  let tmp2 = dependencyMap;
  let obj = navigateToPremium(576);
  const cResult = obj.c(61);
  navigateToPremium = navigateToPremium.navigateToPremium;
  const style = navigateToPremium.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = untilAtLeast(4702)();
    const addResult = obj2.add(5, "days");
    cResult[0] = addResult;
    untilAtLeast = addResult;
  } else {
    untilAtLeast = cResult[0];
  }
  const tmp7 = closure_16();
  dependencyMap = tmp7;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [shouldShowExpiringTrialOfferCard];
    class A {
      constructor() {
        return shouldShowExpiringTrialOfferCard.getNoticeType();
      }
    }
    cResult[1] = items;
    cResult[2] = A;
    tmp9 = A;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const tmpResult4 = tmp(7169);
  const premiumTrialOffer = tmpResult4.usePremiumTrialOffer();
  if (cResult[3] !== premiumTrialOffer) {
    let num5 = 0;
    if (null != premiumTrialOffer) {
      num5 = 0;
      if (null != premiumTrialOffer.expiresAt) {
        const expiresAt = premiumTrialOffer.expiresAt;
        num5 = expiresAt.getTime();
      }
    }
    class A {
      constructor() {
        return shouldShowExpiringTrialOfferCard.getNoticeType();
      }
    }
    cResult[3] = premiumTrialOffer;
    cResult[4] = num5;
    tmp13 = num5;
  } else {
    tmp13 = cResult[4];
  }
  const tmp16 = untilAtLeast(7161)(tmp13, closure_15);
  const tmpResult5 = tmp(17503);
  shouldShowExpiringTrialOfferCard = tmpResult5.useShouldShowExpiringTrialOfferCard();
  if (cResult[5] === stateFromStores) {
    if (cResult[6] === shouldShowExpiringTrialOfferCard) {
      let tmp18;
      let tmp19;
      if (cResult[7] === premiumTrialOffer) {
        tmp18 = cResult[8];
        tmp19 = cResult[9];
      }
      const effect = stateFromStores.useEffect(tmp18, tmp19);
      class A {
        constructor() {
          return shouldShowExpiringTrialOfferCard.getNoticeType();
        }
      }
      if (shouldShowExpiringTrialOfferCard) {
        if (null != premiumTrialOffer) {
          if (null != stateFromStores) {
            let PREMIUM_TRIAL;
            if (cResult[10] === tmp16) {
              if (cResult[11] === tmp7.header) {
                const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
                const tmp22 = cResult[12];
                class A {
                  constructor() {
                    return shouldShowExpiringTrialOfferCard.getNoticeType();
                  }
                }
                if (tmp22 === undefined) {
                  const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
                  const tmp24 = cResult[13];
                  class A {
                    constructor() {
                      return shouldShowExpiringTrialOfferCard.getNoticeType();
                    }
                  }
                  if (tmp24 === undefined) {
                    let tmp26;
                    let tmp27;
                    let tmp28;
                    let str3;
                    let tmp29;
                    if (cResult[14] === premiumTrialOffer.trialId) {
                      tmp26 = cResult[15];
                      tmp27 = cResult[16];
                      tmp28 = cResult[17];
                      class A {
                        constructor() {
                          return shouldShowExpiringTrialOfferCard.getNoticeType();
                        }
                      }
                      str3 = cResult[19];
                      tmp29 = cResult[20];
                    }
                    if (cResult[21] === tmp26) {
                      if (cResult[22] === str2) {
                        if (cResult[23] === str3) {
                          let tmp43;
                          if (cResult[24] === tmp29) {
                            tmp43 = cResult[25];
                          }
                          if (cResult[26] === tmp27) {
                            if (cResult[27] === tmp28) {
                              let tmp47;
                              let tmp53;
                              let tmp52;
                              if (cResult[28] === tmp43) {
                                tmp47 = cResult[29];
                              }
                              const _Symbol = Symbol;
                              const closeButton = tmp7.closeButton;
                              class A {
                                constructor() {
                                  return shouldShowExpiringTrialOfferCard.getNoticeType();
                                }
                              }
                              if (tmp51 === Symbol.for("react.memo_cache_sentinel")) {
                                const intl = tmp(1126).intl;
                                const stringResult = intl.string(tmp(1126).t.cpT0Cq);
                                class A {
                                  constructor() {
                                    return shouldShowExpiringTrialOfferCard.getNoticeType();
                                  }
                                }
                                cResult[30] = stringResult;
                                cResult[31] = tmp55;
                                tmp53 = tmp55;
                                tmp52 = stringResult;
                              } else {
                                tmp52 = cResult[30];
                                tmp53 = cResult[31];
                              }
                              if (cResult[32] === stateFromStores) {
                                let tmp56;
                                let tmp57;
                                if (cResult[33] === premiumTrialOffer.trialId) {
                                  tmp56 = cResult[34];
                                }
                                if (cResult[35] !== tmp7.closeIcon.color) {
                                  size = { width: 16, height: 16, color: tmp7.closeIcon.color };
                                  class A {
                                    constructor() {
                                      return shouldShowExpiringTrialOfferCard.getNoticeType();
                                    }
                                  }
                                  cResult[35] = tmp7.closeIcon.color;
                                  cResult[36] = tmp59;
                                  tmp57 = tmp59;
                                } else {
                                  tmp57 = cResult[36];
                                }
                                if (cResult[37] === tmp7.closeButton) {
                                  if (cResult[38] === tmp56) {
                                    let tmp60;
                                    if (cResult[39] === tmp57) {
                                      tmp60 = cResult[40];
                                    }
                                    const _Symbol2 = Symbol;
                                    const primaryCTA = tmp7.primaryCTA;
                                    class A {
                                      constructor() {
                                        return shouldShowExpiringTrialOfferCard.getNoticeType();
                                      }
                                    }
                                    if (tmp62 === Symbol.for("react.memo_cache_sentinel")) {
                                      const intl2 = tmp(1126).intl;
                                      const stringResult1 = intl2.string(tmp(1126).t.J61px0);
                                      class A {
                                        constructor() {
                                          return shouldShowExpiringTrialOfferCard.getNoticeType();
                                        }
                                      }
                                      cResult[41] = stringResult1;
                                    }
                                    if (cResult[42] === navigateToPremium) {
                                      if (cResult[43] === stateFromStores) {
                                        let tmp65;
                                        if (cResult[44] === premiumTrialOffer.trialId) {
                                          tmp65 = cResult[45];
                                        }
                                        const _Symbol3 = Symbol;
                                        class A {
                                          constructor() {
                                            return shouldShowExpiringTrialOfferCard.getNoticeType();
                                          }
                                        }
                                        if (cResult[47] === stateFromStores) {
                                          let tmp68;
                                          if (cResult[48] === tmp7.linearGradient) {
                                            tmp68 = cResult[49];
                                          }
                                          if (cResult[50] === tmp7.primaryCTA) {
                                            if (cResult[51] === tmp65) {
                                              let tmp69;
                                              if (cResult[52] === tmp68) {
                                                tmp69 = cResult[53];
                                              }
                                              if (cResult[54] === tmp47) {
                                                if (cResult[55] === tmp60) {
                                                  let tmp73;
                                                  if (cResult[56] === tmp69) {
                                                    tmp73 = cResult[57];
                                                  }
                                                  if (cResult[58] === tmp73) {
                                                    let tmp77;
                                                    if (cResult[59] === style) {
                                                      tmp77 = cResult[60];
                                                    }
                                                    return tmp77;
                                                  }
                                                  class A {
                                                    constructor() {
                                                      return shouldShowExpiringTrialOfferCard.getNoticeType();
                                                    }
                                                  }
                                                  tmp79[0] = style;
                                                  class Q {
                                                    constructor() {
                                                      let PREMIUM_TIER_2_TRI_COLOR;
                                                      const obj = { style: linearGradient.linearGradient, start: metroImportAll.START, end: metroImportAll.END, colors: PREMIUM_TIER_2_TRI_COLOR };
                                                      const tmp = authStore2;
                                                      const tmp2 = LinearGradientDefault;
                                                      if (React4.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
                                                        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                                      } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
                                                        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                                      } else {
                                                        const _Error = Error;
                                                        const _HermesInternal = HermesInternal;
                                                        const self = this;
                                                        const self2 = this;
                                                        const error = new Error("Unsupported notice type: " + tmp3);
                                                        throw error;
                                                      }
                                                      return tmp(tmp2, obj);
                                                    }
                                                  }
                                                  const tmp80 = closure_12(untilAtLeast(6903), tmp79);
                                                  cResult[58] = tmp73;
                                                  cResult[59] = style;
                                                  cResult[60] = tmp80;
                                                  tmp77 = tmp80;
                                                }
                                              }
                                              class A {
                                                constructor() {
                                                  return shouldShowExpiringTrialOfferCard.getNoticeType();
                                                }
                                              }
                                              let obj3 = { children: tmp75 };
                                              class Q {
                                                constructor() {
                                                  let PREMIUM_TIER_2_TRI_COLOR;
                                                  const obj = { style: linearGradient.linearGradient, start: metroImportAll.START, end: metroImportAll.END, colors: PREMIUM_TIER_2_TRI_COLOR };
                                                  const tmp = authStore2;
                                                  const tmp2 = LinearGradientDefault;
                                                  if (React4.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
                                                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                                  } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
                                                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                                  } else {
                                                    const _Error = Error;
                                                    const _HermesInternal = HermesInternal;
                                                    const self = this;
                                                    const self2 = this;
                                                    const error = new Error("Unsupported notice type: " + tmp3);
                                                    throw error;
                                                  }
                                                  return tmp(tmp2, obj);
                                                }
                                              }
                                              tmp75[0] = tmp47;
                                              tmp75[1] = tmp60;
                                              tmp75[2] = tmp69;
                                              const tmp76 = closure_14(closure_13, obj3);
                                              cResult[54] = tmp47;
                                              cResult[55] = tmp60;
                                              cResult[56] = tmp69;
                                              cResult[57] = tmp76;
                                              tmp73 = tmp76;
                                            }
                                          }
                                          class A {
                                            constructor() {
                                              return shouldShowExpiringTrialOfferCard.getNoticeType();
                                            }
                                          }
                                          tmp71[0] = primaryCTA;
                                          class Q {
                                            constructor() {
                                              let PREMIUM_TIER_2_TRI_COLOR;
                                              const obj = { style: linearGradient.linearGradient, start: metroImportAll.START, end: metroImportAll.END, colors: PREMIUM_TIER_2_TRI_COLOR };
                                              const tmp = authStore2;
                                              const tmp2 = LinearGradientDefault;
                                              if (React4.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
                                                PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                              } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
                                                PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                const self = this;
                                                const self2 = this;
                                                const error = new Error("Unsupported notice type: " + tmp3);
                                                throw error;
                                              }
                                              return tmp(tmp2, obj);
                                            }
                                          }
                                          tmp71[2] = tmp65;
                                          tmp71[3] = tmp67;
                                          tmp71[4] = tmp68;
                                          const tmp72 = closure_12(tmp(1200).ShinyButton, tmp71);
                                          cResult[50] = tmp7.primaryCTA;
                                          cResult[51] = tmp65;
                                          cResult[52] = tmp68;
                                          cResult[53] = tmp72;
                                          tmp69 = tmp72;
                                        }
                                        class Q {
                                          constructor() {
                                            let PREMIUM_TIER_2_TRI_COLOR;
                                            const obj = { style: linearGradient.linearGradient, start: metroImportAll.START, end: metroImportAll.END, colors: PREMIUM_TIER_2_TRI_COLOR };
                                            const tmp = authStore2;
                                            const tmp2 = LinearGradientDefault;
                                            if (React4.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
                                              PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                            } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
                                              PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                            } else {
                                              const _Error = Error;
                                              const _HermesInternal = HermesInternal;
                                              const self = this;
                                              const self2 = this;
                                              const error = new Error("Unsupported notice type: " + tmp3);
                                              throw error;
                                            }
                                            return tmp(tmp2, obj);
                                          }
                                        }
                                        cResult[47] = stateFromStores;
                                        cResult[48] = tmp7.linearGradient;
                                        cResult[49] = Q;
                                        tmp68 = Q;
                                      }
                                    }
                                    const fn2 = function $() {
                                      if (null != stateFromStores) {
                                        const obj2 = { notice_type: tmp, trial_id: tmp2 };
                                        const obj = AnalyticsUtilsDefault;
                                        obj.track(metroRequire.APP_NOTICE_PRIMARY_CTA_OPENED, obj2);
                                      }
                                      navigateToPremium();
                                    };
                                    cResult[42] = navigateToPremium;
                                    cResult[43] = stateFromStores;
                                    cResult[44] = premiumTrialOffer.trialId;
                                    cResult[45] = fn2;
                                    tmp65 = fn2;
                                  }
                                }
                                class A {
                                  constructor() {
                                    return shouldShowExpiringTrialOfferCard.getNoticeType();
                                  }
                                }
                                let obj4 = { style: null, accessibilityRole: "button", accessibilityLabel: tmp52, hitSlop: tmp53, onPress: tmp56, children: tmp57 };
                                const tmp61 = closure_12(tmp(6184).PressableOpacity, obj4);
                                cResult[37] = tmp7.closeButton;
                                cResult[38] = tmp56;
                                cResult[39] = tmp57;
                                cResult[40] = tmp61;
                                tmp60 = tmp61;
                              }
                              const fn = function q() {
                                if (null != stateFromStores) {
                                  const obj2 = { notice_type: tmp, trial_id: tmp2 };
                                  const obj = AnalyticsUtilsDefault;
                                  obj.track(metroRequire.APP_NOTICE_CLOSED, obj2);
                                }
                                const obj3 = NoticeActionCreatorsDefault;
                                const obj4 = { untilAtLeast };
                                obj3.dismiss(obj4);
                              };
                              cResult[32] = stateFromStores;
                              cResult[33] = premiumTrialOffer.trialId;
                              cResult[34] = fn;
                              tmp56 = fn;
                            }
                          }
                          class A {
                            constructor() {
                              return shouldShowExpiringTrialOfferCard.getNoticeType();
                            }
                          }
                          tmp49[0] = tmp28;
                          const tmp50 = closure_12(tmp27, tmp49);
                          cResult[26] = tmp27;
                          cResult[27] = tmp28;
                          cResult[28] = tmp43;
                          cResult[29] = tmp50;
                          tmp47 = tmp50;
                        }
                      }
                    }
                    class A {
                      constructor() {
                        return shouldShowExpiringTrialOfferCard.getNoticeType();
                      }
                    }
                    tmp45[0] = str2;
                    tmp45[2] = tmp29;
                    const tmp46 = closure_12(tmp26, tmp45);
                    cResult[21] = tmp26;
                    cResult[22] = str2;
                    cResult[23] = str3;
                    cResult[24] = tmp29;
                    cResult[25] = tmp46;
                    tmp43 = tmp46;
                  }
                }
              }
            }
            untilAtLeast(2128);
            class A {
              constructor() {
                return shouldShowExpiringTrialOfferCard.getNoticeType();
              }
            }
            if (premiumTrialOffer.trialId === closure_11) {
              PREMIUM_TRIAL = constants2.NITRO_TRIAL_FOR_ALL;
            } else {
              PREMIUM_TRIAL = constants2.PREMIUM_TRIAL;
            }
            const header = tmp7.header;
            const tmp31Result = tmp31(PREMIUM_TRIAL);
            const Text = tmp(5088).Text;
            const subscriptionTrial3 = premiumTrialOffer.subscriptionTrial;
            let interval;
            const formatIntervalDuration = tmp(4769).formatIntervalDuration;
            tmp(4769);
            const tmp37 = getNoticeCopy;
            if (subscriptionTrial3 != null) {
              interval = subscriptionTrial3.interval;
            }
            const subscriptionTrial4 = premiumTrialOffer.subscriptionTrial;
            const obj5 = { intervalType: interval, intervalCount: intervalCount1 };
            intervalCount1 = undefined;
            if (subscriptionTrial4 != null) {
              intervalCount1 = subscriptionTrial4.intervalCount;
            }
            const tmp37Result = tmp37(tmp16, formatIntervalDuration(obj5), tmp31Result);
            cResult[10] = tmp16;
            cResult[11] = tmp7.header;
            const subscriptionTrial5 = premiumTrialOffer.subscriptionTrial;
            let interval1;
            if (subscriptionTrial5 != null) {
              interval1 = subscriptionTrial5.interval;
            }
            cResult[12] = interval1;
            const subscriptionTrial6 = premiumTrialOffer.subscriptionTrial;
            if (subscriptionTrial6 != null) {
              const intervalCount = subscriptionTrial6.intervalCount;
            }
            class O {
              constructor() {
                const tmp = shouldShowExpiringTrialOfferCard && null != stateFromStores && null != premiumTrialOffer;
                if (tmp) {
                  const trialId = premiumTrialOffer.trialId;
                  const obj2 = { notice_type: stateFromStores, trial_id: trialId };
                  const obj = AnalyticsUtilsDefault;
                  obj.track(metroRequire.APP_NOTICE_VIEWED, obj2);
                }
              }
            }
            cResult[14] = premiumTrialOffer.trialId;
            cResult[15] = Text;
            cResult[16] = tmp36;
            cResult[17] = header;
            cResult[18] = "heading-sm/medium";
            cResult[19] = "text-default";
            cResult[20] = tmp37Result;
            tmp29 = tmp37Result;
            str3 = "text-default";
            tmp28 = header;
            tmp27 = tmp36;
            tmp26 = Text;
          }
        }
        return null;
      } else {
        return null;
      }
    }
  }
  class O {
    constructor() {
      const tmp = shouldShowExpiringTrialOfferCard && null != stateFromStores && null != premiumTrialOffer;
      if (tmp) {
        const trialId = premiumTrialOffer.trialId;
        const obj2 = { notice_type: stateFromStores, trial_id: trialId };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.APP_NOTICE_VIEWED, obj2);
      }
    }
  }
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  cResult[5] = stateFromStores;
  cResult[6] = shouldShowExpiringTrialOfferCard;
  cResult[7] = premiumTrialOffer;
  cResult[8] = O;
  cResult[9] = items1;
  tmp19 = items1;
  tmp18 = O;
}) : (function YouExpiringTrialOfferCard(navigateToPremium) {
  let Text;
  let intervalCount;
  let intl;
  let intl2;
  let items2;
  let linearGradient;
  let obj7;
  let untilAtLeast;
  navigateToPremium = navigateToPremium.navigateToPremium;
  importDefault = undefined;
  dependencyMap = undefined;
  let shouldShowExpiringTrialOfferCard;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const style = navigateToPremium.style;
  let obj = _modDef4702();
  importDefault = obj.add(5, "days");
  const tmp3 = closure_16();
  dependencyMap = tmp3;
  const tmp4 = navigateToPremium;
  let obj2 = navigateToPremium(573);
  const items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = obj2.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj3 = navigateToPremium(7169);
  const premiumTrialOffer = obj3.usePremiumTrialOffer();
  let num = 0;
  const tmp7 = useCountdownDefault;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  const tmp7Result = tmp7(num, closure_15);
  const tmp4Result = tmp4(17503);
  shouldShowExpiringTrialOfferCard = tmp4Result.useShouldShowExpiringTrialOfferCard();
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  const effect = stateFromStores.useEffect(() => {
    const tmp = shouldShowExpiringTrialOfferCard && null != stateFromStores && null != premiumTrialOffer;
    if (tmp) {
      const trialId = premiumTrialOffer.trialId;
      const obj2 = { notice_type: stateFromStores, trial_id: trialId };
      const obj = AnalyticsUtilsDefault;
      obj.track(metroRequire.APP_NOTICE_VIEWED, obj2);
    }
  }, items1);
  if (shouldShowExpiringTrialOfferCard) {
    if (null != premiumTrialOffer) {
      if (null != stateFromStores) {
        let PREMIUM_TRIAL;
        const getArticleURL = HelpdeskUtilsDefault.getArticleURL;
        HelpdeskUtilsDefault;
        if (premiumTrialOffer.trialId === closure_11) {
          PREMIUM_TRIAL = constants2.NITRO_TRIAL_FOR_ALL;
        } else {
          PREMIUM_TRIAL = constants2.PREMIUM_TRIAL;
        }
        let obj4 = { style: tmp3.header, children: closure_12(Text, obj7) };
        const articleURL = getArticleURL(PREMIUM_TRIAL);
        Text = tmp4(5088).Text;
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        let interval;
        const formatIntervalDuration = tmp4(4769).formatIntervalDuration;
        tmp4(4769);
        const tmp17 = premiumTrialOffer;
        const tmp18 = getNoticeCopy;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        const obj5 = { intervalType: interval, intervalCount };
        intervalCount = undefined;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
        const obj6 = { children: items2 };
        obj7 = { variant: "heading-sm/medium", color: "text-default", children: tmp18(tmp7Result, formatIntervalDuration(obj5), articleURL) };
        items2 = [closure_12(tmp17, obj4), , ];
        const obj8 = {
          style: tmp3.closeButton,
          accessibilityRole: "button",
          accessibilityLabel: intl.string(tmp4(1126).t.cpT0Cq),
          hitSlop: { top: 8, right: 8, bottom: 8, left: 8 },
          onPress() {
                  if (null != stateFromStores) {
                    const obj2 = { notice_type: tmp, trial_id: tmp2 };
                    const obj = AnalyticsUtilsDefault;
                    obj.track(metroRequire.APP_NOTICE_CLOSED, obj2);
                  }
                  const obj3 = NoticeActionCreatorsDefault;
                  const obj4 = { untilAtLeast };
                  obj3.dismiss(obj4);
                },
          children: closure_12(tmp4(1200).CloseIcon, size)
        };
        const PressableOpacity = tmp4(6184).PressableOpacity;
        intl = tmp4(1126).intl;
        size = { width: 16, height: 16, color: tmp3.closeIcon.color };
        items2[1] = closure_12(PressableOpacity, obj8);
        const obj9 = {
          style: tmp3.primaryCTA,
          text: intl2.string(tmp4(1126).t.J61px0),
          onPress() {
                  if (null != stateFromStores) {
                    const obj2 = { notice_type: tmp, trial_id: tmp2 };
                    const obj = AnalyticsUtilsDefault;
                    obj.track(metroRequire.APP_NOTICE_PRIMARY_CTA_OPENED, obj2);
                  }
                  navigateToPremium();
                },
          renderIcon() {
                  return closure_1_12(navigateToPremium(linearGradient[25]).NitroWheelIcon, { color: "white", size: "sm" });
                },
          renderLinearGradient() {
                  let PREMIUM_TIER_2_TRI_COLOR;
                  const obj = { style: linearGradient.linearGradient, start: metroImportAll.START, end: metroImportAll.END, colors: PREMIUM_TIER_2_TRI_COLOR };
                  const tmp = authStore2;
                  const tmp2 = LinearGradientDefault;
                  if (React4.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                  } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                  } else {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const self = this;
                    const self2 = this;
                    const error = new Error("Unsupported notice type: " + tmp3);
                    throw error;
                  }
                  return tmp(tmp2, obj);
                }
        };
        const ShinyButton = tmp4(1200).ShinyButton;
        intl2 = tmp4(1126).intl;
        items2[2] = closure_12(ShinyButton, obj9);
        const obj10 = { style, children: closure_14(closure_13, obj6) };
        closure_14(closure_13, obj6);
        return closure_12(UserProfileCardDefault, obj10);
      }
    }
    return null;
  } else {
    return null;
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default tmp5;
