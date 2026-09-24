// Module ID: 11443
// Function ID: 11444
// Name: UserProfilePrimaryInfo
// Dependencies: [19, 17, 1376, 8489, 7487, 1078, 8239, 8500, 21, 4790, 580, 558, 568, 11238, 11239, 9580, 11444, 5373, 4786, 11446, 8008, 4649, 11478, 8490, 7658, 2013, 4490, 8548, 8002, 8003, 8013, 5698, 1245, 8001, 1368, 1119, 11480, 11481, 11482, 11483, 11484, 11488, 11490, 1482, 9176, 5220, 8471, 10012, 4635, 2]

// Module 11443 (UserProfilePrimaryInfo)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import UserUtilsDefault from "UserUtils" /* 4635 */;
import Text_Text from "Text/Text" /* 4786 */;
import Pressables from "Pressables" /* 5373 */;
import GuildTagUtils from "GuildTagUtils" /* 8471 */;
import BadgeId from "BadgeId" /* 8490 */;
import BotTagDefault from "BotTag" /* 9580 */;
import GuildTagDefault from "GuildTag" /* 10012 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11238 */;
import types from "types" /* 11239 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11484 */;
import BadgeUtils from "BadgeUtils" /* 11488 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const getBadgeName = fn(8489).getBadgeName;
let Constants = fn(7487);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = Constants);
Constants = fn(1078);
({ AnalyticEvents: closure_11, UserSettingsSections: closure_12 } = Constants);
const GuildTagBadgeSize = fn(8239).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8500).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 }, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: null, limitedBadgeRow: null };
let obj3 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
obj2.badgeRow = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj2.limitedBadgeRow = { alignItems: "center" };
let closure_17 = createStyles.createStyles(obj2);
let closure_18 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
const dependencyMap2 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 } };
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(name[12]).c(34);
  user = user.user;
  const guildId = user.guildId;
  name = user.name;
  ({ themeType, onPress, accessibilityHint, showChevron, pendingDisplayNameStyles } = user);
  const displayNameAccessibilityRole = user.displayNameAccessibilityRole;
  const tmp2 = closure_17();
  closure_5 = tmp2;
  if (cResult[0] !== themeType) {
    let tmp5;
    if (null != themeType) {
      tmp5 = dependencyMap2[themeType];
    }
    if (tmp5 == null) {
      tmp5 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp5;
    let tmp3 = tmp5;
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
                class R {
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
              class R {
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
              cResult[12] = R;
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
  user = user.user;
  ({ guildId, name, themeType, onPress, showChevron } = user);
  if (showChevron === undefined) {
    showChevron = false;
  }
  ({ pendingDisplayNameStyles, displayNameAccessibilityRole } = user);
  let tmp = closure_17();
  importDefault = tmp;
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap2[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_18;
  }
  function renderBotTag() {
    if (user.isSystemUser()) {
      const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: obj.isVerifiedBot() };
      let tmp = state(BotTagDefault, obj2);
    } else {
      tmp = null;
      if (obj.bot) {
        const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: obj.isVerifiedBot() };
        tmp = state(BotTagDefault, obj3);
      }
    }
    return tmp;
  }
  const headingVariant = tmp2.headingVariant;
  if (null == onPress) {
    const obj = { children: null };
    let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(11239).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
    const items = [closure_14(UsernameWithEffectsDefault, obj3), renderBotTag()];
    obj.children = items;
    let tmp12Result = closure_15(closure_5, obj);
  } else {
    const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint: user.accessibilityHint, style: tmp.displayName, children: null };
    const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(11239).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
    ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
    const items1 = [closure_14(UsernameWithEffectsDefault, obj8), renderBotTag(), ];
    if (showChevron) {
      showChevron = tmp15(tmp13(11444).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
    }
    items1[2] = showChevron;
    obj7.children = items1;
    tmp12Result = closure_15(user(5373).PressableOpacity, obj7);
    tmp13 = user;
    tmp15 = closure_14;
  }
  return tmp12Result;
});
let closure_20 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((userTag) => {
  let PressableOpacity = userTag;
  let obj = onPressUserTag;
  const cResult = userTag(onPressUserTag[12]).c(24);
  userTag = userTag.userTag;
  const pronouns = userTag.pronouns;
  ({ themeType, onPressUserTag } = userTag);
  const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
  ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
  const tmp2 = closure_17();
  let tmp3 = null != pronouns;
  if (tmp3) {
    tmp3 = pronouns.length > 0;
  }
  if (cResult[0] !== themeType) {
    let tmp5;
    if (null != themeType) {
      tmp5 = dependencyMap2[themeType];
    }
    if (tmp5 == null) {
      tmp5 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  const textVariant = tmp4.textVariant;
  if (cResult[2] === onPressUserTag) {
    if (cResult[3] === textVariant) {
      if (cResult[4] === userTag) {
        if (cResult[7] === pronouns) {
          if (cResult[8] === textVariant) {
            let tmp8 = cResult[9];
          }
          class R {
            constructor() {
              obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
              return jsx(closure_0(closure_2[18]).Text, obj);
            }
          }
          if (cResult[12] === tmp3) {
            if (cResult[13] === onPressPronouns) {
              if (cResult[14] === onPressUserTag) {
                if (cResult[15] === pronouns) {
                  if (cResult[16] === pronounsAccessibilityHint) {
                    if (cResult[17] === tmp8) {
                      if (cResult[18] === textVariant) {
                        let tmp10 = cResult[19];
                      }
                      if (cResult[20] === tmp2.detailsText) {
                        if (cResult[21] === tmp9) {
                          if (cResult[22] === tmp10) {
                            let tmp19 = cResult[23];
                          }
                          return tmp19;
                        }
                      }
                      class R {
                        constructor() {
                          obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                          return jsx(closure_0(closure_2[18]).Text, obj);
                        }
                      }
                      let obj3 = { style: tmp2.detailsText, children: null };
                      const items = [tmp9, tmp10];
                      obj3.children = items;
                      const tmp21 = closure_15(closure_5, obj3);
                      cResult[20] = tmp2.detailsText;
                      cResult[21] = tmp9;
                      cResult[22] = tmp10;
                      cResult[23] = tmp21;
                      tmp19 = tmp21;
                    }
                  }
                }
              }
            }
          }
          if (!tmp3) {
            cResult[12] = tmp3;
            class R {
              constructor() {
                obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                return jsx(closure_0(closure_2[18]).Text, obj);
              }
            }
            cResult[13] = onPressPronouns;
            cResult[14] = onPressUserTag;
            cResult[15] = pronouns;
            cResult[16] = pronounsAccessibilityHint;
            cResult[17] = tmp8;
            cResult[18] = textVariant;
            cResult[19] = tmp3;
            tmp10 = tmp3;
          } else {
            class R {
              constructor() {
                obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                return jsx(closure_0(closure_2[18]).Text, obj);
              }
            }
            const obj4 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
            const items1 = [closure_14(PressableOpacity(obj[18]).Text, obj4), ];
            if (null != onPressUserTag) {
              PressableOpacity = PressableOpacity(obj[17]).PressableOpacity;
              const obj5 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
              class R {
                constructor() {
                  obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                  return jsx(closure_0(closure_2[18]).Text, obj);
                }
              }
              obj5.accessibilityLabel = pronouns;
              obj5.accessibilityHint = pronounsAccessibilityHint;
              obj5.children = tmp8();
              let tmp14Result = tmp14(PressableOpacity, obj5);
            } else {
              class R {
                constructor() {
                  obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                  return jsx(closure_0(closure_2[18]).Text, obj);
                }
              }
              tmp14Result = tmp14(closure_5, { children: null });
              const obj6 = { children: null };
            }
            obj = { children: null };
            items1[1] = tmp14Result;
            obj.children = items1;
            closure_15(tmp13, obj);
          }
        }
        class R {
          constructor() {
            obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
            return jsx(closure_0(closure_2[18]).Text, obj);
          }
        }
        cResult[7] = pronouns;
        cResult[8] = textVariant;
        cResult[9] = R;
        tmp8 = R;
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
  userTag = userTag.userTag;
  ({ pronouns, themeType, onPressUserTag } = userTag);
  const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
  let textVariant;
  ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
  let tmp2 = null != pronouns;
  if (tmp2) {
    tmp2 = pronouns.length > 0;
  }
  let tmp3;
  if (null != themeType) {
    tmp3 = dependencyMap2[themeType];
  }
  if (tmp3 == null) {
    tmp3 = closure_18;
  }
  textVariant = tmp3.textVariant;
  const items = [onPressUserTag, textVariant, userTag, userTagAccessibilityHint];
  let obj = { style: closure_17().detailsText, children: null };
  const items1 = [
    textVariant.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, children: tmp };
        const tmp9 = state(Text_Text.Text, obj2);
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp10, accessibilityRole: "button", accessibilityLabel: tmp, accessibilityHint: userTagAccessibilityHint, children: tmp9 };
          let tmp5Result = tmp5(Pressables.PressableOpacity, obj3);
        } else {
          const obj = { children: tmp9 };
          tmp5Result = tmp5(hasOwnProperty, obj);
        }
        return tmp5Result;
      }
    }, items)(),

  ];
  if (!tmp2) {
    items1[1] = tmp2;
    obj.children = items1;
    return tmp5(tmp6, obj);
  } else {
    let Text = userTag;
    let tmp8Result = userTagAccessibilityHint;
    let obj2 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
    const items2 = [closure_14(userTag(userTagAccessibilityHint[18]).Text, obj2), ];
    if (null != onPressUserTag) {
      let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: null };
      Text = Text(tmp8Result[18]).Text;
      const obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
      tmp8Result = tmp8(Text, obj4);
      obj3.children = tmp8Result;
      let tmp8Result2 = tmp8(Text(tmp8Result[17]).PressableOpacity, obj3);
    } else {
      const obj5 = { children: null };
      const obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
      obj5.children = tmp8(Text(tmp8Result[18]).Text, obj6);
      tmp8Result2 = tmp8(tmp6, obj5);
    }
    const obj7 = { children: null };
    items2[1] = tmp8Result2;
    obj7.children = items2;
    tmp5(closure_16, obj7);
  }
});
let closure_21 = tmp7;
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  const cResult = source(id[12]).c(15);
  source = source.source;
  const catalogBadge = source.catalogBadge;
  id = source.id;
  const label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  let tmp4 = undefined === showToastOnPress;
  if (!tmp4) {
    tmp4 = showToastOnPress;
  }
  let items = closure_17();
  if (null != badgeSize) {
    const size = { width: badgeSize, height: badgeSize };
  }
  const ref = label.useRef(null);
  let obj = source(id[12]);
  const tieredTenureBadgeClickHandler = source(id[19]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  const tmpResult = source(id[19]);
  const adUser = source(id[20]).useAdUser("profile_badge");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const rootNavigationRef = tmp(tmp2[21]).getRootNavigationRef();
    let currentRoute;
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
    }
    cResult[0] = currentRoute;
    let first = currentRoute;
    const tmpResult5 = tmp(tmp2[21]);
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
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[1];
  }
  const tmpResult4 = source(id[20]);
  let props = source(id[22]).useOrbsBadgeCoachmark(tmp11);
  if (cResult[2] === adUser) {
    let info_label;
    if (catalogBadge != null) {
      info_label = catalogBadge.info_label;
    }
    if (cResult[3] === info_label) {
      if (cResult[4] === id) {
        if (cResult[5] === label) {
          if (cResult[6] === source) {
            if (cResult[7] === tieredTenureBadgeClickHandler) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] !== label) {
              const intl = tmp(tmp2[35]).intl;
              let obj3 = { badgeLabel: label };
              const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[35]).t.A0LN9t, obj3);
              cResult[9] = label;
              cResult[10] = formatToPlainStringResult;
              let tmp15 = formatToPlainStringResult;
            } else {
              tmp15 = cResult[10];
            }
            let tmp18 = themeType === UserProfileThemeTypes.YOU_SCREEN;
            if (tmp18) {
              tmp18 = typeof id === "string";
            }
            if (!tmp18) {
              let tmp25 = themeType !== tmp17.YOU_SCREEN || typeof id !== "string";
              if (!tmp25) {
                let tmp26 = "orb_profile_badge" !== id;
                if (tmp26) {
                  tmp26 = id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
                }
                tmp25 = tmp26;
              }
              if (!tmp25) {
                tmp25 = null == props;
              }
              if (tmp25) {
                let obj4 = { children: null };
                if (tmp4) {
                  let PressableOpacity = tmp(tmp2[17]).PressableOpacity;
                  let obj5 = { accessibilityRole: "image", accessibilityLabel: tmp15, onPress: tmp13, ref, children: null };
                  if (null != source) {
                    const obj6 = { style: null, source: null };
                    items = [, ];
                    items[0] = items.badge;
                    items[1] = tmp5;
                    obj6.style = items;
                    obj6.source = source;
                    let tmp39Result = tmp39(tieredTenureBadgeClickHandler, obj6);
                  } else {
                    tmp39Result = null;
                    if (null != catalogBadge) {
                      const obj7 = { badge: catalogBadge, size: badgeSize };
                      tmp39Result = tmp39(catalogBadge(tmp2[37]), obj7);
                    }
                  }
                  obj5.children = tmp39Result;
                  PressableOpacity = tmp39(PressableOpacity, obj5);
                  obj5 = [PressableOpacity, null, null];
                  obj4.children = obj5;
                } else {
                  const obj8 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp15, ref, children: null };
                  if (null != source) {
                    const obj9 = { style: null, source: null };
                    const items1 = [items.badge, tmp5];
                    obj9.style = items1;
                    obj9.source = source;
                    let tmp39Result2 = tmp39(tieredTenureBadgeClickHandler, obj9);
                  } else {
                    tmp39Result2 = null;
                    if (null != catalogBadge) {
                      const obj10 = { badge: catalogBadge, size: badgeSize };
                      tmp39Result2 = tmp39(catalogBadge(tmp2[37]), obj10);
                    }
                  }
                  obj8.children = tmp39Result2;
                  const items2 = [tmp39(adUser, obj8), null, null];
                  obj4.children = items2;
                  return tmp37(tmp38, obj4);
                }
              } else if (cResult[13] !== props.props) {
                const obj11 = { badgeRef: ref };
                let merged = Object.assign(props.props);
                const tmp35 = closure_14(catalogBadge(tmp2[22]), obj11);
                props = props.props;
                cResult[13] = props;
                cResult[14] = tmp35;
                const tmp32 = catalogBadge(tmp2[22]);
              }
            } else if (cResult[11] !== id) {
              const obj12 = { targetRef: ref, badgeId: id };
              const tmp23 = closure_14(catalogBadge(tmp2[36]), obj12);
              cResult[11] = id;
              cResult[12] = tmp23;
            }
            tmp17 = UserProfileThemeTypes;
          }
        }
      }
    }
  }
  cResult[2] = adUser;
  let info_label1;
  if (catalogBadge != null) {
    info_label1 = catalogBadge.info_label;
  }
  class L {
    constructor() {
      if (null == closure_4) {
        tmp4 = getBadgeName;
        tmp5 = closure_0;
        tmp6 = closure_2;
        tmp3 = id;
        if (id !== getBadgeName(closure_0(closure_2[23]).BadgeId.GIFTING)) {
          info_label = undefined;
          if (catalogBadge != null) {
            info_label = catalogBadge.info_label;
          }
          tmp5Result = tmp5(tmp6[25]);
          tmp10 = info_label;
          if (tmp5Result.isNullOrEmpty(info_label)) {
            tmp10 = label;
          }
          tmp11 = closure_1;
          obj4 = closure_1(tmp6[26]);
          obj1 = { key: null, content: null, icon: null };
          tmp12 = label;
          tmp13 = globalThis;
          _HermesInternal = HermesInternal;
          str = "PROFILE_BADGE-";
          obj1.key = "PROFILE_BADGE-" + label;
          obj1.content = tmp10;
          tmp14 = source;
          obj1.icon = source;
          openResult = obj4.open(obj1);
          if (tmp3 === tmp5(tmp6[27]).QUEST_COMPLETED_BADGE) {
            tmp5Result1 = tmp5(tmp6[28]);
            str2 = "quest_completed_badge_toast";
            if (tmp5Result1.shouldMigrateToAdAnalyticsInterface(tmp5(tmp6[28]).AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
              tmp5Result2 = tmp5(tmp6[29]);
              obj14 = { type: null, surfaceId: null, isTargeted: false };
              obj14.type = tmp5(tmp6[30]).AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
              obj14.surfaceId = tmp5(tmp6[31]).QuestContent.QUEST_BADGE;
              captureAdUserActionResult = tmp5Result2.captureAdUserAction(obj14);
            } else {
              tmp11Result = tmp11(tmp6[32]);
              tmp16 = AnalyticEvents;
              obj15 = {};
              tmp5Result3 = tmp5(tmp6[33]);
              tmp17 = obj15;
              merged = Object.assign(tmp5Result3.getContentProperties(tmp5(tmp6[31]).QuestContent.QUEST_BADGE));
              tmp19 = closure_5;
              advertisingId = null;
              if (null != closure_5) {
                tmp5Result4 = tmp5(tmp6[34]);
                advertisingId = null;
                if (tmp5Result4.isIOS()) {
                  advertisingId = tmp19.advertisingId;
                }
              }
              obj15.apple_advertising_id = advertisingId;
              advertisingId1 = null;
              if (null != tmp19) {
                tmp5Result5 = tmp5(tmp6[34]);
                advertisingId1 = null;
                if (tmp5Result5.isAndroid()) {
                  advertisingId1 = tmp19.advertisingId;
                }
              }
              obj15.android_advertising_id = advertisingId1;
              flag = false;
              obj15.is_targeted = false;
              trackResult = tmp11Result.track(AnalyticEvents.QUEST_CONTENT_VIEWED, obj15);
            }
          }
        } else {
          tmp5Result6 = tmp5(tmp6[24]);
          obj16 = { screen: null, params: null };
          tmp7 = UserSettingsSections;
          obj16.screen = UserSettingsSections.PREMIUM_GIFTING;
          obj16.params = {};
          openUserSettingsResult = tmp5Result6.openUserSettings(obj16);
        }
      } else {
        tmpResult = tmp();
      }
      return;
    }
  }
  cResult[3] = info_label1;
  cResult[4] = id;
  cResult[5] = label;
  cResult[6] = source;
  cResult[7] = tieredTenureBadgeClickHandler;
  cResult[8] = L;
  tmp13 = L;
}) : ((source) => {
  source = source.source;
  const catalogBadge = source.catalogBadge;
  const id = source.id;
  const label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  if (showToastOnPress === undefined) {
    showToastOnPress = true;
  }
  closure_4 = undefined;
  closure_5 = undefined;
  let items = closure_17();
  if (null != badgeSize) {
    const size = { width: badgeSize, height: badgeSize };
  }
  const ref = label.useRef(null);
  closure_4 = source(id[19]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj2 = source(id[19]);
  closure_5 = source(id[20]).useAdUser("profile_badge");
  let obj3 = source(id[20]);
  const rootNavigationRef = source(id[21]).getRootNavigationRef();
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
  let obj4 = source(id[21]);
  const orbsBadgeCoachmark = source(id[22]).useOrbsBadgeCoachmark({ disabled: !flag });
  const intl = tmp3(tmp4[35]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(id[35]).t.A0LN9t, { badgeLabel: label });
  let tmp9 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp9) {
    tmp9 = typeof id === "string";
  }
  let tmp10 = null;
  if (tmp9) {
    let obj5 = { targetRef: ref, badgeId: id };
    tmp10 = closure_14(catalogBadge(tmp4[36]), obj5);
  }
  let tmp13 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
  if (!tmp13) {
    let tmp14 = "orb_profile_badge" !== id;
    if (tmp14) {
      tmp14 = id !== getBadgeName(tmp3(tmp4[23]).BadgeId.ORB_PROFILE);
    }
    tmp13 = tmp14;
  }
  if (!tmp13) {
    tmp13 = null == orbsBadgeCoachmark;
  }
  let tmp16 = null;
  if (!tmp13) {
    const obj6 = { badgeRef: ref };
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp16 = closure_14(catalogBadge(tmp4[22]), obj6);
    const tmp19 = catalogBadge(tmp4[22]);
  }
  const obj7 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(tmp4[17]).PressableOpacity;
    let obj8 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress() {
          if (null == closure_4) {
            if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
              let info_label;
              if (catalogBadge != null) {
                info_label = catalogBadge.info_label;
              }
              let tmp10 = info_label;
              if (tmp5Result.isNullOrEmpty(info_label)) {
                tmp10 = label;
              }
              const tmp11 = importDefault;
              tmp5Result = tmp5(2013);
              const obj = { key: null, content: null, icon: null };
              const _HermesInternal = HermesInternal;
              obj.key = "PROFILE_BADGE-" + label;
              obj.content = tmp10;
              obj.icon = source;
              ToastActionCreatorsDefault.open(obj);
              if (tmp3 === tmp5(8548).QUEST_COMPLETED_BADGE) {
                if (tmp5Result7.shouldMigrateToAdAnalyticsInterface(tmp5(8002).AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
                  const obj2 = { type: tmp5(8013).AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: tmp5(5698).QuestContent.QUEST_BADGE, isTargeted: false };
                  tmp5(8003).captureAdUserAction(obj2);
                  const tmp5Result8 = tmp5(8003);
                } else {
                  const obj3 = {};
                  const tmp11Result = tmp11(1245);
                  const merged = Object.assign(tmp5(8001).getContentProperties(tmp5(5698).QuestContent.QUEST_BADGE));
                  let advertisingId = null;
                  if (null != closure_5) {
                    advertisingId = null;
                    if (tmp5Result10.isIOS()) {
                      advertisingId = tmp19.advertisingId;
                    }
                    tmp5Result10 = tmp5(1368);
                  }
                  obj3.apple_advertising_id = advertisingId;
                  let advertisingId1 = null;
                  if (null != closure_5) {
                    advertisingId1 = null;
                    if (tmp5Result11.isAndroid()) {
                      advertisingId1 = tmp19.advertisingId;
                    }
                    tmp5Result11 = tmp5(1368);
                  }
                  obj3.android_advertising_id = advertisingId1;
                  obj3.is_targeted = false;
                  tmp11Result.track(constants.QUEST_CONTENT_VIEWED, obj3);
                  const tmp5Result9 = tmp5(8001);
                }
                tmp5Result7 = tmp5(8002);
              }
            } else {
              const obj5 = { screen: constants2.PREMIUM_GIFTING, params: {} };
              tmp5(7658).openUserSettings(obj5);
              const tmp5Result12 = tmp5(7658);
            }
            tmp3 = id;
          } else {
            tmp();
          }
        },
      ref,
      children: null
    };
    if (null != source) {
      const obj9 = { style: null, source: null };
      items = [, ];
      items[0] = items.badge;
      items[1] = tmp;
      obj9.style = items;
      obj9.source = source;
      let tmp24Result = tmp24(closure_4, obj9);
    } else {
      tmp24Result = null;
      if (null != catalogBadge) {
        const obj10 = { badge: catalogBadge, size: badgeSize };
        tmp24Result = tmp24(catalogBadge(tmp4[37]), obj10);
      }
    }
    obj8.children = tmp24Result;
    PressableOpacity = tmp24(PressableOpacity, obj8);
    obj8 = [PressableOpacity, tmp10, tmp16];
    obj7.children = obj8;
  } else {
    const obj11 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: null };
    if (null != source) {
      const obj12 = { style: null, source: null };
      const items1 = [items.badge, tmp];
      obj12.style = items1;
      obj12.source = source;
      let tmp24Result2 = tmp24(closure_4, obj12);
    } else {
      tmp24Result2 = null;
      if (null != catalogBadge) {
        const obj13 = { badge: catalogBadge, size: badgeSize };
        tmp24Result2 = tmp24(catalogBadge(tmp4[37]), obj13);
      }
    }
    obj11.children = tmp24Result2;
    const items2 = [tmp24(closure_5, obj11), tmp10, tmp16];
    obj7.children = items2;
    return tmp22(tmp23, obj7);
  }
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let Button = userId;
  let tmp = themeType;
  const cResult = userId(themeType[12]).c(77);
  userId = userId.userId;
  ({ badges, catalogBadges, isTryItOut, canOpenBadgeDirectory, style } = userId);
  themeType = userId.themeType;
  const showToastOnPress = userId.showToastOnPress;
  let tmp5 = closure_17();
  const badgeRow = tmp5;
  if (cResult[0] !== themeType) {
    let tmp8;
    if (null != themeType) {
      tmp8 = dependencyMap2[themeType];
    }
    if (tmp8 == null) {
      tmp8 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  const badgeSize = tmp6.badgeSize;
  const badgeRowHorizontalPadding = tmp6.badgeRowHorizontalPadding;
  const textVariant = tmp6.textVariant;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "ProfileBadgeRows" };
    cResult[2] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[2];
  }
  let obj = userId(themeType[12]);
  const tmp3 = undefined !== canOpenBadgeDirectory && canOpenBadgeDirectory;
  const isBadgeManagementEnabled = Button(tmp[38]).useIsBadgeManagementEnabled(tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "ProfileBadgeRows" };
    cResult[3] = obj3;
    let tmp12 = obj3;
  } else {
    tmp12 = cResult[3];
  }
  const ButtonResult = Button(tmp[38]);
  let isBadgeDirectoryUpdatesEnabled = isBadgeManagementEnabled;
  if (isBadgeManagementEnabled) {
    isBadgeDirectoryUpdatesEnabled = ButtonResult1.useIsBadgeDirectoryUpdatesEnabled(tmp12);
  }
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = tmp3;
  }
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = tmp4;
  }
  let tmp14 = !isBadgeDirectoryUpdatesEnabled;
  if (!isBadgeDirectoryUpdatesEnabled) {
    tmp14 = tmp4;
  }
  UserStore = tmp14;
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  if (cResult[4] !== userId) {
    const fn = function w() {
      const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
    };
    cResult[4] = userId;
    cResult[5] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== badges) {
    const legacyIconUrlByBadgeId = Button(tmp[41]).getLegacyIconUrlByBadgeId(badges);
    cResult[6] = badges;
    cResult[7] = legacyIconUrlByBadgeId;
    let tmp17 = legacyIconUrlByBadgeId;
    const ButtonResult2 = Button(tmp[41]);
  } else {
    tmp17 = cResult[7];
  }
  closure_8 = tmp17;
  if (cResult[8] === tmp14) {
    if (cResult[9] === badgeSize) {
      if (cResult[10] === badges) {
        if (cResult[11] === isTryItOut) {
          if (cResult[12] === themeType) {
            if (cResult[13] === userId) {
              let mapped2 = cResult[14];
            }
            if (isBadgeManagementEnabled) {
              const _Symbol = Symbol;
              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                let items = [];
                cResult[26] = items;
              }
            } else {
              const _Math = Math;
              rounded = Math.floor((tmp33 - 2 * rounded - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
              if (cResult[27] === rounded) {
                if (cResult[28] === arr) {
                  let arr3 = cResult[29];
                }
                if (isBadgeManagementEnabled) {
                  if (cResult[30] === tmp14) {
                    if (cResult[31] === badgeSize) {
                      if (cResult[32] === catalogBadges) {
                        if (cResult[33] === tmp17) {
                          if (cResult[34] === themeType) {
                            if (cResult[35] === userId) {
                              let tmp46 = cResult[36];
                            }
                            if (cResult[37] === arr) {
                              if (cResult[38] === tmp46) {
                                let arr7 = cResult[39];
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
                                let tmp68 = null;
                                if (isBadgeDirectoryUpdatesEnabled) {
                                  tmp68 = null;
                                  if (userId === id) {
                                    const _Symbol3 = Symbol;
                                    if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                                      const tmp72 = closure_14(Button(tmp[44]).PlusSmallIcon, {});
                                      const intl4 = Button(tmp[35]).intl;
                                      const stringResult = intl4.string(Button(tmp[35]).t.l6w3Vj);
                                      cResult[40] = tmp72;
                                      cResult[41] = stringResult;
                                      let tmp70 = stringResult;
                                      let tmp69 = tmp72;
                                    } else {
                                      tmp69 = cResult[40];
                                      tmp70 = cResult[41];
                                    }
                                    if (cResult[42] !== tmp16) {
                                      Button = Button(tmp[45]).Button;
                                      const obj4 = { variant: "secondary", size: "sm", icon: tmp69, text: tmp70, onPress: tmp16 };
                                      tmp = closure_14(Button, obj4);
                                      cResult[42] = tmp16;
                                      cResult[43] = tmp;
                                    }
                                  }
                                }
                                return tmp68;
                              } else {
                                if (cResult[44] !== badgeRowHorizontalPadding) {
                                  const obj5 = { paddingHorizontal: badgeRowHorizontalPadding };
                                  cResult[44] = badgeRowHorizontalPadding;
                                  cResult[45] = obj5;
                                  let tmp51 = obj5;
                                } else {
                                  tmp51 = cResult[45];
                                }
                                if (cResult[46] === style) {
                                  if (cResult[47] === tmp5.badgeRow) {
                                    if (cResult[48] === tmp5.limitedBadgeRow) {
                                      if (cResult[49] === tmp51) {
                                        let tmp52 = cResult[50];
                                      }
                                      if (cResult[51] === diff) {
                                        if (cResult[52] === textVariant) {
                                          let tmp53 = cResult[53];
                                        }
                                        if (cResult[54] === arr7) {
                                          if (cResult[55] === tmp52) {
                                            if (cResult[56] === tmp53) {
                                              let tmp56 = cResult[57];
                                            }
                                            if (cResult[58] !== tmp5.badges) {
                                              const items1 = [tmp5.badges];
                                              cResult[58] = tmp5.badges;
                                              cResult[59] = items1;
                                              let tmp60 = items1;
                                            } else {
                                              tmp60 = cResult[59];
                                            }
                                            if (cResult[60] === tmp56) {
                                              if (cResult[61] === tmp16) {
                                                if (cResult[62] === isBadgeDirectoryUpdatesEnabled) {
                                                  let tmp61 = cResult[63];
                                                }
                                                if (cResult[64] === tmp60) {
                                                  if (cResult[65] === tmp61) {
                                                    let tmp64 = cResult[66];
                                                  }
                                                  return tmp64;
                                                }
                                                const obj6 = { style: tmp60, children: tmp61 };
                                                const tmp67 = closure_14(badgeRowHorizontalPadding, obj6);
                                                cResult[64] = tmp60;
                                                cResult[65] = tmp61;
                                                cResult[66] = tmp67;
                                                tmp64 = tmp67;
                                              }
                                            }
                                            let tmp62 = tmp56;
                                            if (isBadgeDirectoryUpdatesEnabled) {
                                              const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
                                              const intl3 = Button(tmp[35]).intl;
                                              obj7.accessibilityLabel = intl3.string(Button(tmp[35]).t.PEjP4L);
                                              obj7.onPress = tmp16;
                                              obj7.children = tmp56;
                                              tmp62 = closure_14(Button(tmp[17]).PressableOpacity, obj7);
                                            }
                                            cResult[60] = tmp56;
                                            cResult[61] = tmp16;
                                            cResult[62] = isBadgeDirectoryUpdatesEnabled;
                                            cResult[63] = tmp62;
                                            tmp61 = tmp62;
                                          }
                                        }
                                        const obj8 = { style: tmp52, children: null };
                                        const items2 = [arr7, tmp53];
                                        obj8.children = items2;
                                        const tmp59 = closure_15(badgeRowHorizontalPadding, obj8);
                                        cResult[54] = arr7;
                                        cResult[55] = tmp52;
                                        cResult[56] = tmp53;
                                        cResult[57] = tmp59;
                                        tmp56 = tmp59;
                                      }
                                      let tmp54 = diff > 0;
                                      if (tmp54) {
                                        const obj9 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
                                        const intl2 = Button(tmp[35]).intl;
                                        const obj10 = { overflow_count: diff };
                                        obj9.accessibilityLabel = intl2.formatToPlainString(Button(tmp[35]).t.eIHfGZ, obj10);
                                        const _HermesInternal = HermesInternal;
                                        obj9.children = "+" + diff;
                                        tmp54 = closure_14(Button(tmp[18]).Text, obj9);
                                      }
                                      cResult[51] = diff;
                                      cResult[52] = textVariant;
                                      cResult[53] = tmp54;
                                      tmp53 = tmp54;
                                    }
                                  }
                                }
                                const items3 = [, , , ];
                                ({ badgeRow: arr8[0], limitedBadgeRow: arr8[1] } = tmp5);
                                items3[2] = tmp51;
                                items3[3] = style;
                                cResult[46] = style;
                                cResult[47] = tmp5.badgeRow;
                                cResult[48] = tmp5.limitedBadgeRow;
                                cResult[49] = tmp51;
                                cResult[50] = items3;
                                tmp52 = items3;
                              }
                            }
                            let substr = tmp46;
                            if (tmp46 == null) {
                              substr = arr.slice(0, Button(tmp[41]).MAX_DISPLAYED_PROFILE_BADGES);
                            }
                            cResult[37] = arr;
                            cResult[38] = tmp46;
                            cResult[39] = substr;
                            arr7 = substr;
                          }
                        }
                      }
                    }
                  }
                  let mapped;
                  if (catalogBadges != null) {
                    const substr1 = catalogBadges.slice(0, Button(tmp[41]).MAX_DISPLAYED_PROFILE_BADGES);
                    mapped = substr1.map((badge_id) => {
                      value = closure_8.get(badge_id.badge_id);
                      let obj = getBadgeName(badge_id.badge_id);
                      if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
                        obj = DEFAULT_PREMIUM_BADGE_ID;
                      }
                      const obj2 = { id: obj, userId, catalogBadge: badge_id, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
                      let tmp5;
                      if (null != value) {
                        const obj3 = { uri: value };
                        tmp5 = obj3;
                      }
                      obj2.source = tmp5;
                      obj2.label = badge_id.name;
                      obj2.badgeSize = badgeSize;
                      obj2.themeType = themeType;
                      obj2.showToastOnPress = showToastOnPress;
                      return state(closure_22, obj2, badge_id.badge_id);
                    });
                  }
                  cResult[30] = tmp14;
                  cResult[31] = badgeSize;
                  cResult[32] = catalogBadges;
                  cResult[33] = tmp17;
                  cResult[34] = themeType;
                  cResult[35] = userId;
                  cResult[36] = mapped;
                  tmp46 = mapped;
                } else {
                  if (cResult[67] !== tmp5.badges) {
                    const items4 = [tmp5.badges];
                    cResult[67] = tmp5.badges;
                    cResult[68] = items4;
                    let tmp39 = items4;
                  } else {
                    tmp39 = cResult[68];
                  }
                  if (cResult[69] === badgeRowHorizontalPadding) {
                    if (cResult[70] === arr3) {
                      if (cResult[71] === style) {
                        if (cResult[72] === tmp5.badgeRow) {
                          let tmp40 = cResult[73];
                        }
                        if (cResult[74] === tmp40) {
                          if (cResult[75] === tmp39) {
                            let tmp42 = cResult[76];
                          }
                          return tmp42;
                        }
                        const obj11 = { style: tmp39, children: tmp40 };
                        const tmp45 = closure_14(badgeRowHorizontalPadding, obj11);
                        cResult[74] = tmp40;
                        cResult[75] = tmp39;
                        cResult[76] = tmp45;
                        tmp42 = tmp45;
                      }
                    }
                  }
                  const mapped1 = arr3.map((children, index) => {
                    const obj = { style: null, children };
                    const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
                    obj.style = items;
                    return state(hasOwnProperty, obj, index);
                  });
                  cResult[69] = badgeRowHorizontalPadding;
                  cResult[70] = arr3;
                  cResult[71] = style;
                  cResult[72] = tmp5.badgeRow;
                  cResult[73] = mapped1;
                  tmp40 = mapped1;
                }
              }
              const _Array = Array;
              const obj12 = { length: null };
              const _Math2 = Math;
              obj12.length = Math.ceil(arr.length / rounded);
              const arr2 = Array.from(obj12, (arg0, arg1) => mapped2.slice(arg1 * rounded, (arg1 + 1) * rounded));
              cResult[27] = rounded;
              cResult[28] = arr;
              cResult[29] = arr2;
              arr3 = arr2;
            }
          }
        }
      }
    }
  }
  if (cResult[15] === tmp14) {
    if (cResult[16] === badgeSize) {
      if (cResult[17] === themeType) {
        if (cResult[18] === userId) {
          let tmp19 = cResult[19];
        }
        mapped2 = badges.map(tmp19);
        if (isTryItOut) {
          if (null == badges.find((id) => "premium" === id.id)) {
            const _Symbol2 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = Button(tmp[35]).intl;
              const obj13 = { date: null };
              const _Date = Date;
              const date = new Date();
              obj13.date = date;
              const formatToPlainStringResult = intl.formatToPlainString(Button(tmp[35]).t["8zbGNR"], obj13);
              cResult[20] = formatToPlainStringResult;
              let tmp20 = formatToPlainStringResult;
            } else {
              tmp20 = cResult[20];
            }
            if (cResult[21] === tmp14) {
              if (cResult[22] === badgeSize) {
                if (cResult[23] === tmp20) {
                  if (cResult[24] === userId) {
                    let tmp26 = cResult[25];
                  }
                  mapped2.push(tmp26);
                }
              }
            }
            const obj14 = { source: style(tmp[42]), id: "premium", userId, label: tmp20, badgeSize, showToastOnPress: tmp14 };
            const tmp30 = closure_14(closure_22, obj14);
            cResult[21] = tmp14;
            cResult[22] = badgeSize;
            cResult[23] = tmp20;
            cResult[24] = userId;
            cResult[25] = tmp30;
            tmp26 = tmp30;
          }
        }
        cResult[8] = tmp14;
        cResult[9] = badgeSize;
        cResult[10] = badges;
        cResult[11] = isTryItOut;
        cResult[12] = themeType;
        cResult[13] = userId;
        cResult[14] = mapped2;
      }
    }
  }
  class F {
    constructor(arg0) {
      obj = { id: userId.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
      obj1 = { uri: null };
      obj3 = closure_0(closure_2[41]);
      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
      obj.source = obj1;
      obj.label = userId.description;
      obj.badgeSize = badgeSize;
      obj.themeType = themeType;
      obj.showToastOnPress = showToastOnPress;
      return jsx(f56882, obj, userId.id);
    }
  }
  cResult[15] = tmp14;
  cResult[16] = badgeSize;
  cResult[17] = themeType;
  cResult[18] = userId;
  cResult[19] = F;
  tmp19 = F;
}) : ((userId) => {
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
  flag = undefined;
  closure_9 = undefined;
  let mapped;
  let width;
  const tmp = closure_17();
  const badgeRow = tmp;
  let tmp2;
  if (null != themeType) {
    tmp2 = dependencyMap2[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_18;
  }
  badgeSize = tmp2.badgeSize;
  badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
  isBadgeManagementEnabled = userId(style[38]).useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
  let obj = userId(style[38]);
  let isBadgeDirectoryUpdatesEnabled = isBadgeManagementEnabled;
  if (isBadgeManagementEnabled) {
    isBadgeDirectoryUpdatesEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: "ProfileBadgeRows" });
  }
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = canOpenBadgeDirectory;
  }
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = flag;
  }
  let tmp8 = !isBadgeDirectoryUpdatesEnabled;
  if (!isBadgeDirectoryUpdatesEnabled) {
    tmp8 = flag;
  }
  flag = tmp8;
  const currentUser = badgeRowHorizontalPadding.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  let items = [userId];
  const callback = themeType.useCallback(() => {
    const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
  }, items);
  const items1 = [badges];
  closure_9 = themeType.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items1);
  mapped = badges.map((id) => {
    const obj = { id: id.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
    const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
    obj.source = obj2;
    obj.label = id.description;
    obj.badgeSize = badgeSize;
    obj.themeType = themeType;
    obj.showToastOnPress = flag;
    return state(closure_22, obj, id.id);
  });
  if (isTryItOut) {
    isTryItOut = null == badges.find((id) => "premium" === id.id);
  }
  if (isTryItOut) {
    const obj4 = { source: badges(tmp5[42]), id: "premium", userId, label: null, badgeSize: null, showToastOnPress: null };
    const intl = tmp4(tmp5[35]).intl;
    const obj5 = { date: null };
    const _Date = Date;
    const date = new Date();
    obj5.date = date;
    obj4.label = intl.formatToPlainString(tmp4(tmp5[35]).t["8zbGNR"], obj5);
    obj4.badgeSize = badgeSize;
    obj4.showToastOnPress = tmp8;
    mapped.push(closure_14(closure_22, obj4));
  }
  width = badges(tmp5[43])().width;
  const items2 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
  const memo = themeType.useMemo(() => {
    if (isBadgeManagementEnabled) {
      return [];
    } else {
      const _Math = Math;
      const rounded = Math.floor((width - 2 * closure_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
      const _Array = Array;
      const obj = { length: null };
      const _Math2 = Math;
      obj.length = Math.ceil(mapped.length / rounded);
      return Array.from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
    }
  }, items2);
  if (isBadgeManagementEnabled) {
    let mapped1;
    if (catalogBadges != null) {
      const substr = catalogBadges.slice(0, tmp4(tmp5[41]).MAX_DISPLAYED_PROFILE_BADGES);
      mapped1 = substr.map((badge_id) => {
        value = closure_9.get(badge_id.badge_id);
        let obj = getBadgeName(badge_id.badge_id);
        if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
          obj = DEFAULT_PREMIUM_BADGE_ID;
        }
        const obj2 = { id: obj, userId, catalogBadge: badge_id, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
        let tmp5;
        if (null != value) {
          const obj3 = { uri: value };
          tmp5 = obj3;
        }
        obj2.source = tmp5;
        obj2.label = badge_id.name;
        obj2.badgeSize = badgeSize;
        obj2.themeType = themeType;
        obj2.showToastOnPress = flag;
        return state(closure_22, obj2, badge_id.badge_id);
      });
    }
    if (mapped1 == null) {
      mapped1 = mapped.slice(0, tmp4(tmp5[41]).MAX_DISPLAYED_PROFILE_BADGES);
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
      if (isBadgeDirectoryUpdatesEnabled) {
        tmp31 = null;
        if (userId === id) {
          const obj6 = { variant: "secondary", size: "sm", icon: closure_14(tmp4(tmp5[44]).PlusSmallIcon, {}), text: null, onPress: null };
          const intl4 = tmp4(tmp5[35]).intl;
          obj6.text = intl4.string(tmp4(tmp5[35]).t.l6w3Vj);
          obj6.onPress = callback;
          tmp31 = closure_14(tmp4(tmp5[45]).Button, obj6);
        }
      }
      return tmp31;
    } else {
      const obj7 = { style: null, children: null };
      const items3 = [, , , ];
      ({ badgeRow: arr10[0], limitedBadgeRow: arr10[1] } = tmp);
      const obj8 = { paddingHorizontal: badgeRowHorizontalPadding };
      items3[2] = obj8;
      items3[3] = style;
      obj7.style = items3;
      const items4 = [mapped1, ];
      let tmp27 = diff > 0;
      if (tmp27) {
        const obj9 = { variant: tmp2.textVariant, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
        const intl2 = tmp4(tmp5[35]).intl;
        const obj10 = { overflow_count: diff };
        obj9.accessibilityLabel = intl2.formatToPlainString(tmp4(tmp5[35]).t.eIHfGZ, obj10);
        const _HermesInternal = HermesInternal;
        obj9.children = "+" + diff;
        tmp27 = closure_14(tmp4(tmp5[18]).Text, obj9);
      }
      items4[1] = tmp27;
      obj7.children = items4;
      const tmp33Result = closure_15(badgeSize, obj7);
      const obj11 = { style: null, children: null };
      const items5 = [tmp.badges];
      obj11.style = items5;
      let tmp29Result = tmp33Result;
      if (isBadgeDirectoryUpdatesEnabled) {
        const obj12 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl3 = tmp4(tmp5[35]).intl;
        obj12.accessibilityLabel = intl3.string(tmp4(tmp5[35]).t.PEjP4L);
        obj12.onPress = callback;
        obj12.children = tmp33Result;
        tmp29Result = tmp29(tmp4(tmp5[17]).PressableOpacity, obj12);
      }
      obj11.children = tmp29Result;
      return closure_14(badgeSize, obj11);
    }
  } else {
    const obj13 = { style: null, children: null };
    const items6 = [tmp.badges];
    obj13.style = items6;
    obj13.children = memo.map((children, index) => {
      const obj = { style: null, children };
      const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
      obj.style = items;
      return state(hasOwnProperty, obj, index);
    });
    return closure_14(badgeSize, obj13);
  }
  obj2 = userId(style[39]);
});
let closure_23 = tmp8;
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(21);
  ({ user, themeType, style, showToastOnPress } = arg0);
  const tmp5 = closure_17();
  const tmp4 = undefined !== showToastOnPress && showToastOnPress;
  let primaryGuild;
  if (user != null) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (cResult[0] !== themeType) {
    let tmp9;
    if (null != themeType) {
      tmp9 = dependencyMap2[themeType];
    }
    if (tmp9 == null) {
      tmp9 = closure_18;
    }
    cResult[0] = themeType;
    cResult[1] = tmp9;
    let tmp8 = tmp9;
  } else {
    tmp8 = cResult[1];
  }
  ({ guildTagBadgeSize, guildTagHorizontalPadding, guildTagTextVariant } = tmp8);
  const sum = tmp8.badgeSize + 4;
  const tmpResult = GuildTagUtils;
  let num3 = 4;
  if (tmpResult2.isAndroid()) {
    num3 = 2;
  }
  const sum1 = tmp(4786).TextStyleSheet[guildTagTextVariant].fontSize + num3;
  if (null != tag) {
    if (null != guildId) {
      if (cResult[2] === guildTagHorizontalPadding) {
        if (cResult[3] === sum) {
          let tmp13 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp5.guildTag) {
            if (cResult[7] === tmp13) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] !== sum1) {
              const obj2 = { lineHeight: sum1 };
              cResult[9] = sum1;
              cResult[10] = obj2;
              let tmp16 = obj2;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === guildTagBadgeSize) {
              if (cResult[12] === guildTagTextVariant) {
                if (cResult[13] === tmp5.transparentBackground) {
                  if (cResult[14] === tmp15) {
                    if (cResult[15] === tmp16) {
                      if (cResult[16] === user.id) {
                        let tmp17 = cResult[17];
                      }
                      if (cResult[18] === tmp14) {
                        if (cResult[19] === tmp17) {
                          let tmp21 = cResult[20];
                        }
                        return tmp21;
                      }
                      const obj3 = { style: tmp14, children: tmp17 };
                      const tmp24 = state(hasOwnProperty, obj3);
                      cResult[18] = tmp14;
                      cResult[19] = tmp17;
                      cResult[20] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                }
              }
            }
            const obj4 = { userId: user.id, disabledTooltip: !tmp4, containerStyles: tmp5.transparentBackground, textStyle: tmp16, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
            const tmp20 = state(GuildTagDefault, obj4);
            cResult[11] = guildTagBadgeSize;
            cResult[12] = guildTagTextVariant;
            cResult[13] = tmp5.transparentBackground;
            cResult[14] = !tmp4;
            cResult[15] = tmp16;
            cResult[16] = user.id;
            cResult[17] = tmp20;
            tmp17 = tmp20;
          }
        }
        const items = [tmp5.guildTag, tmp13, style];
        cResult[5] = style;
        cResult[6] = tmp5.guildTag;
        cResult[7] = tmp13;
        cResult[8] = items;
        tmp14 = items;
      }
      const obj5 = { minHeight: sum, paddingHorizontal: guildTagHorizontalPadding };
      cResult[2] = guildTagHorizontalPadding;
      cResult[3] = sum;
      cResult[4] = obj5;
      tmp13 = obj5;
    }
  }
  return null;
}) : ((style) => {
  ({ user, themeType, showToastOnPress } = style);
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  const tmp = closure_17();
  let primaryGuild;
  if (user != null) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuild);
  let tmp6;
  ({ tag, guildId } = userPrimaryGuild);
  if (null != themeType) {
    tmp6 = dependencyMap2[themeType];
  }
  if (tmp6 == null) {
    tmp6 = closure_18;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp6);
  let tmp9 = null;
  if (null != tag) {
    tmp9 = null;
    if (null != guildId) {
      const obj2 = { style: null, children: null };
      const items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = style.style;
      obj2.style = items;
      const obj4 = { userId: user.id, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: null, badgeSize: null, textVariant: null };
      const obj5 = { lineHeight: tmp8 };
      obj4.textStyle = obj5;
      obj4.badgeSize = guildTagBadgeSize;
      obj4.textVariant = guildTagTextVariant;
      obj2.children = state(GuildTagDefault, obj4);
      tmp9 = state(hasOwnProperty, obj2);
    }
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
let obj5 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(45);
  ({ user, guildId, displayName, pronouns, style, badges, catalogBadges, badgeContainerBackground, themeType, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, showBadgeToastOnPress, canOpenBadgeDirectory, pendingDisplayNameStyles } = arg0);
  const tmp3 = closure_17();
  if (cResult[0] !== badgeContainerBackground) {
    const obj2 = { backgroundColor: badgeContainerBackground };
    cResult[0] = badgeContainerBackground;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const name = UserUtilsDefault.useName(user);
  UserUtilsDefault;
  if (cResult[2] === style) {
    if (cResult[3] === tmp3.container) {
      let tmp8 = cResult[4];
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
                    if (cResult[13] === user) {
                      let tmp11 = cResult[14];
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
                                if (cResult[21] === userTagAccessibilityHint) {
                                  let tmp16 = cResult[22];
                                }
                                if (cResult[23] === tmp4) {
                                  if (cResult[24] === showBadgeToastOnPress) {
                                    if (cResult[25] === themeType) {
                                      if (cResult[26] === user) {
                                        let tmp20 = cResult[27];
                                      }
                                      if (cResult[28] === badges) {
                                        if (cResult[29] === canOpenBadgeDirectory) {
                                          if (cResult[30] === catalogBadges) {
                                            if (cResult[31] === tmp4) {
                                              if (cResult[32] === showBadgeToastOnPress) {
                                                if (cResult[33] === themeType) {
                                                  if (cResult[34] === user.id) {
                                                    let tmp24 = cResult[35];
                                                  }
                                                  if (cResult[36] === tmp3.details) {
                                                    if (cResult[37] === tmp16) {
                                                      if (cResult[38] === tmp20) {
                                                        if (cResult[39] === tmp24) {
                                                          let tmp28 = cResult[40];
                                                        }
                                                        if (cResult[41] === tmp8) {
                                                          if (cResult[42] === tmp11) {
                                                            if (cResult[43] === tmp28) {
                                                              let tmp32 = cResult[44];
                                                            }
                                                            return tmp32;
                                                          }
                                                        }
                                                        const obj4 = { style: tmp8, children: null };
                                                        const items = [tmp11, tmp28];
                                                        obj4.children = items;
                                                        const tmp35 = closure_1_15(hasOwnProperty, obj4);
                                                        cResult[41] = tmp8;
                                                        cResult[42] = tmp11;
                                                        cResult[43] = tmp28;
                                                        cResult[44] = tmp35;
                                                        tmp32 = tmp35;
                                                      }
                                                    }
                                                  }
                                                  const obj5 = { style: tmp3.details, children: null };
                                                  const items1 = [tmp16, tmp20, tmp24];
                                                  obj5.children = items1;
                                                  const tmp31 = closure_1_15(hasOwnProperty, obj5);
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
                                      const tmp27 = state(closure_23, obj6);
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
                                const tmp23 = state(closure_24, obj7);
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
                    const tmp19 = state(closure_21, obj8);
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
    const tmp14 = state(closure_20, obj9);
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
  ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, canOpenBadgeDirectory, pendingDisplayNameStyles } = arg0);
  const tmp = closure_17();
  const obj = { backgroundColor: badgeContainerBackground };
  const name = UserUtilsDefault.useName(user);
  const obj4 = { style: null, children: null };
  const items = [tmp.container, style];
  obj4.style = items;
  const obj5 = { user, guildId, name: null, themeType: null, onPress: null, accessibilityHint: null, displayNameAccessibilityRole: null, showChevron: null, pendingDisplayNameStyles: null };
  let tmp8 = name;
  const userTag = UserUtilsDefault.useUserTag(user);
  if ("" !== displayName) {
    if (displayName == null) {
      displayName = name;
    }
    tmp8 = displayName;
  }
  obj5.name = tmp8;
  obj5.themeType = themeType;
  obj5.onPress = onPressDisplayName;
  obj5.accessibilityHint = displayNameAccessibilityHint;
  obj5.displayNameAccessibilityRole = displayNameAccessibilityRole;
  obj5.showChevron = showChevron;
  obj5.pendingDisplayNameStyles = pendingDisplayNameStyles;
  const items1 = [state(closure_20, obj5), ];
  const obj6 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [state(closure_21, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), state(closure_24, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }), state(closure_23, { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress })];
  obj6.children = items2;
  items1[1] = closure_1_15(hasOwnProperty, obj6);
  obj4.children = items1;
  return closure_1_15(hasOwnProperty, obj4);
});
export const DisplayName = tmp6;
export const UserTagAndPronouns = tmp7;
export const ProfileBadgeRows = tmp8;
