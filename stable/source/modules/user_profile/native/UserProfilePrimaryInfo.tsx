// Module ID: 10603
// Function ID: 10604
// Name: UserProfilePrimaryInfo
// Dependencies: [19, 17, 1378, 7632, 6630, 1086, 7390, 7643, 21, 4837, 588, 558, 576, 10400, 10401, 8736, 10604, 5436, 4833, 10606, 7151, 4695, 10638, 7633, 6801, 4531, 7692, 7157, 7146, 7156, 5760, 1253, 7145, 1370, 1127, 10640, 10641, 10642, 10643, 10644, 10648, 10734, 1485, 8329, 5282, 7614, 9171, 4680, 2]

// Module 10603 (UserProfilePrimaryInfo)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import UserUtilsDefault from "UserUtils" /* 4680 */;
import Text_Text from "Text/Text" /* 4833 */;
import QuestTypes from "QuestTypes" /* 5760 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7145 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7146 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7156 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7157 */;
import GuildTagConstants from "GuildTagConstants" /* 7390 */;
import GuildTagUtils from "GuildTagUtils" /* 7614 */;
import Constants2 from "Constants" /* 7632 */;
import BadgeId from "BadgeId" /* 7633 */;
import Constants3 from "Constants" /* 7643 */;
import useBadges from "useBadges" /* 7692 */;
import BotTagDefault from "BotTag" /* 8736 */;
import GuildTagDefault from "GuildTag" /* 9171 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10400 */;
import types from "types" /* 10401 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10644 */;
import BadgeUtils from "BadgeUtils" /* 10648 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore_mod from "UserStore" /* 1378 */;
import Constants_mod from "Constants" /* 6630 */;
import Constants_mod2 from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault, obj1, source;

let UserProfileThemeTypes;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
let UserStore = UserStore_mod;
const getBadgeName = Constants2.getBadgeName;
let Constants = Constants_mod2;
({ DIVIDER_DOT: metroImportAll, PROFILE_SIDE_PADDING: c9, UserProfileThemeTypes } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: unpackModuleId, UserSettingsSections: closure_12 } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = Constants3.DEFAULT_PREMIUM_BADGE_ID;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: obj2, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: obj3, limitedBadgeRow: { alignItems: "center" } };
obj2 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
let closure_17 = createStyles(obj);
let closure_18 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
let obj4 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
let closure_19 = { [UserProfileThemeTypes.PREVIEW]: obj4 };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let accessibilityHint;
  let name;
  let onPress;
  let pendingDisplayNameStyles;
  let showChevron;
  let themeType;
  let tmp3;
  let obj = user(name[12]);
  const cResult = obj.c(34);
  user = user.user;
  const guildId = user.guildId;
  name = user.name;
  ({ themeType, onPress, accessibilityHint, showChevron, pendingDisplayNameStyles } = user);
  const displayNameAccessibilityRole = user.displayNameAccessibilityRole;
  const tmp2 = closure_17();
  let closure_5 = tmp2;
  if (cResult[0] !== themeType) {
    let tmp5;
    if (null != themeType) {
      tmp5 = closure_19[themeType];
    }
    if (tmp5 == null) {
      tmp5 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  const headingVariant = tmp3.headingVariant;
  if (cResult[2] === displayNameAccessibilityRole) {
    if (cResult[3] === guildId) {
      if (cResult[4] === headingVariant) {
        if (cResult[5] === name) {
          if (cResult[6] === pendingDisplayNameStyles) {
            if (cResult[7] === tmp2.displayNameText) {
              if (cResult[10] === tmp2.botTag) {
                class E {
                  constructor() {
                    obj = user;
                    if (user.isSystemUser()) {
                      tmp9 = jsx;
                      tmp10 = closure_1;
                      tmp11 = closure_2;
                      obj1 = { style: null, type: null, verified: null };
                      tmp13 = closure_5;
                      obj1.style = closure_5.botTag;
                      tmp14 = closure_1;
                      tmp15 = closure_2;
                      tmp12 = closure_1(closure_2[15]);
                      obj1.type = closure_1(closure_2[15]).Types.SYSTEM_DM;
                      obj1.verified = obj.isVerifiedBot();
                      tmp = jsx(tmp12, obj1);
                    } else {
                      tmp = null;
                      if (obj.bot) {
                        tmp2 = jsx;
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        obj4 = { style: null, type: null, verified: null };
                        tmp6 = closure_5;
                        obj4.style = closure_5.botTag;
                        tmp7 = closure_1;
                        tmp8 = closure_2;
                        tmp5 = closure_1(closure_2[15]);
                        obj4.type = closure_1(closure_2[15]).Types.BOT;
                        obj4.verified = obj.isVerifiedBot();
                        tmp = jsx(tmp5, obj4);
                      }
                    }
                    return tmp;
                  }
                }
              }
              class E {
                constructor() {
                  obj = user;
                  if (user.isSystemUser()) {
                    tmp9 = jsx;
                    tmp10 = closure_1;
                    tmp11 = closure_2;
                    obj1 = { style: null, type: null, verified: null };
                    tmp13 = closure_5;
                    obj1.style = closure_5.botTag;
                    tmp14 = closure_1;
                    tmp15 = closure_2;
                    tmp12 = closure_1(closure_2[15]);
                    obj1.type = closure_1(closure_2[15]).Types.SYSTEM_DM;
                    obj1.verified = obj.isVerifiedBot();
                    tmp = jsx(tmp12, obj1);
                  } else {
                    tmp = null;
                    if (obj.bot) {
                      tmp2 = jsx;
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj4 = { style: null, type: null, verified: null };
                      tmp6 = closure_5;
                      obj4.style = closure_5.botTag;
                      tmp7 = closure_1;
                      tmp8 = closure_2;
                      tmp5 = closure_1(closure_2[15]);
                      obj4.type = closure_1(closure_2[15]).Types.BOT;
                      obj4.verified = obj.isVerifiedBot();
                      tmp = jsx(tmp5, obj4);
                    }
                  }
                  return tmp;
                }
              }
              cResult[10] = tmp2.botTag;
              cResult[11] = user;
              cResult[12] = E;
            }
          }
        }
      }
    }
  }
  class I {
    constructor() {
      obj = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null, style: null, containerStyle: null };
      tmp = closure_1(closure_2[13]);
      obj.effectDisplayType = closure_0(closure_2[14]).EffectDisplayType.STATIC;
      obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj.accessibilityRole = closure_4;
      ({ displayNameText: obj.style, displayNameText: obj.containerStyle } = closure_5);
      return jsx(tmp, obj);
    }
  }
  cResult[2] = displayNameAccessibilityRole;
  cResult[3] = guildId;
  cResult[4] = headingVariant;
  cResult[5] = name;
  cResult[6] = pendingDisplayNameStyles;
  cResult[7] = tmp2.displayNameText;
  cResult[8] = user.id;
  cResult[9] = I;
}) : ((user) => {
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
  let tmp = closure_17();
  importDefault = tmp;
  let tmp2;
  if (null != themeType) {
    tmp2 = closure_19[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_18;
  }
  function renderBotTag() {
    let tmp;
    if (user.isSystemUser()) {
      const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
      const tmp12 = BotTagDefault;
      tmp = authStore2(tmp12, obj2);
    } else {
      tmp = null;
      if (user.bot) {
        const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
        const tmp5 = BotTagDefault;
        tmp = authStore2(tmp5, obj3);
      }
    }
    return tmp;
  }
  const headingVariant = tmp2.headingVariant;
  if (null == onPress) {
    let tmp5 = closure_15;
    const obj = { children: items };
    let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10401).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
    const tmp10 = UsernameWithEffectsDefault;
    items = [closure_14(tmp10, obj3), renderBotTag()];
    tmp12Result = closure_15(closure_5, obj);
  } else {
    let tmp12 = closure_15;
    const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: tmp.displayName, children: items1 };
    const PressableOpacity = user(5436).PressableOpacity;
    const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10401).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
    const tmp17 = UsernameWithEffectsDefault;
    items1 = [closure_14(tmp17, obj8), renderBotTag(), ];
    const tmp13 = user;
    const tmp15 = closure_14;
    if (showChevron) {
      showChevron = tmp15(tmp13(10604).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
    }
    items1[2] = showChevron;
    tmp12Result = tmp12(PressableOpacity, obj7);
  }
  return tmp12Result;
});
let closure_20 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((userTag) => {
  let items;
  let onPressPronouns;
  let onPressUserTag;
  let pronounsAccessibilityHint;
  let themeType;
  let tmp6;
  let obj = userTag(onPressUserTag[12]);
  const cResult = obj.c(24);
  userTag = userTag.userTag;
  const pronouns = userTag.pronouns;
  ({ themeType, onPressUserTag } = userTag);
  const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
  ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
  const tmp4 = closure_17();
  const tmp5 = null != pronouns && pronouns.length > 0;
  if (cResult[0] !== themeType) {
    let tmp7;
    if (null != themeType) {
      tmp7 = closure_19[themeType];
    }
    if (tmp7 == null) {
      tmp7 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  const textVariant = tmp6.textVariant;
  if (cResult[2] === onPressUserTag) {
    if (cResult[3] === textVariant) {
      if (cResult[4] === userTag) {
        if (cResult[5] === userTagAccessibilityHint) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === pronouns) {
          let tmp10;
          if (cResult[8] === textVariant) {
            tmp10 = cResult[9];
          }
          const detailsText = tmp4.detailsText;
          class E {
            constructor() {
              obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
              return jsx(closure_0(closure_2[18]).Text, obj);
            }
          }
          if (cResult[12] === tmp5) {
            if (cResult[13] === onPressPronouns) {
              if (cResult[14] === onPressUserTag) {
                if (cResult[15] === pronouns) {
                  if (cResult[16] === pronounsAccessibilityHint) {
                    if (cResult[17] === tmp10) {
                      let tmp12;
                      if (cResult[18] === textVariant) {
                        tmp12 = cResult[19];
                      }
                      if (cResult[20] === tmp4.detailsText) {
                        if (cResult[21] === tmp11) {
                          let tmp20;
                          if (cResult[22] === tmp12) {
                            tmp20 = cResult[23];
                          }
                          return tmp20;
                        }
                      }
                      class E {
                        constructor() {
                          obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                          return jsx(closure_0(closure_2[18]).Text, obj);
                        }
                      }
                      let obj2 = { style: detailsText, children: items };
                      items = [tmp11, tmp12];
                      const tmp22 = closure_15(closure_5, obj2);
                      cResult[20] = tmp4.detailsText;
                      cResult[21] = tmp11;
                      cResult[22] = tmp12;
                      cResult[23] = tmp22;
                      tmp20 = tmp22;
                    }
                  }
                }
              }
            }
          }
          let tmp14Result = tmp5;
          if (tmp14Result) {
            let tmp16Result;
            const tmp14 = closure_15;
            class E {
              constructor() {
                obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                return jsx(closure_0(closure_2[18]).Text, obj);
              }
            }
            let obj3 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
            const items1 = [closure_14(tmp(tmp2[18]).Text, obj3), ];
            if (null != onPressUserTag) {
              const obj4 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: pronounsAccessibilityHint, children: tmp10() };
              class E {
                constructor() {
                  obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                  return jsx(closure_0(closure_2[18]).Text, obj);
                }
              }
              const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
              tmp16Result = tmp16(PressableOpacity, obj4);
            } else {
              const obj5 = { children: null };
              class E {
                constructor() {
                  obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                  return jsx(closure_0(closure_2[18]).Text, obj);
                }
              }
              tmp16Result = tmp16(closure_5, obj5);
            }
            const obj6 = { children: items1 };
            items1[1] = tmp16Result;
            tmp14Result = tmp14(tmp15, obj6);
          }
          cResult[12] = tmp5;
          cResult[13] = onPressPronouns;
          cResult[14] = onPressUserTag;
          cResult[15] = pronouns;
          cResult[16] = pronounsAccessibilityHint;
          cResult[17] = tmp10;
          cResult[18] = textVariant;
          cResult[19] = tmp14Result;
          tmp12 = tmp14Result;
        }
        class E {
          constructor() {
            obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
            return jsx(closure_0(closure_2[18]).Text, obj);
          }
        }
        cResult[7] = pronouns;
        cResult[8] = textVariant;
        cResult[9] = E;
        tmp10 = E;
      }
    }
  }
  class P {
    constructor() {
      tmp = userTag;
      if (null == userTag) {
        return null;
      } else {
        tmp5 = jsx;
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj1 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 2, children: null };
        tmp8 = textVariant;
        obj1.variant = textVariant;
        obj1.children = tmp;
        tmp9 = jsx(closure_0(closure_2[18]).Text, obj1);
        if (null != onPressUserTag) {
          obj4 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
          obj4.onPress = tmp10;
          obj4.accessibilityLabel = tmp;
          tmp4 = userTagAccessibilityHint;
          obj4.accessibilityHint = userTagAccessibilityHint;
          obj4.children = tmp9;
          tmp5Result = tmp5(tmp6(tmp7[17]).PressableOpacity, obj4);
        } else {
          tmp2 = View;
          obj = { children: null };
          obj.children = tmp9;
          tmp5Result = tmp5(View, obj);
        }
        return tmp5Result;
      }
    }
  }
  cResult[2] = onPressUserTag;
  cResult[3] = textVariant;
  cResult[4] = userTag;
  cResult[5] = userTagAccessibilityHint;
  cResult[6] = P;
}) : ((userTag) => {
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
  ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
  let tmp5Result = null != pronouns;
  const tmp = closure_17();
  if (tmp5Result) {
    tmp5Result = pronouns.length > 0;
  }
  let tmp3;
  if (null != themeType) {
    tmp3 = closure_19[themeType];
  }
  if (tmp3 == null) {
    tmp3 = closure_18;
  }
  textVariant = tmp3.textVariant;
  const items = [onPressUserTag, textVariant, userTag, userTagAccessibilityHint];
  const tmp5 = closure_15;
  let tmp6 = closure_5;
  let obj = { style: tmp.detailsText, children: items1 };
  items1 = [
    textVariant.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        let tmp5Result;
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, children: userTag };
        const tmp9 = authStore2(Text_Text.Text, obj2);
        const tmp6 = require;
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp10, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp9 };
          tmp5Result = tmp5(tmp6(5436).PressableOpacity, obj3);
        } else {
          const obj = { children: tmp9 };
          tmp5Result = tmp5(hasOwnProperty, obj);
        }
        return tmp5Result;
      }
    }, items)(),

  ];
  if (tmp5Result) {
    let tmp8Result;
    let tmp9 = userTag;
    const tmp10 = userTagAccessibilityHint;
    let obj2 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
    const items2 = [closure_14(userTag(userTagAccessibilityHint[18]).Text, obj2), ];
    const tmp7 = closure_16;
    if (null != onPressUserTag) {
      let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp8(tmp9(tmp10[18]).Text, obj4) };
      const PressableOpacity = tmp9(tmp10[17]).PressableOpacity;
      obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
      tmp8Result = tmp8(PressableOpacity, obj3);
    } else {
      const obj5 = { children: closure_14(tmp9(tmp10[18]).Text, obj6) };
      obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
      tmp8Result = tmp8(tmp6, obj5);
    }
    const obj7 = { children: items2 };
    items2[1] = tmp8Result;
    tmp5Result = tmp5(tmp7, obj7);
  }
  items1[1] = tmp5Result;
  return tmp5(tmp6, obj);
});
let closure_21 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
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
  let tmp12;
  let tmp37Result;
  let tmp37Result2;
  const tmp = source;
  let obj = source(label[12]);
  const cResult = obj.c(14);
  source = source.source;
  ({ catalogBadge, id } = source);
  label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  let tmp4 = undefined === showToastOnPress;
  const userId = source.userId;
  if (!tmp4) {
    tmp4 = showToastOnPress;
  }
  const tmp5 = closure_17();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = tieredTenureBadgeClickHandler.useRef(null);
  const tmpResult = tmp(tmp2[19]);
  tieredTenureBadgeClickHandler = tmpResult.useTieredTenureBadgeClickHandler(id, userId, themeType);
  const tmpResult4 = tmp(label[20]);
  const adUser = tmpResult4.useAdUser("profile_badge");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult5 = tmp(label[21]);
    const rootNavigationRef = tmpResult5.getRootNavigationRef();
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
    tmp12 = obj2;
  } else {
    tmp12 = cResult[1];
  }
  const tmpResult6 = tmp(label[22]);
  const orbsBadgeCoachmark = tmpResult6.useOrbsBadgeCoachmark(tmp12);
  if (cResult[2] === adUser) {
    if (cResult[3] === id) {
      if (cResult[4] === label) {
        if (cResult[5] === source) {
          let tmp14;
          let tmp15;
          let tmp42;
          if (cResult[6] === tieredTenureBadgeClickHandler) {
            tmp14 = cResult[7];
          }
          if (cResult[8] !== label) {
            const intl = tmp(tmp2[34]).intl;
            let obj3 = { badgeLabel: label };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(label[34]).t.A0LN9t, obj3);
            cResult[8] = label;
            cResult[9] = formatToPlainStringResult;
            tmp15 = formatToPlainStringResult;
          } else {
            tmp15 = cResult[9];
          }
          let tmp18 = themeType === UserProfileThemeTypes.YOU_SCREEN;
          const tmp17 = UserProfileThemeTypes;
          if (tmp18) {
            tmp18 = typeof id === "string";
          }
          let tmp19 = null;
          if (tmp18) {
            let tmp20;
            if (cResult[10] !== id) {
              let obj4 = { targetRef: ref, badgeId: id };
              const tmp23 = closure_14(id(label[35]), obj4);
              cResult[10] = id;
              cResult[11] = tmp23;
              tmp20 = tmp23;
            } else {
              tmp20 = cResult[11];
            }
            tmp19 = tmp20;
          }
          let tmp24 = themeType !== tmp17.YOU_SCREEN || typeof id !== "string";
          if (!tmp24) {
            tmp24 = "orb_profile_badge" !== id && id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
            const tmp25 = "orb_profile_badge" !== id && id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
          }
          if (!tmp24) {
            tmp24 = null == orbsBadgeCoachmark;
          }
          let tmp27 = null;
          if (!tmp24) {
            let tmp28;
            if (cResult[12] !== orbsBadgeCoachmark.props) {
              const obj5 = { badgeRef: ref };
              const tmp31 = id(label[22]);
              let merged = Object.assign(orbsBadgeCoachmark.props);
              const tmp34 = closure_14(tmp31, obj5);
              cResult[12] = orbsBadgeCoachmark.props;
              cResult[13] = tmp34;
              tmp28 = tmp34;
            } else {
              tmp28 = cResult[13];
            }
            tmp27 = tmp28;
          }
          const obj6 = { children: null };
          const tmp35 = closure_15;
          const tmp36 = closure_16;
          if (tmp4) {
            const obj7 = { accessibilityRole: "image", accessibilityLabel: tmp15, onPress: tmp14, ref, children: tmp37Result };
            const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
            if (null != source) {
              const obj8 = { style: items, source };
              items = [tmp5.badge, tmp6];
              tmp37Result = tmp37(adUser, obj8);
            } else {
              tmp37Result = null;
              if (null != catalogBadge) {
                const obj9 = { badge: catalogBadge, size: badgeSize };
                tmp37Result = tmp37(id(tmp2[36]), obj9);
              }
            }
            const items1 = [closure_14(PressableOpacity, obj7), tmp19, tmp27];
            obj6.children = items1;
            tmp42 = obj6;
          } else {
            const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp15, ref, children: tmp37Result2 };
            const tmp38 = closure_5;
            if (null != source) {
              const obj11 = { style: items2, source };
              items2 = [tmp5.badge, tmp6];
              tmp37Result2 = tmp37(adUser, obj11);
            } else {
              tmp37Result2 = null;
              if (null != catalogBadge) {
                const obj12 = { badge: catalogBadge, size: badgeSize };
                tmp37Result2 = tmp37(id(tmp2[36]), obj12);
              }
            }
            const items3 = [closure_14(tmp38, obj10), tmp19, tmp27];
            obj6.children = items3;
            tmp42 = obj6;
          }
          return tmp35(tmp36, tmp42);
        }
      }
    }
  }
  const fn = function z() {
    let advertisingId;
    let advertisingId1;
    if (null == tieredTenureBadgeClickHandler) {
      const tmp3 = id;
      if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
        const _HermesInternal = HermesInternal;
        const obj = { key: "PROFILE_BADGE-" + label, content: label, icon: source };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        open(obj);
        if (tmp3 === useBadges.QUEST_COMPLETED_BADGE) {
          const tmp5Result = AdAnalyticsInterfaceExperiment;
          if (tmp5Result.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
            const obj2 = { type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: QuestTypes.QuestContent.QUEST_BADGE, isTargeted: false };
            const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
            captureAdUserAction2;
            captureAdUserAction(obj2);
          } else {
            const obj3 = { apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, is_targeted: false };
            const track = tmp9(1253).track;
            const QUEST_CONTENT_VIEWED = unpackModuleId.QUEST_CONTENT_VIEWED;
            AnalyticsUtilsDefault;
            const tmp5Result7 = AnalyticsTypes;
            const merged = Object.assign(tmp5Result7.getContentProperties(tmp5(5760).QuestContent.QUEST_BADGE));
            advertisingId = null;
            if (null != adUser) {
              advertisingId = null;
              const tmp5Result8 = PlatformUtils;
              if (tmp5Result8.isIOS()) {
                advertisingId = tmp19.advertisingId;
              }
            }
            advertisingId1 = null;
            if (null != adUser) {
              advertisingId1 = null;
              const tmp5Result9 = PlatformUtils;
              if (tmp5Result9.isAndroid()) {
                advertisingId1 = tmp19.advertisingId;
              }
            }
            track(QUEST_CONTENT_VIEWED, obj3);
          }
        }
      } else {
        const obj4 = { screen: constants.PREMIUM_GIFTING, params: {} };
        const tmp5Result10 = openUserSettings;
        tmp5Result10.openUserSettings(obj4);
      }
    } else {
      tmp();
    }
  };
  cResult[2] = adUser;
  cResult[3] = id;
  cResult[4] = label;
  cResult[5] = source;
  cResult[6] = tieredTenureBadgeClickHandler;
  cResult[7] = fn;
  tmp14 = fn;
}) : ((source) => {
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
  let closure_4;
  const tmp = closure_17();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = react.useRef(null);
  const tmp5 = label;
  let obj2 = source(label[19]);
  react = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
  let obj3 = source(label[20]);
  closure_4 = obj3.useAdUser("profile_badge");
  let obj4 = source(label[21]);
  const rootNavigationRef = obj4.getRootNavigationRef();
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
  const tmp4Result = source(tmp5[22]);
  const orbsBadgeCoachmark = tmp4Result.useOrbsBadgeCoachmark(obj);
  const intl = tmp4(tmp5[34]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(tmp5[34]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  const tmp9 = UserProfileThemeTypes;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    const obj5 = { targetRef: ref, badgeId: id };
    tmp11 = closure_14(id(tmp5[35]), obj5);
  }
  let tmp14 = themeType !== tmp9.YOU_SCREEN || typeof id !== "string";
  if (!tmp14) {
    let tmp15 = "orb_profile_badge" !== id;
    if (tmp15) {
      tmp15 = id !== getBadgeName(tmp4(tmp5[23]).BadgeId.ORB_PROFILE);
    }
    tmp14 = tmp15;
  }
  if (!tmp14) {
    tmp14 = null == orbsBadgeCoachmark;
  }
  let tmp17 = null;
  if (!tmp14) {
    const tmp19 = id;
    const obj6 = { badgeRef: ref };
    const tmp20 = id(tmp5[22]);
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp17 = closure_14(tmp20, obj6);
  }
  const obj7 = { children: null };
  const tmp23 = closure_15;
  const tmp24 = closure_16;
  if (showToastOnPress) {
    const obj8 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress() {
          let advertisingId;
          let advertisingId1;
          if (null == closure_3) {
            const tmp3 = id;
            if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
              const _HermesInternal = HermesInternal;
              const obj = { key: "PROFILE_BADGE-" + label, content: label, icon: source };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              open(obj);
              if (tmp3 === useBadges.QUEST_COMPLETED_BADGE) {
                const tmp5Result = AdAnalyticsInterfaceExperiment;
                if (tmp5Result.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
                  const obj2 = { type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: QuestTypes.QuestContent.QUEST_BADGE, isTargeted: false };
                  const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
                  captureAdUserAction2;
                  captureAdUserAction(obj2);
                } else {
                  const obj3 = { apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, is_targeted: false };
                  const track = tmp9(1253).track;
                  const QUEST_CONTENT_VIEWED = unpackModuleId.QUEST_CONTENT_VIEWED;
                  AnalyticsUtilsDefault;
                  const tmp5Result7 = AnalyticsTypes;
                  const merged = Object.assign(tmp5Result7.getContentProperties(tmp5(5760).QuestContent.QUEST_BADGE));
                  advertisingId = null;
                  if (null != closure_4) {
                    advertisingId = null;
                    const tmp5Result8 = PlatformUtils;
                    if (tmp5Result8.isIOS()) {
                      advertisingId = tmp19.advertisingId;
                    }
                  }
                  advertisingId1 = null;
                  if (null != closure_4) {
                    advertisingId1 = null;
                    const tmp5Result9 = PlatformUtils;
                    if (tmp5Result9.isAndroid()) {
                      advertisingId1 = tmp19.advertisingId;
                    }
                  }
                  track(QUEST_CONTENT_VIEWED, obj3);
                }
              }
            } else {
              const obj4 = { screen: constants.PREMIUM_GIFTING, params: {} };
              const tmp5Result10 = openUserSettings;
              tmp5Result10.openUserSettings(obj4);
            }
          } else {
            tmp();
          }
        },
      ref,
      children: tmp25Result
    };
    const PressableOpacity = tmp4(tmp5[17]).PressableOpacity;
    if (null != source) {
      const obj9 = { style: items, source };
      items = [tmp.badge, tmp2];
      tmp25Result = tmp25(closure_4, obj9);
    } else {
      tmp25Result = null;
      if (null != catalogBadge) {
        const obj10 = { badge: catalogBadge, size: badgeSize };
        tmp25Result = tmp25(id(tmp5[36]), obj10);
      }
    }
    const items1 = [closure_14(PressableOpacity, obj8), tmp11, tmp17];
    obj7.children = items1;
    tmp30 = obj7;
  } else {
    const obj11 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: tmp25Result2 };
    const tmp26 = closure_5;
    if (null != source) {
      const obj12 = { style: items2, source };
      items2 = [tmp.badge, tmp2];
      tmp25Result2 = tmp25(closure_4, obj12);
    } else {
      tmp25Result2 = null;
      if (null != catalogBadge) {
        const obj13 = { badge: catalogBadge, size: badgeSize };
        tmp25Result2 = tmp25(id(tmp5[36]), obj13);
      }
    }
    const items3 = [closure_14(tmp26, obj11), tmp11, tmp17];
    obj7.children = items3;
    tmp30 = obj7;
  }
  return tmp23(tmp24, tmp30);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function(userId) {
  let badges;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let date;
  let id;
  let intl2;
  let intl3;
  let isTryItOut;
  let items2;
  let mapped2;
  let obj11;
  let style;
  let themeType;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp7;
  let tmp2 = themeType;
  let obj = userId(themeType[12]);
  const cResult = obj.c(80);
  userId = userId.userId;
  ({ badges, catalogBadges, isTryItOut, canOpenBadgeDirectory, style } = userId);
  themeType = userId.themeType;
  const showToastOnPress = userId.showToastOnPress;
  let tmp4 = undefined !== canOpenBadgeDirectory && canOpenBadgeDirectory;
  let tmp5 = undefined === showToastOnPress || showToastOnPress;
  const tmp6 = closure_17();
  const badgeRow = tmp6;
  if (cResult[0] !== themeType) {
    let tmp9;
    if (null != themeType) {
      tmp9 = closure_19[themeType];
    }
    if (tmp9 == null) {
      tmp9 = closure_18;
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
  const tmpResult = userId(tmp2[37]);
  const isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "ProfileBadgeRows" };
    cResult[3] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[3];
  }
  const tmpResult4 = userId(tmp2[38]);
  const tmp14 = isBadgeManagementEnabled && tmpResult4.useIsBadgeDirectoryUpdatesEnabled(tmp13) && tmp4 && tmp5;
  UserStore = tmp15;
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (cResult[4] !== userId) {
    const fn = function w() {
      const obj = openBadgeDirectoryScreen;
      const obj2 = { targetUserId: userId };
      const result = obj.openBadgeDirectoryScreen(obj2);
    };
    cResult[4] = userId;
    cResult[5] = fn;
    tmp17 = fn;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] !== badges) {
    const tmpResult5 = userId(tmp2[40]);
    const legacyIconUrlByBadgeId = tmpResult5.getLegacyIconUrlByBadgeId(badges);
    cResult[6] = badges;
    cResult[7] = legacyIconUrlByBadgeId;
    tmp18 = legacyIconUrlByBadgeId;
  } else {
    tmp18 = cResult[7];
  }
  let closure_7 = tmp18;
  if (cResult[8] !== badges) {
    const tmpResult6 = userId(tmp2[40]);
    const legacyDescriptionByBadgeId = tmpResult6.getLegacyDescriptionByBadgeId(badges);
    cResult[8] = badges;
    cResult[9] = legacyDescriptionByBadgeId;
    tmp20 = legacyDescriptionByBadgeId;
  } else {
    tmp20 = cResult[9];
  }
  let closure_9 = tmp20;
  if (cResult[10] === (!tmp14 && tmp5)) {
    if (cResult[11] === badgeSize) {
      if (cResult[12] === badges) {
        if (cResult[13] === isTryItOut) {
          if (cResult[14] === themeType) {
            let arr3;
            if (cResult[15] === userId) {
              mapped2 = cResult[16];
            }
            if (isBadgeManagementEnabled) {
              let tmp39;
              const _Symbol = Symbol;
              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                let items = [];
                cResult[28] = items;
                tmp39 = items;
              } else {
                tmp39 = cResult[28];
              }
              arr3 = tmp39;
            } else {
              const _Math = Math;
              const rounded = Math.floor((tmp35 - 2 * closure_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
              if (cResult[29] === rounded) {
                if (cResult[30] === arr) {
                  arr3 = cResult[31];
                }
              }
              const _Array = Array;
              let obj4 = { length: Math.ceil(arr.length / rounded) };
              const _Math2 = Math;
              const fromResult = from(obj4, (arg0, arg1) => mapped2.slice(arg1 * rounded, (arg1 + 1) * rounded));
              cResult[29] = rounded;
              cResult[30] = arr;
              cResult[31] = fromResult;
              arr3 = fromResult;
            }
            if (isBadgeManagementEnabled) {
              if (cResult[32] === (!tmp14 && tmp5)) {
                if (cResult[33] === badgeSize) {
                  if (cResult[34] === catalogBadges) {
                    if (cResult[35] === tmp20) {
                      if (cResult[36] === tmp18) {
                        if (cResult[37] === themeType) {
                          let tmp47;
                          if (cResult[38] === userId) {
                            tmp47 = cResult[39];
                          }
                          if (cResult[40] === arr) {
                            let arr7;
                            if (cResult[41] === tmp47) {
                              arr7 = cResult[42];
                            }
                            let length;
                            if (catalogBadges != null) {
                              length = catalogBadges.length;
                            }
                            if (length == null) {
                              length = arr.length;
                            }
                            const diff = length - arr7.length;
                            if (0 === arr7.length) {
                              let tmp69 = null;
                              if (tmp14) {
                                tmp69 = null;
                                if (userId === id) {
                                  let tmp71;
                                  let tmp70;
                                  let tmp75;
                                  const _Symbol3 = Symbol;
                                  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                    const tmp73 = closure_14(userId(tmp2[43]).PlusSmallIcon, {});
                                    const intl4 = tmp(tmp2[34]).intl;
                                    const stringResult = intl4.string(userId(tmp2[34]).t.l6w3Vj);
                                    cResult[43] = tmp73;
                                    cResult[44] = stringResult;
                                    tmp71 = stringResult;
                                    tmp70 = tmp73;
                                  } else {
                                    tmp70 = cResult[43];
                                    tmp71 = cResult[44];
                                  }
                                  if (cResult[45] !== tmp17) {
                                    const obj5 = { variant: "secondary", size: "sm", icon: tmp70, text: tmp71, onPress: tmp17 };
                                    const tmp77 = closure_14(userId(tmp2[44]).Button, obj5);
                                    cResult[45] = tmp17;
                                    cResult[46] = tmp77;
                                    tmp75 = tmp77;
                                  } else {
                                    tmp75 = cResult[46];
                                  }
                                  tmp69 = tmp75;
                                }
                              }
                              return tmp69;
                            } else {
                              let tmp52;
                              if (cResult[47] !== badgeRowHorizontalPadding) {
                                const obj6 = { paddingHorizontal: badgeRowHorizontalPadding };
                                cResult[47] = badgeRowHorizontalPadding;
                                cResult[48] = obj6;
                                tmp52 = obj6;
                              } else {
                                tmp52 = cResult[48];
                              }
                              if (cResult[49] === style) {
                                if (cResult[50] === tmp6.badgeRow) {
                                  if (cResult[51] === tmp6.limitedBadgeRow) {
                                    let tmp53;
                                    if (cResult[52] === tmp52) {
                                      tmp53 = cResult[53];
                                    }
                                    if (cResult[54] === diff) {
                                      let tmp54;
                                      if (cResult[55] === textVariant) {
                                        tmp54 = cResult[56];
                                      }
                                      if (cResult[57] === arr7) {
                                        if (cResult[58] === tmp53) {
                                          let tmp57;
                                          let tmp61;
                                          if (cResult[59] === tmp54) {
                                            tmp57 = cResult[60];
                                          }
                                          if (cResult[61] !== tmp6.badges) {
                                            const items1 = [tmp6.badges];
                                            cResult[61] = tmp6.badges;
                                            cResult[62] = items1;
                                            tmp61 = items1;
                                          } else {
                                            tmp61 = cResult[62];
                                          }
                                          if (cResult[63] === tmp57) {
                                            if (cResult[64] === tmp17) {
                                              let tmp62;
                                              if (cResult[65] === tmp14) {
                                                tmp62 = cResult[66];
                                              }
                                              if (cResult[67] === tmp61) {
                                                let tmp65;
                                                if (cResult[68] === tmp62) {
                                                  tmp65 = cResult[69];
                                                }
                                                return tmp65;
                                              }
                                              const obj7 = { style: tmp61, children: tmp62 };
                                              const tmp68 = closure_14(badgeRowHorizontalPadding, obj7);
                                              cResult[67] = tmp61;
                                              cResult[68] = tmp62;
                                              cResult[69] = tmp68;
                                              tmp65 = tmp68;
                                            }
                                          }
                                          let tmp63 = tmp57;
                                          if (tmp14) {
                                            const obj8 = { accessibilityRole: "button", accessibilityLabel: intl3.string(userId(tmp2[34]).t.PEjP4L), onPress: tmp17, children: tmp57 };
                                            const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
                                            intl3 = tmp(tmp2[34]).intl;
                                            tmp63 = closure_14(PressableOpacity, obj8);
                                          }
                                          cResult[63] = tmp57;
                                          cResult[64] = tmp17;
                                          cResult[65] = tmp14;
                                          cResult[66] = tmp63;
                                          tmp62 = tmp63;
                                        }
                                      }
                                      const obj9 = { style: tmp53, children: items2 };
                                      items2 = [arr7, tmp54];
                                      const tmp60 = closure_15(badgeRowHorizontalPadding, obj9);
                                      cResult[57] = arr7;
                                      cResult[58] = tmp53;
                                      cResult[59] = tmp54;
                                      cResult[60] = tmp60;
                                      tmp57 = tmp60;
                                    }
                                    let tmp55 = diff > 0;
                                    if (tmp55) {
                                      const obj10 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(userId(tmp2[34]).t.eIHfGZ, obj11), children: "+" + diff };
                                      const Text = tmp(tmp2[18]).Text;
                                      intl2 = tmp(tmp2[34]).intl;
                                      const _HermesInternal = HermesInternal;
                                      obj11 = { overflow_count: diff };
                                      tmp55 = closure_14(Text, obj10);
                                    }
                                    cResult[54] = diff;
                                    cResult[55] = textVariant;
                                    cResult[56] = tmp55;
                                    tmp54 = tmp55;
                                  }
                                }
                              }
                              const items3 = [, , , ];
                              ({ badgeRow: arr8[0], limitedBadgeRow: arr8[1] } = tmp6);
                              items3[2] = tmp52;
                              items3[3] = style;
                              cResult[49] = style;
                              cResult[50] = tmp6.badgeRow;
                              cResult[51] = tmp6.limitedBadgeRow;
                              cResult[52] = tmp52;
                              cResult[53] = items3;
                              tmp53 = items3;
                            }
                          }
                          let substr = tmp47;
                          if (tmp47 == null) {
                            substr = arr.slice(0, tmp(tmp2[40]).MAX_DISPLAYED_PROFILE_BADGES);
                          }
                          cResult[40] = arr;
                          cResult[41] = tmp47;
                          cResult[42] = substr;
                          arr7 = substr;
                        }
                      }
                    }
                  }
                }
              }
              let mapped;
              if (catalogBadges != null) {
                const substr1 = catalogBadges.slice(0, tmp(tmp2[40]).MAX_DISPLAYED_PROFILE_BADGES);
                mapped = substr1.map((badge_id) => {
                  let obj4;
                  let tmp5;
                  const value = closure_7.get(badge_id.badge_id);
                  let obj = getBadgeName(badge_id.badge_id);
                  const tmp2 = authStore2;
                  const tmp3 = closure_22;
                  const tmp4 = DEFAULT_PREMIUM_BADGE_ID;
                  if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
                    obj = tmp4;
                  }
                  const obj2 = { id: obj, userId, catalogBadge: badge_id, source: tmp5, label: obj4.getProfileBadgeLabel(closure_9.get(badge_id.badge_id), badge_id), badgeSize, themeType, showToastOnPress };
                  tmp5 = undefined;
                  if (null != value) {
                    tmp5 = { uri: value };
                    const obj3 = { uri: value };
                  }
                  obj4 = BadgeUtils;
                  return tmp2(tmp3, obj2, badge_id.badge_id);
                });
              }
              cResult[32] = !tmp14 && tmp5;
              cResult[33] = badgeSize;
              cResult[34] = catalogBadges;
              cResult[35] = tmp20;
              cResult[36] = tmp18;
              cResult[37] = themeType;
              cResult[38] = userId;
              cResult[39] = mapped;
              tmp47 = mapped;
            } else {
              let tmp40;
              if (cResult[70] !== tmp6.badges) {
                const items4 = [tmp6.badges];
                cResult[70] = tmp6.badges;
                cResult[71] = items4;
                tmp40 = items4;
              } else {
                tmp40 = cResult[71];
              }
              if (cResult[72] === badgeRowHorizontalPadding) {
                if (cResult[73] === arr3) {
                  if (cResult[74] === style) {
                    let tmp41;
                    if (cResult[75] === tmp6.badgeRow) {
                      tmp41 = cResult[76];
                    }
                    if (cResult[77] === tmp40) {
                      let tmp43;
                      if (cResult[78] === tmp41) {
                        tmp43 = cResult[79];
                      }
                      return tmp43;
                    }
                    const obj12 = { style: tmp40, children: tmp41 };
                    const tmp46 = closure_14(badgeRowHorizontalPadding, obj12);
                    cResult[77] = tmp40;
                    cResult[78] = tmp41;
                    cResult[79] = tmp46;
                    tmp43 = tmp46;
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
                return authStore2(hasOwnProperty, obj, index);
              });
              cResult[72] = badgeRowHorizontalPadding;
              cResult[73] = arr3;
              cResult[74] = style;
              cResult[75] = tmp6.badgeRow;
              cResult[76] = mapped1;
              tmp41 = mapped1;
            }
          }
        }
      }
    }
  }
  if (cResult[17] === (!tmp14 && tmp5)) {
    if (cResult[18] === badgeSize) {
      if (cResult[19] === themeType) {
        let tmp22;
        if (cResult[20] === userId) {
          tmp22 = cResult[21];
        }
        mapped2 = badges.map(tmp22);
        if (isTryItOut) {
          if (null == badges.find((id) => "premium" === id.id)) {
            let tmp23;
            const _Symbol2 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[34]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const _Date = Date;
              const self = this;
              const self2 = this;
              const obj13 = { date };
              const v8zbGNR = tmp(tmp2[34]).t["8zbGNR"];
              date = new Date();
              const formatToPlainStringResult = formatToPlainString(v8zbGNR, obj13);
              cResult[22] = formatToPlainStringResult;
              tmp23 = formatToPlainStringResult;
            } else {
              tmp23 = cResult[22];
            }
            if (cResult[23] === (!tmp14 && tmp5)) {
              if (cResult[24] === badgeSize) {
                if (cResult[25] === tmp23) {
                  let tmp28;
                  if (cResult[26] === userId) {
                    tmp28 = cResult[27];
                  }
                  mapped2.push(tmp28);
                }
              }
            }
            const obj14 = { source: style(tmp2[41]), id: "premium", userId, label: tmp23, badgeSize, showToastOnPress: !tmp14 && tmp5 };
            const tmp32 = closure_14(closure_22, obj14);
            cResult[23] = !tmp14 && tmp5;
            cResult[24] = badgeSize;
            cResult[25] = tmp23;
            cResult[26] = userId;
            cResult[27] = tmp32;
            tmp28 = tmp32;
          }
        }
        cResult[10] = !tmp14 && tmp5;
        cResult[11] = badgeSize;
        cResult[12] = badges;
        cResult[13] = isTryItOut;
        cResult[14] = themeType;
        cResult[15] = userId;
        cResult[16] = mapped2;
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
      return authStore2(closure_22, obj, id.id);
    }
  }
  cResult[17] = !tmp14 && tmp5;
  cResult[18] = badgeSize;
  cResult[19] = themeType;
  cResult[20] = userId;
  cResult[21] = W;
  tmp22 = W;
}) : (function(userId) {
  let canOpenBadgeDirectory;
  let catalogBadges;
  let date;
  let formatToPlainString;
  let id;
  let intl2;
  let intl3;
  let intl4;
  let isTryItOut;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj5;
  let tmp28Result;
  let v8zbGNR;
  userId = userId.userId;
  const badges = userId.badges;
  ({ catalogBadges, isTryItOut, canOpenBadgeDirectory } = userId);
  if (canOpenBadgeDirectory === undefined) {
    canOpenBadgeDirectory = false;
  }
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
  let closure_9;
  let closure_10;
  let mapped;
  let width;
  let tmp = closure_17();
  const badgeRow = tmp;
  let tmp2;
  if (null != themeType) {
    let tmp3 = closure_19;
    tmp2 = closure_19[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_18;
  }
  badgeSize = tmp2.badgeSize;
  badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
  let tmp4 = userId;
  let tmp5 = style;
  const textVariant = tmp2.textVariant;
  let obj = userId(style[37]);
  isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
  let obj2 = userId(style[38]);
  const tmp7 = isBadgeManagementEnabled && obj2.useIsBadgeDirectoryUpdatesEnabled({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
  showToastOnPress = tmp8;
  const currentUser = badgeRowHorizontalPadding.getCurrentUser();
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj3 = themeType;
  let items = [userId];
  const callback = themeType.useCallback(() => {
    const obj = openBadgeDirectoryScreen;
    const obj2 = { targetUserId: userId };
    const result = obj.openBadgeDirectoryScreen(obj2);
  }, items);
  const items1 = [badges];
  closure_9 = themeType.useMemo(() => {
    const obj = BadgeUtils;
    return obj.getLegacyIconUrlByBadgeId(badges);
  }, items1);
  const items2 = [badges];
  closure_10 = themeType.useMemo(() => {
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
    return authStore2(closure_22, obj, id.id);
  });
  if (isTryItOut) {
    isTryItOut = null == badges.find((id) => "premium" === id.id);
  }
  if (isTryItOut) {
    let obj4 = { source: badges(tmp5[41]), id: "premium", userId, label: formatToPlainString(v8zbGNR, obj5), badgeSize, showToastOnPress: tmp8 };
    const push = mapped.push;
    const intl = tmp4(tmp5[34]).intl;
    formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    obj5 = { date };
    v8zbGNR = tmp4(tmp5[34]).t["8zbGNR"];
    date = new Date();
    push(closure_14(closure_22, obj4));
  }
  width = badges(tmp5[42])().width;
  const items3 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
  const memo = obj3.useMemo(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      return [];
    } else {
      const _Math = Math;
      const rounded = Math.floor((width - 2 * closure_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
      const _Array = Array;
      const _Math2 = Math;
      const obj = { length: Math.ceil(mapped.length / rounded) };
      return from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
    }
  }, items3);
  if (isBadgeManagementEnabled) {
    let mapped1;
    if (catalogBadges != null) {
      const substr = catalogBadges.slice(0, tmp4(tmp5[40]).MAX_DISPLAYED_PROFILE_BADGES);
      mapped1 = substr.map((badge_id) => {
        let obj4;
        let tmp5;
        const value = closure_9.get(badge_id.badge_id);
        let obj = getBadgeName(badge_id.badge_id);
        const tmp2 = authStore2;
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
    if (mapped1 == null) {
      mapped1 = mapped.slice(0, tmp4(tmp5[40]).MAX_DISPLAYED_PROFILE_BADGES);
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
      let tmp30 = null;
      if (tmp7) {
        tmp30 = null;
        if (userId === id) {
          const obj6 = { variant: "secondary", size: "sm", icon: closure_14(tmp4(tmp5[43]).PlusSmallIcon, {}), text: intl4.string(tmp4(tmp5[34]).t.l6w3Vj), onPress: callback };
          const Button = tmp4(tmp5[44]).Button;
          intl4 = tmp4(tmp5[34]).intl;
          tmp30 = closure_14(Button, obj6);
        }
      }
      return tmp30;
    } else {
      const obj7 = { style: items4, children: items5 };
      items4 = [, , , ];
      ({ badgeRow: arr11[0], limitedBadgeRow: arr11[1] } = tmp);
      const obj8 = { paddingHorizontal: badgeRowHorizontalPadding };
      items4[2] = obj8;
      items4[3] = style;
      items5 = [mapped1, ];
      let tmp26 = diff > 0;
      const tmp32 = closure_15;
      if (tmp26) {
        const obj9 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(tmp4(tmp5[34]).t.eIHfGZ, obj10), children: "+" + diff };
        const Text = tmp4(tmp5[18]).Text;
        intl2 = tmp4(tmp5[34]).intl;
        const _HermesInternal = HermesInternal;
        obj10 = { overflow_count: diff };
        tmp26 = closure_14(Text, obj9);
      }
      items5[1] = tmp26;
      const tmp32Result = tmp32(badgeSize, obj7);
      const obj11 = { style: items6, children: tmp28Result };
      items6 = [tmp.badges];
      tmp28Result = tmp32Result;
      if (tmp7) {
        const obj12 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp4(tmp5[34]).t.PEjP4L), onPress: callback, children: tmp32Result };
        const PressableOpacity = tmp4(tmp5[17]).PressableOpacity;
        intl3 = tmp4(tmp5[34]).intl;
        tmp28Result = tmp28(PressableOpacity, obj12);
      }
      return closure_14(badgeSize, obj11);
    }
  } else {
    const obj13 = {
      style: items7,
      children: memo.map((children, index) => {
          let items;
          const obj = { style: items, children };
          items = [badgeRow.badgeRow, , ];
          const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
          items[1] = obj2;
          items[2] = style;
          return authStore2(hasOwnProperty, obj, index);
        })
    };
    items7 = [tmp.badges];
    return closure_14(badgeSize, obj13);
  }
});
let closure_23 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let guildTagBadgeSize;
  let guildTagHorizontalPadding;
  let guildTagTextVariant;
  let showToastOnPress;
  let style;
  let tag;
  let themeType;
  let tmp9;
  let user;
  const obj = react2;
  const cResult = obj.c(21);
  ({ user, themeType, style, showToastOnPress } = arg0);
  const tmp5 = closure_17();
  let primaryGuild;
  const getUserPrimaryGuild = GuildTagUtils.getUserPrimaryGuild;
  GuildTagUtils;
  if (user != null) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (cResult[0] !== themeType) {
    let tmp10;
    if (null != themeType) {
      tmp10 = closure_19[themeType];
    }
    if (tmp10 == null) {
      tmp10 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp10;
    tmp9 = tmp10;
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
  const sum1 = tmp(4833).TextStyleSheet[guildTagTextVariant].fontSize + num3;
  if (null != tag) {
    if (null != guildId) {
      if (cResult[2] === guildTagHorizontalPadding) {
        let tmp14;
        if (cResult[3] === sum) {
          tmp14 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp5.guildTag) {
            let tmp15;
            let tmp17;
            if (cResult[7] === tmp14) {
              tmp15 = cResult[8];
            }
            if (cResult[9] !== sum1) {
              const obj2 = { lineHeight: sum1 };
              cResult[9] = sum1;
              cResult[10] = obj2;
              tmp17 = obj2;
            } else {
              tmp17 = cResult[10];
            }
            if (cResult[11] === guildTagBadgeSize) {
              if (cResult[12] === guildTagTextVariant) {
                if (cResult[13] === tmp5.transparentBackground) {
                  if (cResult[14] === !(undefined !== showToastOnPress && showToastOnPress)) {
                    if (cResult[15] === tmp17) {
                      let tmp18;
                      if (cResult[16] === user.id) {
                        tmp18 = cResult[17];
                      }
                      if (cResult[18] === tmp15) {
                        let tmp22;
                        if (cResult[19] === tmp18) {
                          tmp22 = cResult[20];
                        }
                        return tmp22;
                      }
                      const obj3 = { style: tmp15, children: tmp18 };
                      const tmp25 = authStore2(hasOwnProperty, obj3);
                      cResult[18] = tmp15;
                      cResult[19] = tmp18;
                      cResult[20] = tmp25;
                      tmp22 = tmp25;
                    }
                  }
                }
              }
            }
            const obj4 = { userId: user.id, disabledTooltip: !(undefined !== showToastOnPress && showToastOnPress), containerStyles: tmp5.transparentBackground, textStyle: tmp17, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
            const tmp21 = authStore2(GuildTagDefault, obj4);
            cResult[11] = guildTagBadgeSize;
            cResult[12] = guildTagTextVariant;
            cResult[13] = tmp5.transparentBackground;
            cResult[14] = !(undefined !== showToastOnPress && showToastOnPress);
            cResult[15] = tmp17;
            cResult[16] = user.id;
            cResult[17] = tmp21;
            tmp18 = tmp21;
          }
        }
        const items = [tmp5.guildTag, tmp14, style];
        cResult[5] = style;
        cResult[6] = tmp5.guildTag;
        cResult[7] = tmp14;
        cResult[8] = items;
        tmp15 = items;
      }
      const obj5 = { minHeight: sum, paddingHorizontal: guildTagHorizontalPadding };
      cResult[2] = guildTagHorizontalPadding;
      cResult[3] = sum;
      cResult[4] = obj5;
      tmp14 = obj5;
    }
  }
  return null;
}) : ((style) => {
  let badgeSize;
  let guildId;
  let guildTagBadgeSize;
  let guildTagHorizontalPadding;
  let guildTagTextVariant;
  let items;
  let obj3;
  let obj4;
  let showToastOnPress;
  let tag;
  let themeType;
  let user;
  ({ user, themeType, showToastOnPress } = style);
  style = style.style;
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  const tmp = closure_17();
  let primaryGuild;
  const getUserPrimaryGuild = GuildTagUtils.getUserPrimaryGuild;
  GuildTagUtils;
  if (user != null) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
  let tmp7;
  ({ tag, guildId } = userPrimaryGuild);
  if (null != themeType) {
    tmp7 = closure_19[themeType];
  }
  if (tmp7 == null) {
    tmp7 = closure_18;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
  PlatformUtils;
  let tmp10 = null;
  if (null != tag) {
    tmp10 = null;
    if (null != guildId) {
      const obj = { style: items, children: authStore2(GuildTagDefault, obj3) };
      items = [tmp.guildTag, , ];
      const obj2 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj2;
      items[2] = style;
      obj3 = { userId: user.id, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: obj4, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
      obj4 = { lineHeight: tmp9 };
      tmp10 = authStore2(hasOwnProperty, obj);
    }
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badgeContainerBackground;
  let badges;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let displayName;
  let displayNameAccessibilityHint;
  let displayNameAccessibilityRole;
  let guildId;
  let items;
  let items1;
  let onPressDisplayName;
  let onPressPronouns;
  let onPressUserTag;
  let pendingDisplayNameStyles;
  let pronouns;
  let pronounsAccessibilityHint;
  let showBadgeToastOnPress;
  let showChevron;
  let style;
  let themeType;
  let tmp4;
  let user;
  let userTagAccessibilityHint;
  const obj = react2;
  const cResult = obj.c(45);
  ({ user, guildId, displayName, pronouns, style, badges, catalogBadges, badgeContainerBackground, themeType, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, showBadgeToastOnPress, canOpenBadgeDirectory, pendingDisplayNameStyles } = arg0);
  const tmp3 = closure_17();
  if (cResult[0] !== badgeContainerBackground) {
    const obj2 = { backgroundColor: badgeContainerBackground };
    cResult[0] = badgeContainerBackground;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj3 = UserUtilsDefault;
  const name = obj3.useName(user);
  UserUtilsDefault;
  if (cResult[2] === style) {
    let tmp8;
    if (cResult[3] === tmp3.container) {
      tmp8 = cResult[4];
    }
    let tmp9 = name;
    if ("" !== displayName) {
      if (displayName == null) {
        displayName = name;
      }
      tmp9 = displayName;
    }
    if (cResult[5] === displayNameAccessibilityHint) {
      if (cResult[6] === displayNameAccessibilityRole) {
        if (cResult[7] === guildId) {
          if (cResult[8] === onPressDisplayName) {
            if (cResult[9] === pendingDisplayNameStyles) {
              if (cResult[10] === showChevron) {
                if (cResult[11] === tmp9) {
                  if (cResult[12] === themeType) {
                    let tmp11;
                    if (cResult[13] === user) {
                      tmp11 = cResult[14];
                    }
                    let tmp15 = null;
                    if (!user.isProvisional) {
                      tmp15 = tmp7;
                    }
                    if (cResult[15] === onPressPronouns) {
                      if (cResult[16] === onPressUserTag) {
                        if (cResult[17] === pronouns) {
                          if (cResult[18] === pronounsAccessibilityHint) {
                            if (cResult[19] === tmp15) {
                              if (cResult[20] === themeType) {
                                let tmp16;
                                if (cResult[21] === userTagAccessibilityHint) {
                                  tmp16 = cResult[22];
                                }
                                if (cResult[23] === tmp4) {
                                  if (cResult[24] === showBadgeToastOnPress) {
                                    if (cResult[25] === themeType) {
                                      let tmp20;
                                      if (cResult[26] === user) {
                                        tmp20 = cResult[27];
                                      }
                                      if (cResult[28] === badges) {
                                        if (cResult[29] === canOpenBadgeDirectory) {
                                          if (cResult[30] === catalogBadges) {
                                            if (cResult[31] === tmp4) {
                                              if (cResult[32] === showBadgeToastOnPress) {
                                                if (cResult[33] === themeType) {
                                                  let tmp24;
                                                  if (cResult[34] === user.id) {
                                                    tmp24 = cResult[35];
                                                  }
                                                  if (cResult[36] === tmp3.details) {
                                                    if (cResult[37] === tmp16) {
                                                      if (cResult[38] === tmp20) {
                                                        let tmp28;
                                                        if (cResult[39] === tmp24) {
                                                          tmp28 = cResult[40];
                                                        }
                                                        if (cResult[41] === tmp8) {
                                                          if (cResult[42] === tmp11) {
                                                            let tmp32;
                                                            if (cResult[43] === tmp28) {
                                                              tmp32 = cResult[44];
                                                            }
                                                            return tmp32;
                                                          }
                                                        }
                                                        const obj4 = { style: tmp8, children: items };
                                                        items = [tmp11, tmp28];
                                                        const tmp35 = closure_15(hasOwnProperty, obj4);
                                                        cResult[41] = tmp8;
                                                        cResult[42] = tmp11;
                                                        cResult[43] = tmp28;
                                                        cResult[44] = tmp35;
                                                        tmp32 = tmp35;
                                                      }
                                                    }
                                                  }
                                                  const obj5 = { style: tmp3.details, children: items1 };
                                                  items1 = [tmp16, tmp20, tmp24];
                                                  const tmp31 = closure_15(hasOwnProperty, obj5);
                                                  cResult[36] = tmp3.details;
                                                  cResult[37] = tmp16;
                                                  cResult[38] = tmp20;
                                                  cResult[39] = tmp24;
                                                  cResult[40] = tmp31;
                                                  tmp28 = tmp31;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj6 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, style: tmp4, themeType, showToastOnPress: showBadgeToastOnPress };
                                      const tmp27 = authStore2(closure_23, obj6);
                                      cResult[28] = badges;
                                      cResult[29] = canOpenBadgeDirectory;
                                      cResult[30] = catalogBadges;
                                      cResult[31] = tmp4;
                                      cResult[32] = showBadgeToastOnPress;
                                      cResult[33] = themeType;
                                      cResult[34] = user.id;
                                      cResult[35] = tmp27;
                                      tmp24 = tmp27;
                                    }
                                  }
                                }
                                const obj7 = { user, themeType, style: tmp4, showToastOnPress: showBadgeToastOnPress };
                                const tmp23 = authStore2(closure_24, obj7);
                                cResult[23] = tmp4;
                                cResult[24] = showBadgeToastOnPress;
                                cResult[25] = themeType;
                                cResult[26] = user;
                                cResult[27] = tmp23;
                                tmp20 = tmp23;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj8 = { userTag: tmp15, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint };
                    const tmp19 = authStore2(closure_21, obj8);
                    cResult[15] = onPressPronouns;
                    cResult[16] = onPressUserTag;
                    cResult[17] = pronouns;
                    cResult[18] = pronounsAccessibilityHint;
                    cResult[19] = tmp15;
                    cResult[20] = themeType;
                    cResult[21] = userTagAccessibilityHint;
                    cResult[22] = tmp19;
                    tmp16 = tmp19;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj9 = { user, guildId, name: tmp9, themeType, onPress: onPressDisplayName, accessibilityHint: displayNameAccessibilityHint, displayNameAccessibilityRole, showChevron, pendingDisplayNameStyles };
    const tmp14 = authStore2(closure_20, obj9);
    cResult[5] = displayNameAccessibilityHint;
    cResult[6] = displayNameAccessibilityRole;
    cResult[7] = guildId;
    cResult[8] = onPressDisplayName;
    cResult[9] = pendingDisplayNameStyles;
    cResult[10] = showChevron;
    cResult[11] = tmp9;
    cResult[12] = themeType;
    cResult[13] = user;
    cResult[14] = tmp14;
    tmp11 = tmp14;
  }
  const items2 = [tmp3.container, style];
  cResult[2] = style;
  cResult[3] = tmp3.container;
  cResult[4] = items2;
  tmp8 = items2;
}) : ((arg0) => {
  let badgeContainerBackground;
  let badges;
  let canOpenBadgeDirectory;
  let catalogBadges;
  let displayName;
  let displayNameAccessibilityHint;
  let displayNameAccessibilityRole;
  let guildId;
  let items;
  let items1;
  let items2;
  let onPressDisplayName;
  let onPressPronouns;
  let onPressUserTag;
  let pendingDisplayNameStyles;
  let pronouns;
  let pronounsAccessibilityHint;
  let showBadgeToastOnPress;
  let showChevron;
  let style;
  let themeType;
  let tmp8;
  let user;
  let userTagAccessibilityHint;
  ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, canOpenBadgeDirectory, pendingDisplayNameStyles } = arg0);
  const tmp = closure_17();
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
  items1 = [authStore2(tmp7, obj5), ];
  let tmp11 = null;
  const obj6 = { style: tmp.details, children: items2 };
  const tmp10 = closure_21;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  items2 = [authStore2(tmp10, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), authStore2(closure_24, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }), ];
  const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
  items2[2] = authStore2(closure_23, obj7);
  items1[1] = closure_15(hasOwnProperty, obj6);
  return closure_15(hasOwnProperty, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default tmp10;
export const DisplayName = tmp7;
export const UserTagAndPronouns = tmp8;
export const ProfileBadgeRows = tmp9;
