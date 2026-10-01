// Module ID: 10614
// Function ID: 10615
// Name: UserProfilePrimaryInfo
// Dependencies: [19, 17, 1372, 7628, 6629, 1074, 7386, 7639, 21, 4836, 576, 10357, 10358, 8741, 5435, 10615, 4832, 10617, 7147, 4693, 10649, 1115, 10651, 7629, 10652, 6800, 4528, 7688, 7153, 7142, 7152, 5759, 1241, 7141, 1364, 10653, 10654, 10655, 10659, 10770, 1479, 5281, 8332, 7610, 9205, 4678, 2]
// Exports: default

// Module 10614 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import GuildTagUtils from "GuildTagUtils" /* 7610 */;
import Constants2 from "Constants" /* 7628 */;
import BadgeId from "BadgeId" /* 7629 */;
import Constants3 from "Constants" /* 7639 */;
import useBadges from "useBadges" /* 7688 */;
import BotTagDefault from "BotTag" /* 8741 */;
import GuildTagDefault from "GuildTag" /* 9205 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10357 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10655 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Constants_mod from "Constants" /* 6629 */;
import Constants_mod2 from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

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
let tmp2;
let unpackModuleId;
const PlatformUtils = tmp2(1364);
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
      let obj3 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10358).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      const tmp10 = UsernameWithEffectsDefault;
      items = [closure_14(tmp10, obj3), renderBotTag()];
      tmp12Result = closure_15(closure_5, obj);
    } else {
      let tmp12 = closure_15;
      const obj7 = { onPress, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint, style: tmp.displayName, children: items1 };
      const PressableOpacity = user(5435).PressableOpacity;
      const obj8 = { userId: user.id, guildId, userName: name, variant: headingVariant, effectDisplayType: user(10358).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles, defaultColor: "mobile-text-heading-primary", accessibilityRole: displayNameAccessibilityRole, style: null, containerStyle: null };
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      const tmp17 = UsernameWithEffectsDefault;
      items1 = [closure_14(tmp17, obj8), renderBotTag(), ];
      const tmp13 = user;
      const tmp15 = closure_14;
      if (showChevron) {
        showChevron = tmp15(tmp13(10615).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
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
            tmp5Result = tmp5(tmp6(5435).PressableOpacity, obj3);
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
      const items2 = [closure_14(userTag(userTagAccessibilityHint[16]).Text, obj2), ];
      const tmp7 = closure_16;
      if (null != onPressUserTag) {
        let obj3 = { onPress: onPressPronouns, accessibilityRole: "button", accessibilityLabel: pronouns, accessibilityHint: pronounsAccessibilityHint, children: tmp8(tmp9(tmp10[16]).Text, obj4) };
        const PressableOpacity = tmp9(tmp10[14]).PressableOpacity;
        obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
        tmp8Result = tmp8(PressableOpacity, obj3);
      } else {
        const obj5 = { children: closure_14(tmp9(tmp10[16]).Text, obj6) };
        obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
        tmp8Result = tmp8(tmp6, obj5);
      }
      const obj7 = { children: items2 };
      items2[1] = tmp8Result;
      tmp5Result = tmp5(tmp7, obj7);
    }
    items1[1] = tmp5Result;
    return tmp5(tmp6, obj);
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
  let closure_4;
  const tmp = closure_17();
  if (null != badgeSize) {
    size = { width: badgeSize, height: badgeSize };
  }
  const ref = react.useRef(null);
  const tmp5 = label;
  let obj2 = source(label[17]);
  react = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
  let obj3 = source(label[18]);
  closure_4 = obj3.useAdUser("profile_badge");
  let obj4 = source(label[19]);
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
  const tmp4Result = source(tmp5[20]);
  const orbsBadgeCoachmark = tmp4Result.useOrbsBadgeCoachmark(obj);
  const intl = tmp4(tmp5[21]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(tmp5[21]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  const tmp9 = UserProfileThemeTypes;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    const obj5 = { targetRef: ref, badgeId: id };
    tmp11 = closure_14(id(tmp5[22]), obj5);
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
    const tmp20 = id(tmp5[20]);
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
                  const track = tmp9(1241).track;
                  const QUEST_CONTENT_VIEWED = unpackModuleId.QUEST_CONTENT_VIEWED;
                  AnalyticsUtilsDefault;
                  const tmp5Result7 = AnalyticsTypes;
                  const merged = Object.assign(tmp5Result7.getContentProperties(tmp5(5759).QuestContent.QUEST_BADGE));
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
    const PressableOpacity = tmp4(tmp5[14]).PressableOpacity;
    if (null != source) {
      const obj9 = { style: items, source };
      items = [tmp.badge, tmp2];
      tmp25Result = tmp25(closure_4, obj9);
    } else {
      tmp25Result = null;
      if (null != catalogBadge) {
        const obj10 = { badge: catalogBadge, size: badgeSize };
        tmp25Result = tmp25(id(tmp5[24]), obj10);
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
        tmp25Result2 = tmp25(id(tmp5[24]), obj13);
      }
    }
    const items3 = [closure_14(tmp26, obj11), tmp11, tmp17];
    obj7.children = items3;
    tmp30 = obj7;
  }
  return tmp23(tmp24, tmp30);
}
class ProfileBadgeRows {
  constructor(userId) {
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
    let obj = userId(style[35]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    let obj2 = userId(style[36]);
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
      return authStore2(ProfileBadge, obj, id.id);
    });
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      let obj4 = { source: badges(tmp5[39]), id: "premium", userId, label: formatToPlainString(v8zbGNR, obj5), badgeSize, showToastOnPress: tmp8 };
      const push = mapped.push;
      const intl = tmp4(tmp5[21]).intl;
      formatToPlainString = intl.formatToPlainString;
      const _Date = Date;
      const self = this;
      const self2 = this;
      obj5 = { date };
      v8zbGNR = tmp4(tmp5[21]).t["8zbGNR"];
      date = new Date();
      push(closure_14(ProfileBadge, obj4));
    }
    width = badges(tmp5[40])().width;
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
        const substr = catalogBadges.slice(0, tmp4(tmp5[38]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          let obj4;
          let tmp5;
          const value = closure_9.get(badge_id.badge_id);
          let obj = getBadgeName(badge_id.badge_id);
          const tmp2 = authStore2;
          const tmp3 = ProfileBadge;
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
        mapped1 = mapped.slice(0, tmp4(tmp5[38]).MAX_DISPLAYED_PROFILE_BADGES);
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
            const obj6 = { variant: "secondary", size: "sm", icon: closure_14(tmp4(tmp5[42]).PlusSmallIcon, {}), text: intl4.string(tmp4(tmp5[21]).t.l6w3Vj), onPress: callback };
            const Button = tmp4(tmp5[41]).Button;
            intl4 = tmp4(tmp5[21]).intl;
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
          const obj9 = { variant: textVariant, color: "mobile-text-heading-primary", accessibilityLabel: intl2.formatToPlainString(tmp4(tmp5[21]).t.eIHfGZ, obj10), children: "+" + diff };
          const Text = tmp4(tmp5[16]).Text;
          intl2 = tmp4(tmp5[21]).intl;
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
          const obj12 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp4(tmp5[21]).t.PEjP4L), onPress: callback, children: tmp32Result };
          const PressableOpacity = tmp4(tmp5[14]).PressableOpacity;
          intl3 = tmp4(tmp5[21]).intl;
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
  }
}
function GuildTag(style) {
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
}
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
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
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
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
  const tmp7 = DisplayName;
  if ("" !== displayName) {
    if (displayName == null) {
      displayName = name;
    }
    tmp8 = displayName;
  }
  items1 = [authStore2(tmp7, obj5), ];
  let tmp11 = null;
  const obj6 = { style: tmp.details, children: items2 };
  const tmp10 = UserTagAndPronouns;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  items2 = [authStore2(tmp10, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), authStore2(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }), ];
  const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
  items2[2] = authStore2(ProfileBadgeRows, obj7);
  items1[1] = closure_15(hasOwnProperty, obj6);
  return closure_15(hasOwnProperty, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
