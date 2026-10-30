// Module ID: 11376
// Function ID: 11377
// Name: UserProfilePrimaryInfo
// Dependencies: [19, 17, 1384, 8746, 7371, 1072, 8385, 8757, 21, 5009, 575, 1376, 10752, 10753, 9183, 6974, 11377, 5619, 11379, 5194, 11411, 1114, 11413, 8747, 5712, 11414, 7557, 5707, 8807, 9664, 9667, 6778, 11416, 11417, 11419, 11423, 11448, 1492, 11449, 8728, 9276, 5063, 2]
// Exports: default

// Module 11376 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1072 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import Text_Text from "Text/Text" /* 5619 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import GuildTagConstants from "GuildTagConstants" /* 8385 */;
import GuildTagUtils from "GuildTagUtils" /* 8728 */;
import Constants3 from "Constants" /* 8746 */;
import BadgeId from "BadgeId" /* 8747 */;
import Constants4 from "Constants" /* 8757 */;
import useBadges from "useBadges" /* 8807 */;
import BotTagDefault from "BotTag" /* 9183 */;
import GuildTagDefault from "GuildTag" /* 9276 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11419 */;
import BadgeUtils from "BadgeUtils" /* 11423 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 7371 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

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
let tmp4;
const PlatformUtils = tmp4(1376);
class DisplayName {
  constructor(user) {
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
      let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10753).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      const tmp10 = UsernameWithEffectsDefault;
      items = [closure_13(tmp10, obj3), renderBotTag()];
      tmp12Result = closure_14(closure_5, obj);
    } else {
      let tmp12 = closure_14;
      const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: tmp.displayName, children: items1 };
      const PressableOpacity = user(6974).PressableOpacity;
      const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10753).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      const tmp17 = UsernameWithEffectsDefault;
      items1 = [closure_13(tmp17, obj8), renderBotTag(), ];
      const tmp13 = user;
      const tmp15 = closure_13;
      if (showChevron) {
        showChevron = tmp15(tmp13(11377).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      tmp12Result = tmp12(PressableOpacity, obj7);
    }
    return tmp12Result;
  }
}
class UserTagAndPronouns {
  constructor(userTag) {
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
    let text;
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
    const tmp7 = closure_19(userTag(userTagAccessibilityHint[17]).TextStyleSheet[textVariant].lineHeight);
    text = tmp7;
    const items = [onPressUserTag, tmp7.text, textVariant, userTag, userTagAccessibilityHint];
    let obj = { style: tmp.detailsText, children: items1 };
    items1 = [
      textVariant.useCallback(() => {
        if (null == userTag) {
          return null;
        } else {
          let tmp5Result;
          const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, style: text.text, children: userTag };
          const tmp10 = map1(Text_Text.Text, obj2);
          const tmp6 = require;
          if (null != onPressUserTag) {
            const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
            tmp5Result = tmp5(tmp6(6974).PressableOpacity, obj3);
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
      const items2 = [closure_13(tmp5(tmp6[17]).Text, obj2), ];
      if (null != onPressUserTag) {
        let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp11(tmp5(tmp6[17]).Text, obj4) };
        const PressableOpacity = tmp5(tmp6[15]).PressableOpacity;
        obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: tmp7.text, children: pronouns };
        tmp11Result = tmp11(PressableOpacity, obj3);
      } else {
        const obj5 = { children: tmp11(tmp5(tmp6[17]).Text, obj6) };
        obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: tmp7.text, children: pronouns };
        tmp11Result = tmp11(tmp9, obj5);
      }
      const obj7 = { children: items2 };
      items2[1] = tmp11Result;
      tmp8Result = tmp8(tmp10, obj7);
    }
    items1[1] = tmp8Result;
    return closure_14(closure_5, obj);
  }
}
function ProfileBadge(source) {
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
  let obj2 = source(label[18]);
  react = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
  let obj3 = source(label[19]);
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
  const tmp4Result = source(label[20]);
  const orbsBadgeCoachmark = tmp4Result.useOrbsBadgeCoachmark(obj);
  const intl = tmp4(tmp5[21]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[21]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  const tmp9 = UserProfileThemeTypes;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    let obj4 = { targetRef: ref, badgeId: id };
    tmp11 = closure_13(id(tmp5[22]), obj4);
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
    const tmp20 = id(label[20]);
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
    const PressableOpacity = tmp4(tmp5[15]).PressableOpacity;
    if (null != source) {
      const obj8 = { style: items, source };
      items = [tmp.badge, tmp2];
      tmp25Result = tmp25(id(tmp5[24]), obj8);
    } else {
      tmp25Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp25Result = tmp25(id(tmp5[25]), obj9);
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
      tmp25Result2 = tmp25(id(tmp5[24]), obj11);
    } else {
      tmp25Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp25Result2 = tmp25(id(tmp5[25]), obj12);
      }
    }
    const items3 = [closure_13(tmp26, obj10), tmp11, tmp17];
    obj6.children = items3;
    tmp30 = obj6;
  }
  return tmp23(tmp24, tmp30);
}
class ProfileBadgeRows {
  constructor(userId) {
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
    let obj = userId(onOpenBadgeDirectory[32]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    let obj2 = userId(onOpenBadgeDirectory[33]);
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
      return map1(ProfileBadge, obj, id.id);
    });
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      let obj4 = { source: badges(tmp5[36]), id: "premium", userId, label: formatToPlainString(v8zbGNR, obj5), badgeSize, showToastOnPress: tmp8 };
      const push = mapped.push;
      const intl = tmp4(tmp5[21]).intl;
      formatToPlainString = intl.formatToPlainString;
      const _Date = Date;
      const self = this;
      const self2 = this;
      obj5 = { date };
      v8zbGNR = tmp4(tmp5[21]).t["8zbGNR"];
      date = new Date();
      push(width(ProfileBadge, obj4));
    }
    width = badges(tmp5[37])().width;
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
        const substr = catalogBadges.slice(0, tmp4(tmp5[35]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          let obj4;
          let tmp5;
          const value = closure_10.get(badge_id.badge_id);
          let obj = getBadgeName(badge_id.badge_id);
          const tmp2 = map1;
          const tmp3 = ProfileBadge;
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
        mapped1 = mapped.slice(0, tmp4(tmp5[35]).MAX_DISPLAYED_PROFILE_BADGES);
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
            const obj6 = { ref: badgeDirectoryEntryPointRef, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp4(tmp5[21]).t.l6w3Vj), onPress: callback, style: items4, children: items5 };
            const PressableOpacity2 = tmp4(tmp5[15]).PressableOpacity;
            intl4 = tmp4(tmp5[21]).intl;
            items4 = [tmp.addBadgesChip, , ];
            const obj7 = { minHeight: badgeSize + 4 };
            items4[1] = obj7;
            items4[2] = style;
            const obj8 = { size: "xs", color: tmp19(tmp5[10]).colors.TEXT_STRONG };
            const PlusMediumIcon = tmp4(tmp5[38]).PlusMediumIcon;
            items5 = [width(PlusMediumIcon, obj8), ];
            const obj9 = { variant: "text-xs/normal", color: "text-strong", children: intl5.string(tmp4(tmp5[21]).t.l6w3Vj) };
            const Text2 = tmp4(tmp5[17]).Text;
            intl5 = tmp4(tmp5[21]).intl;
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
          const obj12 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(tmp4(tmp5[21]).t.eIHfGZ, obj13), children: "+" + diff };
          const Text = tmp4(tmp5[17]).Text;
          intl2 = tmp4(tmp5[21]).intl;
          const _HermesInternal = HermesInternal;
          obj13 = { overflow_count: diff };
          tmp27 = width(Text, obj12);
        }
        items7[1] = tmp27;
        const tmp32Result = tmp32(badgeRow, obj10);
        const obj14 = { style: tmp.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: tmp29Result };
        tmp29Result = tmp32Result;
        if (tmp7) {
          const obj15 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp4(tmp5[21]).t.PEjP4L), onPress: callback, children: tmp32Result };
          const PressableOpacity = tmp4(tmp5[15]).PressableOpacity;
          intl3 = tmp4(tmp5[21]).intl;
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
  }
}
function GuildTag(style) {
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
}
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
const authStore4 = createStyles(obj);
let closure_17 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
let obj5 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
const authStore5 = { [UserProfileThemeTypes.PREVIEW]: obj5 };
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles((arg0) => {
  let sum = arg0;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    sum = arg0 + 2;
  }
  return { text: { lineHeight: sum } };
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
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
  const tmp7 = DisplayName;
  if ("" !== displayName) {
    if (displayName == null) {
      displayName = name;
    }
    tmp8 = displayName;
  }
  items1 = [map1(tmp7, obj5), ];
  let tmp11 = null;
  const obj6 = { style: tmp.details, children: items2 };
  const tmp10 = UserTagAndPronouns;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  items2 = [map1(tmp10, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), map1(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }), ];
  let tmp6Result = !hideBadges;
  if (tmp6Result) {
    const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
    tmp6Result = tmp6(ProfileBadgeRows, obj7);
  }
  items2[2] = tmp6Result;
  items1[1] = authStore3(hasOwnProperty, obj6);
  return authStore3(hasOwnProperty, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
