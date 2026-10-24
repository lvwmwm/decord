// Module ID: 11075
// Function ID: 11076
// Name: UserProfilePrimaryInfo
// Dependencies: [19, 17, 1392, 8672, 7304, 1087, 8274, 8683, 21, 4971, 587, 1384, 558, 576, 10661, 10662, 9134, 11076, 6908, 5234, 11078, 5151, 11110, 8673, 7490, 5663, 8733, 9573, 9576, 6713, 1128, 11112, 5669, 11113, 11115, 11116, 11118, 11122, 11147, 1499, 11148, 8654, 9225, 5025, 2]

// Module 11075 (UserProfilePrimaryInfo)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1087 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import UserUtilsDefault from "UserUtils" /* 5025 */;
import Text_Text from "Text/Text" /* 5234 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import QuestTypes from "QuestTypes" /* 6713 */;
import openUserSettings from "openUserSettings" /* 7490 */;
import GuildTagConstants from "GuildTagConstants" /* 8274 */;
import GuildTagUtils from "GuildTagUtils" /* 8654 */;
import Constants3 from "Constants" /* 8672 */;
import BadgeId from "BadgeId" /* 8673 */;
import Constants4 from "Constants" /* 8683 */;
import useBadges from "useBadges" /* 8733 */;
import BotTagDefault from "BotTag" /* 9134 */;
import GuildTagDefault from "GuildTag" /* 9225 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9573 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9576 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10661 */;
import types from "types" /* 10662 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11118 */;
import BadgeUtils from "BadgeUtils" /* 11122 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 7304 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault, text;

let UserProfileThemeTypes;
let c9;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const getBadgeName = Constants3.getBadgeName;
({ DIVIDER_DOT: metroImportAll, PROFILE_SIDE_PADDING: c9, UserProfileThemeTypes } = Constants);
const UserSettingsSections = Constants2.UserSettingsSections;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = Constants4.DEFAULT_PREMIUM_BADGE_ID;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: obj2, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: obj3, limitedBadgeRow: { alignItems: "center" }, addBadgesChip: obj4 };
obj2 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj4 = { flexDirection: "row", alignItems: "center", alignSelf: "center", columnGap: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.sm };
let closure_16 = createStyles(obj);
let closure_17 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
let obj5 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
let closure_18 = { [UserProfileThemeTypes.PREVIEW]: obj5 };
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles((arg0) => {
  let sum = arg0;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    sum = arg0 + 2;
  }
  return { text: { lineHeight: sum } };
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayName(user) {
  let accessibilityHint;
  let items;
  let items1;
  let name;
  let onPress;
  let pendingDisplayNameStyles;
  let showChevron;
  let themeType;
  let tmp6;
  let tmp = user;
  let obj = user(name[13]);
  const cResult = obj.c(34);
  user = user.user;
  const guildId = user.guildId;
  name = user.name;
  ({ themeType, onPress, accessibilityHint, showChevron, pendingDisplayNameStyles } = user);
  const displayNameAccessibilityRole = user.displayNameAccessibilityRole;
  let tmp5 = closure_16();
  let closure_5 = tmp5;
  if (cResult[0] !== themeType) {
    let tmp8;
    if (null != themeType) {
      tmp8 = closure_18[themeType];
    }
    if (tmp8 == null) {
      tmp8 = closure_17;
    }
    cResult[0] = themeType;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  const headingVariant = tmp6.headingVariant;
  if (cResult[2] === displayNameAccessibilityRole) {
    if (cResult[3] === guildId) {
      if (cResult[4] === headingVariant) {
        if (cResult[5] === name) {
          if (cResult[6] === pendingDisplayNameStyles) {
            if (cResult[7] === tmp5.displayNameText) {
              let tmp10;
              if (cResult[8] === user.id) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === tmp5.botTag) {
                let tmp11;
                if (cResult[11] === user) {
                  tmp11 = cResult[12];
                }
                let tmp12 = null;
                if (null == onPress) {
                  let tmp23;
                  let tmp25;
                  if (cResult[13] !== tmp10) {
                    const tmp10Result = tmp10();
                    cResult[13] = tmp10;
                    cResult[14] = tmp10Result;
                    tmp23 = tmp10Result;
                  } else {
                    tmp23 = cResult[14];
                  }
                  if (cResult[15] !== tmp11) {
                    const tmp11Result = tmp11();
                    cResult[15] = tmp11;
                    cResult[16] = tmp11Result;
                    tmp25 = tmp11Result;
                  } else {
                    tmp25 = cResult[16];
                  }
                  if (cResult[17] === tmp23) {
                    let tmp27;
                    if (cResult[18] === tmp25) {
                      tmp27 = cResult[19];
                    }
                    return tmp27;
                  }
                  let obj2 = { children: items };
                  items = [tmp23, tmp25];
                  const tmp30 = closure_14(closure_5, obj2);
                  cResult[17] = tmp23;
                  cResult[18] = tmp25;
                  cResult[19] = tmp30;
                  tmp27 = tmp30;
                } else {
                  let tmp13;
                  let tmp15;
                  let tmp17;
                  const displayName = tmp5.displayName;
                  if (cResult[20] !== tmp10) {
                    const tmp10Result2 = tmp10();
                    cResult[20] = tmp10;
                    cResult[21] = tmp10Result2;
                    tmp13 = tmp10Result2;
                  } else {
                    tmp13 = cResult[21];
                  }
                  if (cResult[22] !== tmp11) {
                    const tmp11Result2 = tmp11();
                    cResult[22] = tmp11;
                    cResult[23] = tmp11Result2;
                    tmp15 = tmp11Result2;
                  } else {
                    tmp15 = cResult[23];
                  }
                  if (cResult[24] !== (undefined !== showChevron && showChevron)) {
                    const tmp18 = undefined !== showChevron && showChevron && closure_13(tmp(name[17]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
                    cResult[24] = undefined !== showChevron && showChevron;
                    cResult[25] = tmp18;
                    tmp17 = tmp18;
                  } else {
                    tmp17 = cResult[25];
                  }
                  if (cResult[26] === accessibilityHint) {
                    if (cResult[27] === name) {
                      if (cResult[28] === onPress) {
                        if (cResult[29] === tmp5.displayName) {
                          if (cResult[30] === tmp13) {
                            if (cResult[31] === tmp15) {
                              let tmp20;
                              if (cResult[32] === tmp17) {
                                tmp20 = cResult[33];
                              }
                              return tmp20;
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj3 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: displayName, children: items1 };
                  items1 = [tmp13, tmp15, tmp17];
                  const tmp22 = closure_14(tmp(name[18]).PressableOpacity, obj3);
                  cResult[26] = accessibilityHint;
                  cResult[27] = name;
                  cResult[28] = onPress;
                  cResult[29] = tmp5.displayName;
                  cResult[30] = tmp13;
                  cResult[31] = tmp15;
                  cResult[32] = tmp17;
                  cResult[33] = tmp22;
                  tmp20 = tmp22;
                }
              }
              function renderBotTag() {
                let tmp;
                if (user.isSystemUser()) {
                  const obj2 = { style: closure_5.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
                  const tmp12 = BotTagDefault;
                  tmp = map1(tmp12, obj2);
                } else {
                  tmp = null;
                  if (user.bot) {
                    const obj3 = { style: closure_5.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
                    const tmp5 = BotTagDefault;
                    tmp = map1(tmp5, obj3);
                  }
                }
                return tmp;
              }
              cResult[10] = tmp5.botTag;
              cResult[11] = user;
              cResult[12] = renderBotTag;
              tmp11 = renderBotTag;
            }
          }
        }
      }
    }
  }
  function renderDisplayName() {
    const obj = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: types.EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj.style, displayNameText: obj.containerStyle } = closure_5);
    const tmp = UsernameWithEffectsDefault;
    return map1(tmp, obj);
  }
  cResult[2] = displayNameAccessibilityRole;
  cResult[3] = guildId;
  cResult[4] = headingVariant;
  cResult[5] = name;
  cResult[6] = pendingDisplayNameStyles;
  cResult[7] = tmp5.displayNameText;
  cResult[8] = user.id;
  cResult[9] = renderDisplayName;
  tmp10 = renderDisplayName;
}) : (function DisplayName(user) {
  let closure_1;
  let displayNameAccessibilityRole;
  let guildId;
  let items;
  let items1;
  let name;
  let onPress;
  let pendingDisplayNameStyles;
  let showChevron;
  let themeType;
  let tmp12Result;
  user = user.user;
  ({ guildId, name, themeType, onPress, showChevron } = user);
  const accessibilityHint = user.accessibilityHint;
  if (showChevron === undefined) {
    showChevron = false;
  }
  ({ pendingDisplayNameStyles, displayNameAccessibilityRole } = user);
  let tmp = closure_16();
  importDefault = tmp;
  let tmp2;
  if (null != themeType) {
    tmp2 = closure_18[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_17;
  }
  function renderBotTag() {
    let tmp;
    if (user.isSystemUser()) {
      const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
      const tmp12 = BotTagDefault;
      tmp = map1(tmp12, obj2);
    } else {
      tmp = null;
      if (user.bot) {
        const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
        const tmp5 = BotTagDefault;
        tmp = map1(tmp5, obj3);
      }
    }
    return tmp;
  }
  const headingVariant = tmp2.headingVariant;
  if (null == onPress) {
    let tmp5 = closure_14;
    const obj = { children: items };
    let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10662).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
    const tmp10 = UsernameWithEffectsDefault;
    items = [closure_13(tmp10, obj3), renderBotTag()];
    tmp12Result = closure_14(closure_5, obj);
  } else {
    let tmp12 = closure_14;
    const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: tmp.displayName, children: items1 };
    const PressableOpacity = user(6908).PressableOpacity;
    const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10662).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
    const tmp17 = UsernameWithEffectsDefault;
    items1 = [closure_13(tmp17, obj8), renderBotTag(), ];
    const tmp13 = user;
    const tmp15 = closure_13;
    if (showChevron) {
      showChevron = tmp15(tmp13(11076).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
    }
    items1[2] = showChevron;
    tmp12Result = tmp12(PressableOpacity, obj7);
  }
  return tmp12Result;
});
let closure_20 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserTagAndPronouns(userTag) {
  let closure_5;
  let items;
  let onPressPronouns;
  let onPressUserTag;
  let pronounsAccessibilityHint;
  let themeType;
  let tmp6;
  let obj = userTag(onPressUserTag[13]);
  const cResult = obj.c(27);
  userTag = userTag.userTag;
  const pronouns = userTag.pronouns;
  ({ themeType, onPressUserTag } = userTag);
  const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
  ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
  const tmp4 = closure_16();
  const tmp5 = null != pronouns && pronouns.length > 0;
  if (cResult[0] !== themeType) {
    let tmp7;
    if (null != themeType) {
      tmp7 = closure_18[themeType];
    }
    if (tmp7 == null) {
      tmp7 = closure_17;
    }
    cResult[0] = themeType;
    cResult[1] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  const textVariant = tmp6.textVariant;
  const tmp9 = closure_19(userTag(onPressUserTag[19]).TextStyleSheet[textVariant].lineHeight);
  text = tmp9;
  if (cResult[2] === onPressUserTag) {
    if (cResult[3] === tmp9.text) {
      if (cResult[4] === textVariant) {
        if (cResult[5] === userTag) {
          let tmp10;
          if (cResult[6] === userTagAccessibilityHint) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === pronouns) {
            if (cResult[9] === tmp9.text) {
              let tmp11;
              let tmp12;
              if (cResult[10] === textVariant) {
                tmp11 = cResult[11];
              }
              const detailsText = tmp4.detailsText;
              if (cResult[12] !== tmp10) {
                const tmp10Result = tmp10();
                cResult[12] = tmp10;
                cResult[13] = tmp10Result;
                tmp12 = tmp10Result;
              } else {
                tmp12 = cResult[13];
              }
              if (cResult[14] === tmp5) {
                if (cResult[15] === onPressPronouns) {
                  if (cResult[16] === onPressUserTag) {
                    if (cResult[17] === pronouns) {
                      if (cResult[18] === pronounsAccessibilityHint) {
                        if (cResult[19] === tmp11) {
                          if (cResult[20] === tmp9.text) {
                            let tmp14;
                            if (cResult[21] === textVariant) {
                              tmp14 = cResult[22];
                            }
                            if (cResult[23] === tmp4.detailsText) {
                              if (cResult[24] === tmp12) {
                                let tmp22;
                                if (cResult[25] === tmp14) {
                                  tmp22 = cResult[26];
                                }
                                return tmp22;
                              }
                            }
                            let obj2 = { style: detailsText, children: items };
                            items = [tmp12, tmp14];
                            const tmp25 = closure_14(text, obj2);
                            cResult[23] = tmp4.detailsText;
                            cResult[24] = tmp12;
                            cResult[25] = tmp14;
                            cResult[26] = tmp25;
                            tmp22 = tmp25;
                          }
                        }
                      }
                    }
                  }
                }
              }
              let tmp16Result = tmp5;
              if (tmp16Result) {
                let tmp18Result;
                let obj3 = { variant: textVariant, color: "mobile-text-heading-primary", style: tmp9.text, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
                const items1 = [closure_13(tmp(tmp2[19]).Text, obj3), ];
                const tmp16 = closure_14;
                const tmp17 = closure_15;
                if (null != onPressUserTag) {
                  const obj4 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp11() };
                  const PressableOpacity = tmp(tmp2[18]).PressableOpacity;
                  tmp18Result = tmp18(PressableOpacity, obj4);
                } else {
                  const obj5 = { children: tmp11() };
                  tmp18Result = tmp18(text, obj5);
                }
                const obj6 = { children: items1 };
                items1[1] = tmp18Result;
                tmp16Result = tmp16(tmp17, obj6);
              }
              cResult[14] = tmp5;
              cResult[15] = onPressPronouns;
              cResult[16] = onPressUserTag;
              cResult[17] = pronouns;
              cResult[18] = pronounsAccessibilityHint;
              cResult[19] = tmp11;
              cResult[20] = tmp9.text;
              cResult[21] = textVariant;
              cResult[22] = tmp16Result;
              tmp14 = tmp16Result;
            }
          }
          function renderPronouns() {
            const obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: closure_5.text, children: pronouns };
            return map1(Text_Text.Text, obj);
          }
          cResult[8] = pronouns;
          cResult[9] = tmp9.text;
          cResult[10] = textVariant;
          cResult[11] = renderPronouns;
          tmp11 = renderPronouns;
        }
      }
    }
  }
  class I {
    constructor() {
      if (null == userTag) {
        return null;
      } else {
        let tmp5Result;
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, style: closure_5.text, children: userTag };
        const tmp10 = map1(Text_Text.Text, obj2);
        const tmp6 = require;
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
          tmp5Result = tmp5(tmp6(6908).PressableOpacity, obj3);
        } else {
          const obj = { children: tmp10 };
          tmp5Result = tmp5(hasOwnProperty, obj);
        }
        return tmp5Result;
      }
    }
  }
  cResult[2] = onPressUserTag;
  cResult[3] = tmp9.text;
  cResult[4] = textVariant;
  cResult[5] = userTag;
  cResult[6] = userTagAccessibilityHint;
  cResult[7] = I;
  tmp10 = I;
}) : (function UserTagAndPronouns(userTag) {
  let items1;
  let obj4;
  let obj6;
  let onPressPronouns;
  let onPressUserTag;
  let pronouns;
  let pronounsAccessibilityHint;
  let themeType;
  userTag = userTag.userTag;
  ({ pronouns, themeType, onPressUserTag } = userTag);
  const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
  let textVariant;
  text = undefined;
  ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
  let tmp8Result = null != pronouns;
  const tmp = closure_16();
  if (tmp8Result) {
    tmp8Result = pronouns.length > 0;
  }
  let tmp3;
  if (null != themeType) {
    tmp3 = closure_18[themeType];
  }
  if (tmp3 == null) {
    tmp3 = closure_17;
  }
  textVariant = tmp3.textVariant;
  const tmp5 = userTag;
  let tmp6 = userTagAccessibilityHint;
  const tmp7 = closure_19(userTag(userTagAccessibilityHint[19]).TextStyleSheet[textVariant].lineHeight);
  text = tmp7;
  const items = [onPressUserTag, tmp7.text, textVariant, userTag, userTagAccessibilityHint];
  let obj = { style: tmp.detailsText, children: items1 };
  items1 = [
    textVariant.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        let tmp5Result;
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, style: hasOwnProperty.text, children: userTag };
        const tmp10 = map1(Text_Text.Text, obj2);
        const tmp6 = require;
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
          tmp5Result = tmp5(tmp6(6908).PressableOpacity, obj3);
        } else {
          const obj = { children: tmp10 };
          tmp5Result = tmp5(hasOwnProperty, obj);
        }
        return tmp5Result;
      }
    }, items)(),

  ];
  if (tmp8Result) {
    let tmp11Result;
    const tmp11 = closure_13;
    let tmp10 = closure_15;
    let obj2 = { variant: textVariant, color: "mobile-text-heading-primary", style: tmp7.text, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
    const items2 = [closure_13(tmp5(tmp6[19]).Text, obj2), ];
    if (null != onPressUserTag) {
      let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp11(tmp5(tmp6[19]).Text, obj4) };
      const PressableOpacity = tmp5(tmp6[18]).PressableOpacity;
      obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: tmp7.text, children: pronouns };
      tmp11Result = tmp11(PressableOpacity, obj3);
    } else {
      const obj5 = { children: tmp11(tmp5(tmp6[19]).Text, obj6) };
      obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: tmp7.text, children: pronouns };
      tmp11Result = tmp11(tmp9, obj5);
    }
    const obj7 = { children: items2 };
    items2[1] = tmp11Result;
    tmp8Result = tmp8(tmp10, obj7);
  }
  items1[1] = tmp8Result;
  return closure_14(closure_5, obj);
});
let closure_21 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileBadge(source) {
  let badgeSize;
  let catalogBadge;
  let first;
  let id;
  let items;
  let items2;
  let label;
  let showToastOnPress;
  let themeType;
  let tieredTenureBadgeClickHandler;
  let tmp11;
  let tmp36Result;
  let tmp36Result2;
  const tmp = source;
  let obj = source(label[13]);
  const cResult = obj.c(13);
  source = source.source;
  ({ catalogBadge, id } = source);
  label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  let tmp4 = undefined === showToastOnPress;
  const userId = source.userId;
  if (!tmp4) {
    tmp4 = showToastOnPress;
  }
  const tmp5 = closure_16();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = tieredTenureBadgeClickHandler.useRef(null);
  const tmpResult = tmp(tmp2[20]);
  tieredTenureBadgeClickHandler = tmpResult.useTieredTenureBadgeClickHandler(id, userId, themeType);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult3 = tmp(label[21]);
    const rootNavigationRef = tmpResult3.getRootNavigationRef();
    let currentRoute;
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
    }
    cResult[0] = currentRoute;
    first = currentRoute;
  } else {
    first = cResult[0];
  }
  let flag;
  if (first != null) {
    const params = first.params;
    if (params != null) {
      flag = params.showOrbsBadgeCoachmark;
    }
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { disabled: !flag };
    cResult[1] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[1];
  }
  const tmpResult4 = tmp(label[22]);
  const orbsBadgeCoachmark = tmpResult4.useOrbsBadgeCoachmark(tmp11);
  if (cResult[2] === id) {
    if (cResult[3] === label) {
      if (cResult[4] === source) {
        let tmp13;
        let tmp14;
        let tmp41;
        if (cResult[5] === tieredTenureBadgeClickHandler) {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== label) {
          const intl = tmp(tmp2[30]).intl;
          let obj3 = { badgeLabel: label };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(label[30]).t.A0LN9t, obj3);
          cResult[7] = label;
          cResult[8] = formatToPlainStringResult;
          tmp14 = formatToPlainStringResult;
        } else {
          tmp14 = cResult[8];
        }
        let tmp17 = themeType === UserProfileThemeTypes.YOU_SCREEN;
        let tmp16 = UserProfileThemeTypes;
        if (tmp17) {
          tmp17 = typeof id === "string";
        }
        let tmp18 = null;
        if (tmp17) {
          let tmp19;
          if (cResult[9] !== id) {
            let obj4 = { targetRef: ref, badgeId: id };
            const tmp22 = closure_13(id(label[31]), obj4);
            cResult[9] = id;
            cResult[10] = tmp22;
            tmp19 = tmp22;
          } else {
            tmp19 = cResult[10];
          }
          tmp18 = tmp19;
        }
        let tmp23 = themeType !== tmp16.YOU_SCREEN || typeof id !== "string";
        if (!tmp23) {
          tmp23 = "orb_profile_badge" !== id && id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
          const tmp24 = "orb_profile_badge" !== id && id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
        }
        if (!tmp23) {
          tmp23 = null == orbsBadgeCoachmark;
        }
        let tmp26 = null;
        if (!tmp23) {
          let tmp27;
          if (cResult[11] !== orbsBadgeCoachmark.props) {
            const obj5 = { badgeRef: ref };
            const tmp30 = id(label[22]);
            const merged = Object.assign(orbsBadgeCoachmark.props);
            const tmp33 = closure_13(tmp30, obj5);
            cResult[11] = orbsBadgeCoachmark.props;
            cResult[12] = tmp33;
            tmp27 = tmp33;
          } else {
            tmp27 = cResult[12];
          }
          tmp26 = tmp27;
        }
        const obj6 = { children: null };
        const tmp34 = closure_14;
        const tmp35 = closure_15;
        if (tmp4) {
          const obj7 = { accessibilityRole: "image", accessibilityLabel: tmp14, onPress: tmp13, ref, children: tmp36Result };
          const PressableOpacity = tmp(tmp2[18]).PressableOpacity;
          if (null != source) {
            const obj8 = { style: items, source };
            items = [tmp5.badge, tmp6];
            tmp36Result = tmp36(id(tmp2[32]), obj8);
          } else {
            tmp36Result = null;
            if (null != catalogBadge) {
              const obj9 = { badge: catalogBadge, size: badgeSize };
              tmp36Result = tmp36(id(tmp2[33]), obj9);
            }
          }
          const items1 = [closure_13(PressableOpacity, obj7), tmp18, tmp26];
          obj6.children = items1;
          tmp41 = obj6;
        } else {
          const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp14, ref, children: tmp36Result2 };
          const tmp37 = closure_5;
          if (null != source) {
            const obj11 = { style: items2, source };
            items2 = [tmp5.badge, tmp6];
            tmp36Result2 = tmp36(id(tmp2[32]), obj11);
          } else {
            tmp36Result2 = null;
            if (null != catalogBadge) {
              const obj12 = { badge: catalogBadge, size: badgeSize };
              tmp36Result2 = tmp36(id(tmp2[33]), obj12);
            }
          }
          const items3 = [closure_13(tmp37, obj10), tmp18, tmp26];
          obj6.children = items3;
          tmp41 = obj6;
        }
        return tmp34(tmp35, tmp41);
      }
    }
  }
  function showToast() {
    let tmp19;
    if (null == tieredTenureBadgeClickHandler) {
      const tmp3 = id;
      if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
        let tmp10;
        if (null != source) {
          const assetSource = React3.resolveAssetSource(tmp9);
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          tmp10 = uri;
        }
        const _HermesInternal = HermesInternal;
        const open = ToastActionCreatorsDefault.open;
        const obj = { text: label, icon: tmp19 };
        tmp19 = undefined;
        ToastActionCreatorsDefault;
        const combined = "PROFILE_BADGE-" + label;
        const tmp16 = label;
        if (null != tmp10) {
          if ("" !== tmp10) {
            tmp19 = { type: "image", src: tmp10, alt: tmp16 };
            const obj2 = { type: "image", src: tmp10, alt: tmp16 };
          }
        }
        open(combined, obj);
        if (tmp3 === useBadges.QUEST_COMPLETED_BADGE) {
          const obj3 = { type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: QuestTypes.QuestContent.QUEST_BADGE, isTargeted: false };
          const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
          captureAdUserAction2;
          captureAdUserAction(obj3);
        }
      } else {
        const obj4 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
        const tmp5Result2 = openUserSettings;
        tmp5Result2.openUserSettings(obj4);
      }
    } else {
      tmp();
    }
  }
  cResult[2] = id;
  cResult[3] = label;
  cResult[4] = source;
  cResult[5] = tieredTenureBadgeClickHandler;
  cResult[6] = showToast;
  tmp13 = showToast;
}) : (function ProfileBadge(source) {
  let badgeSize;
  let catalogBadge;
  let closure_3;
  let id;
  let items;
  let items2;
  let showToastOnPress;
  let themeType;
  let tmp25Result;
  let tmp25Result2;
  let tmp30;
  source = source.source;
  ({ catalogBadge, id } = source);
  const label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  const userId = source.userId;
  if (showToastOnPress === undefined) {
    showToastOnPress = true;
  }
  react = undefined;
  const tmp = closure_16();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = react.useRef(null);
  let obj2 = source(label[20]);
  react = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
  let obj3 = source(label[21]);
  const rootNavigationRef = obj3.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  let flag;
  if (currentRoute != null) {
    const params = currentRoute.params;
    if (params != null) {
      flag = params.showOrbsBadgeCoachmark;
    }
  }
  if (flag == null) {
    flag = false;
  }
  let obj = { disabled: !flag };
  const tmp4Result = source(label[22]);
  const orbsBadgeCoachmark = tmp4Result.useOrbsBadgeCoachmark(obj);
  const intl = tmp4(tmp5[30]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[30]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  const tmp9 = UserProfileThemeTypes;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    let obj4 = { targetRef: ref, badgeId: id };
    tmp11 = closure_13(id(tmp5[31]), obj4);
  }
  let tmp14 = themeType !== tmp9.YOU_SCREEN || typeof id !== "string";
  if (!tmp14) {
    let tmp15 = "orb_profile_badge" !== id;
    if (tmp15) {
      let tmp16 = getBadgeName;
      tmp15 = id !== getBadgeName(tmp4(tmp5[23]).BadgeId.ORB_PROFILE);
    }
    tmp14 = tmp15;
  }
  if (!tmp14) {
    tmp14 = null == orbsBadgeCoachmark;
  }
  let tmp17 = null;
  if (!tmp14) {
    let tmp19 = id;
    const obj5 = { badgeRef: ref };
    const tmp20 = id(label[22]);
    const merged = Object.assign(orbsBadgeCoachmark.props);
    tmp17 = closure_13(tmp20, obj5);
  }
  const obj6 = { children: null };
  const tmp23 = closure_14;
  const tmp24 = closure_15;
  if (showToastOnPress) {
    const obj7 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress: function showToast() {
          let tmp19;
          if (null == closure_3) {
            const tmp3 = id;
            if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
              let tmp10;
              if (null != source) {
                const assetSource = React3.resolveAssetSource(tmp9);
                let uri;
                if (assetSource != null) {
                  uri = assetSource.uri;
                }
                tmp10 = uri;
              }
              const _HermesInternal = HermesInternal;
              const open = ToastActionCreatorsDefault.open;
              const obj = { text: label, icon: tmp19 };
              tmp19 = undefined;
              ToastActionCreatorsDefault;
              const combined = "PROFILE_BADGE-" + label;
              const tmp16 = label;
              if (null != tmp10) {
                if ("" !== tmp10) {
                  tmp19 = { type: "image", src: tmp10, alt: tmp16 };
                  const obj2 = { type: "image", src: tmp10, alt: tmp16 };
                }
              }
              open(combined, obj);
              if (tmp3 === useBadges.QUEST_COMPLETED_BADGE) {
                const obj3 = { type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: QuestTypes.QuestContent.QUEST_BADGE, isTargeted: false };
                const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
                captureAdUserAction2;
                captureAdUserAction(obj3);
              }
            } else {
              const obj4 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
              const tmp5Result2 = openUserSettings;
              tmp5Result2.openUserSettings(obj4);
            }
          } else {
            tmp();
          }
        },
      ref,
      children: tmp25Result
    };
    const PressableOpacity = tmp4(tmp5[18]).PressableOpacity;
    if (null != source) {
      const obj8 = { style: items, source };
      items = [tmp.badge, tmp2];
      tmp25Result = tmp25(id(tmp5[32]), obj8);
    } else {
      tmp25Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp25Result = tmp25(id(tmp5[33]), obj9);
      }
    }
    const items1 = [closure_13(PressableOpacity, obj7), tmp11, tmp17];
    obj6.children = items1;
    tmp30 = obj6;
  } else {
    const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: tmp25Result2 };
    const tmp26 = closure_5;
    if (null != source) {
      const obj11 = { style: items2, source };
      items2 = [tmp.badge, tmp2];
      tmp25Result2 = tmp25(id(tmp5[32]), obj11);
    } else {
      tmp25Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp25Result2 = tmp25(id(tmp5[33]), obj12);
      }
    }
    const items3 = [closure_13(tmp26, obj10), tmp11, tmp17];
    obj6.children = items3;
    tmp30 = obj6;
  }
  return tmp23(tmp24, tmp30);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileBadgeRows(userId) {
  let badgeDirectoryEntryPointRef;
  let badges;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let formatToPlainString2;
  let id;
  let intl3;
  let intl5;
  let isTryItOut;
  let items1;
  let items2;
  let obj14;
  let onOpenBadgeDirectory;
  let style;
  let tmp11;
  let tmp13;
  let tmp7;
  const tmp = userId;
  let tmp2 = style;
  let obj = userId(style[13]);
  const cResult = obj.c(87);
  userId = userId.userId;
  ({ badges, catalogBadges, isTryItOut, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory } = userId);
  style = userId.style;
  const themeType = userId.themeType;
  let showToastOnPress = userId.showToastOnPress;
  let tmp4 = undefined !== canOpenBadgeDirectory && canOpenBadgeDirectory;
  let tmp5 = undefined === showToastOnPress || showToastOnPress;
  const tmp6 = closure_16();
  const badgeRow = tmp6;
  if (cResult[0] !== themeType) {
    let tmp9;
    if (null != themeType) {
      tmp9 = closure_18[themeType];
    }
    if (tmp9 == null) {
      tmp9 = closure_17;
    }
    cResult[0] = themeType;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  const badgeSize = tmp7.badgeSize;
  const badgeRowHorizontalPadding = tmp7.badgeRowHorizontalPadding;
  const textVariant = tmp7.textVariant;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "ProfileBadgeRows" };
    cResult[2] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = tmp(tmp2[34]);
  const isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "ProfileBadgeRows" };
    cResult[3] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[35]);
  const tmp14 = tmpResult4.useCanOpenBadgeDirectoryFromProfile(tmp13) && tmp4 && tmp5;
  showToastOnPress = tmp15;
  const currentUser = badgeRowHorizontalPadding.getCurrentUser();
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (cResult[4] === onOpenBadgeDirectory) {
    let tmp17;
    let tmp18;
    let tmp20;
    let mapped2;
    if (cResult[5] === userId) {
      tmp17 = cResult[6];
    }
    if (cResult[7] !== badges) {
      const tmpResult5 = tmp(tmp2[37]);
      const legacyIconUrlByBadgeId = tmpResult5.getLegacyIconUrlByBadgeId(badges);
      cResult[7] = badges;
      cResult[8] = legacyIconUrlByBadgeId;
      tmp18 = legacyIconUrlByBadgeId;
    } else {
      tmp18 = cResult[8];
    }
    let closure_8 = tmp18;
    if (cResult[9] !== badges) {
      const tmpResult6 = tmp(tmp2[37]);
      const legacyDescriptionByBadgeId = tmpResult6.getLegacyDescriptionByBadgeId(badges);
      cResult[9] = badges;
      cResult[10] = legacyDescriptionByBadgeId;
      tmp20 = legacyDescriptionByBadgeId;
    } else {
      tmp20 = cResult[10];
    }
    let closure_10 = tmp20;
    if (cResult[11] === (!tmp14 && tmp5)) {
      if (cResult[12] === badgeSize) {
        if (cResult[13] === badges) {
          if (cResult[14] === isTryItOut) {
            if (cResult[15] === themeType) {
              let arr3;
              if (cResult[16] === userId) {
                mapped2 = cResult[17];
              }
              const tmp33 = onOpenBadgeDirectory;
              if (isBadgeManagementEnabled) {
                let tmp38;
                const _Symbol = Symbol;
                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                  let items = [];
                  cResult[29] = items;
                  tmp38 = items;
                } else {
                  tmp38 = cResult[29];
                }
                arr3 = tmp38;
              } else {
                const _Math = Math;
                const rounded = Math.floor((tmp34 - 2 * mapped2 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
                if (cResult[30] === rounded) {
                  if (cResult[31] === arr) {
                    arr3 = cResult[32];
                  }
                }
                class W {
                  constructor(id) {
                    let obj2;
                    let obj3;
                    let obj4;
                    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                    obj3 = BadgeUtils;
                    obj4 = BadgeUtils;
                    return map1(closure_22, obj, id.id);
                  }
                }
                let obj4 = { length: Math.ceil(arr.length / rounded) };
                const _Math2 = Math;
                const fromResult = from(obj4, (arg0, arg1) => mapped2.slice(arg1 * rounded, (arg1 + 1) * rounded));
                cResult[30] = rounded;
                cResult[31] = arr;
                cResult[32] = fromResult;
                arr3 = fromResult;
              }
              if (isBadgeManagementEnabled) {
                if (cResult[33] === (!tmp14 && tmp5)) {
                  if (cResult[34] === badgeSize) {
                    if (cResult[35] === catalogBadges) {
                      if (cResult[36] === tmp20) {
                        if (cResult[37] === tmp18) {
                          if (cResult[38] === themeType) {
                            let tmp46;
                            if (cResult[39] === userId) {
                              tmp46 = cResult[40];
                            }
                            if (cResult[41] === arr) {
                              let arr6;
                              if (cResult[42] === tmp46) {
                                arr6 = cResult[43];
                              }
                              let length;
                              if (catalogBadges != null) {
                                length = catalogBadges.length;
                              }
                              if (length == null) {
                                length = arr.length;
                              }
                              const diff = length - arr6.length;
                              if (0 === arr6.length) {
                                if (tmp14) {
                                  if (userId === id) {
                                    let tmp67;
                                    let tmp70;
                                    const _Symbol2 = Symbol;
                                    if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                      const intl4 = tmp(tmp2[30]).intl;
                                      const stringResult = intl4.string(tmp(tmp2[30]).t.l6w3Vj);
                                      cResult[44] = stringResult;
                                      tmp67 = stringResult;
                                    } else {
                                      tmp67 = cResult[44];
                                    }
                                    const sum = badgeSize + 4;
                                    if (cResult[45] !== sum) {
                                      const obj5 = { minHeight: sum };
                                      cResult[45] = sum;
                                      cResult[46] = obj5;
                                      tmp70 = obj5;
                                    } else {
                                      tmp70 = cResult[46];
                                    }
                                    if (cResult[47] === style) {
                                      if (cResult[48] === tmp6.addBadgesChip) {
                                        let tmp71;
                                        let tmp73;
                                        let tmp76;
                                        if (cResult[49] === tmp70) {
                                          tmp71 = cResult[50];
                                        }
                                        const _Symbol3 = Symbol;
                                        if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                          const obj6 = { size: "xs", color: tmp33(tmp2[10]).colors.TEXT_STRONG };
                                          const PlusMediumIcon = tmp(tmp2[40]).PlusMediumIcon;
                                          cResult[51] = closure_13(PlusMediumIcon, obj6);
                                          closure_13(PlusMediumIcon, obj6);
                                          class W {
                                            constructor(id) {
                                              let obj2;
                                              let obj3;
                                              let obj4;
                                              const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                              obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                              obj3 = BadgeUtils;
                                              obj4 = BadgeUtils;
                                              return map1(closure_22, obj, id.id);
                                            }
                                          }
                                        } else {
                                          tmp73 = cResult[51];
                                        }
                                        const _Symbol4 = Symbol;
                                        if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                          const obj7 = { variant: "text-xs/normal", color: "text-strong", children: intl5.string(tmp(tmp2[30]).t.l6w3Vj) };
                                          const Text2 = tmp(tmp2[19]).Text;
                                          intl5 = tmp(tmp2[30]).intl;
                                          const tmp78 = closure_13(Text2, obj7);
                                          class W {
                                            constructor(id) {
                                              let obj2;
                                              let obj3;
                                              let obj4;
                                              const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                              obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                              obj3 = BadgeUtils;
                                              obj4 = BadgeUtils;
                                              return map1(closure_22, obj, id.id);
                                            }
                                          }
                                          cResult[52] = tmp78;
                                          tmp76 = tmp78;
                                        } else {
                                          tmp76 = cResult[52];
                                        }
                                        class W {
                                          constructor(id) {
                                            let obj2;
                                            let obj3;
                                            let obj4;
                                            const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                            obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                            obj3 = BadgeUtils;
                                            obj4 = BadgeUtils;
                                            return map1(closure_22, obj, id.id);
                                          }
                                        }
                                        const obj8 = { ref: badgeDirectoryEntryPointRef, accessibilityRole: "button", accessibilityLabel: tmp67, onPress: tmp17, style: tmp71, children: items1 };
                                        items1 = [tmp73, tmp76];
                                        cResult[53] = badgeDirectoryEntryPointRef;
                                        cResult[54] = tmp17;
                                        cResult[55] = tmp71;
                                        cResult[56] = closure_14(tmp(tmp2[18]).PressableOpacity, obj8);
                                        const tmp81 = closure_14(tmp(tmp2[18]).PressableOpacity, obj8);
                                      }
                                    }
                                    class W {
                                      constructor(id) {
                                        let obj2;
                                        let obj3;
                                        let obj4;
                                        const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                        obj3 = BadgeUtils;
                                        obj4 = BadgeUtils;
                                        return map1(closure_22, obj, id.id);
                                      }
                                    }
                                    tmp72[0] = tmp6.addBadgesChip;
                                    tmp72[1] = tmp70;
                                    tmp72[2] = style;
                                    cResult[47] = style;
                                    cResult[48] = tmp6.addBadgesChip;
                                    cResult[49] = tmp70;
                                    cResult[50] = tmp72;
                                    tmp71 = tmp72;
                                  }
                                }
                                return null;
                              } else {
                                let tmp51;
                                if (cResult[57] !== badgeRowHorizontalPadding) {
                                  const obj9 = { paddingHorizontal: badgeRowHorizontalPadding };
                                  cResult[57] = badgeRowHorizontalPadding;
                                  cResult[58] = obj9;
                                  tmp51 = obj9;
                                } else {
                                  tmp51 = cResult[58];
                                }
                                if (cResult[59] === style) {
                                  if (cResult[60] === tmp6.badgeRow) {
                                    if (cResult[61] === tmp6.limitedBadgeRow) {
                                      let tmp52;
                                      if (cResult[62] === tmp51) {
                                        tmp52 = cResult[63];
                                      }
                                      if (cResult[64] === diff) {
                                        let tmp53;
                                        if (cResult[65] === textVariant) {
                                          tmp53 = cResult[66];
                                        }
                                        if (cResult[67] === arr6) {
                                          if (cResult[68] === tmp52) {
                                            let tmp56;
                                            if (cResult[69] === tmp53) {
                                              tmp56 = cResult[70];
                                            }
                                            if (cResult[71] === tmp56) {
                                              if (cResult[72] === tmp17) {
                                                let tmp60;
                                                if (cResult[73] === tmp14) {
                                                  tmp60 = cResult[74];
                                                }
                                                if (cResult[75] === badgeDirectoryEntryPointRef) {
                                                  if (cResult[76] === tmp6.badges) {
                                                    let tmp63;
                                                    if (cResult[77] === tmp60) {
                                                      tmp63 = cResult[78];
                                                    }
                                                    return tmp63;
                                                  }
                                                }
                                                const obj10 = { style: tmp6.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: null };
                                                class W {
                                                  constructor(id) {
                                                    let obj2;
                                                    let obj3;
                                                    let obj4;
                                                    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                    obj3 = BadgeUtils;
                                                    obj4 = BadgeUtils;
                                                    return map1(closure_22, obj, id.id);
                                                  }
                                                }
                                                const tmp66 = closure_13(badgeSize, obj10);
                                                cResult[75] = badgeDirectoryEntryPointRef;
                                                cResult[76] = tmp6.badges;
                                                cResult[77] = tmp60;
                                                cResult[78] = tmp66;
                                                tmp63 = tmp66;
                                              }
                                            }
                                            let tmp61 = tmp56;
                                            if (tmp14) {
                                              const obj11 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp(tmp2[30]).t.PEjP4L), onPress: tmp17, children: null };
                                              const PressableOpacity = tmp(tmp2[18]).PressableOpacity;
                                              intl3 = tmp(tmp2[30]).intl;
                                              class W {
                                                constructor(id) {
                                                  let obj2;
                                                  let obj3;
                                                  let obj4;
                                                  const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                                  obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                  obj3 = BadgeUtils;
                                                  obj4 = BadgeUtils;
                                                  return map1(closure_22, obj, id.id);
                                                }
                                              }
                                              tmp61 = closure_13(PressableOpacity, obj11);
                                            }
                                            cResult[71] = tmp56;
                                            class W {
                                              constructor(id) {
                                                let obj2;
                                                let obj3;
                                                let obj4;
                                                const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                                obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                obj3 = BadgeUtils;
                                                obj4 = BadgeUtils;
                                                return map1(closure_22, obj, id.id);
                                              }
                                            }
                                            cResult[73] = tmp14;
                                            cResult[74] = tmp61;
                                            tmp60 = tmp61;
                                          }
                                        }
                                        const obj12 = { style: tmp52, children: items2 };
                                        items2 = [, ];
                                        class W {
                                          constructor(id) {
                                            let obj2;
                                            let obj3;
                                            let obj4;
                                            const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                            obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                            obj3 = BadgeUtils;
                                            obj4 = BadgeUtils;
                                            return map1(closure_22, obj, id.id);
                                          }
                                        }
                                        items2[1] = tmp53;
                                        const tmp59 = closure_14(badgeSize, obj12);
                                        cResult[67] = arr6;
                                        cResult[68] = tmp52;
                                        cResult[69] = tmp53;
                                        cResult[70] = tmp59;
                                        tmp56 = tmp59;
                                      }
                                      let tmp54 = diff > 0;
                                      if (tmp54) {
                                        const obj13 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: formatToPlainString2(tmp(tmp2[30]).t.eIHfGZ, obj14), children: "+" + diff };
                                        const Text = tmp(tmp2[19]).Text;
                                        const intl2 = tmp(tmp2[30]).intl;
                                        formatToPlainString2 = intl2.formatToPlainString;
                                        obj14 = { overflow_count: null };
                                        class W {
                                          constructor(id) {
                                            let obj2;
                                            let obj3;
                                            let obj4;
                                            const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                            obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                            obj3 = BadgeUtils;
                                            obj4 = BadgeUtils;
                                            return map1(closure_22, obj, id.id);
                                          }
                                        }
                                        const _HermesInternal = HermesInternal;
                                        tmp54 = closure_13(Text, obj13);
                                      }
                                      cResult[64] = diff;
                                      class W {
                                        constructor(id) {
                                          let obj2;
                                          let obj3;
                                          let obj4;
                                          const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                          obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                          obj3 = BadgeUtils;
                                          obj4 = BadgeUtils;
                                          return map1(closure_22, obj, id.id);
                                        }
                                      }
                                      cResult[66] = tmp54;
                                      tmp53 = tmp54;
                                    }
                                  }
                                }
                                const items3 = [, , , ];
                                ({ badgeRow: arr7[0], limitedBadgeRow: arr7[1] } = tmp6);
                                items3[2] = tmp51;
                                items3[3] = style;
                                class W {
                                  constructor(id) {
                                    let obj2;
                                    let obj3;
                                    let obj4;
                                    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                    obj3 = BadgeUtils;
                                    obj4 = BadgeUtils;
                                    return map1(closure_22, obj, id.id);
                                  }
                                }
                                cResult[59] = style;
                                cResult[60] = tmp6.badgeRow;
                                cResult[61] = tmp6.limitedBadgeRow;
                                cResult[62] = tmp51;
                                cResult[63] = items3;
                                tmp52 = items3;
                              }
                            }
                            let substr = tmp46;
                            if (tmp46 == null) {
                              substr = arr.slice(0, tmp(tmp2[37]).MAX_DISPLAYED_PROFILE_BADGES);
                            }
                            cResult[41] = arr;
                            class W {
                              constructor(id) {
                                let obj2;
                                let obj3;
                                let obj4;
                                const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                                obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                obj3 = BadgeUtils;
                                obj4 = BadgeUtils;
                                return map1(closure_22, obj, id.id);
                              }
                            }
                            cResult[43] = substr;
                            arr6 = substr;
                          }
                        }
                      }
                    }
                  }
                }
                let mapped;
                if (catalogBadges != null) {
                  const substr1 = catalogBadges.slice(0, tmp(tmp2[37]).MAX_DISPLAYED_PROFILE_BADGES);
                  mapped = substr1.map((badge_id) => {
                    let obj4;
                    let tmp5;
                    const value = closure_8.get(badge_id.badge_id);
                    let obj = getBadgeName(badge_id.badge_id);
                    const tmp2 = map1;
                    const tmp3 = closure_22;
                    const tmp4 = DEFAULT_PREMIUM_BADGE_ID;
                    if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
                      obj = tmp4;
                    }
                    const obj2 = { id: obj, userId, catalogBadge: badge_id, source: tmp5, label: obj4.getProfileBadgeLabel(closure_10.get(badge_id.badge_id), badge_id), badgeSize, themeType, showToastOnPress };
                    tmp5 = undefined;
                    if (null != value) {
                      tmp5 = { uri: value };
                      const obj3 = { uri: value };
                    }
                    obj4 = BadgeUtils;
                    return tmp2(tmp3, obj2, badge_id.badge_id);
                  });
                }
                cResult[33] = !tmp14 && tmp5;
                cResult[34] = badgeSize;
                class W {
                  constructor(id) {
                    let obj2;
                    let obj3;
                    let obj4;
                    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                    obj3 = BadgeUtils;
                    obj4 = BadgeUtils;
                    return map1(closure_22, obj, id.id);
                  }
                }
                cResult[35] = catalogBadges;
                cResult[36] = tmp20;
                cResult[37] = tmp18;
                cResult[38] = themeType;
                cResult[39] = userId;
                cResult[40] = mapped;
                tmp46 = mapped;
              } else {
                if (cResult[79] === badgeRowHorizontalPadding) {
                  if (cResult[80] === arr3) {
                    if (cResult[81] === style) {
                      let tmp40;
                      if (cResult[82] === tmp6.badgeRow) {
                        tmp40 = cResult[83];
                      }
                      if (cResult[84] === tmp6.badges) {
                        let tmp42;
                        if (cResult[85] === tmp40) {
                          tmp42 = cResult[86];
                        }
                        return tmp42;
                      }
                      class W {
                        constructor(id) {
                          let obj2;
                          let obj3;
                          let obj4;
                          const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                          obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                          obj3 = BadgeUtils;
                          obj4 = BadgeUtils;
                          return map1(closure_22, obj, id.id);
                        }
                      }
                      cResult[84] = tmp6.badges;
                      cResult[85] = tmp40;
                      cResult[86] = tmp45;
                      tmp42 = tmp45;
                    }
                  }
                }
                const mapped1 = arr3.map((children, index) => {
                  let items;
                  const obj = { style: items, children };
                  items = [badgeRow.badgeRow, , ];
                  const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
                  items[1] = obj2;
                  items[2] = style;
                  return map1(hasOwnProperty, obj, index);
                });
                cResult[79] = badgeRowHorizontalPadding;
                cResult[80] = arr3;
                class W {
                  constructor(id) {
                    let obj2;
                    let obj3;
                    let obj4;
                    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                    obj3 = BadgeUtils;
                    obj4 = BadgeUtils;
                    return map1(closure_22, obj, id.id);
                  }
                }
                cResult[82] = tmp6.badgeRow;
                cResult[83] = mapped1;
                tmp40 = mapped1;
              }
            }
          }
        }
      }
    }
    if (cResult[18] === (!tmp14 && tmp5)) {
      if (cResult[19] === badgeSize) {
        if (cResult[20] === themeType) {
          let tmp22;
          if (cResult[21] === userId) {
            tmp22 = cResult[22];
          }
          mapped2 = badges.map(tmp22);
          if (isTryItOut) {
            if (null == badges.find((id) => "premium" === id.id)) {
              let tmp23;
              const _Symbol5 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[30]).intl;
                const formatToPlainString = intl.formatToPlainString;
                const _Date = Date;
                const self = this;
                const self2 = this;
                const obj16 = { date: tmp25 };
                const v8zbGNR = tmp(tmp2[30]).t["8zbGNR"];
                class W {
                  constructor(id) {
                    let obj2;
                    let obj3;
                    let obj4;
                    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                    obj3 = BadgeUtils;
                    obj4 = BadgeUtils;
                    return map1(closure_22, obj, id.id);
                  }
                }
                const formatToPlainStringResult = formatToPlainString(v8zbGNR, obj16);
                cResult[23] = formatToPlainStringResult;
                tmp23 = formatToPlainStringResult;
              } else {
                tmp23 = cResult[23];
              }
              if (cResult[24] === (!tmp14 && tmp5)) {
                if (cResult[25] === badgeSize) {
                  if (cResult[26] === tmp23) {
                    let tmp28;
                    if (cResult[27] === userId) {
                      tmp28 = cResult[28];
                    }
                    mapped2.push(tmp28);
                  }
                }
              }
              const obj17 = { source: onOpenBadgeDirectory(tmp2[38]), id: "premium", userId, label: tmp23, badgeSize, showToastOnPress: !tmp14 && tmp5 };
              class W {
                constructor(id) {
                  let obj2;
                  let obj3;
                  let obj4;
                  const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
                  obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                  obj3 = BadgeUtils;
                  obj4 = BadgeUtils;
                  return map1(closure_22, obj, id.id);
                }
              }
              const tmp31 = closure_13(closure_22, obj17);
              cResult[24] = !tmp14 && tmp5;
              cResult[25] = badgeSize;
              cResult[26] = tmp23;
              cResult[27] = userId;
              cResult[28] = tmp31;
              tmp28 = tmp31;
            }
          }
          cResult[11] = !tmp14 && tmp5;
          class W {
            constructor(id) {
              let obj2;
              let obj3;
              let obj4;
              const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
              obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
              obj3 = BadgeUtils;
              obj4 = BadgeUtils;
              return map1(closure_22, obj, id.id);
            }
          }
          cResult[13] = badges;
          cResult[14] = isTryItOut;
          cResult[15] = themeType;
          cResult[16] = userId;
          cResult[17] = mapped2;
        }
      }
    }
    class W {
      constructor(id) {
        let obj2;
        let obj3;
        let obj4;
        const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
        obj3 = BadgeUtils;
        obj4 = BadgeUtils;
        return map1(closure_22, obj, id.id);
      }
    }
    cResult[18] = !tmp14 && tmp5;
    cResult[19] = badgeSize;
    cResult[20] = themeType;
    cResult[21] = userId;
    cResult[22] = W;
    tmp22 = W;
  }
  class L {
    constructor() {
      if (onOpenBadgeDirectory != null) {
        tmp();
      }
      const obj = openBadgeDirectoryScreen;
      const obj2 = { targetUserId: userId };
      const result = obj.openBadgeDirectoryScreen(obj2);
    }
  }
  cResult[4] = onOpenBadgeDirectory;
  cResult[5] = userId;
  cResult[6] = L;
  tmp17 = L;
}) : (function ProfileBadgeRows(userId) {
  let badgeDirectoryEntryPointRef;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let date;
  let formatToPlainString;
  let id;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isTryItOut;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj13;
  let obj5;
  let onOpenBadgeDirectory;
  let tmp29Result;
  let v8zbGNR;
  userId = userId.userId;
  const badges = userId.badges;
  ({ catalogBadges, isTryItOut, canOpenBadgeDirectory } = userId);
  if (canOpenBadgeDirectory === undefined) {
    canOpenBadgeDirectory = false;
  }
  ({ badgeDirectoryEntryPointRef, onOpenBadgeDirectory } = userId);
  const style = userId.style;
  const themeType = userId.themeType;
  let flag = userId.showToastOnPress;
  if (flag === undefined) {
    flag = true;
  }
  let badgeSize;
  let badgeRowHorizontalPadding;
  let isBadgeManagementEnabled;
  let showToastOnPress;
  let closure_10;
  let closure_11;
  let mapped;
  let width;
  let tmp = closure_16();
  const badgeRow = tmp;
  let tmp2;
  if (null != themeType) {
    let tmp3 = closure_18;
    tmp2 = closure_18[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_17;
  }
  badgeSize = tmp2.badgeSize;
  badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
  let tmp4 = userId;
  let tmp5 = onOpenBadgeDirectory;
  const textVariant = tmp2.textVariant;
  let obj = userId(onOpenBadgeDirectory[34]);
  isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
  let obj2 = userId(onOpenBadgeDirectory[35]);
  const tmp7 = obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
  showToastOnPress = tmp8;
  const currentUser = badgeSize.getCurrentUser();
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj3 = style;
  let items = [userId, onOpenBadgeDirectory];
  const callback = style.useCallback(() => {
    if (onOpenBadgeDirectory != null) {
      tmp();
    }
    const obj = openBadgeDirectoryScreen;
    const obj2 = { targetUserId: userId };
    const result = obj.openBadgeDirectoryScreen(obj2);
  }, items);
  const items1 = [badges];
  closure_10 = style.useMemo(() => {
    const obj = BadgeUtils;
    return obj.getLegacyIconUrlByBadgeId(badges);
  }, items1);
  const items2 = [badges];
  closure_11 = style.useMemo(() => {
    const obj = BadgeUtils;
    return obj.getLegacyDescriptionByBadgeId(badges);
  }, items2);
  mapped = badges.map((id) => {
    let obj2;
    let obj3;
    let obj4;
    const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
    obj3 = BadgeUtils;
    obj4 = BadgeUtils;
    return map1(closure_22, obj, id.id);
  });
  if (isTryItOut) {
    isTryItOut = null == badges.find((id) => "premium" === id.id);
  }
  if (isTryItOut) {
    let obj4 = { source: badges(tmp5[38]), id: "premium", userId, label: formatToPlainString(v8zbGNR, obj5), badgeSize, showToastOnPress: tmp8 };
    const push = mapped.push;
    const intl = tmp4(tmp5[30]).intl;
    formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    obj5 = { date };
    v8zbGNR = tmp4(tmp5[30]).t["8zbGNR"];
    date = new Date();
    push(width(closure_22, obj4));
  }
  width = badges(tmp5[39])().width;
  const items3 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
  const memo = obj3.useMemo(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      return [];
    } else {
      const _Math = Math;
      const rounded = Math.floor((width - 2 * showToastOnPress - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
      const _Array = Array;
      const _Math2 = Math;
      const obj = { length: Math.ceil(mapped.length / rounded) };
      return from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
    }
  }, items3);
  const tmp19 = badges;
  if (isBadgeManagementEnabled) {
    let mapped1;
    if (catalogBadges != null) {
      const substr = catalogBadges.slice(0, tmp4(tmp5[37]).MAX_DISPLAYED_PROFILE_BADGES);
      mapped1 = substr.map((badge_id) => {
        let obj4;
        let tmp5;
        const value = closure_10.get(badge_id.badge_id);
        let obj = getBadgeName(badge_id.badge_id);
        const tmp2 = map1;
        const tmp3 = closure_22;
        const tmp4 = DEFAULT_PREMIUM_BADGE_ID;
        if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
          obj = tmp4;
        }
        const obj2 = { id: obj, userId, catalogBadge: badge_id, source: tmp5, label: obj4.getProfileBadgeLabel(closure_11.get(badge_id.badge_id), badge_id), badgeSize, themeType, showToastOnPress };
        tmp5 = undefined;
        if (null != value) {
          tmp5 = { uri: value };
          const obj3 = { uri: value };
        }
        obj4 = BadgeUtils;
        return tmp2(tmp3, obj2, badge_id.badge_id);
      });
    }
    if (mapped1 == null) {
      mapped1 = mapped.slice(0, tmp4(tmp5[37]).MAX_DISPLAYED_PROFILE_BADGES);
    }
    let length;
    if (catalogBadges != null) {
      length = catalogBadges.length;
    }
    if (length == null) {
      length = mapped.length;
    }
    const diff = length - mapped1.length;
    if (0 === mapped1.length) {
      let tmp31 = null;
      if (tmp7) {
        tmp31 = null;
        if (userId === id) {
          const obj6 = { ref: badgeDirectoryEntryPointRef, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp4(tmp5[30]).t.l6w3Vj), onPress: callback, style: items4, children: items5 };
          const PressableOpacity2 = tmp4(tmp5[18]).PressableOpacity;
          intl4 = tmp4(tmp5[30]).intl;
          items4 = [tmp.addBadgesChip, , ];
          const obj7 = { minHeight: badgeSize + 4 };
          items4[1] = obj7;
          items4[2] = style;
          const obj8 = { size: "xs", color: tmp19(tmp5[10]).colors.TEXT_STRONG };
          const PlusMediumIcon = tmp4(tmp5[40]).PlusMediumIcon;
          items5 = [width(PlusMediumIcon, obj8), ];
          const obj9 = { variant: "text-xs/normal", color: "text-strong", children: intl5.string(tmp4(tmp5[30]).t.l6w3Vj) };
          const Text2 = tmp4(tmp5[19]).Text;
          intl5 = tmp4(tmp5[30]).intl;
          items5[1] = width(Text2, obj9);
          tmp31 = closure_14(PressableOpacity2, obj6);
        }
      }
      return tmp31;
    } else {
      const obj10 = { style: items6, children: items7 };
      items6 = [, , , ];
      ({ badgeRow: arr9[0], limitedBadgeRow: arr9[1] } = tmp);
      const obj11 = { paddingHorizontal: badgeRowHorizontalPadding };
      items6[2] = obj11;
      items6[3] = style;
      items7 = [mapped1, ];
      let tmp27 = diff > 0;
      const tmp32 = closure_14;
      if (tmp27) {
        const obj12 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(tmp4(tmp5[30]).t.eIHfGZ, obj13), children: "+" + diff };
        const Text = tmp4(tmp5[19]).Text;
        intl2 = tmp4(tmp5[30]).intl;
        const _HermesInternal = HermesInternal;
        obj13 = { overflow_count: diff };
        tmp27 = width(Text, obj12);
      }
      items7[1] = tmp27;
      const tmp32Result = tmp32(badgeRow, obj10);
      const obj14 = { style: tmp.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: tmp29Result };
      tmp29Result = tmp32Result;
      if (tmp7) {
        const obj15 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp4(tmp5[30]).t.PEjP4L), onPress: callback, children: tmp32Result };
        const PressableOpacity = tmp4(tmp5[18]).PressableOpacity;
        intl3 = tmp4(tmp5[30]).intl;
        tmp29Result = tmp29(PressableOpacity, obj15);
      }
      return width(badgeRow, obj14);
    }
  } else {
    const obj16 = {
      style: tmp.badges,
      children: memo.map((children, index) => {
          let items;
          const obj = { style: items, children };
          items = [badgeRow.badgeRow, , ];
          const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
          items[1] = obj2;
          items[2] = style;
          return map1(hasOwnProperty, obj, index);
        })
    };
    return width(badgeRow, obj16);
  }
});
let closure_23 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTag(arg0) {
  let guildId;
  let guildTagBadgeSize;
  let guildTagHorizontalPadding;
  let guildTagTextVariant;
  let primaryGuildOverride;
  let showToastOnPress;
  let style;
  let tag;
  let themeType;
  let tmp9;
  let user;
  const obj = react2;
  const cResult = obj.c(21);
  ({ user, themeType, style, showToastOnPress, primaryGuildOverride } = arg0);
  const tmp5 = closure_16();
  if (undefined === primaryGuildOverride) {
    let primaryGuild;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    primaryGuildOverride = primaryGuild;
  }
  const tmpResult = GuildTagUtils;
  const userPrimaryGuild = tmpResult.getUserPrimaryGuild(primaryGuildOverride);
  ({ tag, guildId } = userPrimaryGuild);
  if (cResult[0] !== themeType) {
    let tmp11;
    if (null != themeType) {
      tmp11 = closure_18[themeType];
    }
    if (tmp11 == null) {
      tmp11 = closure_17;
    }
    cResult[0] = themeType;
    cResult[1] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[1];
  }
  ({ guildTagBadgeSize, guildTagHorizontalPadding, guildTagTextVariant } = tmp9);
  const sum = tmp9.badgeSize + 4;
  let num3 = 4;
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    num3 = 2;
  }
  const sum1 = tmp(5234).TextStyleSheet[guildTagTextVariant].fontSize + num3;
  if (null != tag) {
    if (null != guildId) {
      if (cResult[2] === guildTagHorizontalPadding) {
        let tmp15;
        if (cResult[3] === sum) {
          tmp15 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp5.guildTag) {
            let tmp16;
            let tmp18;
            if (cResult[7] === tmp15) {
              tmp16 = cResult[8];
            }
            if (cResult[9] !== sum1) {
              const obj2 = { lineHeight: sum1 };
              cResult[9] = sum1;
              cResult[10] = obj2;
              tmp18 = obj2;
            } else {
              tmp18 = cResult[10];
            }
            if (cResult[11] === guildTagBadgeSize) {
              if (cResult[12] === guildTagTextVariant) {
                if (cResult[13] === primaryGuildOverride) {
                  if (cResult[14] === tmp5.transparentBackground) {
                    if (cResult[15] === !(undefined !== showToastOnPress && showToastOnPress)) {
                      let tmp19;
                      if (cResult[16] === tmp18) {
                        tmp19 = cResult[17];
                      }
                      if (cResult[18] === tmp16) {
                        let tmp23;
                        if (cResult[19] === tmp19) {
                          tmp23 = cResult[20];
                        }
                        return tmp23;
                      }
                      const obj3 = { style: tmp16, children: tmp19 };
                      const tmp26 = map1(hasOwnProperty, obj3);
                      cResult[18] = tmp16;
                      cResult[19] = tmp19;
                      cResult[20] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                }
              }
            }
            const obj4 = { primaryGuild: primaryGuildOverride, disabledTooltip: !(undefined !== showToastOnPress && showToastOnPress), containerStyles: tmp5.transparentBackground, textStyle: tmp18, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
            const tmp22 = map1(GuildTagDefault, obj4);
            cResult[11] = guildTagBadgeSize;
            cResult[12] = guildTagTextVariant;
            cResult[13] = primaryGuildOverride;
            cResult[14] = tmp5.transparentBackground;
            cResult[15] = !(undefined !== showToastOnPress && showToastOnPress);
            cResult[16] = tmp18;
            cResult[17] = tmp22;
            tmp19 = tmp22;
          }
        }
        const items = [tmp5.guildTag, tmp15, style];
        cResult[5] = style;
        cResult[6] = tmp5.guildTag;
        cResult[7] = tmp15;
        cResult[8] = items;
        tmp16 = items;
      }
      const obj5 = { minHeight: sum, paddingHorizontal: guildTagHorizontalPadding };
      cResult[2] = guildTagHorizontalPadding;
      cResult[3] = sum;
      cResult[4] = obj5;
      tmp15 = obj5;
    }
  }
  return null;
}) : (function GuildTag(style) {
  let badgeSize;
  let guildId;
  let guildTagBadgeSize;
  let guildTagHorizontalPadding;
  let guildTagTextVariant;
  let items;
  let obj4;
  let obj5;
  let showToastOnPress;
  let tag;
  let themeType;
  let user;
  ({ user, themeType, showToastOnPress } = style);
  style = style.style;
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  let primaryGuildOverride = style.primaryGuildOverride;
  const tmp = closure_16();
  if (undefined === primaryGuildOverride) {
    let primaryGuild;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    primaryGuildOverride = primaryGuild;
  }
  const obj = GuildTagUtils;
  const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuildOverride);
  let tmp7;
  ({ tag, guildId } = userPrimaryGuild);
  if (null != themeType) {
    tmp7 = closure_18[themeType];
  }
  if (tmp7 == null) {
    tmp7 = closure_17;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
  PlatformUtils;
  let tmp10 = null;
  if (null != tag) {
    tmp10 = null;
    if (null != guildId) {
      const obj2 = { style: items, children: map1(GuildTagDefault, obj4) };
      items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = style;
      obj4 = { primaryGuild: primaryGuildOverride, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: obj5, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
      obj5 = { lineHeight: tmp9 };
      tmp10 = map1(hasOwnProperty, obj2);
    }
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePrimaryInfo(arg0) {
  let badgeContainerBackground;
  let badgeDirectoryEntryPointRef;
  let badges;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let displayName;
  let displayNameAccessibilityHint;
  let displayNameAccessibilityRole;
  let guildId;
  let hideBadges;
  let items;
  let items1;
  let onOpenBadgeDirectory;
  let onPressDisplayName;
  let onPressPronouns;
  let onPressUserTag;
  let pendingDisplayNameStyles;
  let primaryGuildOverride;
  let pronouns;
  let pronounsAccessibilityHint;
  let showBadgeToastOnPress;
  let showChevron;
  let style;
  let themeType;
  let tmp5;
  let user;
  let userTagAccessibilityHint;
  const obj = react2;
  const cResult = obj.c(49);
  ({ user, guildId, displayName, pronouns, style, badges, catalogBadges, badgeContainerBackground, themeType, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, showBadgeToastOnPress, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles, primaryGuildOverride, hideBadges } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] !== badgeContainerBackground) {
    const obj2 = { backgroundColor: badgeContainerBackground };
    cResult[0] = badgeContainerBackground;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const obj3 = UserUtilsDefault;
  const name = obj3.useName(user);
  UserUtilsDefault;
  if (cResult[2] === style) {
    let tmp9;
    if (cResult[3] === tmp4.container) {
      tmp9 = cResult[4];
    }
    let tmp10 = name;
    if ("" !== displayName) {
      if (displayName == null) {
        displayName = name;
      }
      tmp10 = displayName;
    }
    if (cResult[5] === displayNameAccessibilityHint) {
      if (cResult[6] === displayNameAccessibilityRole) {
        if (cResult[7] === guildId) {
          if (cResult[8] === onPressDisplayName) {
            if (cResult[9] === pendingDisplayNameStyles) {
              if (cResult[10] === showChevron) {
                if (cResult[11] === tmp10) {
                  if (cResult[12] === themeType) {
                    let tmp12;
                    if (cResult[13] === user) {
                      tmp12 = cResult[14];
                    }
                    let tmp16 = null;
                    if (!user.isProvisional) {
                      tmp16 = tmp8;
                    }
                    if (cResult[15] === onPressPronouns) {
                      if (cResult[16] === onPressUserTag) {
                        if (cResult[17] === pronouns) {
                          if (cResult[18] === pronounsAccessibilityHint) {
                            if (cResult[19] === tmp16) {
                              if (cResult[20] === themeType) {
                                let tmp17;
                                if (cResult[21] === userTagAccessibilityHint) {
                                  tmp17 = cResult[22];
                                }
                                if (cResult[23] === tmp5) {
                                  if (cResult[24] === primaryGuildOverride) {
                                    if (cResult[25] === showBadgeToastOnPress) {
                                      if (cResult[26] === themeType) {
                                        let tmp21;
                                        if (cResult[27] === user) {
                                          tmp21 = cResult[28];
                                        }
                                        if (cResult[29] === badgeDirectoryEntryPointRef) {
                                          if (cResult[30] === badges) {
                                            if (cResult[31] === canOpenBadgeDirectory) {
                                              if (cResult[32] === catalogBadges) {
                                                if (cResult[33] === tmp5) {
                                                  if (cResult[34] === (undefined !== hideBadges && hideBadges)) {
                                                    if (cResult[35] === onOpenBadgeDirectory) {
                                                      if (cResult[36] === showBadgeToastOnPress) {
                                                        if (cResult[37] === themeType) {
                                                          let tmp25;
                                                          if (cResult[38] === user.id) {
                                                            tmp25 = cResult[39];
                                                          }
                                                          if (cResult[40] === tmp4.details) {
                                                            if (cResult[41] === tmp17) {
                                                              if (cResult[42] === tmp21) {
                                                                let tmp29;
                                                                if (cResult[43] === tmp25) {
                                                                  tmp29 = cResult[44];
                                                                }
                                                                if (cResult[45] === tmp29) {
                                                                  if (cResult[46] === tmp9) {
                                                                    let tmp33;
                                                                    if (cResult[47] === tmp12) {
                                                                      tmp33 = cResult[48];
                                                                    }
                                                                    return tmp33;
                                                                  }
                                                                }
                                                                const obj4 = { style: tmp9, children: items };
                                                                items = [tmp12, tmp29];
                                                                const tmp36 = syncedClientThemes(hasOwnProperty, obj4);
                                                                cResult[45] = tmp29;
                                                                cResult[46] = tmp9;
                                                                cResult[47] = tmp12;
                                                                cResult[48] = tmp36;
                                                                tmp33 = tmp36;
                                                              }
                                                            }
                                                          }
                                                          const obj5 = { style: tmp4.details, children: items1 };
                                                          items1 = [tmp17, tmp21, tmp25];
                                                          const tmp32 = syncedClientThemes(hasOwnProperty, obj5);
                                                          cResult[40] = tmp4.details;
                                                          cResult[41] = tmp17;
                                                          cResult[42] = tmp21;
                                                          cResult[43] = tmp25;
                                                          cResult[44] = tmp32;
                                                          tmp29 = tmp32;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let tmp26 = !tmp3;
                                        if (tmp26) {
                                          const obj6 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: tmp5, themeType, showToastOnPress: showBadgeToastOnPress };
                                          tmp26 = map1(closure_23, obj6);
                                        }
                                        cResult[29] = badgeDirectoryEntryPointRef;
                                        cResult[30] = badges;
                                        cResult[31] = canOpenBadgeDirectory;
                                        cResult[32] = catalogBadges;
                                        cResult[33] = tmp5;
                                        cResult[34] = undefined !== hideBadges && hideBadges;
                                        cResult[35] = onOpenBadgeDirectory;
                                        cResult[36] = showBadgeToastOnPress;
                                        cResult[37] = themeType;
                                        cResult[38] = user.id;
                                        cResult[39] = tmp26;
                                        tmp25 = tmp26;
                                      }
                                    }
                                  }
                                }
                                const obj7 = { user, themeType, style: tmp5, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride };
                                const tmp24 = map1(closure_24, obj7);
                                cResult[23] = tmp5;
                                cResult[24] = primaryGuildOverride;
                                cResult[25] = showBadgeToastOnPress;
                                cResult[26] = themeType;
                                cResult[27] = user;
                                cResult[28] = tmp24;
                                tmp21 = tmp24;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj8 = { userTag: tmp16, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint };
                    const tmp20 = map1(closure_21, obj8);
                    cResult[15] = onPressPronouns;
                    cResult[16] = onPressUserTag;
                    cResult[17] = pronouns;
                    cResult[18] = pronounsAccessibilityHint;
                    cResult[19] = tmp16;
                    cResult[20] = themeType;
                    cResult[21] = userTagAccessibilityHint;
                    cResult[22] = tmp20;
                    tmp17 = tmp20;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj9 = { user, guildId, name: tmp10, themeType, onPress: onPressDisplayName, accessibilityHint: displayNameAccessibilityHint, displayNameAccessibilityRole, showChevron, pendingDisplayNameStyles };
    const tmp15 = map1(closure_20, obj9);
    cResult[5] = displayNameAccessibilityHint;
    cResult[6] = displayNameAccessibilityRole;
    cResult[7] = guildId;
    cResult[8] = onPressDisplayName;
    cResult[9] = pendingDisplayNameStyles;
    cResult[10] = showChevron;
    cResult[11] = tmp10;
    cResult[12] = themeType;
    cResult[13] = user;
    cResult[14] = tmp15;
    tmp12 = tmp15;
  }
  const items2 = [tmp4.container, style];
  cResult[2] = style;
  cResult[3] = tmp4.container;
  cResult[4] = items2;
  tmp9 = items2;
}) : (function UserProfilePrimaryInfo(arg0) {
  let badgeContainerBackground;
  let badgeDirectoryEntryPointRef;
  let badges;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let displayName;
  let displayNameAccessibilityHint;
  let displayNameAccessibilityRole;
  let guildId;
  let hideBadges;
  let items;
  let items1;
  let items2;
  let onOpenBadgeDirectory;
  let onPressDisplayName;
  let onPressPronouns;
  let onPressUserTag;
  let pendingDisplayNameStyles;
  let primaryGuildOverride;
  let pronouns;
  let pronounsAccessibilityHint;
  let showBadgeToastOnPress;
  let showChevron;
  let style;
  let themeType;
  let tmp8;
  let user;
  let userTagAccessibilityHint;
  ({ user, displayName, themeType, showBadgeToastOnPress, hideBadges } = arg0);
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles, primaryGuildOverride } = arg0);
  if (hideBadges === undefined) {
    hideBadges = false;
  }
  const tmp = closure_16();
  const obj = { backgroundColor: badgeContainerBackground };
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(user);
  const obj4 = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj5 = { user, guildId, name: tmp8, themeType, onPress: onPressDisplayName, accessibilityHint: displayNameAccessibilityHint, displayNameAccessibilityRole, showChevron, pendingDisplayNameStyles };
  tmp8 = name;
  const obj3 = UserUtilsDefault;
  const userTag = obj3.useUserTag(user);
  const tmp7 = closure_20;
  if ("" !== displayName) {
    if (displayName == null) {
      displayName = name;
    }
    tmp8 = displayName;
  }
  items1 = [map1(tmp7, obj5), ];
  let tmp11 = null;
  const obj6 = { style: tmp.details, children: items2 };
  const tmp10 = closure_21;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  items2 = [map1(tmp10, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), map1(closure_24, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }), ];
  let tmp6Result = !hideBadges;
  if (tmp6Result) {
    const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
    tmp6Result = tmp6(closure_23, obj7);
  }
  items2[2] = tmp6Result;
  items1[1] = syncedClientThemes(hasOwnProperty, obj6);
  return syncedClientThemes(hasOwnProperty, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default tmp9;
export const DisplayName = tmp6;
export const UserTagAndPronouns = tmp7;
export const ProfileBadgeRows = tmp8;
