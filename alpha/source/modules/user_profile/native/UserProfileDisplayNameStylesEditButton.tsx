// Module ID: 14846
// Function ID: 14847
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: [32, 19, 17, 1085, 2062, 21, 5092, 587, 558, 576, 1503, 14847, 2049, 7099, 8290, 5628, 10265, 1409, 1265, 1126, 14848, 1200, 13453, 10262, 14849, 2958, 14851, 2]

// Module 14846 (UserProfileDisplayNameStylesEditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import AssetRegistryDefault from "AssetRegistry" /* 13453 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14848 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 14849 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useMemo: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { ggContainer: size, noneIcon: obj2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStylesEditButton(user) {
  let closure_3;
  let first;
  let isTryItOut;
  let tmp11;
  let tmp7;
  let tmp8;
  const tmp = user;
  let obj = user(isTryItOut[9]);
  const cResult = obj.c(39);
  user = user.user;
  const guildId = user.guildId;
  isTryItOut = user.isTryItOut;
  const tmp4 = closure_11();
  _slicedToArray = tmp4;
  let obj2 = user(isTryItOut[10]);
  const nativeStackNavigation = obj2.useNativeStackNavigation();
  const obj3 = user(isTryItOut[11]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj3.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  if (cResult[0] !== isDisplayNameStylesFlywheelSettersEnabled) {
    let items1;
    if (isDisplayNameStylesFlywheelSettersEnabled) {
      const items = [tmp(tmp2[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
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
  const tmpResult = tmp(isTryItOut[13]);
  [first, tmp11] = tmpResult.useSelectedDismissibleContent(tmp7, tmp8);
  let closure_5 = tmp11;
  const tmpResult3 = tmp(isTryItOut[14]);
  const guildMemberOrUserPendingDisplayNameStyles = tmpResult3.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
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
      const tmp15 = guildId(isTryItOut[15])(tmp13);
      let closure_6 = tmp15;
      let effectId;
      const useDisplayNameStylesEffectConfig = tmp(tmp2[16]).useDisplayNameStylesEffectConfig;
      tmp(isTryItOut[16]);
      if (tmp15 != null) {
        effectId = tmp15.effectId;
      }
      if (effectId == null) {
        effectId = tmp(tmp2[17]).DisplayNameEffect.SOLID;
      }
      if (cResult[7] === guildId) {
        if (cResult[8] === isTryItOut) {
          if (cResult[9] === tmp11) {
            let tmp20;
            let combined;
            if (cResult[10] === nativeStackNavigation) {
              tmp20 = cResult[11];
            }
            if (null != tmp15) {
              let tmp23;
              if (cResult[13] !== tmp15.fontId) {
                const intl2 = tmp(tmp2[19]).intl;
                const stringResult = intl2.string(guildId(isTryItOut[20])(tmp15.fontId));
                cResult[13] = tmp15.fontId;
                cResult[14] = stringResult;
                tmp23 = stringResult;
              } else {
                tmp23 = cResult[14];
              }
              const _HermesInternal = HermesInternal;
              combined = "" + tmp23 + " + " + tmp19.name;
            } else {
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[19]).intl;
                const stringResult1 = intl.string(tmp(isTryItOut[19]).t.PoWNfe);
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
                    let tmp25;
                    let tmp26;
                    let tmp27;
                    let tmp30;
                    let tmp33;
                    let tmp34;
                    let tmp36;
                    if (cResult[19] === user.id) {
                      tmp25 = cResult[20];
                    }
                    if (cResult[21] !== tmp15) {
                      const fn2 = function k() {
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
                      };
                      cResult[21] = tmp15;
                      cResult[22] = fn2;
                      tmp26 = fn2;
                    } else {
                      tmp26 = cResult[22];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = tmp(tmp2[19]).intl;
                      const stringResult2 = intl3.string(guildId(isTryItOut[25])["86GtGH"]);
                      cResult[23] = stringResult2;
                      tmp27 = stringResult2;
                    } else {
                      tmp27 = cResult[23];
                    }
                    const tmp29 = first === tmp(isTryItOut[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
                    if (cResult[24] !== tmp29) {
                      const tmp32 = jsx(tmp(isTryItOut[26]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp29 });
                      cResult[24] = tmp29;
                      cResult[25] = tmp32;
                      tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[25];
                    }
                    if (cResult[26] !== combined) {
                      const obj6 = { text: combined };
                      cResult[26] = combined;
                      cResult[27] = obj6;
                      tmp33 = obj6;
                    } else {
                      tmp33 = cResult[27];
                    }
                    if (cResult[28] !== tmp25) {
                      const tmp25Result = tmp25();
                      cResult[28] = tmp25;
                      cResult[29] = tmp25Result;
                      tmp34 = tmp25Result;
                    } else {
                      tmp34 = cResult[29];
                    }
                    if (cResult[30] !== tmp26) {
                      const tmp26Result = tmp26();
                      cResult[30] = tmp26;
                      cResult[31] = tmp26Result;
                      tmp36 = tmp26Result;
                    } else {
                      tmp36 = cResult[31];
                    }
                    if (cResult[32] === combined) {
                      if (cResult[33] === tmp20) {
                        if (cResult[34] === tmp30) {
                          if (cResult[35] === tmp33) {
                            if (cResult[36] === tmp34) {
                              let tmp38;
                              if (cResult[37] === tmp36) {
                                tmp38 = cResult[38];
                              }
                              return tmp38;
                            }
                          }
                        }
                      }
                    }
                    class Y {
                      constructor() {
                        const obj = AnalyticsUtilsDefault;
                        obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                        const obj2 = { guildId, isTryItOut };
                        nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
                        closure_5(ContentDismissActionType.TAKE_ACTION);
                      }
                    }
                    const tmp39 = jsx(tmp(isTryItOut[26]).UserProfileEditFormButton, { label: tmp27, labelTrailing: tmp30, buttonText: combined, accessibilityValue: tmp33, onPress: tmp20, leading: tmp34, trailing: tmp36 });
                    cResult[32] = combined;
                    cResult[33] = tmp20;
                    cResult[34] = tmp30;
                    cResult[35] = tmp33;
                    cResult[36] = tmp34;
                    cResult[37] = tmp36;
                    cResult[38] = tmp39;
                    tmp38 = tmp39;
                  }
                }
              }
            }
            const fn = function x() {
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
            class Y {
              constructor() {
                const obj = AnalyticsUtilsDefault;
                obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                const obj2 = { guildId, isTryItOut };
                nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
                closure_5(ContentDismissActionType.TAKE_ACTION);
              }
            }
            cResult[19] = user.id;
            cResult[20] = fn;
            tmp25 = fn;
          }
        }
      }
      class Y {
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
      cResult[11] = Y;
      tmp20 = Y;
    }
  }
  const obj8 = { userId: user.id, guildId, pendingDisplayNameStyles: tryItOutDisplayNameStyles, ignoreDisabledStylesSetting: true };
  cResult[3] = guildId;
  cResult[4] = tryItOutDisplayNameStyles;
  cResult[5] = user.id;
  cResult[6] = obj8;
  tmp13 = obj8;
}) : (function UserProfileDisplayNameStylesEditButton(user) {
  let closure_3;
  let first;
  let items1;
  let pendingDisplayNameStyles;
  let tmp9;
  let tryItOutDisplayNameStyles;
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let closure_5;
  let closure_6;
  let displayNameStylesEffectConfig;
  const tmp = closure_11();
  _slicedToArray = tmp;
  let tmp3 = isTryItOut;
  let obj = user(isTryItOut[10]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = user(isTryItOut[11]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let tmp6 = user(isTryItOut[13]);
  const useSelectedDismissibleContent = tmp6.useSelectedDismissibleContent;
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    items1 = items;
  } else {
    items1 = [];
  }
  [first, tmp9] = useSelectedDismissibleContent(items1, { bypassAutoDismiss: true });
  closure_5 = tmp9;
  const tmp2Result = user(tmp3[14]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  const obj3 = { userId: user.id, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp11 = guildId;
  const tmp12 = guildId(tmp3[15]);
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  const tmp12Result = tmp12(obj3);
  closure_6 = tmp12Result;
  let effectId;
  const useDisplayNameStylesEffectConfig = tmp2(tmp3[16]).useDisplayNameStylesEffectConfig;
  user(tmp3[16]);
  if (tmp12Result != null) {
    effectId = tmp12Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[17]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp9];
  const items3 = [displayNameStylesEffectConfig, tmp12Result];
  const tmp17 = nativeStackNavigation(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    const obj2 = { guildId, isTryItOut };
    nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const tmp18 = closure_5(() => {
    let stringResult;
    if (null == closure_6) {
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t.PoWNfe);
    } else {
      const intl = intl4.intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp12Result, guildId, user.id, tmp];
  const items5 = [tmp12Result];
  const tmp19 = nativeStackNavigation(() => {
    let tmp10;
    if (null == closure_6) {
      const Icon = native.Icon;
      tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
    } else {
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items4);
  const tmp20 = nativeStackNavigation(() => {
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
  const UserProfileEditFormButton = tmp2(tmp3[26]).UserProfileEditFormButton;
  let intl = tmp2(tmp3[19]).intl;
  ({ showPremiumIcon: true, showNewBadge: first === user(tmp3[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = tmp2(tmp3[26]).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl.string(tmp11(tmp3[25])["86GtGH"])} labelTrailing={null} buttonText={tmp18} accessibilityValue={{ text: tmp18 }} onPress={tmp17} leading={tmp19()} trailing={tmp20()} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default tmp5;
