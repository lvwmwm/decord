// Module ID: 13700
// Function ID: 13701
// Name: GuildBoostingMarketingCtaBar
// Dependencies: [32, 19, 17, 1389, 7107, 1085, 1391, 21, 1102, 5090, 587, 1200, 558, 4810, 5091, 576, 6841, 6865, 573, 13587, 8068, 8003, 4726, 5964, 10002, 9328, 1397, 13639, 13641, 13701, 1126, 5086, 6161, 13626, 6189, 7106, 13704, 13705, 5387, 5375, 13706, 2]

// Module 13700 (GuildBoostingMarketingCtaBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import timing from "timing" /* 5091 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5964 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10002 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore_mod from "UserStore" /* 1389 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7107 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import native from "native" /* 1200 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp3;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let View = react_native.View;
let UserStore = UserStore_mod;
({ AnalyticsObjects: metroImportAll, AnalyticsPages: c9, AnalyticsSections: c10 } = Constants);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
let createStyles = createStyles_mod;
let obj = { heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" }, headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 }, guildIcon: size, guildIconText: obj2, guildName: { alignSelf: "center", maxWidth: "50%", textAlign: "center" }, guildBoostCountWrapper: { position: "relative" }, totalBoostCountWrapper: { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" }, guildBoostCountIcon: { flexGrow: 0, flexShrink: 0, marginRight: 3 }, guildBoostCount: { flexGrow: 0, flexShrink: 1, opacity: 0.6 }, guildBoostCurrentUserCountWrapper: { position: "absolute", top: 3, width: "100%" }, guildBoostCurrentUserCount: { alignSelf: "center" }, cta: obj3, ctaPrimary: obj4, ctaSecondary: { marginTop: 10 }, giftIcon: { marginRight: 8 }, gradient: { overflow: "visible" }, headerWave: { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 }, headerStars: { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 }, boostingUnavailablePill: { marginTop: -13, marginBottom: 23 } };
size = { alignSelf: "center", borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj3 = { alignSelf: "center", borderRadius: nativeDefault.radii.xl, maxWidth: 300, width: "90%" };
obj4 = {};
const merged = Object.assign(native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS));
let closure_15 = createStyles(obj);
const __initData = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
const __initData2 = { code: "function GuildBoostingMarketingCtaBarTsx2(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBoostCountAnimatedStyles(isVisible) {
  _require = isVisible;
  let obj = require("ReanimatedRexport");
  const fn = function o() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isVisible) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, { duration: 250 }) };
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, isVisible };
  fn.__workletHash = 6895237370657;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, isVisible });
  return obj.useAnimatedStyle(fn);
}) : (function useBoostCountAnimatedStyles(isVisible) {
  _require = isVisible;
  let obj = require("ReanimatedRexport");
  const fn = function o() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isVisible) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, { duration: 250 }) };
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, isVisible };
  fn.__workletHash = 11947887687010;
  fn.__initData = __initData2;
  ({ withTiming: require("timing").withTiming, isVisible });
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingMarketingCtaBar(guild) {
  let analyticsLocations;
  let arr3;
  let boostSlots;
  let closure_2;
  let fractionalPremiumInfo;
  let headerContent;
  let heading;
  let intent;
  let items5;
  let items8;
  let onLayout;
  let onResult;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  let ref;
  let stateFromStores1;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp9;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(126);
  const tmp4 = closure_15();
  ({ fractionalPremiumInfo, guild } = guild);
  ({ previousGuildSubscriptionSlot, onLayout, premiumGroupRole, intent, onResult } = guild);
  let obj2 = stateFromStores1;
  const tmp5 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp5[0];
  dependencyMap = tmp5[1];
  const tmp8 = first(6841);
  analyticsLocations = tmp8(first(6865).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class C {
      constructor() {
        return ref.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp10 = C;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildBoostSlotStore];
    class H {
      constructor() {
        return boostSlots.boostSlots;
      }
    }
    cResult[2] = items1;
    cResult[3] = H;
    tmp14 = H;
    tmp13 = items1;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult3 = tmp(573);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp13, tmp14);
  if (cResult[4] !== stateFromStores1) {
    const _Object = Object;
    const keys = Object.keys(stateFromStores1);
    class H {
      constructor() {
        return boostSlots.boostSlots;
      }
    }
    cResult[5] = keys;
    arr3 = keys;
  } else {
    arr3 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === guild.id) {
      let arr4;
      if (cResult[8] === arr3) {
        arr4 = cResult[9];
      }
      const length = arr4.length;
      class H {
        constructor() {
          return boostSlots.boostSlots;
        }
      }
      const tmp19 = closure_18(first);
      const tmp20 = closure_18(!first);
      const tmp7Result = first(13587);
      const tmp7ResultResult = tmp7Result(fractionalPremiumInfo.endsAt, tmp(13587).CountDownMessageTypes.LONG_TIME_LEFT);
      const tmpResult4 = tmp(8068);
      const isInReverseTrial = tmpResult4.useIsInReverseTrial();
      const total = tmp7(8003)(guild.guild.id).total;
      UserStore = obj2.useRef(-1);
      if (cResult[10] === first) {
        let tmp24;
        let tmp25;
        let tmp30;
        let tmp34;
        let tmp45;
        let tmp50;
        if (cResult[11] === length) {
          tmp24 = cResult[12];
          tmp25 = cResult[13];
        }
        const effect = obj2.useEffect(tmp24, tmp25);
        if (cResult[14] !== stateFromStores) {
          const tmp7Result3 = first(4726);
          const isPremiumResult = tmp7Result3.isPremium(stateFromStores);
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
          cResult[15] = isPremiumResult;
        }
        class H {
          constructor() {
            return boostSlots.boostSlots;
          }
        }
        if (cResult[18] !== analyticsLocations) {
          function handleNavigateToPremium() {
            let obj2;
            const obj = { analyticsLocation: obj2, analyticsLocations };
            obj2 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
            openPremiumModalDefault(obj);
          }
          cResult[18] = analyticsLocations;
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
          cResult[19] = handleNavigateToPremium;
        }
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          function handleBoostCountPress() {
            window.clearTimeout(ref.current);
            closure_2((arg0) => !arg0);
          }
          cResult[20] = handleBoostCountPress;
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
        } else {
          tmp30 = cResult[20];
        }
        if (premiumGroupRole === tmp(1397).PremiumSubscriptionGroupRole.MEMBER) {
          let tmp35;
          if (cResult[21] !== tmp4.boostingUnavailablePill) {
            let obj3 = { style: tmp4.boostingUnavailablePill };
            class H {
              constructor() {
                return boostSlots.boostSlots;
              }
            }
            cResult[21] = tmp4.boostingUnavailablePill;
            cResult[22] = tmp37;
            tmp35 = tmp37;
          } else {
            tmp35 = cResult[22];
          }
          tmp34 = tmp35;
        } else {
          tmp34 = null;
          if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
            if (cResult[23] === tmp7ResultResult) {
              if (cResult[24] === isInReverseTrial) {
                let tmp31;
                if (cResult[25] === tmp4.boostingUnavailablePill) {
                  tmp31 = cResult[26];
                }
                tmp34 = tmp31;
              }
            }
            let obj4 = { fpDurationText: null, isInReverseTrial, style: tmp4.boostingUnavailablePill };
            class H {
              constructor() {
                return boostSlots.boostSlots;
              }
            }
            cResult[23] = tmp7ResultResult;
            cResult[24] = isInReverseTrial;
            cResult[25] = tmp4.boostingUnavailablePill;
            cResult[26] = closure_12(first(13641), obj4);
            closure_12(first(13641), obj4);
            class V {
              constructor() {
                tmp = length > 0 || closure_1;
                if (tmp) {
                  tmp2 = closure_6;
                  tmp3 = globalThis;
                  _window = window;
                  tmp4 = closure_14;
                  closure_6.current = window.setTimeout(() => {
                    closure_1_2((arg0) => !arg0);
                  }, closure_14);
                }
                return () => {
                  window.clearTimeout(ref.current);
                };
              }
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0.5, y: 0.5 };
          const items2 = [first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, , , , ];
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
          items2[2] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3;
          items2[3] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4;
          items2[4] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5;
          const items3 = [0, 0.3221, 0.429, 0.7606, 1];
          cResult[27] = point;
          cResult[28] = items2;
          cResult[29] = items3;
          class V {
            constructor() {
              tmp = length > 0 || closure_1;
              if (tmp) {
                tmp2 = closure_6;
                tmp3 = globalThis;
                _window = window;
                tmp4 = closure_14;
                closure_6.current = window.setTimeout(() => {
                  closure_1_2((arg0) => !arg0);
                }, closure_14);
              }
              return () => {
                window.clearTimeout(ref.current);
              };
            }
          }
        }
        const _Symbol3 = Symbol;
        const gradient = tmp4.gradient;
        class V {
          constructor() {
            tmp = length > 0 || closure_1;
            if (tmp) {
              tmp2 = closure_6;
              tmp3 = globalThis;
              _window = window;
              tmp4 = closure_14;
              closure_6.current = window.setTimeout(() => {
                closure_1_2((arg0) => !arg0);
              }, closure_14);
            }
            return () => {
              window.clearTimeout(ref.current);
            };
          }
        }
        const gradient2 = tmp4.gradient;
        if (cResult[33] !== guild) {
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
          cResult[33] = guild;
          cResult[34] = tmp47;
          tmp45 = tmp47;
        } else {
          tmp45 = cResult[34];
        }
        const _Symbol4 = Symbol;
        ({ headerContent, heading } = tmp4);
        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["AF+Tyh"]);
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
          cResult[35] = stringResult;
        }
        if (cResult[36] !== tmp4.heading) {
          const obj6 = { style: heading, color: "text-overlay-light", variant: "display-sm", children: null };
          class H {
            constructor() {
              return boostSlots.boostSlots;
            }
          }
          const tmp52 = closure_12(tmp(5086).Heading, obj6);
          cResult[36] = tmp4.heading;
          cResult[37] = tmp52;
          tmp50 = tmp52;
        } else {
          tmp50 = cResult[37];
        }
        if (cResult[38] === guild) {
          if (cResult[39] === tmp4.guildIcon) {
            let tmp53;
            if (cResult[40] === tmp4.guildIconText) {
              tmp53 = cResult[41];
            }
            if (cResult[42] === guild.name) {
              let tmp57;
              if (cResult[43] === tmp4.guildName) {
                tmp57 = cResult[44];
              }
              if (cResult[45] === tmp4.totalBoostCountWrapper) {
                let tmp62;
                let tmp63;
                if (cResult[46] === tmp20) {
                  tmp62 = cResult[47];
                }
                if (cResult[48] !== tmp4.guildBoostCountIcon) {
                  const obj7 = { style: tmp4.guildBoostCountIcon, source: first(13626), color: first(587).unsafe_rawColors.GUILD_BOOSTING_PINK, size: tmp(1200).Icon.Sizes.SMALL };
                  class H {
                    constructor() {
                      return boostSlots.boostSlots;
                    }
                  }
                  const tmp66 = closure_12(tmp65, obj7);
                  cResult[48] = tmp4.guildBoostCountIcon;
                  cResult[49] = tmp66;
                  tmp63 = tmp66;
                } else {
                  tmp63 = cResult[49];
                }
                const guildBoostCount = tmp4.guildBoostCount;
                class H {
                  constructor() {
                    return boostSlots.boostSlots;
                  }
                }
                if (cResult[52] === tmp4.guildBoostCount) {
                  let tmp68;
                  if (cResult[53] === tmp67) {
                    tmp68 = cResult[54];
                  }
                  if (cResult[55] === tmp62) {
                    if (cResult[56] === tmp63) {
                      let tmp71;
                      if (cResult[57] === tmp68) {
                        tmp71 = cResult[58];
                      }
                      if (cResult[59] === tmp19) {
                        let tmp75;
                        if (cResult[60] === tmp4.guildBoostCurrentUserCountWrapper) {
                          tmp75 = cResult[61];
                        }
                        if (cResult[62] === tmp4.guildBoostCount) {
                          let tmp76;
                          let tmp77;
                          if (cResult[63] === tmp4.guildBoostCurrentUserCount) {
                            tmp76 = cResult[64];
                          }
                          if (cResult[65] !== length) {
                            const intl2 = tmp(1126).intl;
                            const format = intl2.format;
                            const obj8 = { numSubscriptions: null };
                            class H {
                              constructor() {
                                return boostSlots.boostSlots;
                              }
                            }
                            const formatResult = format(tmp(1126).t.xXb78j, obj8);
                            cResult[65] = length;
                            cResult[66] = formatResult;
                            tmp77 = formatResult;
                          } else {
                            tmp77 = cResult[66];
                          }
                          if (cResult[67] === tmp76) {
                            let tmp79;
                            if (cResult[68] === tmp77) {
                              tmp79 = cResult[69];
                            }
                            if (cResult[70] === tmp75) {
                              let tmp81;
                              if (cResult[71] === tmp79) {
                                tmp81 = cResult[72];
                              }
                              if (cResult[73] === tmp4.guildBoostCountWrapper) {
                                if (cResult[74] === tmp71) {
                                  let tmp85;
                                  if (cResult[75] === tmp81) {
                                    tmp85 = cResult[76];
                                  }
                                  if (cResult[77] === tmp57) {
                                    let tmp88;
                                    if (cResult[78] === tmp85) {
                                      tmp88 = cResult[79];
                                    }
                                    if (cResult[80] === tmp4.cta) {
                                      let tmp92;
                                      if (cResult[81] === tmp4.ctaPrimary) {
                                        tmp92 = cResult[82];
                                      }
                                      if (cResult[83] === fractionalPremiumInfo.fractionalState) {
                                        if (cResult[84] === guild) {
                                          if (cResult[85] === intent) {
                                            if (cResult[86] === onResult) {
                                              if (cResult[87] === premiumGroupRole) {
                                                if (cResult[88] === previousGuildSubscriptionSlot) {
                                                  let tmp93;
                                                  if (cResult[89] === tmp92) {
                                                    tmp93 = cResult[90];
                                                  }
                                                  if (cResult[91] === tmp34) {
                                                    if (cResult[92] === tmp4.headerContent) {
                                                      if (cResult[93] === tmp50) {
                                                        if (cResult[94] === tmp53) {
                                                          if (cResult[95] === tmp88) {
                                                            let tmp98;
                                                            let tmp101;
                                                            let tmp104;
                                                            if (cResult[96] === tmp93) {
                                                              tmp98 = cResult[97];
                                                            }
                                                            if (cResult[98] !== tmp4.headerStars) {
                                                              class H {
                                                                constructor() {
                                                                  return boostSlots.boostSlots;
                                                                }
                                                              }
                                                              cResult[98] = tmp4.headerStars;
                                                              cResult[99] = tmp103;
                                                              tmp101 = tmp103;
                                                            } else {
                                                              tmp101 = cResult[99];
                                                            }
                                                            if (cResult[100] !== tmp4.headerWave) {
                                                              class H {
                                                                constructor() {
                                                                  return boostSlots.boostSlots;
                                                                }
                                                              }
                                                              cResult[100] = tmp4.headerWave;
                                                              cResult[101] = tmp106;
                                                              tmp104 = tmp106;
                                                            } else {
                                                              tmp104 = cResult[101];
                                                            }
                                                            class H {
                                                              constructor() {
                                                                return boostSlots.boostSlots;
                                                              }
                                                            }
                                                            const items4 = [tmp45, tmp98, tmp101, tmp104];
                                                            const obj11 = { angle: 0, angleCenter: tmp42, colors: tmp43, locations: tmp44, useAngle: true, style: gradient2, children: null };
                                                            class V {
                                                              constructor() {
                                                                tmp = length > 0 || closure_1;
                                                                if (tmp) {
                                                                  tmp2 = closure_6;
                                                                  tmp3 = globalThis;
                                                                  _window = window;
                                                                  tmp4 = closure_14;
                                                                  closure_6.current = window.setTimeout(() => {
                                                                    closure_1_2((arg0) => !arg0);
                                                                  }, closure_14);
                                                                }
                                                                return () => {
                                                                  window.clearTimeout(ref.current);
                                                                };
                                                              }
                                                            }
                                                            cResult[102] = tmp4.gradient;
                                                            cResult[103] = tmp45;
                                                            cResult[104] = tmp98;
                                                            cResult[105] = tmp101;
                                                            cResult[106] = tmp104;
                                                            cResult[107] = closure_13(first(5387), obj11);
                                                            const tmp109 = closure_13(first(5387), obj11);
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  class H {
                                                    constructor() {
                                                      return boostSlots.boostSlots;
                                                    }
                                                  }
                                                  const obj13 = { style: headerContent, children: items5 };
                                                  items5 = [tmp50, tmp53, tmp88, tmp34, tmp93];
                                                  const tmp100 = closure_13(length, obj13);
                                                  class V {
                                                    constructor() {
                                                      tmp = length > 0 || closure_1;
                                                      if (tmp) {
                                                        tmp2 = closure_6;
                                                        tmp3 = globalThis;
                                                        _window = window;
                                                        tmp4 = closure_14;
                                                        closure_6.current = window.setTimeout(() => {
                                                          closure_1_2((arg0) => !arg0);
                                                        }, closure_14);
                                                      }
                                                      return () => {
                                                        window.clearTimeout(ref.current);
                                                      };
                                                    }
                                                  }
                                                  cResult[92] = tmp4.headerContent;
                                                  cResult[93] = tmp50;
                                                  cResult[94] = tmp53;
                                                  cResult[95] = tmp88;
                                                  cResult[96] = tmp93;
                                                  cResult[97] = tmp100;
                                                  tmp98 = tmp100;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      class H {
                                        constructor() {
                                          return boostSlots.boostSlots;
                                        }
                                      }
                                      tmp95[0] = tmp92;
                                      tmp95[1] = guild;
                                      tmp95[2] = previousGuildSubscriptionSlot;
                                      tmp95[3] = constants3.HEADER;
                                      tmp95[4] = fractionalPremiumInfo.fractionalState;
                                      tmp95[5] = premiumGroupRole;
                                      tmp95[6] = intent;
                                      tmp95[7] = onResult;
                                      const tmp97 = closure_12(first(7106), tmp95);
                                      class V {
                                        constructor() {
                                          tmp = length > 0 || closure_1;
                                          if (tmp) {
                                            tmp2 = closure_6;
                                            tmp3 = globalThis;
                                            _window = window;
                                            tmp4 = closure_14;
                                            closure_6.current = window.setTimeout(() => {
                                              closure_1_2((arg0) => !arg0);
                                            }, closure_14);
                                          }
                                          return () => {
                                            window.clearTimeout(ref.current);
                                          };
                                        }
                                      }
                                      cResult[84] = guild;
                                      cResult[85] = intent;
                                      cResult[86] = onResult;
                                      cResult[87] = premiumGroupRole;
                                      cResult[88] = previousGuildSubscriptionSlot;
                                      cResult[89] = tmp92;
                                      cResult[90] = tmp97;
                                      tmp93 = tmp97;
                                    }
                                    const items6 = [, ];
                                    class H {
                                      constructor() {
                                        return boostSlots.boostSlots;
                                      }
                                    }
                                    items6[1] = tmp4.ctaPrimary;
                                    cResult[80] = tmp4.cta;
                                    cResult[81] = tmp4.ctaPrimary;
                                    cResult[82] = items6;
                                    tmp92 = items6;
                                  }
                                  class H {
                                    constructor() {
                                      return boostSlots.boostSlots;
                                    }
                                  }
                                  tmp90[0] = tmp30;
                                  const items7 = [tmp57, tmp85];
                                  tmp90[1] = items7;
                                  cResult[77] = tmp57;
                                  cResult[78] = tmp85;
                                  const tmp91 = closure_13(tmp(6189).PressableOpacity, tmp90);
                                  class V {
                                    constructor() {
                                      tmp = length > 0 || closure_1;
                                      if (tmp) {
                                        tmp2 = closure_6;
                                        tmp3 = globalThis;
                                        _window = window;
                                        tmp4 = closure_14;
                                        closure_6.current = window.setTimeout(() => {
                                          closure_1_2((arg0) => !arg0);
                                        }, closure_14);
                                      }
                                      return () => {
                                        window.clearTimeout(ref.current);
                                      };
                                    }
                                  }
                                  tmp88 = tmp91;
                                }
                              }
                              class H {
                                constructor() {
                                  return boostSlots.boostSlots;
                                }
                              }
                              const obj14 = { style: tmp61, children: items8 };
                              items8 = [tmp71, tmp81];
                              const tmp87 = closure_13(length, obj14);
                              cResult[73] = tmp4.guildBoostCountWrapper;
                              cResult[74] = tmp71;
                              class V {
                                constructor() {
                                  tmp = length > 0 || closure_1;
                                  if (tmp) {
                                    tmp2 = closure_6;
                                    tmp3 = globalThis;
                                    _window = window;
                                    tmp4 = closure_14;
                                    closure_6.current = window.setTimeout(() => {
                                      closure_1_2((arg0) => !arg0);
                                    }, closure_14);
                                  }
                                  return () => {
                                    window.clearTimeout(ref.current);
                                  };
                                }
                              }
                              cResult[75] = tmp81;
                              cResult[76] = tmp87;
                              tmp85 = tmp87;
                            }
                            class H {
                              constructor() {
                                return boostSlots.boostSlots;
                              }
                            }
                            tmp83[0] = tmp75;
                            tmp83[1] = tmp79;
                            const tmp84 = closure_12(first(4810).View, tmp83);
                            cResult[70] = tmp75;
                            cResult[71] = tmp79;
                            cResult[72] = tmp84;
                            tmp81 = tmp84;
                          }
                          class H {
                            constructor() {
                              return boostSlots.boostSlots;
                            }
                          }
                          const obj15 = { style: tmp76, variant: "text-sm/bold", color: "text-overlay-light", children: tmp77 };
                          const tmp80 = closure_12(tmp(5086).Text, obj15);
                          cResult[67] = tmp76;
                          cResult[68] = tmp77;
                          cResult[69] = tmp80;
                          tmp79 = tmp80;
                        }
                        const items9 = [, ];
                        class H {
                          constructor() {
                            return boostSlots.boostSlots;
                          }
                        }
                        items9[1] = tmp4.guildBoostCurrentUserCount;
                        cResult[62] = tmp4.guildBoostCount;
                        cResult[63] = tmp4.guildBoostCurrentUserCount;
                        cResult[64] = items9;
                        tmp76 = items9;
                      }
                      const items10 = [, ];
                      class H {
                        constructor() {
                          return boostSlots.boostSlots;
                        }
                      }
                      items10[1] = tmp4.guildBoostCurrentUserCountWrapper;
                      cResult[59] = tmp19;
                      cResult[60] = tmp4.guildBoostCurrentUserCountWrapper;
                      cResult[61] = items10;
                      tmp75 = items10;
                    }
                  }
                  class H {
                    constructor() {
                      return boostSlots.boostSlots;
                    }
                  }
                  tmp73[0] = tmp62;
                  const items11 = [tmp63, tmp68];
                  tmp73[1] = items11;
                  const tmp74 = closure_13(first(4810).View, tmp73);
                  cResult[55] = tmp62;
                  cResult[56] = tmp63;
                  class V {
                    constructor() {
                      tmp = length > 0 || closure_1;
                      if (tmp) {
                        tmp2 = closure_6;
                        tmp3 = globalThis;
                        _window = window;
                        tmp4 = closure_14;
                        closure_6.current = window.setTimeout(() => {
                          closure_1_2((arg0) => !arg0);
                        }, closure_14);
                      }
                      return () => {
                        window.clearTimeout(ref.current);
                      };
                    }
                  }
                  cResult[58] = tmp74;
                  tmp71 = tmp74;
                }
                const obj16 = { style: guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: tmp67 };
                cResult[52] = tmp4.guildBoostCount;
                cResult[53] = tmp67;
                const tmp70 = closure_12(tmp(5086).Text, obj16);
                class V {
                  constructor() {
                    tmp = length > 0 || closure_1;
                    if (tmp) {
                      tmp2 = closure_6;
                      tmp3 = globalThis;
                      _window = window;
                      tmp4 = closure_14;
                      closure_6.current = window.setTimeout(() => {
                        closure_1_2((arg0) => !arg0);
                      }, closure_14);
                    }
                    return () => {
                      window.clearTimeout(ref.current);
                    };
                  }
                }
                tmp68 = tmp70;
              }
              const items12 = [, ];
              class H {
                constructor() {
                  return boostSlots.boostSlots;
                }
              }
              items12[1] = tmp4.totalBoostCountWrapper;
              cResult[45] = tmp4.totalBoostCountWrapper;
              cResult[46] = tmp20;
              cResult[47] = items12;
              tmp62 = items12;
            }
            class H {
              constructor() {
                return boostSlots.boostSlots;
              }
            }
            tmp59[0] = tmp4.guildName;
            tmp59[3] = guild.name;
            const tmp60 = closure_12(tmp(5086).Text, tmp59);
            cResult[42] = guild.name;
            cResult[43] = tmp4.guildName;
            cResult[44] = tmp60;
            tmp57 = tmp60;
          }
        }
        ({ guildIcon: obj12.style, guildIconText: obj12.textStyle } = tmp4);
        const obj17 = { style: null, textStyle: null, guild, size: tmp(6161).GuildIconSizes.LARGE };
        const tmp7Result4 = first(6161);
        const tmp56 = closure_12(tmp7Result4, obj17);
        cResult[38] = guild;
        cResult[39] = tmp4.guildIcon;
        cResult[40] = tmp4.guildIconText;
        cResult[41] = tmp56;
        tmp53 = tmp56;
      }
      class V {
        constructor() {
          tmp = length > 0 || closure_1;
          if (tmp) {
            tmp2 = closure_6;
            tmp3 = globalThis;
            _window = window;
            tmp4 = closure_14;
            closure_6.current = window.setTimeout(() => {
              closure_1_2((arg0) => !arg0);
            }, closure_14);
          }
          return () => {
            window.clearTimeout(ref.current);
          };
        }
      }
      const items13 = [first, length];
      cResult[10] = first;
      cResult[11] = length;
      cResult[12] = V;
      cResult[13] = items13;
      tmp25 = items13;
      tmp24 = V;
    }
  }
  const found = arr3.filter((item) => null != tmp.premiumGuildSubscription && tmp.premiumGuildSubscription.guildId === guild.id);
  cResult[6] = stateFromStores1;
  cResult[7] = guild.id;
  cResult[8] = arr3;
  cResult[9] = found;
  arr4 = found;
}) : (function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  let Button;
  let Icon2;
  let Text2;
  let analyticsLocations;
  let boostSlots;
  let closure_2;
  let fractionalPremiumInfo;
  let guild;
  let intent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items12;
  let items13;
  let items15;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj19;
  let obj25;
  let obj26;
  let obj8;
  let onLayout;
  let onResult;
  let previousGuildSubscriptionSlot;
  let ref;
  let stateFromStores1;
  let tmp19;
  let tmp4Result3;
  let tmp = closure_15();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  const tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp6 = first(6841);
  analyticsLocations = tmp6(first(6865).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = guild(573);
  const items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  let obj2 = guild(573);
  const items1 = [GuildBoostSlotStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    let id;
    const keys = Object.keys(stateFromStores1);
    return keys.filter((item) => null != tmp.premiumGuildSubscription && tmp.premiumGuildSubscription.guildId === id.id).length;
  }, items2);
  const tmp11 = closure_18(first);
  const tmp12 = closure_18(!first);
  const tmp13 = first(13587);
  const tmp13Result = tmp13(fractionalPremiumInfo.endsAt, guild(13587).CountDownMessageTypes.LONG_TIME_LEFT);
  let obj3 = guild(8068);
  const isInReverseTrial = obj3.useIsInReverseTrial();
  const total = first(8003)(premiumGroupRole.guild.id).total;
  ref = stateFromStores1.useRef(-1);
  const items3 = [first, memo];
  const effect = stateFromStores1.useEffect(() => {
    const tmp = memo > 0 || first;
    if (tmp) {
      const _window = window;
      ref.current = window.setTimeout(() => {
        closure_1_2((arg0) => !arg0);
      }, closure_14);
    }
    return () => {
      window.clearTimeout(ref.current);
    };
  }, items3);
  let obj4 = first(4726);
  const isPremiumResult = obj4.isPremium(stateFromStores);
  if (premiumGroupRole === guild(1397).PremiumSubscriptionGroupRole.MEMBER) {
    const obj5 = { style: tmp.boostingUnavailablePill };
    tmp19 = closure_12(tmp4(13639), obj5);
  } else {
    tmp19 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      const obj6 = { fpDurationText: tmp13Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp19 = closure_12(tmp4(13641), obj6);
    }
  }
  const obj7 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: items4, locations: [0, 0.3221, 0.429, 0.7606, 1], useAngle: true, style: tmp.gradient, children: closure_13(tmp4Result3, obj8) };
  items4 = [, , , , ];
  const tmp4Result = first(5387);
  items4[0] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1;
  items4[1] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2;
  items4[2] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3;
  items4[3] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4;
  items4[4] = first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5;
  obj8 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: items5 };
  items5 = [, , , ];
  tmp4Result3 = first(5387);
  items5[0] = closure_12(first(13701), { guild });
  const obj9 = { style: tmp.headerContent, children: items6 };
  const obj10 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: intl.string(guild(1126).t["AF+Tyh"]) };
  const Heading = tmp7(5086).Heading;
  intl = tmp7(1126).intl;
  items6 = [closure_12(Heading, obj10), , , , ];
  const obj11 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: guild(6161).GuildIconSizes.LARGE };
  const tmp4Result4 = first(6161);
  items6[1] = closure_12(tmp4Result4, obj11);
  const obj12 = {
    onPress: function handleBoostCountPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: items7
  };
  const PressableOpacity = tmp7(6189).PressableOpacity;
  items7 = [, ];
  const obj13 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  items7[0] = closure_12(guild(5086).Text, obj13);
  const obj15 = { style: items8, children: items9 };
  items8 = [tmp12, tmp.totalBoostCountWrapper];
  const obj14 = { style: tmp.guildBoostCountWrapper, children: items10 };
  View = tmp4(4810).View;
  const obj16 = { style: tmp.guildBoostCountIcon, source: first(13626), color: first(587).unsafe_rawColors.GUILD_BOOSTING_PINK, size: guild(1200).Icon.Sizes.SMALL };
  const Icon = tmp7(1200).Icon;
  items9 = [closure_12(Icon, obj16), ];
  const obj17 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: intl2.format(guild(1126).t["pob/cL"], { subscriptions: total }) };
  const Text = tmp7(5086).Text;
  intl2 = tmp7(1126).intl;
  items9[1] = closure_12(Text, obj17);
  items10 = [closure_13(View, obj15), ];
  const obj18 = { style: items11, children: closure_12(Text2, obj19) };
  items11 = [tmp11, tmp.guildBoostCurrentUserCountWrapper];
  const View2 = tmp4(4810).View;
  obj19 = { style: items12, variant: "text-sm/bold", color: "text-overlay-light", children: intl3.format(guild(1126).t.xXb78j, { numSubscriptions: memo }) };
  items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  Text2 = tmp7(5086).Text;
  intl3 = tmp7(1126).intl;
  items10[1] = closure_12(View2, obj18);
  items7[1] = closure_13(memo, obj14);
  items6[2] = closure_13(PressableOpacity, obj12);
  items6[3] = tmp19;
  const obj20 = { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants3.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult };
  items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = closure_12(first(7106), obj20);
  items5[1] = closure_13(memo, obj9);
  const obj21 = { style: tmp.headerStars };
  items5[2] = closure_12(first(13704), obj21);
  const obj22 = { style: tmp.headerWave };
  items5[3] = closure_12(first(13705), obj22);
  const items14 = [closure_12(tmp4Result, obj7), ];
  const obj23 = { style: items15, children: closure_12(Button, obj26) };
  items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  Button = tmp7(5375).Button;
  const tmp22 = closure_13;
  if (isPremiumResult) {
    const obj24 = {
      variant: "secondary",
      text: intl5.string(guild(1126).t["8MYSQw"]),
      onPress: function handleGiftPress() {
          let obj4;
          const obj = BoostingActionCreators;
          obj.closeApplyBoostModal();
          const obj3 = { analyticsLocation: obj4, analyticsLocations };
          obj4 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
          const obj2 = utils_openGiftModal;
          obj2.openGiftModal(obj3);
        },
      icon: closure_12(Icon2, obj25),
      grow: true
    };
    intl5 = tmp7(1126).intl;
    obj25 = { size: guild(1200).Icon.Sizes.SMALL, source: first(13706), style: tmp.giftIcon };
    Icon2 = tmp7(1200).Icon;
    obj26 = obj24;
  } else {
    obj26 = {
      variant: "secondary",
      text: intl4.string(guild(1126).t.pj0XBN),
      onPress: function handleNavigateToPremium() {
          let obj2;
          const obj = { analyticsLocation: obj2, analyticsLocations };
          obj2 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
          openPremiumModalDefault(obj);
        },
      grow: true
    };
    intl4 = tmp7(1126).intl;
  }
  const obj27 = { children: items14 };
  items14[1] = closure_12(memo, obj23);
  return tmp22(memo, obj27);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default tmp6;
