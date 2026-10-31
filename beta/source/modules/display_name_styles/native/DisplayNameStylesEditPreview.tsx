// Module ID: 16419
// Function ID: 16420
// Name: DisplayNameStylesEditPreview
// Dependencies: [19, 17, 5004, 8681, 21, 5003, 587, 558, 576, 8687, 1992, 8690, 504, 1128, 2928, 11088, 11206, 16418, 6814, 8680, 4828, 1202, 8770, 10693, 10694, 5266, 2]

// Module 16419 (DisplayNameStylesEditPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1202 */;
import DateUtils from "DateUtils" /* 4828 */;
import Text_Text from "Text/Text" /* 5266 */;
import useAvatarDecoration from "useAvatarDecoration" /* 6814 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8680 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8690 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8770 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10693 */;
import types from "types" /* 10694 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5004 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8681 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
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
  let chatMessage;
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
  const cResult = obj.c(59);
  user = user.user;
  ({ displayName, guildId } = user);
  ({ selectedFontId, selectedEffectId, selectedColors, isTryItOut, appIconId, appIconScale, hideNameplate, hideBadges, hidePronouns, hideGuildTag, tilted, chatMessage } = user);
  dependencyMap = tmp4;
  let num = 1;
  if (undefined !== appIconScale) {
    num = appIconScale;
  }
  let chatPreviewWrapperTilted = undefined !== tilted && tilted;
  const tmp9 = closure_9();
  const tmp10 = closure_10(num);
  const tmpResult = user(8687);
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
                                if (cResult[29] === chatMessage) {
                                  if (cResult[30] === displayName) {
                                    if (cResult[31] === tmp18) {
                                      if (cResult[32] === guildId) {
                                        if (cResult[33] === (undefined !== isTryItOut && isTryItOut)) {
                                          let tmp30;
                                          if (cResult[34] === user) {
                                            tmp30 = cResult[35];
                                          }
                                          if (cResult[36] === tmp29) {
                                            let tmp34;
                                            if (cResult[37] === tmp30) {
                                              tmp34 = cResult[38];
                                            }
                                            if (cResult[39] === stateFromStores) {
                                              if (cResult[40] === displayName) {
                                                if (cResult[41] === tmp18) {
                                                  if (cResult[42] === guildId) {
                                                    if (cResult[43] === tmp12) {
                                                      if (cResult[44] === (undefined !== hideNameplate && hideNameplate)) {
                                                        if (cResult[45] === pendingNameplate) {
                                                          if (cResult[46] === tmp9.nameplatePreviewWrapper) {
                                                            if (cResult[47] === user) {
                                                              let tmp38;
                                                              if (cResult[48] === userNameplate) {
                                                                tmp38 = cResult[49];
                                                              }
                                                              if (cResult[50] === appIconId) {
                                                                let tmp45;
                                                                if (cResult[51] === tmp10) {
                                                                  tmp45 = cResult[52];
                                                                }
                                                                if (cResult[53] === tmp20) {
                                                                  if (cResult[54] === tmp25) {
                                                                    if (cResult[55] === tmp34) {
                                                                      if (cResult[56] === tmp38) {
                                                                        let tmp50;
                                                                        if (cResult[57] === tmp45) {
                                                                          tmp50 = cResult[58];
                                                                        }
                                                                        return tmp50;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                let obj2 = { style: tmp20, children: items1 };
                                                                items1 = [tmp25, tmp34, tmp38, tmp45];
                                                                const tmp53 = closure_8(View, obj2);
                                                                cResult[53] = tmp20;
                                                                cResult[54] = tmp25;
                                                                cResult[55] = tmp34;
                                                                cResult[56] = tmp38;
                                                                cResult[57] = tmp45;
                                                                cResult[58] = tmp53;
                                                                tmp50 = tmp53;
                                                              }
                                                              let tmp47 = null != appIconId;
                                                              if (tmp47) {
                                                                let obj3 = { id: appIconId, size: 102, style: tmp10.appIconTilted };
                                                                tmp47 = closure_7(guildId(16418), obj3);
                                                              }
                                                              cResult[50] = appIconId;
                                                              cResult[51] = tmp10;
                                                              cResult[52] = tmp47;
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
                                              NameplatePreview = tmp(11206).NameplatePreview;
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
                                            cResult[39] = stateFromStores;
                                            cResult[40] = displayName;
                                            cResult[41] = tmp18;
                                            cResult[42] = guildId;
                                            cResult[43] = tmp12;
                                            cResult[44] = undefined !== hideNameplate && hideNameplate;
                                            cResult[45] = pendingNameplate;
                                            cResult[46] = tmp9.nameplatePreviewWrapper;
                                            cResult[47] = user;
                                            cResult[48] = userNameplate;
                                            cResult[49] = tmp40Result;
                                            tmp38 = tmp40Result;
                                          }
                                          const obj6 = { style: tmp29, children: tmp30 };
                                          const tmp37 = closure_7(View, obj6);
                                          cResult[36] = tmp29;
                                          cResult[37] = tmp30;
                                          cResult[38] = tmp37;
                                          tmp34 = tmp37;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj7 = { user, displayName, displayNameStyles: tmp18, guildId, avatarSrcOverride: stateFromStores, isTryItOut: undefined !== isTryItOut && isTryItOut, chatMessage };
                              const tmp33 = closure_7(closure_11, obj7);
                              cResult[28] = stateFromStores;
                              cResult[29] = chatMessage;
                              cResult[30] = displayName;
                              cResult[31] = tmp18;
                              cResult[32] = guildId;
                              cResult[33] = undefined !== isTryItOut && isTryItOut;
                              cResult[34] = user;
                              cResult[35] = tmp33;
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
            const tmp28 = closure_7(guildId(11088), obj8);
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
  class K {
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
  cResult[6] = K;
  tmp16 = K;
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
  const chatMessage = user.chatMessage;
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
  const obj6 = { style: items4, children: closure_7(closure_11, { user, displayName, displayNameStyles: memo, guildId, avatarSrcOverride: stateFromStores, isTryItOut: flag, chatMessage }) };
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
  let chatMessage;
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
  const cResult = obj.c(37);
  ({ user, displayName, displayNameStyles, guildId, avatarSrcOverride, isTryItOut, chatMessage } = arg0);
  const tmp5 = closure_9();
  useAvatarDecoration;
  if (cResult[0] === guildId) {
    let tmp8;
    let tmp12;
    let tmp11;
    let obj8;
    if (cResult[1] === (undefined !== isTryItOut && isTryItOut)) {
      tmp8 = cResult[2];
    }
    const pendingAvatarDecoration = usePendingAvatarSettingsDefault(tmp8).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = A;
      tmp12 = A;
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
      const tmpResult5 = DateUtils;
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      const calendarFormat = tmpResult5.calendarFormat;
      const date = new Date();
      cResult[5] = calendarFormat(date, true);
      const calendarFormatResult = calendarFormat(date, true);
    }
    let tmp20 = tmp7;
    if (undefined !== pendingAvatarDecoration) {
      tmp20 = pendingAvatarDecoration;
    }
    if (cResult[6] === avatarSrcOverride) {
      if (cResult[7] === tmp20) {
        if (cResult[8] === guildId) {
          if (cResult[9] === stateFromStores) {
            let tmp21;
            if (cResult[10] === user) {
              tmp21 = cResult[11];
            }
            if (cResult[12] === displayName) {
              if (cResult[13] === displayNameStyles) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === tmp5.chatUsername) {
                    let tmp28;
                    let tmp33;
                    if (cResult[16] === user.id) {
                      tmp28 = cResult[17];
                    }
                    if (cResult[18] !== tmp5.chatTimestamp) {
                      const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp5.chatTimestamp, children: null };
                      class A {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
                      const tmp35 = metroImportDefault(Text_Text.Text, obj2);
                      cResult[18] = tmp5.chatTimestamp;
                      cResult[19] = tmp35;
                      tmp33 = tmp35;
                    } else {
                      tmp33 = cResult[19];
                    }
                    if (cResult[20] === tmp5.chatHeader) {
                      if (cResult[21] === tmp28) {
                        let tmp36;
                        let tmp39;
                        if (cResult[22] === tmp33) {
                          tmp36 = cResult[23];
                        }
                        if (cResult[24] !== chatMessage) {
                          let stringResult = chatMessage;
                          if (chatMessage == null) {
                            const intl = tmp(1128).intl;
                            stringResult = intl.string(tmp9(2928).h5Cuej);
                          }
                          class A {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          cResult[24] = chatMessage;
                          cResult[25] = stringResult;
                          tmp39 = stringResult;
                        } else {
                          tmp39 = cResult[25];
                        }
                        if (cResult[26] === tmp5.chatMessageText) {
                          let tmp42;
                          if (cResult[27] === tmp39) {
                            tmp42 = cResult[28];
                          }
                          if (cResult[29] === tmp5.chatContent) {
                            if (cResult[30] === tmp42) {
                              let tmp44;
                              if (cResult[31] === tmp36) {
                                tmp44 = cResult[32];
                              }
                              if (cResult[33] === tmp5.chatContainer) {
                                if (cResult[34] === tmp44) {
                                  let tmp47;
                                  if (cResult[35] === tmp21) {
                                    tmp47 = cResult[36];
                                  }
                                  return tmp47;
                                }
                              }
                              class A {
                                constructor() {
                                  return closure_1_5.useReducedMotion;
                                }
                              }
                              const obj3 = { style: tmp5.chatContainer, pointerEvents: "none", children: items1 };
                              items1 = [tmp21, tmp44];
                              const tmp49 = metroImportAll(View, obj3);
                              cResult[33] = tmp5.chatContainer;
                              cResult[34] = tmp44;
                              cResult[35] = tmp21;
                              cResult[36] = tmp49;
                              tmp47 = tmp49;
                            }
                          }
                          class A {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          const obj4 = { style: tmp5.chatContent, children: items2 };
                          items2 = [tmp36, tmp42];
                          const tmp46 = metroImportAll(View, obj4);
                          cResult[29] = tmp5.chatContent;
                          cResult[30] = tmp42;
                          cResult[31] = tmp36;
                          cResult[32] = tmp46;
                          tmp44 = tmp46;
                        }
                        class A {
                          constructor() {
                            return closure_1_5.useReducedMotion;
                          }
                        }
                        const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp5.chatMessageText, children: tmp39 };
                        const tmp43 = metroImportDefault(Text_Text.Text, obj5);
                        cResult[26] = tmp5.chatMessageText;
                        cResult[27] = tmp39;
                        cResult[28] = tmp43;
                        tmp42 = tmp43;
                      }
                    }
                    class A {
                      constructor() {
                        return closure_1_5.useReducedMotion;
                      }
                    }
                    const obj6 = { style: tmp5.chatHeader, children: items3 };
                    items3 = [tmp28, tmp33];
                    const tmp38 = metroImportAll(View, obj6);
                    cResult[20] = tmp5.chatHeader;
                    cResult[21] = tmp28;
                    cResult[22] = tmp33;
                    cResult[23] = tmp38;
                    tmp36 = tmp38;
                  }
                }
              }
            }
            class A {
              constructor() {
                return closure_1_5.useReducedMotion;
              }
            }
            tmp31[0] = user.id;
            tmp31[1] = guildId;
            tmp31[2] = displayName;
            const tmp9Result = UsernameWithEffectsDefault;
            tmp31[4] = types.EffectDisplayType.PLAIN;
            tmp31[6] = displayNameStyles;
            tmp31[7] = tmp5.chatUsername;
            const tmp32 = metroImportDefault(tmp9Result, tmp31);
            cResult[12] = displayName;
            cResult[13] = displayNameStyles;
            cResult[14] = guildId;
            cResult[15] = tmp5.chatUsername;
            cResult[16] = user.id;
            cResult[17] = tmp32;
            tmp28 = tmp32;
          }
        }
      }
    }
    const Avatar = tmp(1202).Avatar;
    const tmp22 = metroImportDefault;
    if (undefined !== avatarSrcOverride) {
      const obj7 = { source: tmpResult6.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores), size: native.AvatarSizes.NORMAL, avatarDecoration: tmp20 };
      tmpResult6 = profile_customization_ProfileCustomizationUtils;
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      obj8 = obj7;
    } else {
      obj8 = { user, size: native.AvatarSizes.NORMAL, guildId: null, avatarDecoration: tmp20, animate: !stateFromStores };
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
    }
    const tmp22Result = tmp22(Avatar, obj8);
    cResult[6] = avatarSrcOverride;
    cResult[7] = tmp20;
    cResult[8] = guildId;
    cResult[9] = stateFromStores;
    cResult[10] = user;
    cResult[11] = tmp22Result;
    tmp21 = tmp22Result;
  }
  const obj9 = { guildId, isTryItOut: undefined !== isTryItOut && isTryItOut };
  cResult[0] = guildId;
  cResult[1] = undefined !== isTryItOut && isTryItOut;
  cResult[2] = obj9;
  tmp8 = obj9;
}) : (function ChatPreview(chatMessage) {
  let avatarSrcOverride;
  let displayName;
  let displayNameStyles;
  let guildId;
  let isTryItOut;
  let items1;
  let items2;
  let items3;
  let obj5;
  let tmp2Result;
  let useReducedMotion;
  let user;
  ({ user, guildId, avatarSrcOverride, isTryItOut } = chatMessage);
  ({ displayName, displayNameStyles } = chatMessage);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  chatMessage = chatMessage.chatMessage;
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
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: chatMessage };
  const Text = tmp2(5266).Text;
  if (chatMessage == null) {
    const intl = tmp2(1128).intl;
    chatMessage = intl.string(tmp5(2928).h5Cuej);
  }
  items3[1] = metroImportDefault(Text, obj10);
  items1[1] = metroImportAll(View, obj6);
  return metroImportAll(View, obj3);
});
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default tmp4;
