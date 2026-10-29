// Module ID: 9581
// Function ID: 9582
// Name: YouBannerDecorations
// Dependencies: [19, 17, 2067, 1389, 4854, 1391, 21, 1382, 587, 5005, 558, 9582, 7617, 5035, 4841, 576, 1125, 504, 8715, 8758, 8769, 5012, 683, 2051, 9626, 9628, 9629, 9632, 9633, 6771, 14625, 14634, 14642, 14644, 9487, 7547, 14635, 5295, 2]
// Exports: getFloatingNavBottomMargin

// Module 9581 (YouBannerDecorations)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2067 */;
import dismissible_content from "dismissible_content" /* 4841 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4854 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5035 */;
import QuestTypes from "QuestTypes" /* 6771 */;
import useTrialOffer from "useTrialOffer" /* 7617 */;
import PromotionsHooks from "PromotionsHooks" /* 9582 */;
import tracking_Tracking from "tracking/Tracking" /* 9632 */;
import QuestUtils from "QuestUtils" /* 9633 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
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
  const cResult = obj.c(84);
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
  const tmp11 = navigateToPremium(8715);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp11Result = tmp11(id);
  if (cResult[3] === tmp11Result) {
    let tmp14;
    if (cResult[4] === stateFromStores) {
      tmp14 = cResult[5];
    }
    ({ theme, primaryColor, secondaryColor } = navigateToPremium(8758)(tmp14));
    navigateToPremium(8758)(tmp14);
    if (cResult[6] === primaryColor) {
      if (cResult[7] === secondaryColor) {
        let tmp16;
        let tmp19;
        if (cResult[8] === theme) {
          tmp16 = cResult[9];
        }
        const tmpResult6 = tmp(8769);
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
                let placement;
                if (cResult[16] === tmp18) {
                  tmp20 = cResult[17];
                }
                const tmp31 = closure_12(num, tmp20, gradientSecondaryBackground, containerBorderColor);
                const tmpResult7 = tmp(2051);
                const hasPremiumSubscriptionToDisplay = tmpResult7.useHasPremiumSubscriptionToDisplay();
                const tmp34 = closure_13();
                dependencyMap = tmp34;
                const tmp35 = navigateToPremium(9626)();
                const showBadge = tmp35.showBadge;
                const dismissBadge = tmp35.dismissBadge;
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmpResult8 = tmp(9628);
                  const isEligibleForQuests = tmpResult8.getIsEligibleForQuests();
                  cResult[18] = isEligibleForQuests;
                  tmp36 = isEligibleForQuests;
                } else {
                  tmp36 = cResult[18];
                }
                const tmp38 = navigateToPremium(9629)("YouBannerDecorations");
                if (tmp38 != null) {
                  placement = tmp38.placement;
                }
                const tmpResult9 = tmp(7617);
                const tmp40 = null != tmpResult9.useTrialOffer(closure_9);
                let closure_5 = tmp40;
                if (cResult[19] === tmp40) {
                  if (cResult[20] === tmp34) {
                    let tmp41;
                    let tmp42;
                    if (cResult[21] === navigateToSettings) {
                      tmp41 = cResult[22];
                    }
                    if (cResult[23] !== navigateToPremium) {
                      function ne() {
                        const obj = tracking_Tracking;
                        const result = obj.trackYouTabNitroIconPress();
                        navigateToPremium();
                      }
                      cResult[23] = navigateToPremium;
                      cResult[24] = ne;
                      tmp42 = ne;
                    } else {
                      tmp42 = cResult[24];
                    }
                    if (cResult[25] === dismissBadge) {
                      let tmp43;
                      let tmp45;
                      if (cResult[26] === showBadge) {
                        tmp43 = cResult[27];
                      }
                      if (cResult[28] !== ("you_screen" === placement)) {
                        let tmp46 = null;
                        if ("you_screen" === placement) {
                          tmp46 = closure_10(tmp10(14625), {}, "conjure");
                        }
                        cResult[28] = "you_screen" === placement;
                        cResult[29] = tmp46;
                        tmp45 = tmp46;
                      } else {
                        tmp45 = cResult[29];
                      }
                      if (cResult[30] === tmp43) {
                        let tmp48;
                        if (cResult[31] === showBadge) {
                          tmp48 = cResult[32];
                        }
                        if (cResult[33] === navigateToShop) {
                          let tmp52;
                          if (cResult[34] === shopButtonRef) {
                            tmp52 = cResult[35];
                          }
                          if (cResult[36] === hasPremiumSubscriptionToDisplay) {
                            let tmp55;
                            let tmp59;
                            if (cResult[37] === tmp42) {
                              tmp55 = cResult[38];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl4 = tmp(1125).intl;
                              const stringResult = intl4.string(tmp(1125).t["3D5yo/"]);
                              cResult[39] = stringResult;
                              tmp59 = stringResult;
                            } else {
                              tmp59 = cResult[39];
                            }
                            if (cResult[40] === tmp34) {
                              if (cResult[41] === tmp41) {
                                let tmp61;
                                if (cResult[42] === settingsButtonRef) {
                                  tmp61 = cResult[43];
                                }
                                if (cResult[44] === tmp45) {
                                  if (cResult[45] === tmp48) {
                                    if (cResult[46] === tmp52) {
                                      if (cResult[47] === tmp55) {
                                        let tmp65;
                                        if (cResult[48] === tmp61) {
                                          tmp65 = cResult[49];
                                        }
                                        if (cResult[50] === tmp65) {
                                          let tmp67;
                                          if (cResult[51] === tmp5) {
                                            tmp67 = cResult[52];
                                          }
                                          if (cResult[53] === tmp31.buttonsFloating) {
                                            let tmp70;
                                            let tmp75;
                                            let tmp74;
                                            let tmp76;
                                            let tmp78;
                                            if (cResult[54] === tmp67) {
                                              tmp70 = cResult[55];
                                            }
                                            const color = tmp31.containerFloatingGradient.color;
                                            const _Symbol3 = Symbol;
                                            if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                              const point = { x: 0, y: 0 };
                                              const point1 = { x: 0, y: 1 };
                                              cResult[56] = point;
                                              cResult[57] = point1;
                                              tmp75 = point1;
                                              tmp74 = point;
                                            } else {
                                              tmp74 = cResult[56];
                                              tmp75 = cResult[57];
                                            }
                                            if (cResult[58] !== color) {
                                              const obj21 = navigateToPremium(683)(color);
                                              const alphaResult = obj21.alpha(0);
                                              const hexResult = alphaResult.hex();
                                              cResult[58] = color;
                                              cResult[59] = hexResult;
                                              tmp76 = hexResult;
                                            } else {
                                              tmp76 = cResult[59];
                                            }
                                            if (cResult[60] !== color) {
                                              const obj23 = navigateToPremium(683)(color);
                                              const alphaResult1 = obj23.alpha(1);
                                              const hexResult1 = alphaResult1.hex();
                                              cResult[60] = color;
                                              cResult[61] = hexResult1;
                                              tmp78 = hexResult1;
                                            } else {
                                              tmp78 = cResult[61];
                                            }
                                            if (cResult[62] === tmp76) {
                                              let tmp80;
                                              if (cResult[63] === tmp78) {
                                                tmp80 = cResult[64];
                                              }
                                              if (cResult[65] === tmp80) {
                                                let tmp81;
                                                let tmp88;
                                                if (cResult[66] === tmp31.containerFloatingGradient) {
                                                  tmp81 = cResult[67];
                                                }
                                                if (cResult[68] !== tmp31.endcap) {
                                                  let obj2 = { style: tmp31.endcap, pointerEvents: "none" };
                                                  const tmp91 = closure_10(dismissBadge, obj2);
                                                  cResult[68] = tmp31.endcap;
                                                  cResult[69] = tmp91;
                                                  tmp88 = tmp91;
                                                } else {
                                                  tmp88 = cResult[69];
                                                }
                                                if (cResult[70] === tmp70) {
                                                  let tmp92;
                                                  let tmp96;
                                                  if (cResult[71] === tmp31.containerFloatingContent) {
                                                    tmp92 = cResult[72];
                                                  }
                                                  if (cResult[73] !== tmp31.endcap) {
                                                    const obj3 = { style: tmp31.endcap, pointerEvents: "none" };
                                                    const tmp99 = closure_10(dismissBadge, obj3);
                                                    cResult[73] = tmp31.endcap;
                                                    cResult[74] = tmp99;
                                                    tmp96 = tmp99;
                                                  } else {
                                                    tmp96 = cResult[74];
                                                  }
                                                  if (cResult[75] === tmp31.containerFloating) {
                                                    if (cResult[76] === tmp88) {
                                                      if (cResult[77] === tmp92) {
                                                        let tmp100;
                                                        if (cResult[78] === tmp96) {
                                                          tmp100 = cResult[79];
                                                        }
                                                        if (cResult[80] === tmp31.containerFloatingWrap) {
                                                          if (cResult[81] === tmp81) {
                                                            let tmp104;
                                                            if (cResult[82] === tmp100) {
                                                              tmp104 = cResult[83];
                                                            }
                                                            return tmp104;
                                                          }
                                                        }
                                                        const obj4 = { style: tmp31.containerFloatingWrap, pointerEvents: "box-none", children: items1 };
                                                        items1 = [tmp81, tmp100];
                                                        const tmp107 = closure_11(dismissBadge, obj4);
                                                        cResult[80] = tmp31.containerFloatingWrap;
                                                        cResult[81] = tmp81;
                                                        cResult[82] = tmp100;
                                                        cResult[83] = tmp107;
                                                        tmp104 = tmp107;
                                                      }
                                                    }
                                                  }
                                                  const obj5 = { style: tmp31.containerFloating, children: items2 };
                                                  items2 = [tmp88, tmp92, tmp96];
                                                  const tmp103 = closure_11(dismissBadge, obj5);
                                                  cResult[75] = tmp31.containerFloating;
                                                  cResult[76] = tmp88;
                                                  cResult[77] = tmp92;
                                                  cResult[78] = tmp96;
                                                  cResult[79] = tmp103;
                                                  tmp100 = tmp103;
                                                }
                                                const obj6 = { style: tmp31.containerFloatingContent, children: tmp70 };
                                                const tmp95 = closure_10(dismissBadge, obj6);
                                                cResult[70] = tmp70;
                                                cResult[71] = tmp31.containerFloatingContent;
                                                cResult[72] = tmp95;
                                                tmp92 = tmp95;
                                              }
                                              const obj9 = { style: tmp31.containerFloatingGradient, pointerEvents: "none" };
                                              const tmp10Result = navigateToPremium(5295);
                                              const merged = Object.assign(tmp80);
                                              const tmp87 = closure_10(tmp10Result, obj9);
                                              cResult[65] = tmp80;
                                              cResult[66] = tmp31.containerFloatingGradient;
                                              cResult[67] = tmp87;
                                              tmp81 = tmp87;
                                            }
                                            const obj10 = { start: tmp74, end: tmp75, colors: items3 };
                                            items3 = [tmp76, tmp78];
                                            cResult[62] = tmp76;
                                            cResult[63] = tmp78;
                                            cResult[64] = obj10;
                                            tmp80 = obj10;
                                          }
                                          const obj11 = { style: tmp31.buttonsFloating, pointerEvents: "box-none", children: tmp67 };
                                          const tmp73 = closure_10(dismissBadge, obj11);
                                          cResult[53] = tmp31.buttonsFloating;
                                          cResult[54] = tmp67;
                                          cResult[55] = tmp73;
                                          tmp70 = tmp73;
                                        }
                                        const obj12 = { children: tmp65 };
                                        const tmp69 = closure_10(tmp(14635).YouScreenNavIconMeasurer, obj12, tmp5);
                                        cResult[50] = tmp65;
                                        cResult[51] = tmp5;
                                        cResult[52] = tmp69;
                                        tmp67 = tmp69;
                                      }
                                    }
                                  }
                                }
                                const items4 = [tmp45, tmp48, tmp52, tmp55, tmp61];
                                const found = items4.filter((item) => null != item);
                                cResult[44] = tmp45;
                                cResult[45] = tmp48;
                                cResult[46] = tmp52;
                                cResult[47] = tmp55;
                                cResult[48] = tmp61;
                                cResult[49] = found;
                                tmp65 = found;
                              }
                            }
                            const obj13 = { ref: settingsButtonRef, IconComponent: tmp(7547).SettingsIcon, accessibilityLabel: tmp59, onPress: tmp41, showRedDot: tmp34, testID: "you_tab_settings_button" };
                            const tmp10Result5 = navigateToPremium(14634);
                            const tmp64 = closure_10(tmp10Result5, obj13, "settings");
                            cResult[40] = tmp34;
                            cResult[41] = tmp41;
                            cResult[42] = settingsButtonRef;
                            cResult[43] = tmp64;
                            tmp61 = tmp64;
                          }
                          let tmp56 = null;
                          if (!hasPremiumSubscriptionToDisplay) {
                            const obj14 = { IconComponent: tmp(9487).NitroWheelIcon, accessibilityLabel: intl2.string(tmp(1125).t.Ipxkog), label: intl3.string(tmp(1125).t.Ipxkog), onPress: tmp42 };
                            const tmp10Result6 = navigateToPremium(14634);
                            intl2 = tmp(1125).intl;
                            intl3 = tmp(1125).intl;
                            tmp56 = closure_10(tmp10Result6, obj14, "nitro");
                          }
                          cResult[36] = hasPremiumSubscriptionToDisplay;
                          cResult[37] = tmp42;
                          cResult[38] = tmp56;
                          tmp55 = tmp56;
                        }
                        const obj15 = { shopButtonRef, navigateToShop };
                        const tmp54 = closure_10(navigateToPremium(14644), obj15, "shop");
                        cResult[33] = navigateToShop;
                        cResult[34] = shopButtonRef;
                        cResult[35] = tmp54;
                        tmp52 = tmp54;
                      }
                      let tmp49 = null;
                      if (tmp36) {
                        const obj16 = { IconComponent: tmp(14642).QuestsIcon, accessibilityLabel: intl.string(tmp(1125).t.JALI2K), onPress: tmp43, showRedDot: showBadge };
                        const tmp10Result7 = navigateToPremium(14634);
                        intl = tmp(1125).intl;
                        tmp49 = closure_10(tmp10Result7, obj16, "quests");
                      }
                      cResult[30] = tmp43;
                      cResult[31] = showBadge;
                      cResult[32] = tmp49;
                      tmp48 = tmp49;
                    }
                    function oe() {
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
                    cResult[27] = oe;
                    tmp43 = oe;
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
                      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4841).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    if (tmp5) {
                      const tmpResult2 = DismissibleContentUnsafeUtils;
                      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(4841).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                  }
                }
                cResult[19] = tmp40;
                cResult[20] = tmp34;
                cResult[21] = navigateToSettings;
                cResult[22] = J;
                tmp41 = J;
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
        const tmpResult10 = tmp(5012);
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
  const tmp17 = tmp5(gradientSecondaryBackground[26])("YouBannerDecorations");
  let placement;
  if (tmp17 != null) {
    placement = tmp17.placement;
  }
  const tmp2Result8 = navigateToSettings(gradientSecondaryBackground[12]);
  const tmp19 = null != tmp2Result8.useTrialOffer(closure_9);
  currentUser = tmp19;
  const items2 = [tmp14, navigateToSettings, tmp19];
  const items3 = [navigateToPremium];
  const callback = obj4.useCallback(() => {
    const obj = tracking_Tracking;
    const obj2 = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj2);
    navigateToSettings();
    let tmp5 = currentUser;
    if (tmp5) {
      const tmpResult = DismissibleContentUnsafeUtils;
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4841).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      const tmpResult2 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(4841).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const items4 = [showBadge, dismissBadge];
  const callback1 = obj4.useCallback(() => {
    const obj = tracking_Tracking;
    const result = obj.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  let tmp23 = null;
  const callback2 = obj4.useCallback(() => {
    const tmp = showBadge;
    if (tmp) {
      dismissBadge(ContentDismissActionType.TAKE_ACTION);
    }
    const obj = QuestUtils;
    const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
    obj.openQuestHome(obj2);
  }, items4);
  if ("you_screen" === placement) {
    tmp23 = closure_10(tmp5(tmp3[30]), {}, "conjure");
  }
  const items5 = [tmp23, , , , ];
  let tmp25 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp2(tmp3[32]).QuestsIcon, accessibilityLabel: intl.string(tmp2(tmp3[16]).t.JALI2K), onPress: callback2, showRedDot: showBadge };
    const tmp5Result = tmp5(gradientSecondaryBackground[31]);
    intl = tmp2(tmp3[16]).intl;
    tmp25 = closure_10(tmp5Result, obj2, "quests");
  }
  items5[1] = tmp25;
  items5[2] = closure_10(tmp5(gradientSecondaryBackground[33]), { shopButtonRef, navigateToShop }, "shop");
  let tmp28Result = null;
  if (!hasPremiumSubscriptionToDisplay) {
    const obj3 = { IconComponent: navigateToSettings(gradientSecondaryBackground[34]).NitroWheelIcon, accessibilityLabel: intl2.string(navigateToSettings(gradientSecondaryBackground[16]).t.Ipxkog), label: intl3.string(navigateToSettings(gradientSecondaryBackground[16]).t.Ipxkog), onPress: callback1 };
    const tmp5Result4 = tmp5(gradientSecondaryBackground[31]);
    intl2 = tmp2(tmp3[16]).intl;
    intl3 = tmp2(tmp3[16]).intl;
    tmp28Result = tmp28(tmp5Result4, obj3, "nitro");
  }
  items5[3] = tmp28Result;
  const obj5 = { ref: settingsButtonRef, IconComponent: navigateToSettings(gradientSecondaryBackground[35]).SettingsIcon, accessibilityLabel: intl4.string(navigateToSettings(gradientSecondaryBackground[16]).t["3D5yo/"]), onPress: callback, showRedDot: tmp14, testID: "you_tab_settings_button" };
  const tmp5Result5 = tmp5(gradientSecondaryBackground[31]);
  intl4 = tmp2(tmp3[16]).intl;
  items5[4] = closure_10(tmp5Result5, obj5, "settings");
  const obj6 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: closure_10(navigateToSettings(gradientSecondaryBackground[36]).YouScreenNavIconMeasurer, { children: found }, tmp) };
  found = items5.filter((item) => null != item);
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const obj7 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: items7 };
  const tmp28Result2 = closure_10(isBadged, obj6);
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
  const tmp5Result6 = tmp5(gradientSecondaryBackground[37]);
  const merged = Object.assign(memo);
  items7 = [closure_10(tmp5Result6, obj8), ];
  const obj9 = { style: tmp12.containerFloating, children: items8 };
  items8 = [, , ];
  const obj10 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[0] = closure_10(isBadged, obj10);
  const obj11 = { style: tmp12.containerFloatingContent, children: tmp28Result2 };
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
