// Module ID: 17260
// Function ID: 17261
// Name: YouBannerDecorations
// Dependencies: [19, 17, 1376, 2042, 1378, 21, 4758, 1369, 580, 558, 13822, 7696, 4579, 2031, 568, 504, 8460, 8501, 8512, 4610, 676, 4418, 17261, 11608, 17262, 17263, 11895, 5666, 17264, 15261, 1119, 17265, 17267, 8938, 7624, 5198, 2]

// Module 17260 (YouBannerDecorations)
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1369 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4579 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import useTrialOffer from "useTrialOffer" /* 7696 */;
import QuestUtils from "QuestUtils" /* 11895 */;
import PromotionsHooks from "PromotionsHooks" /* 13822 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 17263 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
let closure_9 = fn(1378).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let closure_13 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  const obj = { containerFloatingWrap: null, containerFloatingGradient: null, containerFloating: null, buttonsFloating: null, loading: null };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj.containerFloatingWrap = obj2;
  const obj3 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj3.color = color;
  obj.containerFloatingGradient = obj3;
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
    let tmp7 = tmp5;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp7 = tmp5;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  const obj5 = { marginBottom: PX_24, paddingVertical: tmp7(580).space.PX_8, paddingHorizontal: tmp7(580).space.PX_24, borderRadius: tmp7(580).radii.lg, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp7(580).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj5.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj5.borderColor = borderColor;
  const merged2 = Object.assign(tmp7(580).shadows.SHADOW_HIGH);
  obj.containerFloating = obj5;
  isIOSResult = utils_PlatformUtils.isIOS();
  obj.buttonsFloating = { flexDirection: "row", alignItems: "center", gap: tmp7(580).space.PX_16 };
  obj.loading = { height: "100%", alignItems: "center", justifyContent: "center" };
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
}) : (() => {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
});
let closure_14 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToPremium) => {
  const cResult = navigateToSettings(568).c(76);
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
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = navigateToSettings(568);
  const stateFromStores = navigateToSettings(504).useStateFromStores(tmp4, tmp5);
  let id;
  let tmpResult = navigateToSettings(504);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result = navigateToPremium(8460)(id);
  if (cResult[2] === tmp9Result) {
    if (cResult[3] === stateFromStores) {
      let tmp12 = cResult[4];
    }
    ({ theme, primaryColor, secondaryColor } = tmp8(8501)(tmp12));
    if (cResult[5] === primaryColor) {
      if (cResult[6] === secondaryColor) {
        if (cResult[7] === theme) {
          let tmp14 = cResult[8];
        }
        const userProfileColors = tmp(8512).useUserProfileColors(tmp14);
        ({ containerBackground, containerBorderColor, gradientSecondaryBackground } = userProfileColors);
        if (cResult[9] === containerBackground) {
          if (cResult[10] === primaryColor) {
            if (cResult[11] === secondaryColor) {
              if (cResult[12] === theme) {
                let tmp16 = cResult[13];
              }
              if (cResult[14] === gradientSecondaryBackground) {
                if (cResult[15] === tmp16) {
                  let tmp18 = cResult[16];
                }
                const tmp28 = closure_13(num, tmp18, gradientSecondaryBackground, containerBorderColor);
                const hasPremiumSubscriptionToDisplay = tmp(4418).useHasPremiumSubscriptionToDisplay();
                const tmp31 = closure_14();
                dependencyMap = tmp31;
                const tmp32 = tmp8(17261)();
                const showBadge = tmp32.showBadge;
                const dismissBadge = tmp32.dismissBadge;
                const _Symbol = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const isEligibleForQuests = tmp(11608).getIsEligibleForQuests();
                  cResult[17] = isEligibleForQuests;
                  let tmp33 = isEligibleForQuests;
                  const tmpResult9 = tmp(11608);
                } else {
                  tmp33 = cResult[17];
                }
                const tmpResult8 = tmp(4418);
                const mobileReferralSubscriberProfileEntrypointButtonConfig = tmp(17262).useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
                ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
                const tmpResult10 = tmp(17262);
                const tmp37 = null != tmp(7696).useTrialOffer(closure_9);
                closure_5 = tmp37;
                if (cResult[18] === tmp37) {
                  if (cResult[19] === tmp31) {
                    if (cResult[20] === navigateToSettings) {
                      let tmp38 = cResult[21];
                    }
                    if (cResult[22] !== navigateToPremium) {
                      function te() {
                        const result = you_tracking_Tracking.trackYouTabNitroIconPress();
                        navigateToPremium();
                      }
                      cResult[22] = navigateToPremium;
                      cResult[23] = te;
                      let tmp39 = te;
                    } else {
                      tmp39 = cResult[23];
                    }
                    if (cResult[24] === dismissBadge) {
                      if (cResult[25] === showBadge) {
                        let tmp40 = cResult[26];
                      }
                      if (cResult[27] === tmp40) {
                        if (cResult[28] === showBadge) {
                          let tmp41 = cResult[29];
                        }
                        if (cResult[30] === navigateToShop) {
                          if (cResult[31] === shopButtonRef) {
                            let tmp45 = cResult[32];
                          }
                          if (cResult[33] === hasPremiumSubscriptionToDisplay) {
                            if (cResult[34] === enabled) {
                              if (cResult[35] === tmp39) {
                                if (cResult[36] === showReferralNotificationDot) {
                                  const _Symbol2 = Symbol;
                                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl4 = tmp(1119).intl;
                                    const stringResult = intl4.string(tmp(1119).t["3D5yo/"]);
                                    cResult[38] = stringResult;
                                    let tmp55 = stringResult;
                                  } else {
                                    tmp55 = cResult[38];
                                  }
                                  if (cResult[39] === tmp31) {
                                    if (cResult[40] === tmp38) {
                                      if (cResult[41] === settingsButtonRef) {
                                        let tmp57 = cResult[42];
                                      }
                                      if (cResult[43] === tmp41) {
                                        if (cResult[44] === tmp45) {
                                          if (cResult[45] === tmp48) {
                                            if (cResult[46] === tmp57) {
                                              let tmp61 = cResult[47];
                                            }
                                            if (cResult[48] === isLoading) {
                                              if (cResult[49] === tmp28.loading) {
                                                let tmp63 = cResult[50];
                                              }
                                              if (cResult[51] === tmp61) {
                                                if (cResult[52] === tmp28.buttonsFloating) {
                                                  let tmp68 = cResult[53];
                                                }
                                                if (cResult[54] === tmp63) {
                                                  if (cResult[55] === tmp68) {
                                                    let tmp72 = cResult[56];
                                                  }
                                                  const color = tmp28.containerFloatingGradient.color;
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const point = { x: 0, y: 0 };
                                                    const point1 = { x: 0, y: 1 };
                                                    cResult[57] = point;
                                                    cResult[58] = point1;
                                                    let tmp77 = point1;
                                                    let tmp76 = point;
                                                  } else {
                                                    tmp76 = cResult[57];
                                                    tmp77 = cResult[58];
                                                  }
                                                  if (cResult[59] !== color) {
                                                    const obj25 = tmp8(676)(color);
                                                    const hexResult = tmp8(676)(color).alpha(0).hex();
                                                    cResult[59] = color;
                                                    cResult[60] = hexResult;
                                                    let tmp78 = hexResult;
                                                    const alphaResult = tmp8(676)(color).alpha(0);
                                                  } else {
                                                    tmp78 = cResult[60];
                                                  }
                                                  if (cResult[61] !== color) {
                                                    const obj27 = tmp8(676)(color);
                                                    const hexResult1 = tmp8(676)(color).alpha(1).hex();
                                                    cResult[61] = color;
                                                    cResult[62] = hexResult1;
                                                    let tmp80 = hexResult1;
                                                    const alphaResult1 = tmp8(676)(color).alpha(1);
                                                  } else {
                                                    tmp80 = cResult[62];
                                                  }
                                                  if (cResult[63] === tmp78) {
                                                    if (cResult[64] === tmp80) {
                                                      let tmp82 = cResult[65];
                                                    }
                                                    if (cResult[66] === tmp82) {
                                                      if (cResult[67] === tmp28.containerFloatingGradient) {
                                                        let tmp83 = cResult[68];
                                                      }
                                                      if (cResult[69] === tmp72) {
                                                        if (cResult[70] === tmp28.containerFloating) {
                                                          let tmp90 = cResult[71];
                                                        }
                                                        if (cResult[72] === tmp28.containerFloatingWrap) {
                                                          if (cResult[73] === tmp83) {
                                                            if (cResult[74] === tmp90) {
                                                              let tmp94 = cResult[75];
                                                            }
                                                            return tmp94;
                                                          }
                                                        }
                                                        const obj2 = { style: tmp28.containerFloatingWrap, pointerEvents: "box-none", children: null };
                                                        const items1 = [tmp83, tmp90];
                                                        obj2.children = items1;
                                                        const tmp97 = closure_12(dismissBadge, obj2);
                                                        cResult[72] = tmp28.containerFloatingWrap;
                                                        cResult[73] = tmp83;
                                                        cResult[74] = tmp90;
                                                        cResult[75] = tmp97;
                                                        tmp94 = tmp97;
                                                      }
                                                      const obj3 = { style: tmp28.containerFloating, children: tmp72 };
                                                      const tmp93 = closure_10(dismissBadge, obj3);
                                                      cResult[69] = tmp72;
                                                      cResult[70] = tmp28.containerFloating;
                                                      cResult[71] = tmp93;
                                                      tmp90 = tmp93;
                                                    }
                                                    const obj4 = { style: tmp28.containerFloatingGradient };
                                                    const merged = Object.assign(tmp82);
                                                    obj4.pointerEvents = "none";
                                                    const tmp89 = closure_10(tmp8(5198), obj4);
                                                    cResult[66] = tmp82;
                                                    cResult[67] = tmp28.containerFloatingGradient;
                                                    cResult[68] = tmp89;
                                                    tmp83 = tmp89;
                                                    const tmp8Result = tmp8(5198);
                                                  }
                                                  const obj5 = { start: tmp76, end: tmp77, colors: null };
                                                  const items2 = [tmp78, tmp80];
                                                  obj5.colors = items2;
                                                  cResult[63] = tmp78;
                                                  cResult[64] = tmp80;
                                                  cResult[65] = obj5;
                                                  tmp82 = obj5;
                                                }
                                                const obj6 = { children: null };
                                                const items3 = [tmp63, tmp68];
                                                obj6.children = items3;
                                                const tmp75 = closure_12(closure_11, obj6);
                                                cResult[54] = tmp63;
                                                cResult[55] = tmp68;
                                                cResult[56] = tmp75;
                                                tmp72 = tmp75;
                                              }
                                              const obj7 = { style: tmp28.buttonsFloating, pointerEvents: "box-none", children: tmp61 };
                                              const tmp71 = closure_10(dismissBadge, obj7);
                                              cResult[51] = tmp61;
                                              cResult[52] = tmp28.buttonsFloating;
                                              cResult[53] = tmp71;
                                              tmp68 = tmp71;
                                            }
                                            let tmp64 = isLoading;
                                            if (isLoading) {
                                              const obj10 = { style: tmp28.loading, children: closure_10(closure_5, { size: "small" }) };
                                              tmp64 = closure_10(dismissBadge, obj10);
                                            }
                                            cResult[48] = isLoading;
                                            cResult[49] = tmp28.loading;
                                            cResult[50] = tmp64;
                                            tmp63 = tmp64;
                                          }
                                        }
                                      }
                                      const items4 = [tmp41, tmp45, tmp48, tmp57];
                                      const found = items4.filter((item) => null != item);
                                      cResult[43] = tmp41;
                                      cResult[44] = tmp45;
                                      cResult[45] = tmp48;
                                      cResult[46] = tmp57;
                                      cResult[47] = found;
                                      tmp61 = found;
                                    }
                                  }
                                  const obj11 = { ref: settingsButtonRef, IconComponent: tmp(7624).SettingsIcon, accessibilityLabel: tmp55, onPress: tmp38, showRedDot: tmp31 };
                                  const tmp60 = closure_10(tmp8(17264), obj11, "settings");
                                  cResult[39] = tmp31;
                                  cResult[40] = tmp38;
                                  cResult[41] = settingsButtonRef;
                                  cResult[42] = tmp60;
                                  tmp57 = tmp60;
                                  const tmp8Result5 = tmp8(17264);
                                }
                              }
                            }
                          }
                          if (hasPremiumSubscriptionToDisplay) {
                            let tmp52 = null;
                            if (enabled) {
                              const obj12 = { onPress: tmp39, showReferralNotificationDot };
                              tmp52 = closure_10(tmp8(17267), obj12, "nitro-subscriber");
                            }
                            let tmp51 = tmp52;
                          } else {
                            const obj13 = { IconComponent: tmp(8938).NitroWheelIcon, accessibilityLabel: null, label: null, onPress: null };
                            const intl2 = tmp(1119).intl;
                            obj13.accessibilityLabel = intl2.string(tmp(1119).t.Ipxkog);
                            const intl3 = tmp(1119).intl;
                            obj13.label = intl3.string(tmp(1119).t.Ipxkog);
                            obj13.onPress = tmp39;
                            tmp51 = closure_10(tmp8(17264), obj13, "nitro");
                            const tmp8Result6 = tmp8(17264);
                          }
                          cResult[33] = hasPremiumSubscriptionToDisplay;
                          cResult[34] = enabled;
                          cResult[35] = tmp39;
                          cResult[36] = showReferralNotificationDot;
                          cResult[37] = tmp51;
                        }
                        const obj14 = { shopButtonRef, navigateToShop };
                        const tmp47 = closure_10(tmp8(17265), obj14, "shop");
                        cResult[30] = navigateToShop;
                        cResult[31] = shopButtonRef;
                        cResult[32] = tmp47;
                        tmp45 = tmp47;
                      }
                      let tmp42 = null;
                      if (tmp33) {
                        const obj15 = { IconComponent: tmp(15261).QuestsIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
                        const intl = tmp(1119).intl;
                        obj15.accessibilityLabel = intl.string(tmp(1119).t.JALI2K);
                        obj15.onPress = tmp40;
                        obj15.showRedDot = showBadge;
                        tmp42 = closure_10(tmp8(17264), obj15, "quests");
                        const tmp8Result7 = tmp8(17264);
                      }
                      cResult[27] = tmp40;
                      cResult[28] = showBadge;
                      cResult[29] = tmp42;
                      tmp41 = tmp42;
                    }
                    function se() {
                      if (showBadge) {
                        dismissBadge(ContentDismissActionType.TAKE_ACTION);
                      }
                      const obj = QuestUtils;
                      obj.openQuestHome({ fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER });
                    }
                    cResult[24] = dismissBadge;
                    cResult[25] = showBadge;
                    cResult[26] = se;
                    tmp40 = se;
                  }
                }
                class J {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[25]);
                    obj1 = { isBadged: closure_2 };
                    result = obj.trackYouTabSettingsIconPress(obj1);
                    tmp4 = navigateToSettings();
                    tmp5 = closure_5;
                    if (closure_5) {
                      tmpResult = tmp(tmp2[12]);
                      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    if (tmp5) {
                      tmpResult1 = tmp(tmp2[12]);
                      result1 = tmpResult1.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    return;
                  }
                }
                cResult[18] = tmp37;
                cResult[19] = tmp31;
                cResult[20] = navigateToSettings;
                cResult[21] = J;
                tmp38 = J;
                const tmpResult11 = tmp(7696);
              }
              let hexResult3 = null;
              if (null != tmp16) {
                const tmp8Result8 = tmp8(676);
                const obj8 = tmp8(676)(tmp16);
                const hexResult2 = tmp8(676)(tmp16).hex("rgb");
                const obj9 = tmp8(676)(tmp16);
                hexResult3 = tmp8Result8.mix(gradientSecondaryBackground, hexResult2, tmp8(676)(tmp16).alpha(), "rgb").hex("rgb");
                const mixResult = tmp8Result8.mix(gradientSecondaryBackground, hexResult2, tmp8(676)(tmp16).alpha(), "rgb");
              }
              cResult[14] = gradientSecondaryBackground;
              cResult[15] = tmp16;
              cResult[16] = hexResult3;
              tmp18 = hexResult3;
            }
          }
        }
        const tmpResult7 = tmp(8512);
        if (!tmpResult12.isThemeLight(theme)) {
          let tmp17 = containerBackground;
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
        tmpResult12 = tmp(4610);
      }
    }
    const obj16 = { theme, primaryColor, secondaryColor };
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj16;
    tmp14 = obj16;
    const tmp13 = tmp8(8501)(tmp12);
  }
  const obj17 = { user: stateFromStores, displayProfile: tmp9Result };
  cResult[2] = tmp9Result;
  cResult[3] = stateFromStores;
  cResult[4] = obj17;
  tmp12 = obj17;
}) : ((navigateToPremium) => {
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  let containerBackground;
  let isBadged;
  let showBadge;
  let dismissBadge;
  let currentUser;
  let color;
  let items = [currentUser];
  const stateFromStores = navigateToSettings(gradientSecondaryBackground[15]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  let obj = navigateToSettings(gradientSecondaryBackground[15]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp5 = navigateToPremium(gradientSecondaryBackground[16]);
  const tmp5Result = navigateToPremium(gradientSecondaryBackground[16])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[17])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[16])(id) }));
  const tmp8 = navigateToPremium(gradientSecondaryBackground[17])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[16])(id) });
  const userProfileColors = navigateToSettings(gradientSecondaryBackground[18]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  let tmpResult = navigateToSettings(gradientSecondaryBackground[18]);
  if (!tmpResult6.isThemeLight(theme)) {
    containerBackground = userProfileColors.containerBackground;
  } else {
    containerBackground = null;
    if (null != primaryColor) {
      containerBackground = null;
    }
  }
  const items1 = [gradientSecondaryBackground, containerBackground];
  const tmp11 = closure_13(num, containerBackground.useMemo(() => {
    let hexResult1 = null;
    if (null != containerBackground) {
      const obj = _modDef676;
      const obj2 = _modDef676(tmp);
      const hexResult = _modDef676(tmp).hex("rgb");
      const obj3 = _modDef676(tmp);
      hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, _modDef676(tmp).alpha(), "rgb").hex("rgb");
      const mixResult = obj.mix(gradientSecondaryBackground, hexResult, _modDef676(tmp).alpha(), "rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  let obj4 = containerBackground;
  tmpResult6 = navigateToSettings(gradientSecondaryBackground[19]);
  const hasPremiumSubscriptionToDisplay = navigateToSettings(gradientSecondaryBackground[21]).useHasPremiumSubscriptionToDisplay();
  const tmp13 = closure_14();
  isBadged = tmp13;
  const tmp14 = navigateToPremium(gradientSecondaryBackground[22])();
  showBadge = tmp14.showBadge;
  dismissBadge = tmp14.dismissBadge;
  const tmpResult7 = navigateToSettings(gradientSecondaryBackground[21]);
  const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[23]).getIsEligibleForQuests();
  const tmpResult8 = navigateToSettings(gradientSecondaryBackground[23]);
  const mobileReferralSubscriberProfileEntrypointButtonConfig = navigateToSettings(gradientSecondaryBackground[24]).useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
  ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
  const tmpResult9 = navigateToSettings(gradientSecondaryBackground[24]);
  const tmp17 = null != navigateToSettings(gradientSecondaryBackground[11]).useTrialOffer(closure_9);
  currentUser = tmp17;
  const items2 = [tmp13, navigateToSettings, tmp17];
  const items3 = [navigateToPremium];
  const callback = containerBackground.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabSettingsIconPress({ isBadged });
    navigateToSettings();
    let tmp5 = closure_7;
    if (closure_7) {
      tmp5 = !tmp(4579).UNSAFE_isDismissibleContentDismissed(tmp(2031).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      const tmpResult = tmp(4579);
    }
    if (tmp5) {
      const result1 = tmp(4579).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      const tmpResult2 = tmp(4579);
    }
  }, items2);
  const callback1 = containerBackground.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const items4 = [showBadge, dismissBadge];
  let tmp21 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp(tmp2[29]).QuestsIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
    const intl = tmp(tmp2[30]).intl;
    obj2.accessibilityLabel = intl.string(tmp(tmp2[30]).t.JALI2K);
    obj2.onPress = tmp20;
    obj2.showRedDot = showBadge;
    tmp21 = closure_10(tmp4(tmp2[28]), obj2, "quests");
    const tmp4Result = tmp4(tmp2[28]);
  }
  const items5 = [tmp21, closure_10(navigateToPremium(gradientSecondaryBackground[31]), { shopButtonRef, navigateToShop }, "shop"), , ];
  if (hasPremiumSubscriptionToDisplay) {
    let tmp24Result = null;
    if (enabled) {
      let obj3 = { onPress: callback1, showReferralNotificationDot };
      tmp24Result = tmp24(tmp4(tmp2[32]), obj3, "nitro-subscriber");
    }
    let tmp24Result2 = tmp24Result;
  } else {
    const obj5 = { IconComponent: tmp(tmp2[33]).NitroWheelIcon, accessibilityLabel: null, label: null, onPress: null };
    const intl2 = tmp(tmp2[30]).intl;
    obj5.accessibilityLabel = intl2.string(tmp(tmp2[30]).t.Ipxkog);
    const intl3 = tmp(tmp2[30]).intl;
    obj5.label = intl3.string(tmp(tmp2[30]).t.Ipxkog);
    obj5.onPress = callback1;
    tmp24Result2 = tmp24(tmp4(tmp2[28]), obj5, "nitro");
    const tmp4Result4 = tmp4(tmp2[28]);
  }
  items5[2] = tmp24Result2;
  const obj6 = { ref: settingsButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const tmpResult10 = navigateToSettings(gradientSecondaryBackground[11]);
  obj6.IconComponent = navigateToSettings(gradientSecondaryBackground[34]).SettingsIcon;
  const intl4 = tmp(tmp2[30]).intl;
  obj6.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[30]).t["3D5yo/"]);
  obj6.onPress = callback;
  obj6.showRedDot = tmp13;
  items5[3] = closure_10(navigateToPremium(gradientSecondaryBackground[28]), obj6, "settings");
  const found = items5.filter((item) => null != item);
  if (isLoading) {
    const obj7 = { style: tmp11.loading, children: tmp24(showBadge, { size: "small" }) };
    isLoading = tmp24(isBadged, obj7);
  }
  const obj8 = { children: null };
  const items6 = [isLoading, closure_10(isBadged, { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found })];
  obj8.children = items6;
  color = tmp11.containerFloatingGradient.color;
  const items7 = [color];
  const obj9 = { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found };
  const tmp4Result5 = navigateToPremium(gradientSecondaryBackground[28]);
  const obj10 = { style: tmp11.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj4.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef676(color);
    const items = [_modDef676(color).alpha(0).hex(), ];
    const alphaResult = _modDef676(color).alpha(0);
    const obj4 = _modDef676(color);
    items[1] = _modDef676(color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items7);
  const obj11 = { style: tmp11.containerFloatingGradient };
  const tmp30Result = closure_12(closure_11, obj8);
  const merged = Object.assign(memo);
  obj11.pointerEvents = "none";
  const items8 = [closure_10(navigateToPremium(gradientSecondaryBackground[35]), obj11), closure_10(isBadged, { style: tmp11.containerFloating, children: tmp30Result })];
  obj10.children = items8;
  return closure_12(isBadged, obj10);
}));
export const useHasSettingsBadge = tmp4;
