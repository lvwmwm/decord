// Module ID: 11602
// Function ID: 11603
// Name: UserProfilePrimaryInfo
// Dependencies: [19, 17, 8904, 1385, 8895, 7513, 1072, 8534, 8906, 21, 575, 5141, 1377, 10950, 10951, 9347, 7121, 11603, 5761, 11605, 5323, 11636, 1113, 11638, 8896, 5851, 11639, 7703, 5846, 8956, 9834, 9837, 6919, 11641, 11642, 11644, 5732, 504, 11645, 11649, 11672, 1493, 8171, 11673, 8877, 9440, 5195, 2]
// Exports: default

// Module 11602 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1072 */;
import UserUtilsDefault from "UserUtils" /* 5195 */;
import Text_Text from "Text/Text" /* 5761 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import QuestTypes from "QuestTypes" /* 6919 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import GuildTagConstants from "GuildTagConstants" /* 8534 */;
import GuildTagUtils from "GuildTagUtils" /* 8877 */;
import Constants3 from "Constants" /* 8895 */;
import BadgeId from "BadgeId" /* 8896 */;
import Constants4 from "Constants" /* 8906 */;
import useBadges from "useBadges" /* 8956 */;
import BotTagDefault from "BotTag" /* 9347 */;
import GuildTagDefault from "GuildTag" /* 9440 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9834 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9837 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10950 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11645 */;
import BadgeUtils from "BadgeUtils" /* 11649 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8904 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 7513 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let UserProfileThemeTypes;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp4;
const PlatformUtils = tmp4(1377);
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
    let tmp = closure_19();
    importDefault = tmp;
    let tmp2;
    if (null != themeType) {
      tmp2 = closure_21[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_20;
    }
    function renderBotTag() {
      let tmp;
      if (user.isSystemUser()) {
        const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
        const tmp12 = BotTagDefault;
        tmp = authStore3(tmp12, obj2);
      } else {
        tmp = null;
        if (user.bot) {
          const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
          const tmp5 = BotTagDefault;
          tmp = authStore3(tmp5, obj3);
        }
      }
      return tmp;
    }
    const headingVariant = tmp2.headingVariant;
    if (null == onPress) {
      let tmp5 = closure_15;
      const obj = { children: items };
      let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10951).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      const tmp10 = UsernameWithEffectsDefault;
      items = [closure_14(tmp10, obj3), renderBotTag()];
      tmp12Result = closure_15(closure_5, obj);
    } else {
      let tmp12 = closure_15;
      const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: tmp.displayName, children: items1 };
      const PressableOpacity = user(7121).PressableOpacity;
      const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10951).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      const tmp17 = UsernameWithEffectsDefault;
      items1 = [closure_14(tmp17, obj8), renderBotTag(), ];
      const tmp13 = user;
      const tmp15 = closure_14;
      if (showChevron) {
        showChevron = tmp15(tmp13(11603).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
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
    const tmp = closure_19();
    if (tmp8Result) {
      tmp8Result = pronouns.length > 0;
    }
    let tmp3;
    if (null != themeType) {
      tmp3 = closure_21[themeType];
    }
    if (tmp3 == null) {
      tmp3 = closure_20;
    }
    textVariant = tmp3.textVariant;
    const tmp5 = userTag;
    let tmp6 = userTagAccessibilityHint;
    const tmp7 = closure_22(userTag(userTagAccessibilityHint[18]).TextStyleSheet[textVariant].lineHeight);
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
          const tmp10 = authStore3(Text_Text.Text, obj2);
          const tmp6 = require;
          if (null != onPressUserTag) {
            const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
            tmp5Result = tmp5(tmp6(7121).PressableOpacity, obj3);
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
      const tmp11 = closure_14;
      let tmp10 = closure_16;
      let obj2 = { variant: textVariant, color: "mobile-text-heading-primary", style: tmp7.text, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
      const items2 = [closure_14(tmp5(tmp6[18]).Text, obj2), ];
      if (null != onPressUserTag) {
        let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp11(tmp5(tmp6[18]).Text, obj4) };
        const PressableOpacity = tmp5(tmp6[16]).PressableOpacity;
        obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: tmp7.text, children: pronouns };
        tmp11Result = tmp11(PressableOpacity, obj3);
      } else {
        const obj5 = { children: tmp11(tmp5(tmp6[18]).Text, obj6) };
        obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, style: tmp7.text, children: pronouns };
        tmp11Result = tmp11(tmp9, obj5);
      }
      const obj7 = { children: items2 };
      items2[1] = tmp11Result;
      tmp8Result = tmp8(tmp10, obj7);
    }
    items1[1] = tmp8Result;
    return closure_15(closure_5, obj);
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
  const tmp = closure_19();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = react.useRef(null);
  let obj2 = source(label[19]);
  react = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
  let obj3 = source(label[20]);
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
  const tmp4Result = source(label[21]);
  const orbsBadgeCoachmark = tmp4Result.useOrbsBadgeCoachmark(obj);
  const intl = tmp4(tmp5[22]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[22]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  const tmp9 = UserProfileThemeTypes;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    let obj4 = { targetRef: ref, badgeId: id };
    tmp11 = closure_14(id(tmp5[23]), obj4);
  }
  let tmp14 = themeType !== tmp9.YOU_SCREEN || typeof id !== "string";
  if (!tmp14) {
    let tmp15 = "orb_profile_badge" !== id;
    if (tmp15) {
      let tmp16 = getBadgeName;
      tmp15 = id !== getBadgeName(tmp4(tmp5[24]).BadgeId.ORB_PROFILE);
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
    const tmp20 = id(label[21]);
    const merged = Object.assign(orbsBadgeCoachmark.props);
    tmp17 = closure_14(tmp20, obj5);
  }
  const obj6 = { children: null };
  const tmp23 = closure_15;
  const tmp24 = closure_16;
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
    const PressableOpacity = tmp4(tmp5[16]).PressableOpacity;
    if (null != source) {
      const obj8 = { style: items, source };
      items = [tmp.badge, tmp2];
      tmp25Result = tmp25(id(tmp5[25]), obj8);
    } else {
      tmp25Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp25Result = tmp25(id(tmp5[26]), obj9);
      }
    }
    const items1 = [closure_14(PressableOpacity, obj7), tmp11, tmp17];
    obj6.children = items1;
    tmp30 = obj6;
  } else {
    const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: tmp25Result2 };
    const tmp26 = closure_5;
    if (null != source) {
      const obj11 = { style: items2, source };
      items2 = [tmp.badge, tmp2];
      tmp25Result2 = tmp25(id(tmp5[25]), obj11);
    } else {
      tmp25Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp25Result2 = tmp25(id(tmp5[26]), obj12);
      }
    }
    const items3 = [closure_14(tmp26, obj10), tmp11, tmp17];
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
    let combined;
    let date;
    let formatToPlainString;
    let intl2;
    let intl7;
    let isTryItOut;
    let items10;
    let items6;
    let items7;
    let items8;
    let items9;
    let obj15;
    let obj4;
    let onOpenBadgeDirectory;
    let result;
    let tmp42Result;
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
    let profileBackgroundColor = userId.profileBackgroundColor;
    let badgeSize;
    let badgeRowHorizontalPadding;
    let isBadgeManagementEnabled;
    let showToastOnPress;
    let closure_10;
    let isBadgeUnreadStateEnabled;
    let closure_12;
    let closure_13;
    let mapped;
    let width;
    let tmp = closure_19();
    const badgeRow = tmp;
    let tmp2;
    if (null != themeType) {
      let tmp3 = closure_21;
      tmp2 = closure_21[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_20;
    }
    badgeSize = tmp2.badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    let tmp4 = userId;
    let tmp5 = onOpenBadgeDirectory;
    const textVariant = tmp2.textVariant;
    let obj = userId(onOpenBadgeDirectory[33]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    let obj2 = userId(onOpenBadgeDirectory[34]);
    const tmp7 = obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
    showToastOnPress = tmp8;
    const currentUser = badgeRowHorizontalPadding.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    closure_10 = tmp11;
    let str = "ProfileBadgeRows (other)";
    const useIsBadgeUnreadStateEnabled = tmp4(tmp5[35]).useIsBadgeUnreadStateEnabled;
    tmp4(tmp5[35]);
    if (userId === id) {
      str = "ProfileBadgeRows (own)";
    }
    isBadgeUnreadStateEnabled = useIsBadgeUnreadStateEnabled({ location: str });
    const tmp4Result4 = tmp4(tmp5[36]);
    const token = tmp4Result4.useToken(badges(tmp5[10]).colors.BADGE_PRIMARY_BACKGROUND);
    const tmp4Result5 = tmp4(tmp5[36]);
    const token1 = tmp4Result5.useToken(badges(tmp5[10]).colors.BACKGROUND_SURFACE_HIGH);
    let items = [badgeSize];
    const items1 = [userId === id, isBadgeUnreadStateEnabled, userId];
    const tmp4Result6 = tmp4(tmp5[37]);
    const stateFromStores = tmp4Result6.useStateFromStores(items, () => {
      const tmp = closure_10 && isBadgeUnreadStateEnabled && BadgeDirectoryStore.getUnreadBadges(userId).length > 0;
      return tmp;
    }, items1);
    const items2 = [userId, onOpenBadgeDirectory];
    const callback = style.useCallback(() => {
      if (onOpenBadgeDirectory != null) {
        tmp();
      }
      const obj = openBadgeDirectoryScreen;
      const obj2 = { targetUserId: userId };
      const result = obj.openBadgeDirectoryScreen(obj2);
    }, items2);
    const items3 = [badges];
    closure_12 = style.useMemo(() => {
      const obj = BadgeUtils;
      return obj.getLegacyIconUrlByBadgeId(badges);
    }, items3);
    const items4 = [badges];
    closure_13 = style.useMemo(() => {
      const obj = BadgeUtils;
      return obj.getLegacyDescriptionByBadgeId(badges);
    }, items4);
    mapped = badges.map((id) => {
      let obj2;
      let obj3;
      let obj4;
      const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
      obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
      obj3 = BadgeUtils;
      obj4 = BadgeUtils;
      return authStore3(ProfileBadge, obj, id.id);
    });
    const obj6 = style;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      let obj3 = { source: badges(tmp5[40]), id: "premium", userId, label: formatToPlainString(v8zbGNR, obj4), badgeSize, showToastOnPress: tmp8 };
      const push = mapped.push;
      const intl = tmp4(tmp5[22]).intl;
      formatToPlainString = intl.formatToPlainString;
      obj4 = { date };
      const _Date = Date;
      const self = this;
      const self2 = this;
      v8zbGNR = tmp4(tmp5[22]).t["8zbGNR"];
      date = new Date();
      push(mapped(ProfileBadge, obj3));
    }
    width = tmp14(tmp5[41])().width;
    const items5 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
    const memo = obj6.useMemo(() => {
      const tmp = isBadgeManagementEnabled;
      if (tmp) {
        return [];
      } else {
        const _Math = Math;
        const rounded = Math.floor((width - 2 * closure_10 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
        const _Array = Array;
        const _Math2 = Math;
        const obj = { length: Math.ceil(mapped.length / rounded) };
        return from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
      }
    }, items5);
    if (isBadgeManagementEnabled) {
      let mapped1;
      if (catalogBadges != null) {
        const substr = catalogBadges.slice(0, tmp4(tmp5[39]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          let obj4;
          let tmp5;
          const value = closure_12.get(badge_id.badge_id);
          let obj = getBadgeName(badge_id.badge_id);
          const tmp2 = authStore3;
          const tmp3 = ProfileBadge;
          const tmp4 = DEFAULT_PREMIUM_BADGE_ID;
          if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
            obj = tmp4;
          }
          const obj2 = { id: obj, userId, catalogBadge: badge_id, source: tmp5, label: obj4.getProfileBadgeLabel(closure_13.get(badge_id.badge_id), badge_id), badgeSize, themeType, showToastOnPress };
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
        mapped1 = mapped.slice(0, tmp4(tmp5[39]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      let length;
      if (catalogBadges != null) {
        length = catalogBadges.length;
      }
      if (length == null) {
        length = mapped.length;
      }
      const diff = length - mapped1.length;
      let tmp32Result = null;
      if (tmp7) {
        tmp32Result = null;
        if (stateFromStores) {
          size = { width: height, height, style: tmp.unreadDot, pointerEvents: "none", "aria-hidden": true, children: items6 };
          const obj5 = { cx: result, cy: result, r: result, fill: profileBackgroundColor };
          result = height / 2;
          const tmp14Result = badges(tmp5[42]);
          const Circle = tmp4(tmp5[42]).Circle;
          const tmp32 = width;
          if (profileBackgroundColor == null) {
            profileBackgroundColor = token1;
          }
          items6 = [mapped(Circle, obj5), ];
          const obj7 = { cx: result, cy: result, r: PX_6 / 2, fill: token };
          items6[1] = mapped(tmp4(tmp5[42]).Circle, obj7);
          tmp32Result = tmp32(tmp14Result, size);
        }
      }
      if (0 === mapped1.length) {
        let tmp48Result = null;
        if (tmp7) {
          tmp48Result = null;
          if (userId === id) {
            const obj8 = { ref: badgeDirectoryEntryPointRef, accessibilityRole: "button", accessibilityLabel: combined, onPress: callback, style: items7, children: items8 };
            const PressableOpacity2 = tmp4(tmp5[16]).PressableOpacity;
            const intl5 = tmp4(tmp5[22]).intl;
            const stringResult = intl5.string(tmp4(tmp5[22]).t.l6w3Vj);
            const tmp48 = width;
            if (stateFromStores) {
              const intl6 = tmp4(tmp5[22]).intl;
              const _HermesInternal3 = HermesInternal;
              combined = "" + stringResult + ", " + intl6.string(tmp4(tmp5[22]).t.y2b7CA);
            } else {
              combined = stringResult;
            }
            items7 = [tmp.addBadgesChip, , ];
            const obj9 = { minHeight: badgeSize + 4 };
            items7[1] = obj9;
            items7[2] = style;
            const obj10 = { size: "xs", color: badges(tmp5[10]).colors.TEXT_STRONG };
            const PlusMediumIcon = tmp4(tmp5[43]).PlusMediumIcon;
            items8 = [mapped(PlusMediumIcon, obj10), , ];
            const obj11 = { variant: "body-xs/normal", color: "text-strong", children: intl7.string(tmp4(tmp5[22]).t.l6w3Vj) };
            const Text2 = tmp4(tmp5[18]).Text;
            intl7 = tmp4(tmp5[22]).intl;
            items8[1] = mapped(Text2, obj11);
            items8[2] = tmp32Result;
            tmp48Result = tmp48(PressableOpacity2, obj8);
          }
        }
        return tmp48Result;
      } else {
        const obj12 = { style: items9, children: items10 };
        items9 = [, , , ];
        ({ badgeRow: arr14[0], limitedBadgeRow: arr14[1] } = tmp);
        const obj13 = { paddingHorizontal: badgeRowHorizontalPadding };
        items9[2] = obj13;
        items9[3] = style;
        items10 = [mapped1, , ];
        let tmp40 = diff > 0;
        const tmp53 = width;
        if (tmp40) {
          const obj14 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(tmp4(tmp5[22]).t.eIHfGZ, obj15), children: "+" + diff };
          const Text = tmp4(tmp5[18]).Text;
          intl2 = tmp4(tmp5[22]).intl;
          const _HermesInternal = HermesInternal;
          obj15 = { overflow_count: diff };
          tmp40 = mapped(Text, obj14);
        }
        items10[1] = tmp40;
        items10[2] = tmp32Result;
        const tmp53Result = tmp53(badgeRow, obj12);
        const obj16 = { style: tmp.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: tmp42Result };
        tmp42Result = tmp53Result;
        if (tmp7) {
          let combined1;
          const PressableOpacity = tmp4(tmp5[16]).PressableOpacity;
          const intl3 = tmp4(tmp5[22]).intl;
          const stringResult1 = intl3.string(tmp4(tmp5[22]).t.PEjP4L);
          if (stateFromStores) {
            const intl4 = tmp4(tmp5[22]).intl;
            const _HermesInternal2 = HermesInternal;
            combined1 = "" + stringResult1 + ", " + intl4.string(tmp4(tmp5[22]).t.y2b7CA);
          } else {
            combined1 = stringResult1;
          }
          const obj17 = { accessibilityRole: "button", accessibilityLabel: combined1, onPress: callback, children: tmp53Result };
          tmp42Result = tmp42(PressableOpacity, obj17);
        }
        return mapped(badgeRow, obj16);
      }
    } else {
      const obj18 = {
        style: tmp.badges,
        children: memo.map((children, index) => {
            let items;
            const obj = { style: items, children };
            items = [badgeRow.badgeRow, , ];
            const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
            items[1] = obj2;
            items[2] = style;
            return authStore3(hasOwnProperty, obj, index);
          })
      };
      return mapped(badgeRow, obj18);
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
  const tmp = closure_19();
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
    tmp7 = closure_21[themeType];
  }
  if (tmp7 == null) {
    tmp7 = closure_20;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
  PlatformUtils;
  let tmp10 = null;
  if (null != tag) {
    tmp10 = null;
    if (null != guildId) {
      const obj2 = { style: items, children: authStore3(GuildTagDefault, obj4) };
      items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = style;
      obj4 = { primaryGuild: primaryGuildOverride, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: obj5, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
      obj5 = { lineHeight: tmp9 };
      tmp10 = authStore3(hasOwnProperty, obj2);
    }
  }
  return tmp10;
}
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const getBadgeName = Constants3.getBadgeName;
({ DIVIDER_DOT: c9, PROFILE_SIDE_PADDING: c10, UserProfileThemeTypes } = Constants);
const UserSettingsSections = Constants2.UserSettingsSections;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = Constants4.DEFAULT_PREMIUM_BADGE_ID;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
const PX_6 = nativeDefault.space.PX_6;
const authStore5 = PX_6 + 4;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: obj2, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: obj3, limitedBadgeRow: { alignItems: "center" }, unreadDot: { position: "absolute", top: -2, right: -2 }, addBadgesChip: obj4 };
obj2 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj4 = { flexDirection: "row", alignItems: "center", alignSelf: "center", columnGap: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.sm };
let closure_19 = createStyles(obj);
let closure_20 = { headingVariant: "heading-xl/semibold", textVariant: "body-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "body-sm/medium", guildTagHorizontalPadding: 8 };
let obj5 = { headingVariant: "heading-lg/semibold", textVariant: "body-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "body-xs/medium", guildTagHorizontalPadding: 6 };
let closure_21 = { [UserProfileThemeTypes.PREVIEW]: obj5 };
createStyles = createStyles_mod;
const authStore6 = createStyles.createStyles((arg0) => {
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
  let profileBackgroundColor;
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
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, profileBackgroundColor, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles, primaryGuildOverride } = arg0);
  if (hideBadges === undefined) {
    hideBadges = false;
  }
  const tmp = closure_19();
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
  items1 = [authStore3(tmp7, obj5), ];
  let tmp11 = null;
  const obj6 = { style: tmp.details, children: items2 };
  const tmp10 = UserTagAndPronouns;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  items2 = [authStore3(tmp10, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), authStore3(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }), ];
  let tmp6Result = !hideBadges;
  if (tmp6Result) {
    const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress, profileBackgroundColor };
    tmp6Result = tmp6(ProfileBadgeRows, obj7);
  }
  items2[2] = tmp6Result;
  items1[1] = closure_15(hasOwnProperty, obj6);
  return closure_15(hasOwnProperty, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
