// Module ID: 9518
// Function ID: 9519
// Name: YouBannerDecorations
// Dependencies: [19, 17, 2069, 1392, 4820, 1394, 21, 1385, 587, 4971, 558, 9519, 7559, 5001, 4807, 576, 1128, 504, 8675, 8718, 8729, 4978, 683, 2053, 9563, 9565, 9566, 9567, 6713, 14154, 14157, 14159, 9425, 7488, 14156, 5258, 2]
// Exports: getFloatingNavBottomMargin

// Module 9518 (YouBannerDecorations)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2069 */;
import dismissible_content from "dismissible_content" /* 4807 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4820 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5001 */;
import QuestTypes from "QuestTypes" /* 6713 */;
import useTrialOffer from "useTrialOffer" /* 7559 */;
import PromotionsHooks from "PromotionsHooks" /* 9519 */;
import tracking_Tracking from "tracking/Tracking" /* 9566 */;
import QuestUtils from "QuestUtils" /* 9567 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const useIntlLoaderStore = IntlLoaderStore.useIntlLoaderStore;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  let PX_24;
  let obj2;
  let obj3;
  let obj5;
  const obj = { containerFloatingWrap: obj2, containerFloatingGradient: obj3, containerFloating: obj5, containerFloatingContent: { maxWidth: "100%", flexDirection: "row" }, endcap: { width: nativeDefault.space.PX_16, flexShrink: 1 }, buttonsFloating: { flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 } };
  obj2 = { top: undefined, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3 = { color };
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  const obj4 = utils_PlatformUtils;
  const isIOSResult = obj4.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg0;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj5 = { marginBottom: PX_24, maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.lg, backgroundColor: BACKGROUND_SURFACE_HIGH, flexDirection: "row", borderColor, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp2(587).colors.BACKGROUND_SURFACE_HIGH;
  }
  const merged2 = Object.assign(tmp2(587).shadows.SHADOW_HIGH);
  ({ width: nativeDefault.space.PX_16, flexShrink: 1 });
  ({ flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasSettingsBadge() {
  const obj = PromotionsHooks;
  let tmp = obj.useUnseenOutboundPromotions().length > 0;
  const obj2 = useTrialOffer;
  const tmp2 = null != obj2.useTrialOffer(closure_9);
  const obj3 = DismissibleContentUnsafeUtils;
  const result = obj3.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  const tmp4 = !result && tmp2;
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
}) : (function useHasSettingsBadge() {
  const obj = PromotionsHooks;
  let tmp = obj.useUnseenOutboundPromotions().length > 0;
  const obj2 = useTrialOffer;
  const tmp2 = null != obj2.useTrialOffer(closure_9);
  const obj3 = DismissibleContentUnsafeUtils;
  const result = obj3.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  const tmp4 = !result && tmp2;
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
});
let closure_13 = tmp5;
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function getFloatingNavBottomMargin(bottom) {
  let PX_24;
  const obj = utils_PlatformUtils;
  const isIOSResult = obj.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + bottom;
  }
  return PX_24;
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBannerDecorations(navigateToSettings) {
  let containerBackground;
  let containerBorderColor;
  let currentUser;
  let first;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let isBadged;
  let items1;
  let items2;
  let items3;
  let navigateToShop;
  let paddingBottom;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let theme;
  let tmp6;
  let tmp7;
  let tmp = navigateToSettings;
  let obj = navigateToSettings(576);
  const cResult = obj.c(81);
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  ({ navigateToShop, shopButtonRef, settingsButtonRef, paddingBottom } = navigateToSettings);
  let num = 0;
  if (undefined !== paddingBottom) {
    num = paddingBottom;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isLoading) {
      let currentLocale;
      if (!isLoading.isLoading) {
        currentLocale = navigateToSettings(isBadged[16]).intl.currentLocale;
      }
      return currentLocale;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp5 = useIntlLoaderStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn2 = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[1] = items;
    cResult[2] = fn2;
    tmp7 = fn2;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  let id;
  const tmp11 = navigateToPremium(8675);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp11Result = tmp11(id);
  if (cResult[3] === tmp11Result) {
    let tmp14;
    if (cResult[4] === stateFromStores) {
      tmp14 = cResult[5];
    }
    ({ theme, primaryColor, secondaryColor } = navigateToPremium(8718)(tmp14));
    navigateToPremium(8718)(tmp14);
    if (cResult[6] === primaryColor) {
      if (cResult[7] === secondaryColor) {
        let tmp16;
        let tmp19;
        if (cResult[8] === theme) {
          tmp16 = cResult[9];
        }
        const tmpResult6 = tmp(8729);
        const userProfileColors = tmpResult6.useUserProfileColors(tmp16);
        ({ containerBackground, containerBorderColor, gradientSecondaryBackground } = userProfileColors);
        if (cResult[10] === containerBackground) {
          if (cResult[11] === primaryColor) {
            if (cResult[12] === secondaryColor) {
              let tmp18;
              if (cResult[13] === theme) {
                tmp18 = cResult[14];
              }
              if (cResult[15] === gradientSecondaryBackground) {
                let tmp20;
                let tmp36;
                if (cResult[16] === tmp18) {
                  tmp20 = cResult[17];
                }
                const tmp31 = closure_12(num, tmp20, gradientSecondaryBackground, containerBorderColor);
                const tmpResult7 = tmp(2053);
                const hasPremiumSubscriptionToDisplay = tmpResult7.useHasPremiumSubscriptionToDisplay();
                const tmp34 = closure_13();
                dependencyMap = tmp34;
                const tmp35 = navigateToPremium(9563)();
                const showBadge = tmp35.showBadge;
                const dismissBadge = tmp35.dismissBadge;
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmpResult8 = tmp(9565);
                  const isEligibleForQuests = tmpResult8.getIsEligibleForQuests();
                  cResult[18] = isEligibleForQuests;
                  tmp36 = isEligibleForQuests;
                } else {
                  tmp36 = cResult[18];
                }
                const tmpResult9 = tmp(7559);
                const tmp39 = null != tmpResult9.useTrialOffer(closure_9);
                let closure_5 = tmp39;
                if (cResult[19] === tmp39) {
                  if (cResult[20] === tmp34) {
                    let tmp40;
                    let tmp41;
                    if (cResult[21] === navigateToSettings) {
                      tmp40 = cResult[22];
                    }
                    if (cResult[23] !== navigateToPremium) {
                      function ee() {
                        const obj = tracking_Tracking;
                        const result = obj.trackYouTabNitroIconPress();
                        navigateToPremium();
                      }
                      cResult[23] = navigateToPremium;
                      cResult[24] = ee;
                      tmp41 = ee;
                    } else {
                      tmp41 = cResult[24];
                    }
                    if (cResult[25] === dismissBadge) {
                      let tmp42;
                      if (cResult[26] === showBadge) {
                        tmp42 = cResult[27];
                      }
                      if (cResult[28] === tmp42) {
                        let tmp43;
                        if (cResult[29] === showBadge) {
                          tmp43 = cResult[30];
                        }
                        if (cResult[31] === navigateToShop) {
                          let tmp47;
                          if (cResult[32] === shopButtonRef) {
                            tmp47 = cResult[33];
                          }
                          if (cResult[34] === hasPremiumSubscriptionToDisplay) {
                            let tmp50;
                            let tmp54;
                            if (cResult[35] === tmp41) {
                              tmp50 = cResult[36];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl4 = tmp(1128).intl;
                              const stringResult = intl4.string(tmp(1128).t["3D5yo/"]);
                              cResult[37] = stringResult;
                              tmp54 = stringResult;
                            } else {
                              tmp54 = cResult[37];
                            }
                            if (cResult[38] === tmp34) {
                              if (cResult[39] === tmp40) {
                                let tmp56;
                                if (cResult[40] === settingsButtonRef) {
                                  tmp56 = cResult[41];
                                }
                                if (cResult[42] === tmp43) {
                                  if (cResult[43] === tmp47) {
                                    if (cResult[44] === tmp50) {
                                      let tmp60;
                                      if (cResult[45] === tmp56) {
                                        tmp60 = cResult[46];
                                      }
                                      if (cResult[47] === tmp60) {
                                        let tmp62;
                                        if (cResult[48] === tmp5) {
                                          tmp62 = cResult[49];
                                        }
                                        if (cResult[50] === tmp31.buttonsFloating) {
                                          let tmp65;
                                          let tmp70;
                                          let tmp69;
                                          let tmp71;
                                          let tmp73;
                                          if (cResult[51] === tmp62) {
                                            tmp65 = cResult[52];
                                          }
                                          const color = tmp31.containerFloatingGradient.color;
                                          const _Symbol3 = Symbol;
                                          if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                            const point = { x: 0, y: 0 };
                                            const point1 = { x: 0, y: 1 };
                                            cResult[53] = point;
                                            cResult[54] = point1;
                                            tmp70 = point1;
                                            tmp69 = point;
                                          } else {
                                            tmp69 = cResult[53];
                                            tmp70 = cResult[54];
                                          }
                                          if (cResult[55] !== color) {
                                            const obj21 = navigateToPremium(683)(color);
                                            const alphaResult = obj21.alpha(0);
                                            const hexResult = alphaResult.hex();
                                            cResult[55] = color;
                                            cResult[56] = hexResult;
                                            tmp71 = hexResult;
                                          } else {
                                            tmp71 = cResult[56];
                                          }
                                          if (cResult[57] !== color) {
                                            const obj23 = navigateToPremium(683)(color);
                                            const alphaResult1 = obj23.alpha(1);
                                            const hexResult1 = alphaResult1.hex();
                                            cResult[57] = color;
                                            cResult[58] = hexResult1;
                                            tmp73 = hexResult1;
                                          } else {
                                            tmp73 = cResult[58];
                                          }
                                          if (cResult[59] === tmp71) {
                                            let tmp75;
                                            if (cResult[60] === tmp73) {
                                              tmp75 = cResult[61];
                                            }
                                            if (cResult[62] === tmp75) {
                                              let tmp76;
                                              let tmp83;
                                              if (cResult[63] === tmp31.containerFloatingGradient) {
                                                tmp76 = cResult[64];
                                              }
                                              if (cResult[65] !== tmp31.endcap) {
                                                let obj2 = { style: tmp31.endcap, pointerEvents: "none" };
                                                const tmp86 = closure_10(dismissBadge, obj2);
                                                cResult[65] = tmp31.endcap;
                                                cResult[66] = tmp86;
                                                tmp83 = tmp86;
                                              } else {
                                                tmp83 = cResult[66];
                                              }
                                              if (cResult[67] === tmp65) {
                                                let tmp87;
                                                let tmp91;
                                                if (cResult[68] === tmp31.containerFloatingContent) {
                                                  tmp87 = cResult[69];
                                                }
                                                if (cResult[70] !== tmp31.endcap) {
                                                  const obj3 = { style: tmp31.endcap, pointerEvents: "none" };
                                                  const tmp94 = closure_10(dismissBadge, obj3);
                                                  cResult[70] = tmp31.endcap;
                                                  cResult[71] = tmp94;
                                                  tmp91 = tmp94;
                                                } else {
                                                  tmp91 = cResult[71];
                                                }
                                                if (cResult[72] === tmp31.containerFloating) {
                                                  if (cResult[73] === tmp83) {
                                                    if (cResult[74] === tmp87) {
                                                      let tmp95;
                                                      if (cResult[75] === tmp91) {
                                                        tmp95 = cResult[76];
                                                      }
                                                      if (cResult[77] === tmp31.containerFloatingWrap) {
                                                        if (cResult[78] === tmp76) {
                                                          let tmp99;
                                                          if (cResult[79] === tmp95) {
                                                            tmp99 = cResult[80];
                                                          }
                                                          return tmp99;
                                                        }
                                                      }
                                                      const obj4 = { style: tmp31.containerFloatingWrap, pointerEvents: "box-none", children: items1 };
                                                      items1 = [tmp76, tmp95];
                                                      const tmp102 = closure_11(dismissBadge, obj4);
                                                      cResult[77] = tmp31.containerFloatingWrap;
                                                      cResult[78] = tmp76;
                                                      cResult[79] = tmp95;
                                                      cResult[80] = tmp102;
                                                      tmp99 = tmp102;
                                                    }
                                                  }
                                                }
                                                const obj5 = { style: tmp31.containerFloating, children: items2 };
                                                items2 = [tmp83, tmp87, tmp91];
                                                const tmp98 = closure_11(dismissBadge, obj5);
                                                cResult[72] = tmp31.containerFloating;
                                                cResult[73] = tmp83;
                                                cResult[74] = tmp87;
                                                cResult[75] = tmp91;
                                                cResult[76] = tmp98;
                                                tmp95 = tmp98;
                                              }
                                              const obj6 = { style: tmp31.containerFloatingContent, children: tmp65 };
                                              const tmp90 = closure_10(dismissBadge, obj6);
                                              cResult[67] = tmp65;
                                              cResult[68] = tmp31.containerFloatingContent;
                                              cResult[69] = tmp90;
                                              tmp87 = tmp90;
                                            }
                                            const obj9 = { style: tmp31.containerFloatingGradient, pointerEvents: "none" };
                                            const tmp10Result = navigateToPremium(5258);
                                            const merged = Object.assign(tmp75);
                                            const tmp82 = closure_10(tmp10Result, obj9);
                                            cResult[62] = tmp75;
                                            cResult[63] = tmp31.containerFloatingGradient;
                                            cResult[64] = tmp82;
                                            tmp76 = tmp82;
                                          }
                                          const obj10 = { start: tmp69, end: tmp70, colors: items3 };
                                          items3 = [tmp71, tmp73];
                                          cResult[59] = tmp71;
                                          cResult[60] = tmp73;
                                          cResult[61] = obj10;
                                          tmp75 = obj10;
                                        }
                                        const obj11 = { style: tmp31.buttonsFloating, pointerEvents: "box-none", children: tmp62 };
                                        const tmp68 = closure_10(dismissBadge, obj11);
                                        cResult[50] = tmp31.buttonsFloating;
                                        cResult[51] = tmp62;
                                        cResult[52] = tmp68;
                                        tmp65 = tmp68;
                                      }
                                      const obj12 = { children: tmp60 };
                                      const tmp64 = closure_10(tmp(14156).YouScreenNavIconMeasurer, obj12, tmp5);
                                      cResult[47] = tmp60;
                                      cResult[48] = tmp5;
                                      cResult[49] = tmp64;
                                      tmp62 = tmp64;
                                    }
                                  }
                                }
                                const items4 = [tmp43, tmp47, tmp50, tmp56];
                                const found = items4.filter((item) => null != item);
                                cResult[42] = tmp43;
                                cResult[43] = tmp47;
                                cResult[44] = tmp50;
                                cResult[45] = tmp56;
                                cResult[46] = found;
                                tmp60 = found;
                              }
                            }
                            const obj13 = { ref: settingsButtonRef, IconComponent: tmp(7488).SettingsIcon, accessibilityLabel: tmp54, onPress: tmp40, showRedDot: tmp34, testID: "you_tab_settings_button" };
                            const tmp10Result5 = navigateToPremium(14154);
                            const tmp59 = closure_10(tmp10Result5, obj13, "settings");
                            cResult[38] = tmp34;
                            cResult[39] = tmp40;
                            cResult[40] = settingsButtonRef;
                            cResult[41] = tmp59;
                            tmp56 = tmp59;
                          }
                          let tmp51 = null;
                          if (!hasPremiumSubscriptionToDisplay) {
                            const obj14 = { IconComponent: tmp(9425).NitroWheelIcon, accessibilityLabel: intl2.string(tmp(1128).t.Ipxkog), label: intl3.string(tmp(1128).t.Ipxkog), onPress: tmp41 };
                            const tmp10Result6 = navigateToPremium(14154);
                            intl2 = tmp(1128).intl;
                            intl3 = tmp(1128).intl;
                            tmp51 = closure_10(tmp10Result6, obj14, "nitro");
                          }
                          cResult[34] = hasPremiumSubscriptionToDisplay;
                          cResult[35] = tmp41;
                          cResult[36] = tmp51;
                          tmp50 = tmp51;
                        }
                        const obj15 = { shopButtonRef, navigateToShop };
                        const tmp49 = closure_10(navigateToPremium(14159), obj15, "shop");
                        cResult[31] = navigateToShop;
                        cResult[32] = shopButtonRef;
                        cResult[33] = tmp49;
                        tmp47 = tmp49;
                      }
                      let tmp44 = null;
                      if (tmp36) {
                        const obj16 = { IconComponent: tmp(14157).QuestsIcon, accessibilityLabel: intl.string(tmp(1128).t.JALI2K), onPress: tmp42, showRedDot: showBadge };
                        const tmp10Result7 = navigateToPremium(14154);
                        intl = tmp(1128).intl;
                        tmp44 = closure_10(tmp10Result7, obj16, "quests");
                      }
                      cResult[28] = tmp42;
                      cResult[29] = showBadge;
                      cResult[30] = tmp44;
                      tmp43 = tmp44;
                    }
                    function te() {
                      const tmp = showBadge;
                      if (tmp) {
                        dismissBadge(ContentDismissActionType.TAKE_ACTION);
                      }
                      const obj = QuestUtils;
                      const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
                      obj.openQuestHome(obj2);
                    }
                    cResult[25] = dismissBadge;
                    cResult[26] = showBadge;
                    cResult[27] = te;
                    tmp42 = te;
                  }
                }
                class J {
                  constructor() {
                    const obj = tracking_Tracking;
                    const obj2 = { isBadged };
                    const result = obj.trackYouTabSettingsIconPress(obj2);
                    navigateToSettings();
                    let tmp5 = closure_5;
                    if (tmp5) {
                      const tmpResult = DismissibleContentUnsafeUtils;
                      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4807).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    if (tmp5) {
                      const tmpResult2 = DismissibleContentUnsafeUtils;
                      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(4807).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                  }
                }
                cResult[19] = tmp39;
                cResult[20] = tmp34;
                cResult[21] = navigateToSettings;
                cResult[22] = J;
                tmp40 = J;
              }
              let hexResult3 = null;
              if (null != tmp18) {
                const mix = navigateToPremium(683).mix;
                const tmp10Result8 = navigateToPremium(683);
                const obj7 = navigateToPremium(683)(tmp18);
                const hexResult2 = obj7.hex("rgb");
                const obj8 = navigateToPremium(683)(tmp18);
                const mixResult = mix(gradientSecondaryBackground, hexResult2, obj8.alpha(), "rgb");
                hexResult3 = mixResult.hex("rgb");
              }
              cResult[15] = gradientSecondaryBackground;
              cResult[16] = tmp18;
              cResult[17] = hexResult3;
              tmp20 = hexResult3;
            }
          }
        }
        const tmpResult10 = tmp(4978);
        if (!tmpResult10.isThemeLight(theme)) {
          tmp19 = containerBackground;
        } else {
          tmp19 = null;
          if (null != primaryColor) {
            tmp19 = null;
          }
        }
        cResult[10] = containerBackground;
        cResult[11] = primaryColor;
        cResult[12] = secondaryColor;
        cResult[13] = theme;
        cResult[14] = tmp19;
        tmp18 = tmp19;
      }
    }
    const obj17 = { theme, primaryColor, secondaryColor };
    cResult[6] = primaryColor;
    cResult[7] = secondaryColor;
    cResult[8] = theme;
    cResult[9] = obj17;
    tmp16 = obj17;
  }
  const obj18 = { user: stateFromStores, displayProfile: tmp11Result };
  cResult[3] = tmp11Result;
  cResult[4] = stateFromStores;
  cResult[5] = obj18;
  tmp14 = obj18;
}) : (function YouBannerDecorations(navigateToSettings) {
  let c3;
  let containerBorderColor;
  let found;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items7;
  let items8;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let theme;
  let tmp11;
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  let num = navigateToSettings.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToSettings);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  react = undefined;
  let isBadged;
  let showBadge;
  let dismissBadge;
  let currentUser;
  let color;
  let tmp = dismissBadge((isLoading) => {
    let currentLocale;
    if (!isLoading.isLoading) {
      currentLocale = navigateToSettings(gradientSecondaryBackground[16]).intl.currentLocale;
    }
    return currentLocale;
  });
  let obj = navigateToSettings(gradientSecondaryBackground[17]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = navigateToPremium;
  let id;
  const tmp6 = navigateToPremium(gradientSecondaryBackground[18]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = tmp6(id);
  ({ theme, primaryColor, secondaryColor } = tmp5(gradientSecondaryBackground[19])({ user: stateFromStores, displayProfile: tmp6Result }));
  const tmp9 = tmp5(gradientSecondaryBackground[19])({ user: stateFromStores, displayProfile: tmp6Result });
  const tmp2Result = navigateToSettings(gradientSecondaryBackground[20]);
  const userProfileColors = tmp2Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const containerBackground = userProfileColors.containerBackground;
  const tmp2Result5 = navigateToSettings(gradientSecondaryBackground[21]);
  if (!tmp2Result5.isThemeLight(theme)) {
    tmp11 = containerBackground;
  } else {
    tmp11 = null;
    if (null != primaryColor) {
      tmp11 = null;
    }
  }
  react = tmp11;
  let obj4 = react;
  const items1 = [gradientSecondaryBackground, tmp11];
  const tmp12 = closure_12(num, react.useMemo(() => {
    let hexResult1 = null;
    if (null != c3) {
      const mix = _modDef683.mix;
      const obj = _modDef683(c3);
      const hexResult = obj.hex("rgb");
      const obj2 = _modDef683(c3);
      const mixResult = mix(gradientSecondaryBackground, hexResult, obj2.alpha(), "rgb");
      hexResult1 = mixResult.hex("rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  const tmp2Result6 = navigateToSettings(gradientSecondaryBackground[23]);
  const hasPremiumSubscriptionToDisplay = tmp2Result6.useHasPremiumSubscriptionToDisplay();
  const tmp14 = closure_13();
  isBadged = tmp14;
  const tmp15 = tmp5(gradientSecondaryBackground[24])();
  showBadge = tmp15.showBadge;
  dismissBadge = tmp15.dismissBadge;
  const tmp2Result7 = navigateToSettings(gradientSecondaryBackground[25]);
  const isEligibleForQuests = tmp2Result7.getIsEligibleForQuests();
  const tmp2Result8 = navigateToSettings(gradientSecondaryBackground[12]);
  const tmp17 = null != tmp2Result8.useTrialOffer(closure_9);
  currentUser = tmp17;
  const items2 = [tmp14, navigateToSettings, tmp17];
  const items3 = [navigateToPremium];
  const callback = react.useCallback(() => {
    const obj = tracking_Tracking;
    const obj2 = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj2);
    navigateToSettings();
    let tmp5 = currentUser;
    if (tmp5) {
      const tmpResult = DismissibleContentUnsafeUtils;
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4807).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      const tmpResult2 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(4807).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const items4 = [showBadge, dismissBadge];
  const callback1 = react.useCallback(() => {
    const obj = tracking_Tracking;
    const result = obj.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  let tmp21 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp2(tmp3[30]).QuestsIcon, accessibilityLabel: intl.string(tmp2(tmp3[16]).t.JALI2K), onPress: tmp20, showRedDot: showBadge };
    const tmp5Result = tmp5(gradientSecondaryBackground[29]);
    intl = tmp2(tmp3[16]).intl;
    tmp21 = closure_10(tmp5Result, obj2, "quests");
  }
  const items5 = [tmp21, closure_10(tmp5(tmp3[31]), { shopButtonRef, navigateToShop }, "shop"), , ];
  let tmp24Result = null;
  if (!hasPremiumSubscriptionToDisplay) {
    const obj3 = { IconComponent: navigateToSettings(gradientSecondaryBackground[32]).NitroWheelIcon, accessibilityLabel: intl2.string(navigateToSettings(gradientSecondaryBackground[16]).t.Ipxkog), label: intl3.string(navigateToSettings(gradientSecondaryBackground[16]).t.Ipxkog), onPress: callback1 };
    const tmp5Result4 = tmp5(gradientSecondaryBackground[29]);
    intl2 = tmp2(tmp3[16]).intl;
    intl3 = tmp2(tmp3[16]).intl;
    tmp24Result = tmp24(tmp5Result4, obj3, "nitro");
  }
  items5[2] = tmp24Result;
  const obj5 = { ref: settingsButtonRef, IconComponent: navigateToSettings(gradientSecondaryBackground[33]).SettingsIcon, accessibilityLabel: intl4.string(navigateToSettings(gradientSecondaryBackground[16]).t["3D5yo/"]), onPress: callback, showRedDot: tmp14, testID: "you_tab_settings_button" };
  const tmp5Result5 = tmp5(gradientSecondaryBackground[29]);
  intl4 = tmp2(tmp3[16]).intl;
  items5[3] = closure_10(tmp5Result5, obj5, "settings");
  const obj6 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: closure_10(navigateToSettings(gradientSecondaryBackground[34]).YouScreenNavIconMeasurer, { children: found }, tmp) };
  found = items5.filter((item) => null != item);
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const obj7 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: items7 };
  const tmp24Result2 = closure_10(isBadged, obj6);
  const memo = obj4.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef683(color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef683(color);
    const alphaResult1 = obj4.alpha(1);
    items[1] = alphaResult1.hex();
    return obj;
  }, items6);
  const obj8 = { style: tmp12.containerFloatingGradient, pointerEvents: "none" };
  const tmp5Result6 = tmp5(gradientSecondaryBackground[35]);
  const merged = Object.assign(memo);
  items7 = [closure_10(tmp5Result6, obj8), ];
  const obj9 = { style: tmp12.containerFloating, children: items8 };
  items8 = [, , ];
  const obj10 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[0] = closure_10(isBadged, obj10);
  const obj11 = { style: tmp12.containerFloatingContent, children: tmp24Result2 };
  items8[1] = closure_10(isBadged, obj11);
  const obj12 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[2] = closure_10(isBadged, obj12);
  items7[1] = closure_11(isBadged, obj9);
  return closure_11(isBadged, obj7);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export { getFloatingNavBottomMargin };
export const useHasSettingsBadge = tmp5;
