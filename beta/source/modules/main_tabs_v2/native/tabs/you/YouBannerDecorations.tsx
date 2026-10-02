// Module ID: 16606
// Function ID: 16607
// Name: YouBannerDecorations
// Dependencies: [19, 17, 1378, 2048, 1380, 21, 1371, 588, 4837, 558, 13098, 6873, 4656, 2035, 576, 504, 7635, 7677, 7688, 4687, 684, 4491, 16607, 10671, 16608, 16609, 10667, 5760, 16610, 14519, 1127, 16611, 16613, 8119, 6799, 5292, 2]
// Exports: getFloatingNavBottomMargin

// Module 16606 (YouBannerDecorations)
import nativeDefault from "native" /* 588 */;
import _modDef684 from "module_684" /* 684 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1371 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4656 */;
import QuestTypes from "QuestTypes" /* 5760 */;
import useTrialOffer from "useTrialOffer" /* 6873 */;
import QuestUtils from "QuestUtils" /* 10667 */;
import PromotionsHooks from "PromotionsHooks" /* 13098 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16609 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1378 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigateToPremium;

let c10;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  let PX_24;
  let obj2;
  let obj3;
  let obj5;
  let tmp7;
  const obj = { containerFloatingWrap: obj2, containerFloatingGradient: obj3, containerFloating: obj5, buttonsFloating: { flexDirection: "row", alignItems: "center", gap: tmp7(588).space.PX_16 }, loading: { height: "100%", alignItems: "center", justifyContent: "center" } };
  obj2 = { top: undefined, alignItems: "center" };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  obj3 = { color };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  const obj4 = utils_PlatformUtils;
  const isIOSResult = obj4.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
    tmp7 = tmp5;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp7 = tmp5;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj5 = { marginBottom: PX_24, paddingVertical: tmp7(588).space.PX_8, paddingHorizontal: tmp7(588).space.PX_24, borderRadius: tmp7(588).radii.lg, backgroundColor: BACKGROUND_SURFACE_HIGH, flexDirection: "row", borderColor, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp7(588).colors.BACKGROUND_SURFACE_HIGH;
  }
  const merged2 = Object.assign(tmp7(588).shadows.SHADOW_HIGH);
  ({ flexDirection: "row", alignItems: "center", gap: tmp7(588).space.PX_16 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
let closure_14 = tmp5;
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
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToPremium) => {
  let containerBackground;
  let containerBorderColor;
  let currentUser;
  let enabled;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let isBadged;
  let isLoading;
  let items1;
  let items2;
  let items3;
  let navigateToSettings;
  let navigateToShop;
  let paddingBottom;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let showReferralNotificationDot;
  let theme;
  let tmp4;
  let tmp5;
  let tmp = navigateToSettings;
  let obj = navigateToSettings(576);
  const cResult = obj.c(76);
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  ({ navigateToShop, shopButtonRef, settingsButtonRef, paddingBottom } = navigateToPremium);
  let num = 0;
  if (undefined !== paddingBottom) {
    num = paddingBottom;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let id;
  const tmp9 = navigateToPremium(7635);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result = tmp9(id);
  if (cResult[2] === tmp9Result) {
    let tmp12;
    if (cResult[3] === stateFromStores) {
      tmp12 = cResult[4];
    }
    ({ theme, primaryColor, secondaryColor } = navigateToPremium(7677)(tmp12));
    navigateToPremium(7677)(tmp12);
    if (cResult[5] === primaryColor) {
      if (cResult[6] === secondaryColor) {
        let tmp14;
        let tmp17;
        if (cResult[7] === theme) {
          tmp14 = cResult[8];
        }
        const tmpResult7 = tmp(7688);
        const userProfileColors = tmpResult7.useUserProfileColors(tmp14);
        ({ containerBackground, containerBorderColor, gradientSecondaryBackground } = userProfileColors);
        if (cResult[9] === containerBackground) {
          if (cResult[10] === primaryColor) {
            if (cResult[11] === secondaryColor) {
              let tmp16;
              if (cResult[12] === theme) {
                tmp16 = cResult[13];
              }
              if (cResult[14] === gradientSecondaryBackground) {
                let tmp18;
                let tmp34;
                if (cResult[15] === tmp16) {
                  tmp18 = cResult[16];
                }
                const tmp29 = closure_13(num, tmp18, gradientSecondaryBackground, containerBorderColor);
                const tmpResult8 = tmp(4491);
                const hasPremiumSubscriptionToDisplay = tmpResult8.useHasPremiumSubscriptionToDisplay();
                const tmp32 = closure_14();
                dependencyMap = tmp32;
                const tmp33 = navigateToPremium(16607)();
                const showBadge = tmp33.showBadge;
                const dismissBadge = tmp33.dismissBadge;
                const _Symbol = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmpResult9 = tmp(10671);
                  const isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
                  cResult[17] = isEligibleForQuests;
                  tmp34 = isEligibleForQuests;
                } else {
                  tmp34 = cResult[17];
                }
                const tmpResult10 = tmp(16608);
                const mobileReferralSubscriberProfileEntrypointButtonConfig = tmpResult10.useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
                ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
                const tmpResult11 = tmp(6873);
                const tmp38 = null != tmpResult11.useTrialOffer(closure_9);
                let closure_5 = tmp38;
                if (cResult[18] === tmp38) {
                  if (cResult[19] === tmp32) {
                    let tmp39;
                    let tmp40;
                    if (cResult[20] === navigateToSettings) {
                      tmp39 = cResult[21];
                    }
                    if (cResult[22] !== navigateToPremium) {
                      function oe() {
                        const obj = you_tracking_Tracking;
                        const result = obj.trackYouTabNitroIconPress();
                        navigateToPremium();
                      }
                      cResult[22] = navigateToPremium;
                      cResult[23] = oe;
                      tmp40 = oe;
                    } else {
                      tmp40 = cResult[23];
                    }
                    if (cResult[24] === dismissBadge) {
                      let tmp41;
                      if (cResult[25] === showBadge) {
                        tmp41 = cResult[26];
                      }
                      if (cResult[27] === tmp41) {
                        let tmp42;
                        if (cResult[28] === showBadge) {
                          tmp42 = cResult[29];
                        }
                        if (cResult[30] === navigateToShop) {
                          let tmp46;
                          let tmp52;
                          if (cResult[31] === shopButtonRef) {
                            tmp46 = cResult[32];
                          }
                          if (cResult[33] === hasPremiumSubscriptionToDisplay) {
                            if (cResult[34] === enabled) {
                              if (cResult[35] === tmp40) {
                                let tmp49;
                                let tmp55;
                                if (cResult[36] === showReferralNotificationDot) {
                                  tmp49 = cResult[37];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl4 = tmp(1127).intl;
                                  const stringResult = intl4.string(tmp(1127).t["3D5yo/"]);
                                  cResult[38] = stringResult;
                                  tmp55 = stringResult;
                                } else {
                                  tmp55 = cResult[38];
                                }
                                if (cResult[39] === tmp32) {
                                  if (cResult[40] === tmp39) {
                                    let tmp57;
                                    if (cResult[41] === settingsButtonRef) {
                                      tmp57 = cResult[42];
                                    }
                                    if (cResult[43] === tmp42) {
                                      if (cResult[44] === tmp46) {
                                        if (cResult[45] === tmp49) {
                                          let tmp61;
                                          if (cResult[46] === tmp57) {
                                            tmp61 = cResult[47];
                                          }
                                          if (cResult[48] === isLoading) {
                                            let tmp63;
                                            if (cResult[49] === tmp29.loading) {
                                              tmp63 = cResult[50];
                                            }
                                            if (cResult[51] === tmp61) {
                                              let tmp68;
                                              if (cResult[52] === tmp29.buttonsFloating) {
                                                tmp68 = cResult[53];
                                              }
                                              if (cResult[54] === tmp63) {
                                                let tmp72;
                                                let tmp77;
                                                let tmp76;
                                                let tmp78;
                                                let tmp80;
                                                if (cResult[55] === tmp68) {
                                                  tmp72 = cResult[56];
                                                }
                                                const color = tmp29.containerFloatingGradient.color;
                                                const _Symbol3 = Symbol;
                                                if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const point = { x: 0, y: 0 };
                                                  const point1 = { x: 0, y: 1 };
                                                  cResult[57] = point;
                                                  cResult[58] = point1;
                                                  tmp77 = point1;
                                                  tmp76 = point;
                                                } else {
                                                  tmp76 = cResult[57];
                                                  tmp77 = cResult[58];
                                                }
                                                if (cResult[59] !== color) {
                                                  const obj24 = navigateToPremium(684)(color);
                                                  const alphaResult = obj24.alpha(0);
                                                  const hexResult = alphaResult.hex();
                                                  cResult[59] = color;
                                                  cResult[60] = hexResult;
                                                  tmp78 = hexResult;
                                                } else {
                                                  tmp78 = cResult[60];
                                                }
                                                if (cResult[61] !== color) {
                                                  const obj26 = navigateToPremium(684)(color);
                                                  const alphaResult1 = obj26.alpha(1);
                                                  const hexResult1 = alphaResult1.hex();
                                                  cResult[61] = color;
                                                  cResult[62] = hexResult1;
                                                  tmp80 = hexResult1;
                                                } else {
                                                  tmp80 = cResult[62];
                                                }
                                                if (cResult[63] === tmp78) {
                                                  let tmp82;
                                                  if (cResult[64] === tmp80) {
                                                    tmp82 = cResult[65];
                                                  }
                                                  if (cResult[66] === tmp82) {
                                                    let tmp83;
                                                    if (cResult[67] === tmp29.containerFloatingGradient) {
                                                      tmp83 = cResult[68];
                                                    }
                                                    if (cResult[69] === tmp72) {
                                                      let tmp90;
                                                      if (cResult[70] === tmp29.containerFloating) {
                                                        tmp90 = cResult[71];
                                                      }
                                                      if (cResult[72] === tmp29.containerFloatingWrap) {
                                                        if (cResult[73] === tmp83) {
                                                          let tmp94;
                                                          if (cResult[74] === tmp90) {
                                                            tmp94 = cResult[75];
                                                          }
                                                          return tmp94;
                                                        }
                                                      }
                                                      let obj2 = { style: tmp29.containerFloatingWrap, pointerEvents: "box-none", children: items1 };
                                                      items1 = [tmp83, tmp90];
                                                      const tmp97 = closure_12(dismissBadge, obj2);
                                                      cResult[72] = tmp29.containerFloatingWrap;
                                                      cResult[73] = tmp83;
                                                      cResult[74] = tmp90;
                                                      cResult[75] = tmp97;
                                                      tmp94 = tmp97;
                                                    }
                                                    const obj3 = { style: tmp29.containerFloating, children: tmp72 };
                                                    const tmp93 = closure_10(dismissBadge, obj3);
                                                    cResult[69] = tmp72;
                                                    cResult[70] = tmp29.containerFloating;
                                                    cResult[71] = tmp93;
                                                    tmp90 = tmp93;
                                                  }
                                                  const obj4 = { style: tmp29.containerFloatingGradient, pointerEvents: "none" };
                                                  const tmp8Result = navigateToPremium(5292);
                                                  const merged = Object.assign(tmp82);
                                                  const tmp89 = closure_10(tmp8Result, obj4);
                                                  cResult[66] = tmp82;
                                                  cResult[67] = tmp29.containerFloatingGradient;
                                                  cResult[68] = tmp89;
                                                  tmp83 = tmp89;
                                                }
                                                const obj5 = { start: tmp76, end: tmp77, colors: items2 };
                                                items2 = [tmp78, tmp80];
                                                cResult[63] = tmp78;
                                                cResult[64] = tmp80;
                                                cResult[65] = obj5;
                                                tmp82 = obj5;
                                              }
                                              const obj6 = { children: items3 };
                                              items3 = [tmp63, tmp68];
                                              const tmp75 = closure_12(closure_11, obj6);
                                              cResult[54] = tmp63;
                                              cResult[55] = tmp68;
                                              cResult[56] = tmp75;
                                              tmp72 = tmp75;
                                            }
                                            const obj9 = { style: tmp29.buttonsFloating, pointerEvents: "box-none", children: tmp61 };
                                            const tmp71 = closure_10(dismissBadge, obj9);
                                            cResult[51] = tmp61;
                                            cResult[52] = tmp29.buttonsFloating;
                                            cResult[53] = tmp71;
                                            tmp68 = tmp71;
                                          }
                                          let tmp64 = isLoading;
                                          if (tmp64) {
                                            const obj10 = { style: tmp29.loading, children: closure_10(closure_5, { size: "small" }) };
                                            tmp64 = closure_10(dismissBadge, obj10);
                                          }
                                          cResult[48] = isLoading;
                                          cResult[49] = tmp29.loading;
                                          cResult[50] = tmp64;
                                          tmp63 = tmp64;
                                        }
                                      }
                                    }
                                    const items4 = [tmp42, tmp46, tmp49, tmp57];
                                    const found = items4.filter((item) => null != item);
                                    cResult[43] = tmp42;
                                    cResult[44] = tmp46;
                                    cResult[45] = tmp49;
                                    cResult[46] = tmp57;
                                    cResult[47] = found;
                                    tmp61 = found;
                                  }
                                }
                                const obj11 = { ref: settingsButtonRef, IconComponent: tmp(6799).SettingsIcon, accessibilityLabel: tmp55, onPress: tmp39, showRedDot: tmp32 };
                                const tmp8Result5 = navigateToPremium(16610);
                                const tmp60 = closure_10(tmp8Result5, obj11, "settings");
                                cResult[39] = tmp32;
                                cResult[40] = tmp39;
                                cResult[41] = settingsButtonRef;
                                cResult[42] = tmp60;
                                tmp57 = tmp60;
                              }
                            }
                          }
                          if (hasPremiumSubscriptionToDisplay) {
                            let tmp53 = null;
                            if (enabled) {
                              const obj12 = { onPress: tmp40, showReferralNotificationDot };
                              tmp53 = closure_10(tmp8(16613), obj12, "nitro-subscriber");
                            }
                            tmp52 = tmp53;
                          } else {
                            const obj13 = { IconComponent: tmp(8119).NitroWheelIcon, accessibilityLabel: intl2.string(tmp(1127).t.Ipxkog), label: intl3.string(tmp(1127).t.Ipxkog), onPress: tmp40 };
                            const tmp8Result6 = navigateToPremium(16610);
                            intl2 = tmp(1127).intl;
                            intl3 = tmp(1127).intl;
                            tmp52 = closure_10(tmp8Result6, obj13, "nitro");
                          }
                          cResult[33] = hasPremiumSubscriptionToDisplay;
                          cResult[34] = enabled;
                          cResult[35] = tmp40;
                          cResult[36] = showReferralNotificationDot;
                          cResult[37] = tmp52;
                          tmp49 = tmp52;
                        }
                        const obj14 = { shopButtonRef, navigateToShop };
                        const tmp48 = closure_10(navigateToPremium(16611), obj14, "shop");
                        cResult[30] = navigateToShop;
                        cResult[31] = shopButtonRef;
                        cResult[32] = tmp48;
                        tmp46 = tmp48;
                      }
                      let tmp43 = null;
                      if (tmp34) {
                        const obj15 = { IconComponent: tmp(14519).QuestsIcon, accessibilityLabel: intl.string(tmp(1127).t.JALI2K), onPress: tmp41, showRedDot: showBadge };
                        const tmp8Result7 = navigateToPremium(16610);
                        intl = tmp(1127).intl;
                        tmp43 = closure_10(tmp8Result7, obj15, "quests");
                      }
                      cResult[27] = tmp41;
                      cResult[28] = showBadge;
                      cResult[29] = tmp43;
                      tmp42 = tmp43;
                    }
                    function se() {
                      const tmp = showBadge;
                      if (tmp) {
                        dismissBadge(ContentDismissActionType.TAKE_ACTION);
                      }
                      const obj = QuestUtils;
                      const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
                      obj.openQuestHome(obj2);
                    }
                    cResult[24] = dismissBadge;
                    cResult[25] = showBadge;
                    cResult[26] = se;
                    tmp41 = se;
                  }
                }
                class J {
                  constructor() {
                    const obj = you_tracking_Tracking;
                    const obj2 = { isBadged };
                    const result = obj.trackYouTabSettingsIconPress(obj2);
                    navigateToSettings();
                    let tmp5 = closure_5;
                    if (tmp5) {
                      const tmpResult = DismissibleContentUnsafeUtils;
                      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(2035).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    if (tmp5) {
                      const tmpResult2 = DismissibleContentUnsafeUtils;
                      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(2035).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                  }
                }
                cResult[18] = tmp38;
                cResult[19] = tmp32;
                cResult[20] = navigateToSettings;
                cResult[21] = J;
                tmp39 = J;
              }
              let hexResult3 = null;
              if (null != tmp16) {
                const mix = navigateToPremium(684).mix;
                const tmp8Result8 = navigateToPremium(684);
                const obj7 = navigateToPremium(684)(tmp16);
                const hexResult2 = obj7.hex("rgb");
                const obj8 = navigateToPremium(684)(tmp16);
                const mixResult = mix(gradientSecondaryBackground, hexResult2, obj8.alpha(), "rgb");
                hexResult3 = mixResult.hex("rgb");
              }
              cResult[14] = gradientSecondaryBackground;
              cResult[15] = tmp16;
              cResult[16] = hexResult3;
              tmp18 = hexResult3;
            }
          }
        }
        const tmpResult12 = tmp(4687);
        if (!tmpResult12.isThemeLight(theme)) {
          tmp17 = containerBackground;
        } else {
          tmp17 = null;
          if (null != primaryColor) {
            tmp17 = null;
          }
        }
        cResult[9] = containerBackground;
        cResult[10] = primaryColor;
        cResult[11] = secondaryColor;
        cResult[12] = theme;
        cResult[13] = tmp17;
        tmp16 = tmp17;
      }
    }
    const obj16 = { theme, primaryColor, secondaryColor };
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj16;
    tmp14 = obj16;
  }
  const obj17 = { user: stateFromStores, displayProfile: tmp9Result };
  cResult[2] = tmp9Result;
  cResult[3] = stateFromStores;
  cResult[4] = obj17;
  tmp12 = obj17;
}) : ((navigateToPremium) => {
  let c3;
  let containerBorderColor;
  let enabled;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isLoading;
  let items6;
  let items8;
  let navigateToSettings;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let showReferralNotificationDot;
  let theme;
  let tmp10;
  let tmp24Result2;
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
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
  let tmp = navigateToSettings;
  let obj = navigateToSettings(gradientSecondaryBackground[15]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  let tmp5 = navigateToPremium(gradientSecondaryBackground[16]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5Result = tmp5(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[17])({ user: stateFromStores, displayProfile: tmp5Result }));
  const tmp8 = navigateToPremium(gradientSecondaryBackground[17])({ user: stateFromStores, displayProfile: tmp5Result });
  let tmpResult = tmp(tmp2[18]);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const containerBackground = userProfileColors.containerBackground;
  const tmpResult6 = tmp(gradientSecondaryBackground[19]);
  if (!tmpResult6.isThemeLight(theme)) {
    tmp10 = containerBackground;
  } else {
    tmp10 = null;
    if (null != primaryColor) {
      tmp10 = null;
    }
  }
  react = tmp10;
  let obj4 = react;
  const items1 = [gradientSecondaryBackground, tmp10];
  const tmp11 = closure_13(num, react.useMemo(() => {
    let hexResult1 = null;
    if (null != c3) {
      const mix = _modDef684.mix;
      const obj = _modDef684(c3);
      const hexResult = obj.hex("rgb");
      const obj2 = _modDef684(c3);
      const mixResult = mix(gradientSecondaryBackground, hexResult, obj2.alpha(), "rgb");
      hexResult1 = mixResult.hex("rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  const tmpResult7 = tmp(gradientSecondaryBackground[21]);
  const hasPremiumSubscriptionToDisplay = tmpResult7.useHasPremiumSubscriptionToDisplay();
  const tmp13 = closure_14();
  isBadged = tmp13;
  const tmp14 = navigateToPremium(gradientSecondaryBackground[22])();
  showBadge = tmp14.showBadge;
  dismissBadge = tmp14.dismissBadge;
  const tmpResult8 = tmp(gradientSecondaryBackground[23]);
  const isEligibleForQuests = tmpResult8.getIsEligibleForQuests();
  const tmpResult9 = tmp(gradientSecondaryBackground[24]);
  const mobileReferralSubscriberProfileEntrypointButtonConfig = tmpResult9.useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
  ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
  const tmpResult10 = tmp(gradientSecondaryBackground[11]);
  const tmp17 = null != tmpResult10.useTrialOffer(closure_9);
  currentUser = tmp17;
  const items2 = [tmp13, navigateToSettings, tmp17];
  const items3 = [navigateToPremium];
  const callback = react.useCallback(() => {
    const obj = you_tracking_Tracking;
    const obj2 = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj2);
    navigateToSettings();
    let tmp5 = currentUser;
    if (tmp5) {
      const tmpResult = DismissibleContentUnsafeUtils;
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(2035).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      const tmpResult2 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(2035).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const callback1 = react.useCallback(() => {
    const obj = you_tracking_Tracking;
    const result = obj.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const items4 = [showBadge, dismissBadge];
  let tmp21 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp(tmp2[29]).QuestsIcon, accessibilityLabel: intl.string(tmp(tmp2[30]).t.JALI2K), onPress: tmp20, showRedDot: showBadge };
    const tmp4Result = navigateToPremium(gradientSecondaryBackground[28]);
    intl = tmp(tmp2[30]).intl;
    tmp21 = closure_10(tmp4Result, obj2, "quests");
  }
  const items5 = [tmp21, closure_10(tmp4(tmp2[31]), { shopButtonRef, navigateToShop }, "shop"), , ];
  if (hasPremiumSubscriptionToDisplay) {
    let tmp24Result = null;
    if (enabled) {
      const obj3 = { onPress: callback1, showReferralNotificationDot };
      tmp24Result = tmp24(tmp4(tmp2[32]), obj3, "nitro-subscriber");
    }
    tmp24Result2 = tmp24Result;
  } else {
    const obj5 = { IconComponent: tmp(gradientSecondaryBackground[33]).NitroWheelIcon, accessibilityLabel: intl2.string(tmp(gradientSecondaryBackground[30]).t.Ipxkog), label: intl3.string(tmp(gradientSecondaryBackground[30]).t.Ipxkog), onPress: callback1 };
    const tmp4Result4 = navigateToPremium(gradientSecondaryBackground[28]);
    intl2 = tmp(tmp2[30]).intl;
    intl3 = tmp(tmp2[30]).intl;
    tmp24Result2 = tmp24(tmp4Result4, obj5, "nitro");
  }
  items5[2] = tmp24Result2;
  const obj6 = { ref: settingsButtonRef, IconComponent: tmp(gradientSecondaryBackground[34]).SettingsIcon, accessibilityLabel: intl4.string(tmp(gradientSecondaryBackground[30]).t["3D5yo/"]), onPress: callback, showRedDot: tmp13 };
  const tmp4Result5 = navigateToPremium(gradientSecondaryBackground[28]);
  intl4 = tmp(tmp2[30]).intl;
  items5[3] = closure_10(tmp4Result5, obj6, "settings");
  const found = items5.filter((item) => null != item);
  const tmp31 = closure_11;
  if (isLoading) {
    const obj7 = { style: tmp11.loading, children: closure_10(showBadge, { size: "small" }) };
    isLoading = tmp24(isBadged, obj7);
  }
  const obj8 = { children: items6 };
  items6 = [isLoading, ];
  const obj9 = { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found };
  items6[1] = closure_10(isBadged, obj9);
  color = tmp11.containerFloatingGradient.color;
  const items7 = [color];
  const obj10 = { style: tmp11.containerFloatingWrap, pointerEvents: "box-none", children: items8 };
  const tmp30Result = closure_12(tmp31, obj8);
  const memo = obj4.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef684(color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef684(color);
    const alphaResult1 = obj4.alpha(1);
    items[1] = alphaResult1.hex();
    return obj;
  }, items7);
  const obj11 = { style: tmp11.containerFloatingGradient, pointerEvents: "none" };
  const tmp4Result6 = navigateToPremium(gradientSecondaryBackground[35]);
  const merged = Object.assign(memo);
  items8 = [closure_10(tmp4Result6, obj11), ];
  const obj12 = { style: tmp11.containerFloating, children: tmp30Result };
  items8[1] = closure_10(isBadged, obj12);
  return closure_12(isBadged, obj10);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export { getFloatingNavBottomMargin };
export const useHasSettingsBadge = tmp5;
