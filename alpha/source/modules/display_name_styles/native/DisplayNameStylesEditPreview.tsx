// Module ID: 15627
// Function ID: 15628
// Name: DisplayNameStylesEditPreview
// Dependencies: [19, 17, 5081, 8284, 21, 5092, 587, 558, 576, 8290, 1990, 8293, 504, 1126, 2958, 10511, 10627, 6053, 8283, 4793, 1200, 8373, 10262, 10263, 5088, 2]

// Module 15627 (DisplayNameStylesEditPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import _modDef2958 from "module_2958" /* 2958 */;
import DateUtils from "DateUtils" /* 4793 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAvatarDecoration from "useAvatarDecoration" /* 6053 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8283 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8293 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8373 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10262 */;
import types from "types" /* 10263 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { previewSection: obj2, chatPreviewWrapper: obj3, nameplatePreviewWrapper: { marginTop: -6, width: 260 }, chatContainer: obj4, chatContent: { flex: 1 }, chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 }, chatUsername: { flexShrink: 1, minWidth: 0 }, chatTimestamp: { marginTop: -8, flexShrink: 0 }, chatMessageText: {} };
obj2 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesEditPreview(user) {
  let closure_2;
  let displayName;
  let guildId;
  let guildNameplate;
  let isTryItOut;
  let items1;
  let pendingNameplate;
  let selectedColors;
  let selectedEffectId;
  let selectedFontId;
  let tmp7;
  let tmp9;
  let userNameplate;
  const obj = user(576);
  const cResult = obj.c(44);
  user = user.user;
  ({ displayName, guildId } = user);
  ({ selectedFontId, selectedEffectId, selectedColors, isTryItOut } = user);
  dependencyMap = tmp4;
  const tmp5 = closure_9();
  const tmpResult = user(8290);
  const guildMemberAndUserPendingNameplate = tmpResult.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ guildNameplate, pendingNameplate, userNameplate } = guildMemberAndUserPendingNameplate);
  if (cResult[0] !== guildNameplate) {
    const tmpResult3 = user(1990);
    const nameplateData = tmpResult3.getNameplateData(guildNameplate);
    cResult[0] = guildNameplate;
    cResult[1] = nameplateData;
    tmp7 = nameplateData;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === (undefined !== isTryItOut && isTryItOut)) {
      let tmp11;
      if (cResult[5] === user.id) {
        tmp11 = cResult[6];
      }
      const tmpResult4 = user(504);
      const stateFromStores = tmpResult4.useStateFromStores(tmp9, tmp11);
      if (cResult[7] === selectedColors) {
        if (cResult[8] === selectedEffectId) {
          let tmp13;
          let tmp14;
          if (cResult[9] === selectedFontId) {
            tmp13 = cResult[10];
          }
          const _Symbol = Symbol;
          const previewSection = tmp5.previewSection;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(guildId(2958).zoh6MT);
            cResult[11] = stringResult;
            tmp14 = stringResult;
          } else {
            tmp14 = cResult[11];
          }
          if (cResult[12] === displayName) {
            if (cResult[13] === tmp13) {
              if (cResult[14] === guildId) {
                if (cResult[15] === (undefined !== isTryItOut && isTryItOut)) {
                  let tmp17;
                  if (cResult[16] === user) {
                    tmp17 = cResult[17];
                  }
                  if (cResult[18] === stateFromStores) {
                    if (cResult[19] === displayName) {
                      if (cResult[20] === tmp13) {
                        if (cResult[21] === guildId) {
                          if (cResult[22] === (undefined !== isTryItOut && isTryItOut)) {
                            let tmp21;
                            if (cResult[23] === user) {
                              tmp21 = cResult[24];
                            }
                            if (cResult[25] === tmp5.chatPreviewWrapper) {
                              let tmp25;
                              if (cResult[26] === tmp21) {
                                tmp25 = cResult[27];
                              }
                              let tmp30;
                              if (null == pendingNameplate) {
                                if (tmp7 == null) {
                                  tmp7 = userNameplate;
                                }
                                tmp30 = tmp7;
                              }
                              if (cResult[28] === stateFromStores) {
                                if (cResult[29] === displayName) {
                                  if (cResult[30] === tmp13) {
                                    if (cResult[31] === guildId) {
                                      if (cResult[32] === pendingNameplate) {
                                        if (cResult[33] === tmp30) {
                                          let tmp31;
                                          if (cResult[34] === user) {
                                            tmp31 = cResult[35];
                                          }
                                          if (cResult[36] === tmp5.nameplatePreviewWrapper) {
                                            let tmp34;
                                            if (cResult[37] === tmp31) {
                                              tmp34 = cResult[38];
                                            }
                                            if (cResult[39] === tmp5.previewSection) {
                                              if (cResult[40] === tmp25) {
                                                if (cResult[41] === tmp34) {
                                                  let tmp38;
                                                  if (cResult[42] === tmp17) {
                                                    tmp38 = cResult[43];
                                                  }
                                                  return tmp38;
                                                }
                                              }
                                            }
                                            let obj2 = { style: previewSection, children: items1 };
                                            items1 = [tmp17, tmp25, tmp34];
                                            const tmp41 = closure_8(View, obj2);
                                            cResult[39] = tmp5.previewSection;
                                            cResult[40] = tmp25;
                                            cResult[41] = tmp34;
                                            cResult[42] = tmp17;
                                            cResult[43] = tmp41;
                                            tmp38 = tmp41;
                                          }
                                          let obj3 = { style: tmp5.nameplatePreviewWrapper, children: tmp31 };
                                          const tmp37 = closure_7(View, obj3);
                                          cResult[36] = tmp5.nameplatePreviewWrapper;
                                          cResult[37] = tmp31;
                                          cResult[38] = tmp37;
                                          tmp34 = tmp37;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj4 = { user, nameplate: pendingNameplate, nameplateData: tmp30, guildId, pendingAvatarSrc: stateFromStores, pendingDisplayNameStyles: tmp13, pendingGlobalName: displayName };
                              const tmp33 = closure_7(user(10627).NameplatePreview, obj4);
                              cResult[28] = stateFromStores;
                              cResult[29] = displayName;
                              cResult[30] = tmp13;
                              cResult[31] = guildId;
                              cResult[32] = pendingNameplate;
                              cResult[33] = tmp30;
                              cResult[34] = user;
                              cResult[35] = tmp33;
                              tmp31 = tmp33;
                            }
                            const obj5 = { style: tmp5.chatPreviewWrapper, children: tmp21 };
                            const tmp28 = closure_7(View, obj5);
                            cResult[25] = tmp5.chatPreviewWrapper;
                            cResult[26] = tmp21;
                            cResult[27] = tmp28;
                            tmp25 = tmp28;
                          }
                        }
                      }
                    }
                  }
                  const obj6 = { user, displayName, displayNameStyles: tmp13, guildId, avatarSrcOverride: stateFromStores, isTryItOut: undefined !== isTryItOut && isTryItOut };
                  const tmp24 = closure_7(closure_10, obj6);
                  cResult[18] = stateFromStores;
                  cResult[19] = displayName;
                  cResult[20] = tmp13;
                  cResult[21] = guildId;
                  cResult[22] = undefined !== isTryItOut && isTryItOut;
                  cResult[23] = user;
                  cResult[24] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
          }
          const obj7 = { user, displayName, guildId, displayNameStylesOverride: tmp13, isPremiumTryItOut: undefined !== isTryItOut && isTryItOut, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: tmp14 };
          const tmp20 = closure_7(guildId(10511), obj7);
          cResult[12] = displayName;
          cResult[13] = tmp13;
          cResult[14] = guildId;
          cResult[15] = undefined !== isTryItOut && isTryItOut;
          cResult[16] = user;
          cResult[17] = tmp20;
          tmp17 = tmp20;
        }
      }
      const obj8 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
      cResult[7] = selectedColors;
      cResult[8] = selectedEffectId;
      cResult[9] = selectedFontId;
      cResult[10] = obj8;
      tmp13 = obj8;
    }
  }
  const fn = function b() {
    let pendingAvatar;
    if (closure_2) {
      pendingAvatar = obj.getTryItOutChanges().tryItOutAvatar;
    } else {
      pendingAvatar = obj.getPendingChanges(guildId).pendingAvatar;
    }
    const obj2 = RecentAvatarUtils;
    const obj3 = { userId: user.id, image: pendingAvatar };
    return obj2.getPendingAvatarSrc(obj3);
  };
  cResult[3] = guildId;
  cResult[4] = undefined !== isTryItOut && isTryItOut;
  cResult[5] = user.id;
  cResult[6] = fn;
  tmp11 = fn;
}) : (function DisplayNameStylesEditPreview(user) {
  let NameplatePreview;
  let displayName;
  let guildId;
  let guildNameplate;
  let intl;
  let items2;
  let obj8;
  let pendingNameplate;
  let tmp10;
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
  const tmp = closure_9();
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
  const obj4 = { style: tmp.previewSection, children: items2 };
  const obj5 = { user, displayName, guildId, displayNameStylesOverride: memo, isPremiumTryItOut: flag, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: intl.string(guildId(selectedFontId[14]).zoh6MT) };
  const tmp9 = guildId(selectedFontId[15]);
  intl = user(selectedFontId[13]).intl;
  items2 = [closure_7(tmp9, obj5), , ];
  const obj6 = { style: tmp.chatPreviewWrapper, children: closure_7(closure_10, { user, displayName, displayNameStyles: memo, guildId, avatarSrcOverride: stateFromStores, isTryItOut: flag }) };
  items2[1] = closure_7(selectedColors, obj6);
  const obj7 = { style: tmp.nameplatePreviewWrapper, children: closure_7(NameplatePreview, obj8) };
  obj8 = { user, nameplate: pendingNameplate, nameplateData: tmp10, guildId, pendingAvatarSrc: stateFromStores, pendingDisplayNameStyles: memo, pendingGlobalName: displayName };
  tmp10 = undefined;
  NameplatePreview = user(selectedFontId[16]).NameplatePreview;
  const tmp6 = closure_8;
  if (null == pendingNameplate) {
    if (nameplateData == null) {
      nameplateData = userNameplate;
    }
    tmp10 = nameplateData;
  }
  items2[2] = closure_7(selectedColors, obj7);
  return tmp6(selectedColors, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPreview(arg0) {
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
    let obj8;
    if (cResult[1] === (undefined !== isTryItOut && isTryItOut)) {
      tmp8 = cResult[2];
    }
    const pendingAvatarDecoration = usePendingAvatarSettingsDefault(tmp8).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class P {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = P;
      tmp12 = P;
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
      class P {
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
            let tmp22;
            if (cResult[10] === user) {
              tmp22 = cResult[11];
            }
            if (cResult[12] === displayName) {
              if (cResult[13] === displayNameStyles) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === tmp5.chatUsername) {
                    let tmp30;
                    let tmp35;
                    if (cResult[16] === user.id) {
                      tmp30 = cResult[17];
                    }
                    if (cResult[18] !== tmp5.chatTimestamp) {
                      const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp5.chatTimestamp, children: null };
                      class P {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
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
                        let tmp44;
                        if (cResult[22] === tmp30) {
                          tmp38 = cResult[23];
                        }
                        const _Symbol3 = Symbol;
                        const chatMessageText = tmp5.chatMessageText;
                        class P {
                          constructor() {
                            return closure_1_5.useReducedMotion;
                          }
                        }
                        if (tmp41 === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = tmp(1126).intl;
                          const stringResult = intl.string(_modDef2958.h5Cuej);
                          class P {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          cResult[24] = stringResult;
                        }
                        if (cResult[25] !== tmp5.chatMessageText) {
                          const obj3 = { variant: "text-md/normal", color: "text-default", style: chatMessageText, children: null };
                          class P {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
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
                            class P {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            const obj4 = { style: tmp21, pointerEvents: "none", children: items1 };
                            items1 = [tmp22, tmp47];
                            const tmp53 = metroImportAll(View, obj4);
                            cResult[31] = tmp5.chatContainer;
                            cResult[32] = tmp47;
                            cResult[33] = tmp22;
                            cResult[34] = tmp53;
                            tmp51 = tmp53;
                          }
                        }
                        const obj5 = { style: tmp29, children: items2 };
                        items2 = [tmp38, tmp44];
                        const tmp50 = metroImportAll(View, obj5);
                        cResult[27] = tmp5.chatContent;
                        cResult[28] = tmp38;
                        cResult[29] = tmp44;
                        cResult[30] = tmp50;
                        tmp47 = tmp50;
                      }
                    }
                    class P {
                      constructor() {
                        return closure_1_5.useReducedMotion;
                      }
                    }
                    const obj6 = { style: tmp5.chatHeader, children: items3 };
                    items3 = [tmp30, tmp35];
                    const tmp40 = metroImportAll(View, obj6);
                    cResult[20] = tmp5.chatHeader;
                    cResult[21] = tmp35;
                    cResult[22] = tmp30;
                    cResult[23] = tmp40;
                    tmp38 = tmp40;
                  }
                }
              }
            }
            class P {
              constructor() {
                return closure_1_5.useReducedMotion;
              }
            }
            tmp33[0] = user.id;
            tmp33[1] = guildId;
            tmp33[2] = displayName;
            const tmp9Result = UsernameWithEffectsDefault;
            tmp33[4] = types.EffectDisplayType.PLAIN;
            tmp33[6] = displayNameStyles;
            tmp33[7] = tmp5.chatUsername;
            const tmp34 = metroImportDefault(tmp9Result, tmp33);
            cResult[12] = displayName;
            cResult[13] = displayNameStyles;
            cResult[14] = guildId;
            cResult[15] = tmp5.chatUsername;
            cResult[16] = user.id;
            cResult[17] = tmp34;
            tmp30 = tmp34;
          }
        }
      }
    }
    const Avatar = tmp(1200).Avatar;
    const tmp23 = metroImportDefault;
    if (undefined !== avatarSrcOverride) {
      const obj7 = { source: tmpResult6.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores), size: native.AvatarSizes.NORMAL, avatarDecoration: tmp20 };
      tmpResult6 = profile_customization_ProfileCustomizationUtils;
      class P {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      obj8 = obj7;
    } else {
      obj8 = { user, size: native.AvatarSizes.NORMAL, guildId: null, avatarDecoration: tmp20, animate: !stateFromStores };
      class P {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
    }
    const tmp23Result = tmp23(Avatar, obj8);
    cResult[6] = avatarSrcOverride;
    cResult[7] = tmp20;
    cResult[8] = guildId;
    cResult[9] = stateFromStores;
    cResult[10] = user;
    cResult[11] = tmp23Result;
    tmp22 = tmp23Result;
  }
  const obj9 = { guildId, isTryItOut: undefined !== isTryItOut && isTryItOut };
  cResult[0] = guildId;
  cResult[1] = undefined !== isTryItOut && isTryItOut;
  cResult[2] = obj9;
  tmp8 = obj9;
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
    const calendarFormat = DateUtils.calendarFormat;
    DateUtils;
    const date = new Date();
    return calendarFormat(date, true);
  }, []);
  if (undefined !== pendingAvatarDecoration) {
    tmp8 = pendingAvatarDecoration;
  }
  const obj3 = { style: tmp.chatContainer, pointerEvents: "none", children: items1 };
  const Avatar = tmp2(1200).Avatar;
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
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: intl.string(_modDef2958.h5Cuej) };
  const Text = tmp2(5088).Text;
  intl = tmp2(1126).intl;
  items3[1] = metroImportDefault(Text, obj10);
  items1[1] = metroImportAll(View, obj6);
  return metroImportAll(View, obj3);
});
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default tmp4;
