// Module ID: 16385
// Function ID: 16386
// Name: DisplayNameStylesEditPreview
// Dependencies: [19, 17, 4972, 8649, 21, 4971, 587, 558, 576, 8655, 1992, 8658, 504, 1128, 2928, 11057, 11175, 16384, 6782, 8648, 4796, 1202, 8738, 10661, 10662, 5234, 2]

// Module 16385 (DisplayNameStylesEditPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1202 */;
import _modDef2928 from "module_2928" /* 2928 */;
import DateUtils from "DateUtils" /* 4796 */;
import Text_Text from "Text/Text" /* 5234 */;
import useAvatarDecoration from "useAvatarDecoration" /* 6782 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8648 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8658 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8738 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10661 */;
import types from "types" /* 10662 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8649 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, obj1;

let items;
let items1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { previewSection: obj2, previewSectionTilted: { marginBottom: 0 }, profilePreviewTilted: obj3, chatPreviewWrapper: obj4, chatPreviewWrapperTilted: obj5, nameplatePreviewWrapper: { marginTop: -6, width: 260 }, chatContainer: obj6, chatContent: { flex: 1 }, chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 }, chatUsername: { flexShrink: 1, minWidth: 0 }, chatTimestamp: { marginTop: -8, flexShrink: 0 }, chatMessageText: {} };
obj2 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createStyles = createStyles.createStyles;
obj3 = { transform: items };
items = [{ rotate: "-2.63deg" }];
obj4 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj5 = { alignSelf: "flex-start", marginLeft: 88, transform: items1 };
items1 = [{ rotate: "3.36deg" }];
obj6 = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((scale) => {
  let items;
  let rect;
  const obj = { appIconTilted: rect };
  rect = { position: "absolute", top: 64, right: 0, borderRadius: nativeDefault.radii.xl, borderCurve: "continuous", borderWidth: 0, transform: items };
  items = [{ rotate: "15deg" }, ];
  const obj2 = { scale };
  items[1] = obj2;
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesEditPreview(user) {
  let NameplatePreview;
  let appIconId;
  let appIconScale;
  let closure_2;
  let displayName;
  let guildId;
  let guildNameplate;
  let hideBadges;
  let hideGuildTag;
  let hideNameplate;
  let hidePronouns;
  let isTryItOut;
  let items1;
  let obj5;
  let pendingNameplate;
  let selectedColors;
  let selectedEffectId;
  let selectedFontId;
  let tilted;
  let tmp12;
  let tmp14;
  let tmp43;
  let userNameplate;
  const obj = user(576);
  const cResult = obj.c(58);
  user = user.user;
  ({ displayName, guildId } = user);
  ({ selectedFontId, selectedEffectId, selectedColors, isTryItOut, appIconId, appIconScale, hideNameplate, hideBadges, hidePronouns, hideGuildTag, tilted } = user);
  dependencyMap = tmp4;
  let num = 1;
  if (undefined !== appIconScale) {
    num = appIconScale;
  }
  let chatPreviewWrapperTilted = undefined !== tilted && tilted;
  const tmp9 = closure_9();
  const tmp10 = closure_10(num);
  const tmpResult = user(8655);
  const guildMemberAndUserPendingNameplate = tmpResult.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ userNameplate, guildNameplate, pendingNameplate } = guildMemberAndUserPendingNameplate);
  if (cResult[0] !== guildNameplate) {
    const tmpResult3 = user(1992);
    const nameplateData = tmpResult3.getNameplateData(guildNameplate);
    cResult[0] = guildNameplate;
    cResult[1] = nameplateData;
    tmp12 = nameplateData;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[2] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === (undefined !== isTryItOut && isTryItOut)) {
      let tmp16;
      if (cResult[5] === user.id) {
        tmp16 = cResult[6];
      }
      const tmpResult4 = user(504);
      const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp16);
      if (cResult[7] === selectedColors) {
        if (cResult[8] === selectedEffectId) {
          let tmp18;
          if (cResult[9] === selectedFontId) {
            tmp18 = cResult[10];
          }
          if (cResult[11] === tmp9.previewSection) {
            let tmp20;
            let tmp22;
            if (cResult[12] === (chatPreviewWrapperTilted && tmp9.previewSectionTilted)) {
              tmp20 = cResult[13];
            }
            let profilePreviewTilted;
            if (chatPreviewWrapperTilted) {
              profilePreviewTilted = tmp9.profilePreviewTilted;
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1128).intl;
              const stringResult = intl.string(guildId(2928).zoh6MT);
              cResult[14] = stringResult;
              tmp22 = stringResult;
            } else {
              tmp22 = cResult[14];
            }
            if (cResult[15] === displayName) {
              if (cResult[16] === tmp18) {
                if (cResult[17] === guildId) {
                  if (cResult[18] === (undefined !== hideBadges && hideBadges)) {
                    if (cResult[19] === (undefined !== hideGuildTag && hideGuildTag)) {
                      if (cResult[20] === (undefined !== hidePronouns && hidePronouns)) {
                        if (cResult[21] === (undefined !== isTryItOut && isTryItOut)) {
                          if (cResult[22] === profilePreviewTilted) {
                            let tmp25;
                            if (cResult[23] === user) {
                              tmp25 = cResult[24];
                            }
                            if (chatPreviewWrapperTilted) {
                              chatPreviewWrapperTilted = tmp9.chatPreviewWrapperTilted;
                            }
                            if (cResult[25] === tmp9.chatPreviewWrapper) {
                              let tmp29;
                              if (cResult[26] === chatPreviewWrapperTilted) {
                                tmp29 = cResult[27];
                              }
                              if (cResult[28] === stateFromStores) {
                                if (cResult[29] === displayName) {
                                  if (cResult[30] === tmp18) {
                                    if (cResult[31] === guildId) {
                                      if (cResult[32] === (undefined !== isTryItOut && isTryItOut)) {
                                        let tmp30;
                                        if (cResult[33] === user) {
                                          tmp30 = cResult[34];
                                        }
                                        if (cResult[35] === tmp29) {
                                          let tmp34;
                                          if (cResult[36] === tmp30) {
                                            tmp34 = cResult[37];
                                          }
                                          if (cResult[38] === stateFromStores) {
                                            if (cResult[39] === displayName) {
                                              if (cResult[40] === tmp18) {
                                                if (cResult[41] === guildId) {
                                                  if (cResult[42] === tmp12) {
                                                    if (cResult[43] === (undefined !== hideNameplate && hideNameplate)) {
                                                      if (cResult[44] === pendingNameplate) {
                                                        if (cResult[45] === tmp9.nameplatePreviewWrapper) {
                                                          if (cResult[46] === user) {
                                                            let tmp38;
                                                            if (cResult[47] === userNameplate) {
                                                              tmp38 = cResult[48];
                                                            }
                                                            if (cResult[49] === appIconId) {
                                                              let tmp45;
                                                              if (cResult[50] === tmp10) {
                                                                tmp45 = cResult[51];
                                                              }
                                                              if (cResult[52] === tmp20) {
                                                                if (cResult[53] === tmp25) {
                                                                  if (cResult[54] === tmp34) {
                                                                    if (cResult[55] === tmp38) {
                                                                      let tmp50;
                                                                      if (cResult[56] === tmp45) {
                                                                        tmp50 = cResult[57];
                                                                      }
                                                                      return tmp50;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              let obj2 = { style: tmp20, children: items1 };
                                                              items1 = [tmp25, tmp34, tmp38, tmp45];
                                                              const tmp53 = closure_8(View, obj2);
                                                              cResult[52] = tmp20;
                                                              cResult[53] = tmp25;
                                                              cResult[54] = tmp34;
                                                              cResult[55] = tmp38;
                                                              cResult[56] = tmp45;
                                                              cResult[57] = tmp53;
                                                              tmp50 = tmp53;
                                                            }
                                                            let tmp47 = null != appIconId;
                                                            if (tmp47) {
                                                              let obj3 = { id: appIconId, size: 102, style: tmp10.appIconTilted };
                                                              tmp47 = closure_7(guildId(16384), obj3);
                                                            }
                                                            cResult[49] = appIconId;
                                                            cResult[50] = tmp10;
                                                            cResult[51] = tmp47;
                                                            tmp45 = tmp47;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let tmp40Result = !tmp5;
                                          if (tmp40Result) {
                                            const obj4 = { style: tmp9.nameplatePreviewWrapper, children: closure_7(NameplatePreview, obj5) };
                                            obj5 = { user, nameplate: pendingNameplate, nameplateData: tmp43, guildId, pendingAvatarSrc: stateFromStores, pendingDisplayNameStyles: tmp18, pendingGlobalName: displayName };
                                            tmp43 = undefined;
                                            NameplatePreview = tmp(11175).NameplatePreview;
                                            const tmp41 = View;
                                            if (null == pendingNameplate) {
                                              let tmp44 = tmp12;
                                              if (tmp12 == null) {
                                                tmp44 = userNameplate;
                                              }
                                              tmp43 = tmp44;
                                            }
                                            tmp40Result = tmp40(tmp41, obj4);
                                          }
                                          cResult[38] = stateFromStores;
                                          cResult[39] = displayName;
                                          cResult[40] = tmp18;
                                          cResult[41] = guildId;
                                          cResult[42] = tmp12;
                                          cResult[43] = undefined !== hideNameplate && hideNameplate;
                                          cResult[44] = pendingNameplate;
                                          cResult[45] = tmp9.nameplatePreviewWrapper;
                                          cResult[46] = user;
                                          cResult[47] = userNameplate;
                                          cResult[48] = tmp40Result;
                                          tmp38 = tmp40Result;
                                        }
                                        const obj6 = { style: tmp29, children: tmp30 };
                                        const tmp37 = closure_7(View, obj6);
                                        cResult[35] = tmp29;
                                        cResult[36] = tmp30;
                                        cResult[37] = tmp37;
                                        tmp34 = tmp37;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj7 = { user, displayName, displayNameStyles: tmp18, guildId, avatarSrcOverride: stateFromStores, isTryItOut: undefined !== isTryItOut && isTryItOut };
                              const tmp33 = closure_7(closure_11, obj7);
                              cResult[28] = stateFromStores;
                              cResult[29] = displayName;
                              cResult[30] = tmp18;
                              cResult[31] = guildId;
                              cResult[32] = undefined !== isTryItOut && isTryItOut;
                              cResult[33] = user;
                              cResult[34] = tmp33;
                              tmp30 = tmp33;
                            }
                            const items2 = [tmp9.chatPreviewWrapper, chatPreviewWrapperTilted];
                            cResult[25] = tmp9.chatPreviewWrapper;
                            cResult[26] = chatPreviewWrapperTilted;
                            cResult[27] = items2;
                            tmp29 = items2;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj8 = { user, displayName, guildId, displayNameStylesOverride: tmp18, isPremiumTryItOut: undefined !== isTryItOut && isTryItOut, compact: true, hideFrame: true, hideBadges: undefined !== hideBadges && hideBadges, hidePronouns: undefined !== hidePronouns && hidePronouns, hideGuildTag: undefined !== hideGuildTag && hideGuildTag, maxWidth: 320, style: profilePreviewTilted, accessibilityLabel: tmp22 };
            const tmp28 = closure_7(guildId(11057), obj8);
            cResult[15] = displayName;
            cResult[16] = tmp18;
            cResult[17] = guildId;
            cResult[18] = undefined !== hideBadges && hideBadges;
            cResult[19] = undefined !== hideGuildTag && hideGuildTag;
            cResult[20] = undefined !== hidePronouns && hidePronouns;
            cResult[21] = undefined !== isTryItOut && isTryItOut;
            cResult[22] = profilePreviewTilted;
            cResult[23] = user;
            cResult[24] = tmp28;
            tmp25 = tmp28;
          }
          const items3 = [tmp9.previewSection, chatPreviewWrapperTilted && tmp9.previewSectionTilted];
          cResult[11] = tmp9.previewSection;
          cResult[12] = chatPreviewWrapperTilted && tmp9.previewSectionTilted;
          cResult[13] = items3;
          tmp20 = items3;
        }
      }
      const obj9 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
      cResult[7] = selectedColors;
      cResult[8] = selectedEffectId;
      cResult[9] = selectedFontId;
      cResult[10] = obj9;
      tmp18 = obj9;
    }
  }
  class X {
    constructor() {
      obj = closure_6;
      if (isTryItOut) {
        pendingAvatar = obj.getTryItOutChanges().tryItOutAvatar;
      } else {
        tmp = guildId;
        pendingAvatar = obj.getPendingChanges(guildId).pendingAvatar;
      }
      obj2 = closure_0(closure_2[11]);
      obj1 = { userId: user.id, image: pendingAvatar };
      return obj2.getPendingAvatarSrc(obj1);
    }
  }
  cResult[3] = guildId;
  cResult[4] = undefined !== isTryItOut && isTryItOut;
  cResult[5] = user.id;
  cResult[6] = X;
  tmp16 = X;
}) : (function DisplayNameStylesEditPreview(user) {
  let NameplatePreview;
  let appIconId;
  let appIconScale;
  let displayName;
  let guildId;
  let guildNameplate;
  let intl;
  let items3;
  let obj8;
  let pendingNameplate;
  let profilePreviewTilted;
  let tmp17;
  let userNameplate;
  user = user.user;
  ({ displayName, guildId } = user);
  const selectedFontId = user.selectedFontId;
  const selectedEffectId = user.selectedEffectId;
  const selectedColors = user.selectedColors;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  ({ appIconId, appIconScale } = user);
  if (appIconScale === undefined) {
    appIconScale = 1;
  }
  let flag2 = user.hideNameplate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = user.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = user.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = user.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = user.tilted;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const tmp = closure_9();
  const tmp2 = closure_10(appIconScale);
  const obj = user(selectedFontId[9]);
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let obj2 = user(selectedFontId[10]);
  let nameplateData = obj2.getNameplateData(guildNameplate);
  let obj3 = user(selectedFontId[12]);
  const items = [UserProfileSettingsStore];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let pendingAvatar;
    if (flag) {
      pendingAvatar = obj.getTryItOutChanges().tryItOutAvatar;
    } else {
      pendingAvatar = obj.getPendingChanges(guildId).pendingAvatar;
    }
    const obj2 = RecentAvatarUtils;
    const obj3 = { userId: user.id, image: pendingAvatar };
    return obj2.getPendingAvatarSrc(obj3);
  });
  const items1 = [selectedFontId, selectedEffectId, selectedColors];
  const memo = selectedEffectId.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items1);
  const items2 = [tmp.previewSection, ];
  let previewSectionTilted = flag6;
  const tmp9 = closure_8;
  if (flag6) {
    previewSectionTilted = tmp.previewSectionTilted;
  }
  const obj4 = { style: items2, children: items3 };
  items2[1] = previewSectionTilted;
  const obj5 = { user, displayName, guildId, displayNameStylesOverride: memo, isPremiumTryItOut: flag, compact: true, hideFrame: true, hideBadges: flag3, hidePronouns: flag4, hideGuildTag: flag5, maxWidth: 320, style: profilePreviewTilted, accessibilityLabel: intl.string(guildId(selectedFontId[14]).zoh6MT) };
  profilePreviewTilted = undefined;
  const tmp13 = guildId(selectedFontId[15]);
  if (flag6) {
    profilePreviewTilted = tmp.profilePreviewTilted;
  }
  intl = tmp3(tmp4[13]).intl;
  items3 = [closure_7(tmp13, obj5), , , ];
  const items4 = [tmp.chatPreviewWrapper, ];
  if (flag6) {
    flag6 = tmp.chatPreviewWrapperTilted;
  }
  items4[1] = flag6;
  const obj6 = { style: items4, children: closure_7(closure_11, { user, displayName, displayNameStyles: memo, guildId, avatarSrcOverride: stateFromStores, isTryItOut: flag }) };
  items3[1] = closure_7(selectedColors, obj6);
  let tmp11Result = !flag2;
  if (tmp11Result) {
    const obj7 = { style: tmp.nameplatePreviewWrapper, children: closure_7(NameplatePreview, obj8) };
    obj8 = { user, nameplate: pendingNameplate, nameplateData: tmp17, guildId, pendingAvatarSrc: stateFromStores, pendingDisplayNameStyles: memo, pendingGlobalName: displayName };
    tmp17 = undefined;
    NameplatePreview = tmp3(tmp4[16]).NameplatePreview;
    if (null == pendingNameplate) {
      if (nameplateData == null) {
        nameplateData = userNameplate;
      }
      tmp17 = nameplateData;
    }
    tmp11Result = tmp11(tmp10, obj7);
  }
  items3[2] = tmp11Result;
  let tmp11Result2 = null != appIconId;
  if (tmp11Result2) {
    const obj9 = { id: appIconId, size: 102, style: tmp2.appIconTilted };
    tmp11Result2 = tmp11(tmp12(tmp4[17]), obj9);
  }
  items3[3] = tmp11Result2;
  return tmp9(selectedColors, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPreview(arg0) {
  let avatarSrcOverride;
  let displayName;
  let displayNameStyles;
  let guildId;
  let isTryItOut;
  let items1;
  let items2;
  let items3;
  let tmpResult6;
  let useReducedMotion;
  let user;
  const obj = react2;
  const cResult = obj.c(35);
  ({ user, displayName, displayNameStyles, guildId, avatarSrcOverride, isTryItOut } = arg0);
  const tmp5 = closure_9();
  useAvatarDecoration;
  if (cResult[0] === guildId) {
    let tmp8;
    let tmp12;
    let tmp11;
    let tmp15;
    let obj9;
    if (cResult[1] === (undefined !== isTryItOut && isTryItOut)) {
      tmp8 = cResult[2];
    }
    const pendingAvatarDecoration = usePendingAvatarSettingsDefault(tmp8).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function x() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[3] = items;
      cResult[4] = fn;
      tmp12 = fn;
      tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const tmpResult4 = get_initialized;
    const stateFromStores = tmpResult4.useStateFromStores(tmp11, tmp12);
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const calendarFormat = DateUtils.calendarFormat;
      DateUtils;
      const date = new Date();
      const calendarFormatResult = calendarFormat(date, true);
      cResult[5] = calendarFormatResult;
      tmp15 = calendarFormatResult;
    } else {
      tmp15 = cResult[5];
    }
    let tmp20 = tmp7;
    if (undefined !== pendingAvatarDecoration) {
      tmp20 = pendingAvatarDecoration;
    }
    if (cResult[6] === avatarSrcOverride) {
      if (cResult[7] === tmp20) {
        if (cResult[8] === guildId) {
          if (cResult[9] === stateFromStores) {
            let tmp22;
            if (cResult[10] === user) {
              tmp22 = cResult[11];
            }
            if (cResult[12] === displayName) {
              if (cResult[13] === displayNameStyles) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === tmp5.chatUsername) {
                    let tmp31;
                    let tmp35;
                    if (cResult[16] === user.id) {
                      tmp31 = cResult[17];
                    }
                    if (cResult[18] !== tmp5.chatTimestamp) {
                      const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp5.chatTimestamp, children: tmp15 };
                      const tmp37 = metroImportDefault(Text_Text.Text, obj2);
                      cResult[18] = tmp5.chatTimestamp;
                      cResult[19] = tmp37;
                      tmp35 = tmp37;
                    } else {
                      tmp35 = cResult[19];
                    }
                    if (cResult[20] === tmp5.chatHeader) {
                      if (cResult[21] === tmp35) {
                        let tmp38;
                        let tmp42;
                        let tmp44;
                        if (cResult[22] === tmp31) {
                          tmp38 = cResult[23];
                        }
                        const _Symbol3 = Symbol;
                        const chatMessageText = tmp5.chatMessageText;
                        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = tmp(1128).intl;
                          const stringResult = intl.string(_modDef2928.h5Cuej);
                          cResult[24] = stringResult;
                          tmp42 = stringResult;
                        } else {
                          tmp42 = cResult[24];
                        }
                        if (cResult[25] !== tmp5.chatMessageText) {
                          const obj3 = { variant: "text-md/normal", color: "text-default", style: chatMessageText, children: tmp42 };
                          const tmp46 = metroImportDefault(Text_Text.Text, obj3);
                          cResult[25] = tmp5.chatMessageText;
                          cResult[26] = tmp46;
                          tmp44 = tmp46;
                        } else {
                          tmp44 = cResult[26];
                        }
                        if (cResult[27] === tmp5.chatContent) {
                          if (cResult[28] === tmp38) {
                            let tmp47;
                            if (cResult[29] === tmp44) {
                              tmp47 = cResult[30];
                            }
                            if (cResult[31] === tmp5.chatContainer) {
                              if (cResult[32] === tmp47) {
                                let tmp51;
                                if (cResult[33] === tmp22) {
                                  tmp51 = cResult[34];
                                }
                                return tmp51;
                              }
                            }
                            const obj4 = { style: tmp21, pointerEvents: "none", children: items1 };
                            items1 = [tmp22, tmp47];
                            const tmp54 = metroImportAll(View, obj4);
                            cResult[31] = tmp5.chatContainer;
                            cResult[32] = tmp47;
                            cResult[33] = tmp22;
                            cResult[34] = tmp54;
                            tmp51 = tmp54;
                          }
                        }
                        const obj5 = { style: tmp30, children: items2 };
                        items2 = [tmp38, tmp44];
                        const tmp50 = metroImportAll(View, obj5);
                        cResult[27] = tmp5.chatContent;
                        cResult[28] = tmp38;
                        cResult[29] = tmp44;
                        cResult[30] = tmp50;
                        tmp47 = tmp50;
                      }
                    }
                    const obj6 = { style: tmp5.chatHeader, children: items3 };
                    items3 = [tmp31, tmp35];
                    const tmp41 = metroImportAll(View, obj6);
                    cResult[20] = tmp5.chatHeader;
                    cResult[21] = tmp35;
                    cResult[22] = tmp31;
                    cResult[23] = tmp41;
                    tmp38 = tmp41;
                  }
                }
              }
            }
            const obj7 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: types.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp5.chatUsername };
            const tmp9Result = UsernameWithEffectsDefault;
            const tmp34 = metroImportDefault(tmp9Result, obj7);
            cResult[12] = displayName;
            cResult[13] = displayNameStyles;
            cResult[14] = guildId;
            cResult[15] = tmp5.chatUsername;
            cResult[16] = user.id;
            cResult[17] = tmp34;
            tmp31 = tmp34;
          }
        }
      }
    }
    const Avatar = tmp(1202).Avatar;
    const tmp23 = metroImportDefault;
    if (undefined !== avatarSrcOverride) {
      const obj8 = { source: tmpResult6.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores), size: native.AvatarSizes.NORMAL, avatarDecoration: tmp20 };
      obj9 = obj8;
      tmpResult6 = profile_customization_ProfileCustomizationUtils;
    } else {
      obj9 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp20, animate: !stateFromStores };
    }
    const tmp23Result = tmp23(Avatar, obj9);
    cResult[6] = avatarSrcOverride;
    cResult[7] = tmp20;
    cResult[8] = guildId;
    cResult[9] = stateFromStores;
    cResult[10] = user;
    cResult[11] = tmp23Result;
    tmp22 = tmp23Result;
  }
  const obj10 = { guildId, isTryItOut: undefined !== isTryItOut && isTryItOut };
  cResult[0] = guildId;
  cResult[1] = undefined !== isTryItOut && isTryItOut;
  cResult[2] = obj10;
  tmp8 = obj10;
}) : (function ChatPreview(arg0) {
  let avatarSrcOverride;
  let displayName;
  let displayNameStyles;
  let guildId;
  let intl;
  let isTryItOut;
  let items1;
  let items2;
  let items3;
  let obj5;
  let tmp2Result;
  let useReducedMotion;
  let user;
  ({ user, guildId, avatarSrcOverride, isTryItOut } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  const tmp = closure_9();
  const obj = useAvatarDecoration;
  const avatarDecoration = obj.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId, isTryItOut }).pendingAvatarDecoration;
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp8 = avatarDecoration;
  const memo = react.useMemo(() => {
    const calendarFormat = require("DateUtils").calendarFormat;
    require("DateUtils");
    const date = new Date();
    return calendarFormat(date, true);
  }, []);
  if (undefined !== pendingAvatarDecoration) {
    tmp8 = pendingAvatarDecoration;
  }
  const obj3 = { style: tmp.chatContainer, pointerEvents: "none", children: items1 };
  const Avatar = tmp2(1202).Avatar;
  if (undefined !== avatarSrcOverride) {
    const obj4 = { source: tmp2Result.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores), size: native.AvatarSizes.NORMAL, avatarDecoration: tmp8 };
    obj5 = obj4;
    tmp2Result = profile_customization_ProfileCustomizationUtils;
  } else {
    obj5 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  }
  items1 = [metroImportDefault(Avatar, obj5), ];
  const obj6 = { style: tmp.chatContent, children: items3 };
  const obj7 = { style: tmp.chatHeader, children: items2 };
  const obj8 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: types.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp.chatUsername };
  const tmp5Result = UsernameWithEffectsDefault;
  items2 = [metroImportDefault(tmp5Result, obj8), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo };
  items2[1] = metroImportDefault(Text_Text.Text, obj9);
  items3 = [metroImportAll(View, obj7), ];
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: intl.string(_modDef2928.h5Cuej) };
  const Text = tmp2(5234).Text;
  intl = tmp2(1128).intl;
  items3[1] = metroImportDefault(Text, obj10);
  items1[1] = metroImportAll(View, obj6);
  return metroImportAll(View, obj3);
});
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default tmp4;
