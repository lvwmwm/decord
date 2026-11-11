// Module ID: 15356
// Function ID: 15357
// Name: UserProfilePrimaryInfo
// Dependencies: [32, 19, 17, 8481, 1385, 8413, 7896, 1072, 8344, 8483, 21, 575, 5243, 1377, 9998, 9999, 10807, 7364, 10493, 5866, 15357, 5430, 15359, 1113, 15361, 8414, 5957, 15165, 8537, 5952, 8541, 10068, 10071, 5278, 9437, 10012, 15362, 504, 11759, 8479, 15161, 15162, 10046, 15363, 1493, 9419, 13896, 8343, 10587, 5309, 2]
// Exports: default

// Module 15356 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1072 */;
import QuestTypes from "QuestTypes" /* 5278 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import Text_Text from "Text/Text" /* 5866 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import GuildTagUtils from "GuildTagUtils" /* 8343 */;
import GuildTagConstants from "GuildTagConstants" /* 8344 */;
import Constants3 from "Constants" /* 8413 */;
import BadgeId from "BadgeId" /* 8414 */;
import Constants4 from "Constants" /* 8483 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import useBadges from "useBadges" /* 8541 */;
import ClipView from "ClipView" /* 9437 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 9998 */;
import BadgeUtils from "BadgeUtils" /* 10046 */;
import captureAdUserAction2 from "captureAdUserAction" /* 10068 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 10071 */;
import GuildTagDefault from "GuildTag" /* 10587 */;
import BotTagDefault from "BotTag" /* 10807 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 15161 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 15162 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8481 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 7896 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let StyleSheet;
let UserProfileThemeTypes;
let c10;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp4;
let unpackModuleId;
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
    let tmp = closure_20();
    importDefault = tmp;
    let tmp2;
    if (null != themeType) {
      tmp2 = closure_22[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_21;
    }
    function renderBotTag() {
      let tmp;
      if (user.isSystemUser()) {
        const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
        const tmp12 = BotTagDefault;
        tmp = closure_15(tmp12, obj2);
      } else {
        tmp = null;
        if (user.bot) {
          const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
          const tmp5 = BotTagDefault;
          tmp = closure_15(tmp5, obj3);
        }
      }
      return tmp;
    }
    const headingVariant = tmp2.headingVariant;
    if (null == onPress) {
      let tmp5 = closure_16;
      const obj = { children: items };
      let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(9999).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      const tmp10 = UsernameWithEffectsDefault;
      items = [closure_15(tmp10, obj3), renderBotTag()];
      tmp12Result = closure_16(closure_6, obj);
    } else {
      let tmp12 = closure_16;
      const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: tmp.displayName, children: items1 };
      const PressableOpacity = user(7364).PressableOpacity;
      const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(9999).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      const tmp17 = UsernameWithEffectsDefault;
      items1 = [closure_15(tmp17, obj8), renderBotTag(), ];
      const tmp13 = user;
      const tmp15 = closure_15;
      if (showChevron) {
        showChevron = tmp15(tmp13(10493).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
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
    let text;
    let themeType;
    userTag = userTag.userTag;
    ({ pronouns, themeType, onPressUserTag } = userTag);
    const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
    let textVariant;
    react = undefined;
    ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
    let tmp8Result = null != pronouns;
    const tmp = closure_20();
    if (tmp8Result) {
      tmp8Result = pronouns.length > 0;
    }
    let tmp3;
    if (null != themeType) {
      tmp3 = closure_22[themeType];
    }
    if (tmp3 == null) {
      tmp3 = closure_21;
    }
    textVariant = tmp3.textVariant;
    const tmp5 = userTag;
    let tmp6 = userTagAccessibilityHint;
    const tmp7 = closure_23(userTag(userTagAccessibilityHint[19]).TextStyleSheet[textVariant].lineHeight);
    react = tmp7;
    const items = [onPressUserTag, tmp7.text, textVariant, userTag, userTagAccessibilityHint];
    let obj = { style: tmp.detailsText, children: items1 };
    items1 = [
      react.useCallback(() => {
        if (null == userTag) {
          return null;
        } else {
          let tmp5Result;
          const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, style: text.text, children: userTag };
          const tmp10 = closure_15(Text_Text.Text, obj2);
          const tmp6 = require;
          if (null != onPressUserTag) {
            const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
            tmp5Result = tmp5(tmp6(7364).PressableOpacity, obj3);
          } else {
            const obj = { children: tmp10 };
            tmp5Result = tmp5(metroRequire, obj);
          }
          return tmp5Result;
        }
      }, items)(),

    ];
    if (tmp8Result) {
      let tmp11Result;
      const tmp11 = closure_15;
      let tmp10 = closure_17;
      let obj2 = { variant: textVariant, color: "mobile-text-heading-primary", style: tmp7.text, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
      const items2 = [closure_15(tmp5(tmp6[19]).Text, obj2), ];
      if (null != onPressUserTag) {
        let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp11(tmp5(tmp6[19]).Text, obj4) };
        const PressableOpacity = tmp5(tmp6[17]).PressableOpacity;
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
    return closure_16(closure_6, obj);
  }
}
function ProfileBadge(source) {
  let badgeSize;
  let catalogBadge;
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
  let closure_3;
  const tmp = closure_20();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = react.useRef(null);
  let obj2 = source(label[20]);
  closure_3 = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
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
  const intl = tmp4(tmp5[23]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[23]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  const tmp9 = UserProfileThemeTypes;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    let obj4 = { targetRef: ref, badgeId: id };
    tmp11 = closure_15(id(tmp5[24]), obj4);
  }
  let tmp14 = themeType !== tmp9.YOU_SCREEN || typeof id !== "string";
  if (!tmp14) {
    let tmp15 = "orb_profile_badge" !== id;
    if (tmp15) {
      let tmp16 = getBadgeName;
      tmp15 = id !== getBadgeName(tmp4(tmp5[25]).BadgeId.ORB_PROFILE);
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
    tmp17 = closure_15(tmp20, obj5);
  }
  const obj6 = { children: null };
  const tmp23 = closure_16;
  const tmp24 = closure_17;
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
                const assetSource = hasOwnProperty.resolveAssetSource(tmp9);
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
    const PressableOpacity = tmp4(tmp5[17]).PressableOpacity;
    if (null != source) {
      const obj8 = { style: items, source };
      items = [tmp.badge, tmp2];
      tmp25Result = tmp25(id(tmp5[26]), obj8);
    } else {
      tmp25Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp25Result = tmp25(id(tmp5[27]), obj9);
      }
    }
    const items1 = [closure_15(PressableOpacity, obj7), tmp11, tmp17];
    obj6.children = items1;
    tmp30 = obj6;
  } else {
    const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: tmp25Result2 };
    const tmp26 = closure_6;
    if (null != source) {
      const obj11 = { style: items2, source };
      items2 = [tmp.badge, tmp2];
      tmp25Result2 = tmp25(id(tmp5[26]), obj11);
    } else {
      tmp25Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp25Result2 = tmp25(id(tmp5[27]), obj12);
      }
    }
    const items3 = [closure_15(tmp26, obj10), tmp11, tmp17];
    obj6.children = items3;
    tmp30 = obj6;
  }
  return tmp23(tmp24, tmp30);
}
function UnreadDotCutoutLayer(showDot) {
  let closure_2;
  let first;
  let items1;
  let obj2;
  showDot = showDot.showDot;
  first = undefined;
  dependencyMap = undefined;
  const style = showDot.style;
  let tmp = closure_20();
  [first, dependencyMap] = react.useState(null);
  let items = [showDot, first];
  const callback = react.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
  const memo = react.useMemo(() => {
    let tmp;
    if (showDot) {
      if (null != first) {
        const point = { shape: ClipView.CutoutShape.Circle, x: tmp2 - 1 - PX_6 - 2, y: -1, size };
        const items = [point];
        tmp = items;
      }
    }
    return tmp;
  }, items);
  const obj = { style: tmp.cutoutLayer, cutouts: memo, onLayout: callback, pointerEvents: "none", children: closure_15(closure_6, obj2) };
  obj2 = { style: items1 };
  items1 = [tmp.cutoutLayerFill, style];
  const tmp6 = first(9437);
  return closure_15(tmp6, obj);
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
    let items7;
    let items8;
    let items9;
    let obj16;
    let obj4;
    let onOpenBadgeDirectory;
    let tmp51Result2;
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
    let hasUnreadIndicator;
    let trackUserProfileAction;
    let ref;
    let closure_15;
    let closure_16;
    let mapped;
    let width;
    let tmp = closure_20();
    const badgeRow = tmp;
    let tmp2;
    if (null != themeType) {
      let tmp3 = closure_22;
      tmp2 = closure_22[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_21;
    }
    badgeSize = tmp2.badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    let tmp4 = userId;
    let tmp5 = onOpenBadgeDirectory;
    const textVariant = tmp2.textVariant;
    let obj = userId(onOpenBadgeDirectory[35]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    let obj2 = userId(onOpenBadgeDirectory[36]);
    const tmp7 = obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
    showToastOnPress = tmp8;
    const currentUser = isBadgeManagementEnabled.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    closure_10 = tmp11;
    closure_11 = tmp12;
    let items = [badgeRowHorizontalPadding];
    const items1 = [userId === id && isBadgeManagementEnabled && tmp7, userId];
    const tmp4Result = tmp4(tmp5[37]);
    const stateFromStores = tmp4Result.useStateFromStores(items, () => {
      const tmp = closure_11 && BadgeDirectoryStore.getUnreadBadges(userId).length > 0;
      return tmp;
    }, items1);
    const tmp4Result3 = tmp4(tmp5[38]);
    const tmp14 = stateFromStores && tmp4Result3.useIsBadgeUnreadStateEnabled({ location: "ProfileBadgeRows", hasUnread: stateFromStores });
    hasUnreadIndicator = tmp14;
    const tmp4Result4 = tmp4(tmp5[39]);
    trackUserProfileAction = tmp4Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
    ref = themeType.useRef(false);
    const items2 = [tmp14, trackUserProfileAction];
    const effect = themeType.useEffect(() => {
      const tmp = hasUnreadIndicator && !ref.current;
      if (tmp) {
        ref.current = true;
        trackUserProfileAction({ action: "VIEW_BADGES_UNREAD_INDICATOR" });
      }
    }, items2);
    const items3 = [tmp14, userId === id, userId, onOpenBadgeDirectory];
    const callback = themeType.useCallback(() => {
      if (onOpenBadgeDirectory != null) {
        tmp();
      }
      const obj = { actionName: "badge_directory_opened", displayedUserId: userId, isSociallyNavigated: !closure_10, hasUnreadIndicator, source: "profile_badge_row" };
      trackBadgeDirectoryActionDefault(obj);
      const obj2 = openBadgeDirectoryScreen;
      const obj3 = { targetUserId: userId };
      const result = obj2.openBadgeDirectoryScreen(obj3);
    }, items3);
    const items4 = [badges];
    closure_15 = themeType.useMemo(() => {
      const obj = BadgeUtils;
      return obj.getLegacyIconUrlByBadgeId(badges);
    }, items4);
    const items5 = [badges];
    closure_16 = themeType.useMemo(() => {
      const obj = BadgeUtils;
      return obj.getLegacyDescriptionByBadgeId(badges);
    }, items5);
    mapped = badges.map((id) => {
      let obj2;
      let obj3;
      let obj4;
      const obj = { id: id.id, userId, source: obj2, label: obj4.getProfileBadgeLabel(id.description), badgeSize, themeType, showToastOnPress };
      obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
      obj3 = BadgeUtils;
      obj4 = BadgeUtils;
      return closure_15(ProfileBadge, obj, id.id);
    });
    const obj6 = themeType;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      let obj3 = { source: badges(tmp5[43]), id: "premium", userId, label: formatToPlainString(v8zbGNR, obj4), badgeSize, showToastOnPress: tmp8 };
      const push = mapped.push;
      const intl = tmp4(tmp5[23]).intl;
      formatToPlainString = intl.formatToPlainString;
      obj4 = { date };
      const _Date = Date;
      const self = this;
      const self2 = this;
      v8zbGNR = tmp4(tmp5[23]).t["8zbGNR"];
      date = new Date();
      push(closure_15(ProfileBadge, obj3));
    }
    width = badges(tmp5[44])().width;
    const items6 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
    const memo = obj6.useMemo(() => {
      const tmp = isBadgeManagementEnabled;
      if (tmp) {
        return [];
      } else {
        const _Math = Math;
        const rounded = Math.floor((width - 2 * closure_11 - 2 * badgeRowHorizontalPadding - 2 + 4) / (badgeSize + 4));
        const _Array = Array;
        const _Math2 = Math;
        const obj = { length: Math.ceil(mapped.length / rounded) };
        return from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
      }
    }, items6);
    const tmp25 = badges;
    if (isBadgeManagementEnabled) {
      let mapped1;
      if (catalogBadges != null) {
        const substr = catalogBadges.slice(0, tmp4(tmp5[42]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          let obj4;
          let tmp5;
          const value = closure_15.get(badge_id.badge_id);
          let obj = getBadgeName(badge_id.badge_id);
          const tmp2 = closure_15;
          const tmp3 = ProfileBadge;
          const tmp4 = DEFAULT_PREMIUM_BADGE_ID;
          if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
            obj = tmp4;
          }
          const obj2 = { id: obj, userId, catalogBadge: badge_id, source: tmp5, label: obj4.getProfileBadgeLabel(closure_16.get(badge_id.badge_id), badge_id), badgeSize, themeType, showToastOnPress };
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
        mapped1 = mapped.slice(0, tmp4(tmp5[42]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      let length;
      if (catalogBadges != null) {
        length = catalogBadges.length;
      }
      if (length == null) {
        length = mapped.length;
      }
      const diff = length - mapped1.length;
      let tmp32 = null;
      if (tmp7 && tmp14) {
        const obj5 = { style: tmp.unreadDot, pointerEvents: "none", children: closure_15(tmp4(tmp5[45]).IndicatorDot, { size: "sm" }) };
        tmp32 = closure_15(badgeSize, obj5);
      }
      if (0 === mapped1.length) {
        let tmp43Result = null;
        if (tmp7) {
          tmp43Result = null;
          if (userId === id) {
            const obj7 = { ref: badgeDirectoryEntryPointRef, accessibilityRole: "button", accessibilityLabel: combined, onPress: callback, style: items7, children: items8 };
            const PressableOpacity2 = tmp4(tmp5[17]).PressableOpacity;
            const intl5 = tmp4(tmp5[23]).intl;
            const stringResult = intl5.string(tmp4(tmp5[23]).t.l6w3Vj);
            const tmp43 = closure_16;
            if (tmp14) {
              const intl6 = tmp4(tmp5[23]).intl;
              const _HermesInternal3 = HermesInternal;
              combined = "" + stringResult + ", " + intl6.string(tmp4(tmp5[23]).t.y2b7CA);
            } else {
              combined = stringResult;
            }
            items7 = [, , ];
            ({ addBadgesChip: arr12[0], cutoutEntry: arr12[1] } = tmp);
            const obj8 = { minHeight: badgeSize + 6 };
            items7[2] = obj8;
            const obj9 = { showDot: tmp7 && tmp14, style };
            items8 = [closure_15(UnreadDotCutoutLayer, obj9), , , ];
            const obj10 = { size: "xs", color: tmp25(tmp5[11]).colors.TEXT_STRONG };
            const PlusMediumIcon = tmp4(tmp5[46]).PlusMediumIcon;
            items8[1] = closure_15(PlusMediumIcon, obj10);
            const obj11 = { variant: "body-xs/normal", color: "text-strong", children: intl7.string(tmp4(tmp5[23]).t.l6w3Vj) };
            const Text2 = tmp4(tmp5[19]).Text;
            intl7 = tmp4(tmp5[23]).intl;
            items8[2] = closure_15(Text2, obj11);
            items8[3] = tmp32;
            tmp43Result = tmp43(PressableOpacity2, obj7);
          }
        }
        return tmp43Result;
      } else {
        const obj12 = { style: items9, children: items10 };
        items9 = [, , , ];
        ({ badgeRow: arr14[0], limitedBadgeRow: arr14[1], cutoutEntry: arr14[2] } = tmp);
        const obj13 = { paddingHorizontal: badgeRowHorizontalPadding };
        items9[3] = obj13;
        const obj14 = { showDot: tmp7 && tmp14, style };
        items10 = [closure_15(UnreadDotCutoutLayer, obj14), mapped1, , ];
        let tmp51Result = diff > 0;
        const tmp49 = closure_16;
        if (tmp51Result) {
          const obj15 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(tmp4(tmp5[23]).t.eIHfGZ, obj16), children: "+" + diff };
          const Text = tmp4(tmp5[19]).Text;
          intl2 = tmp4(tmp5[23]).intl;
          const _HermesInternal = HermesInternal;
          obj16 = { overflow_count: diff };
          tmp51Result = tmp51(Text, obj15);
        }
        items10[2] = tmp51Result;
        items10[3] = tmp32;
        const tmp49Result = tmp49(badgeSize, obj12);
        const obj17 = { style: tmp.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: tmp51Result2 };
        tmp51Result2 = tmp49Result;
        if (tmp7) {
          let combined1;
          const PressableOpacity = tmp4(tmp5[17]).PressableOpacity;
          const intl3 = tmp4(tmp5[23]).intl;
          const stringResult1 = intl3.string(tmp4(tmp5[23]).t.PEjP4L);
          if (tmp14) {
            const intl4 = tmp4(tmp5[23]).intl;
            const _HermesInternal2 = HermesInternal;
            combined1 = "" + stringResult1 + ", " + intl4.string(tmp4(tmp5[23]).t.y2b7CA);
          } else {
            combined1 = stringResult1;
          }
          const obj18 = { accessibilityRole: "button", accessibilityLabel: combined1, onPress: callback, children: tmp49Result };
          tmp51Result2 = tmp51(PressableOpacity, obj18);
        }
        return closure_15(badgeSize, obj17);
      }
    } else {
      const obj19 = {
        style: tmp.badges,
        children: memo.map((children, index) => {
            let items;
            const obj = { style: items, children };
            items = [badgeRow.badgeRow, , ];
            const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
            items[1] = obj2;
            items[2] = style;
            return closure_15(metroRequire, obj, index);
          })
      };
      return closure_15(badgeSize, obj19);
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
  const tmp = closure_20();
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
    tmp7 = closure_22[themeType];
  }
  if (tmp7 == null) {
    tmp7 = closure_21;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
  PlatformUtils;
  let tmp10 = null;
  if (null != tag) {
    tmp10 = null;
    if (null != guildId) {
      const obj2 = { style: items, children: closure_15(GuildTagDefault, obj4) };
      items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 6, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = style;
      obj4 = { primaryGuild: primaryGuildOverride, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: obj5, badgeSize: guildTagBadgeSize, textVariant: guildTagTextVariant };
      obj5 = { lineHeight: tmp9 };
      tmp10 = closure_15(metroRequire, obj2);
    }
  }
  return tmp10;
}
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const getBadgeName = Constants3.getBadgeName;
({ DIVIDER_DOT: c10, PROFILE_SIDE_PADDING: unpackModuleId, UserProfileThemeTypes } = Constants);
const UserSettingsSections = Constants2.UserSettingsSections;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = Constants4.DEFAULT_PREMIUM_BADGE_ID;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
const PX_6 = nativeDefault.space.PX_6;
let closure_19 = PX_6 + 4;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: obj2, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: obj3, limitedBadgeRow: { alignItems: "center" }, unreadDot: { position: "absolute", top: 0, right: 0 }, cutoutEntry: { borderColor: "transparent" }, cutoutLayer: { position: "absolute", top: -1, right: -1, bottom: -1, left: -1 }, cutoutLayerFill: obj4, addBadgesChip: obj5 };
obj2 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, columnGap: 4 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj4 = { borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { flexDirection: "row", alignItems: "center", alignSelf: "center", columnGap: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_20 = createStyles(obj);
let closure_21 = { headingVariant: "heading-xl/semibold", textVariant: "body-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "body-sm/medium", guildTagHorizontalPadding: 8 };
let obj6 = { headingVariant: "heading-lg/semibold", textVariant: "body-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "body-xs/medium", guildTagHorizontalPadding: 6 };
const authStore5 = { [UserProfileThemeTypes.PREVIEW]: obj6 };
createStyles = createStyles_mod;
const sidebars = createStyles.createStyles((arg0) => {
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
  const tmp = closure_20();
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
  items1 = [closure_15(tmp7, obj5), ];
  let tmp11 = null;
  const obj6 = { style: tmp.details, children: items2 };
  const tmp10 = UserTagAndPronouns;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  items2 = [closure_15(tmp10, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), closure_15(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }), ];
  let tmp6Result = !hideBadges;
  if (tmp6Result) {
    const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
    tmp6Result = tmp6(ProfileBadgeRows, obj7);
  }
  items2[2] = tmp6Result;
  items1[1] = authStore3(metroRequire, obj6);
  return authStore3(metroRequire, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
