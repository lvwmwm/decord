// Module ID: 16128
// Function ID: 16129
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: [32, 19, 17, 1084, 4853, 5029, 21, 5004, 587, 558, 576, 1502, 16129, 4840, 7532, 8692, 6402, 10699, 1408, 5032, 16121, 6748, 16130, 1264, 1125, 16133, 1199, 14756, 10696, 16134, 2929, 16136, 16137, 2]

// Module 16128 (UserProfileDisplayNameStylesEditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4853 */;
import AssetRegistryDefault from "AssetRegistry" /* 14756 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 16133 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 16134 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1084 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useMemo: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c10, HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { ggContainer: size, noneIcon: obj2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_14 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStylesEditButton(user) {
  let closure_3;
  let first;
  let isTryItOut;
  let tmp11;
  let tmp7;
  let tmp8;
  const tmp = user;
  let obj = user(isTryItOut[10]);
  const cResult = obj.c(42);
  user = user.user;
  const guildId = user.guildId;
  isTryItOut = user.isTryItOut;
  const tmp4 = closure_14();
  _slicedToArray = tmp4;
  let obj2 = user(isTryItOut[11]);
  const nativeStackNavigation = obj2.useNativeStackNavigation();
  const obj3 = user(isTryItOut[12]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj3.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  if (cResult[0] !== isDisplayNameStylesFlywheelSettersEnabled) {
    let items1;
    if (isDisplayNameStylesFlywheelSettersEnabled) {
      const items = [tmp(tmp2[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = isDisplayNameStylesFlywheelSettersEnabled;
    cResult[1] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { bypassAutoDismiss: true };
    cResult[2] = obj4;
    tmp8 = obj4;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(isTryItOut[14]);
  [first, tmp11] = tmpResult.useSelectedDismissibleContent(tmp7, tmp8);
  let closure_5 = tmp11;
  const tmpResult6 = tmp(isTryItOut[15]);
  const guildMemberOrUserPendingDisplayNameStyles = tmpResult6.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  if (isTryItOut) {
    tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === tryItOutDisplayNameStyles) {
      let tmp13;
      if (cResult[5] === user.id) {
        tmp13 = cResult[6];
      }
      const tmp15 = guildId(isTryItOut[16])(tmp13);
      let closure_6 = tmp15;
      let effectId;
      const useDisplayNameStylesEffectConfig = tmp(tmp2[17]).useDisplayNameStylesEffectConfig;
      tmp(isTryItOut[17]);
      if (tmp15 != null) {
        effectId = tmp15.effectId;
      }
      if (effectId == null) {
        effectId = tmp(tmp2[18]).DisplayNameEffect.SOLID;
      }
      const displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
      const tmpResult8 = tmp(isTryItOut[19]);
      let tmp22 = tmpResult8.useHexagonCampaignPerkAvailability(constants3.DISPLAY_NAME_STYLE, "UserProfileDisplayNameStylesEditButton") === constants4.SELECTABLE && true !== isTryItOut;
      if (tmp22) {
        let fontId;
        if (tmp15 != null) {
          fontId = tmp15.fontId;
        }
        tmp22 = fontId !== closure_10;
      }
      const useTrackHexagonCampaignContentViewed = tmp(tmp2[20]).useTrackHexagonCampaignContentViewed;
      tmp(isTryItOut[20]);
      const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(tmp(tmp2[21]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp(tmp2[20]).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp22);
      tmp(isTryItOut[22]);
      if (cResult[7] === guildId) {
        if (cResult[8] === isTryItOut) {
          if (cResult[9] === tmp11) {
            let tmp29;
            let combined;
            if (cResult[10] === nativeStackNavigation) {
              tmp29 = cResult[11];
            }
            if (null != tmp15) {
              let tmp32;
              if (cResult[13] !== tmp15.fontId) {
                const intl2 = tmp(tmp2[24]).intl;
                const stringResult = intl2.string(guildId(isTryItOut[25])(tmp15.fontId));
                cResult[13] = tmp15.fontId;
                cResult[14] = stringResult;
                tmp32 = stringResult;
              } else {
                tmp32 = cResult[14];
              }
              const _HermesInternal = HermesInternal;
              combined = "" + tmp32 + " + " + displayNameStylesEffectConfig.name;
            } else {
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[24]).intl;
                const stringResult1 = intl.string(tmp(isTryItOut[24]).t.PoWNfe);
                cResult[12] = stringResult1;
                combined = stringResult1;
              } else {
                combined = cResult[12];
              }
            }
            if (cResult[15] === tmp15) {
              if (cResult[16] === guildId) {
                if (cResult[17] === tmp4.ggContainer) {
                  if (cResult[18] === tmp4.noneIcon) {
                    let tmp34;
                    let tmp36;
                    if (cResult[19] === user.id) {
                      tmp34 = cResult[20];
                    }
                    if (cResult[21] !== tmp15) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      cResult[21] = tmp15;
                      cResult[22] = K;
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      const stringResult2 = obj9.string(guildId(isTryItOut[30])["86GtGH"]);
                      cResult[23] = stringResult2;
                      tmp36 = stringResult2;
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    const tmp38 = tmp22 && !tmp28 || first === tmp(isTryItOut[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
                    if (cResult[24] !== tmp38) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      cResult[24] = tmp38;
                      cResult[25] = jsx(tmp(isTryItOut[31]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp38 });
                      const tmp40 = jsx(tmp(isTryItOut[31]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp38 });
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    if (cResult[26] !== combined) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      tmp42[0] = combined;
                      cResult[26] = combined;
                      cResult[27] = tmp42;
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    if (cResult[28] !== tmp34) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      cResult[28] = tmp34;
                      cResult[29] = tmp44;
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    if (cResult[30] !== tmp35) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      cResult[30] = tmp35;
                      cResult[31] = tmp46;
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    if (cResult[32] !== tmp22) {
                      let tmp48;
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                      if (tmp22) {
                        class K {
                          constructor() {
                            let effectId;
                            let tmp3Result = null;
                            if (null != closure_6) {
                              let colors;
                              const tmp3 = jsx;
                              const tmp6 = DisplayNameStylesColorSwatchDefault;
                              if (closure_6 != null) {
                                colors = tmp.colors;
                              }
                              if (colors == null) {
                                colors = [];
                              }
                              const obj = { colors, effectId };
                              effectId = undefined;
                              if (closure_6 != null) {
                                effectId = tmp.effectId;
                              }
                              tmp3Result = tmp3(tmp6, obj);
                            }
                            return tmp3Result;
                          }
                        }
                        tmp48 = jsx(guildId(isTryItOut[32]), {});
                      }
                      cResult[32] = tmp22;
                      cResult[33] = tmp48;
                    } else {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    if (cResult[34] === combined) {
                      class K {
                        constructor() {
                          let effectId;
                          let tmp3Result = null;
                          if (null != closure_6) {
                            let colors;
                            const tmp3 = jsx;
                            const tmp6 = DisplayNameStylesColorSwatchDefault;
                            if (closure_6 != null) {
                              colors = tmp.colors;
                            }
                            if (colors == null) {
                              colors = [];
                            }
                            const obj = { colors, effectId };
                            effectId = undefined;
                            if (closure_6 != null) {
                              effectId = tmp.effectId;
                            }
                            tmp3Result = tmp3(tmp6, obj);
                          }
                          return tmp3Result;
                        }
                      }
                    }
                    const tmp51 = jsx(tmp(isTryItOut[31]).UserProfileEditFormButton, { label: tmp36, labelTrailing: tmp39, buttonText: combined, accessibilityValue: tmp41, onPress: tmp29, leading: tmp43, trailing: tmp45, footer: tmp47 });
                    class U {
                      constructor() {
                        const obj = AnalyticsUtilsDefault;
                        obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                        const obj2 = { guildId, isTryItOut };
                        nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
                        closure_5(ContentDismissActionType.TAKE_ACTION);
                      }
                    }
                    cResult[34] = combined;
                    cResult[35] = tmp29;
                    cResult[36] = tmp39;
                    cResult[37] = tmp41;
                    cResult[38] = tmp43;
                    cResult[39] = tmp45;
                    cResult[40] = tmp47;
                    cResult[41] = tmp51;
                  }
                }
              }
            }
            const fn = function $() {
              let tmp10;
              if (null == closure_6) {
                const Icon = native.Icon;
                tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
              } else {
                tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
              }
              return tmp10;
            };
            cResult[15] = tmp15;
            cResult[16] = guildId;
            cResult[17] = tmp4.ggContainer;
            cResult[18] = tmp4.noneIcon;
            cResult[19] = user.id;
            cResult[20] = fn;
            tmp34 = fn;
          }
        }
      }
      class U {
        constructor() {
          const obj = AnalyticsUtilsDefault;
          obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
          const obj2 = { guildId, isTryItOut };
          nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
          closure_5(ContentDismissActionType.TAKE_ACTION);
        }
      }
      cResult[7] = guildId;
      cResult[8] = isTryItOut;
      cResult[9] = tmp11;
      cResult[10] = nativeStackNavigation;
      cResult[11] = U;
      tmp29 = U;
    }
  }
  const obj7 = { userId: user.id, guildId, pendingDisplayNameStyles: tryItOutDisplayNameStyles, ignoreDisabledStylesSetting: true };
  cResult[3] = guildId;
  cResult[4] = tryItOutDisplayNameStyles;
  cResult[5] = user.id;
  cResult[6] = obj7;
  tmp13 = obj7;
}) : (function UserProfileDisplayNameStylesEditButton(user) {
  let closure_3;
  let first;
  let items1;
  let tmp9;
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let closure_5;
  let closure_6;
  let displayNameStylesEffectConfig;
  const tmp = closure_14();
  _slicedToArray = tmp;
  let tmp3 = isTryItOut;
  let obj = user(isTryItOut[11]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = user(isTryItOut[12]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let tmp6 = user(isTryItOut[14]);
  const useSelectedDismissibleContent = tmp6.useSelectedDismissibleContent;
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    items1 = items;
  } else {
    items1 = [];
  }
  [first, tmp9] = useSelectedDismissibleContent(items1, { bypassAutoDismiss: true });
  closure_5 = tmp9;
  const tmp2Result = user(tmp3[15]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  const tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  const obj3 = { userId: user.id, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp12 = guildId(tmp3[16]);
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  const tmp12Result = tmp12(obj3);
  closure_6 = tmp12Result;
  let effectId;
  const useDisplayNameStylesEffectConfig = tmp2(tmp3[17]).useDisplayNameStylesEffectConfig;
  user(tmp3[17]);
  if (tmp12Result != null) {
    effectId = tmp12Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[18]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
  const tmp2Result6 = user(tmp3[19]);
  let tmp17 = tmp2Result6.useHexagonCampaignPerkAvailability(constants3.DISPLAY_NAME_STYLE, "UserProfileDisplayNameStylesEditButton") === constants4.SELECTABLE && true !== isTryItOut;
  if (tmp17) {
    let fontId;
    if (tmp12Result != null) {
      fontId = tmp12Result.fontId;
    }
    tmp17 = fontId !== closure_10;
  }
  const useTrackHexagonCampaignContentViewed = tmp2(tmp3[20]).useTrackHexagonCampaignContentViewed;
  user(tmp3[20]);
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(tmp2(tmp3[21]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp2(tmp3[20]).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp17);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp9];
  const tmp2Result8 = user(tmp3[22]);
  const hexagonCampaignHasVisitedDisplayNameStyles = tmp2Result8.useHexagonCampaignHasVisitedDisplayNameStyles();
  const items3 = [displayNameStylesEffectConfig, tmp12Result];
  const tmp23 = nativeStackNavigation(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    const obj2 = { guildId, isTryItOut };
    nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const tmp24 = closure_5(() => {
    let stringResult;
    if (null == closure_6) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.PoWNfe);
    } else {
      const intl = intl3.intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp12Result, guildId, user.id, tmp];
  const items5 = [tmp12Result];
  const tmp25 = nativeStackNavigation(() => {
    let tmp10;
    if (null == closure_6) {
      const Icon = native.Icon;
      tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
    } else {
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items4);
  const tmp26 = nativeStackNavigation(() => {
    let effectId;
    let tmp3Result = null;
    if (null != closure_6) {
      let colors;
      const tmp3 = jsx;
      const tmp6 = DisplayNameStylesColorSwatchDefault;
      if (closure_6 != null) {
        colors = tmp.colors;
      }
      if (colors == null) {
        colors = [];
      }
      const obj = { colors, effectId };
      effectId = undefined;
      if (closure_6 != null) {
        effectId = tmp.effectId;
      }
      tmp3Result = tmp3(tmp6, obj);
    }
    return tmp3Result;
  }, items5);
  const UserProfileEditFormButton = tmp2(tmp3[31]).UserProfileEditFormButton;
  let intl = tmp2(tmp3[24]).intl;
  let tmp28 = tmp17;
  const UserProfileEditFormLabelBadges = tmp2(tmp3[31]).UserProfileEditFormLabelBadges;
  if (tmp17) {
    tmp28 = !hexagonCampaignHasVisitedDisplayNameStyles;
  }
  if (!tmp28) {
    tmp28 = first === tmp2(tmp3[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
  }
  let tmp27Result;
  if (tmp17) {
    tmp27Result = tmp27(tmp11(tmp3[32]), {});
  }
  return <UserProfileEditFormButton label={intl.string(guildId(tmp3[30])["86GtGH"])} labelTrailing={null} buttonText={tmp24} accessibilityValue={{ text: tmp24 }} onPress={tmp23} leading={tmp25()} trailing={tmp26()} footer={tmp27Result} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default tmp6;
