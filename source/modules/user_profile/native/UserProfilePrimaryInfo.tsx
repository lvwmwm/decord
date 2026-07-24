// Module ID: 8557
// Function ID: 68140
// Name: getStyleConfig
// Dependencies: [31, 27, 8308, 5510, 653, 7721, 33, 4130, 689, 8558, 8559, 8568, 4660, 8570, 4126, 8572, 6970, 3982, 8606, 1212, 8618, 8309, 5796, 3831, 8298, 675, 6968, 4979, 477, 8619, 1450, 7934, 8620, 3969, 2]
// Exports: default

// Module 8557 (getStyleConfig)
import getUserPrimaryGuild from "getUserPrimaryGuild";
import get_ActivityIndicator from "QuestsVisibleMessagesChangedSource";
import USER_PROFILE_TOOLTIP_DELAY from "USER_PROFILE_TOOLTIP_DELAY";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { GuildTagBadgeSize } from "items";
import jsxProd from "conceal";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let UserProfileThemeTypes;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getStyleConfig(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = table[arg0];
  }
  if (null == tmp) {
    tmp = obj2;
  }
  return tmp;
}
class DisplayName {
  constructor(arg0) {
    ({ user, guildId, name } = global);
    ({ onPress, showChevron } = global);
    ({ themeType, accessibilityHint } = global);
    if (showChevron === undefined) {
      showChevron = false;
    }
    ({ pendingDisplayNameStyles, displayNameAccessibilityRole: closure_4 } = global);
    c5 = undefined;
    headingVariant = undefined;
    renderDisplayName = function renderDisplayName() {
      const obj = { userId: closure_0.id, guildId: closure_1, userName: name, variant: headingVariant, effectDisplayType: outer1_0(name[10]).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles: getUserPrimaryGuild, defaultColor: "mobile-text-heading-primary", accessibilityRole: closure_4 };
      return outer1_13(outer1_1(name[9]), obj);
    };
    renderBotTag = function renderBotTag() {
      if (closure_0.isSystemUser()) {
        let obj = { style: _undefined.botTag, type: outer1_1(name[11]).Types.SYSTEM_DM, verified: closure_0.isVerifiedBot() };
        let tmp2 = outer1_13(outer1_1(name[11]), obj);
        const tmp12 = outer1_1(name[11]);
      } else {
        tmp2 = null;
        if (closure_0.bot) {
          obj = { style: _undefined.botTag, type: outer1_1(name[11]).Types.BOT, verified: closure_0.isVerifiedBot() };
          tmp2 = outer1_13(outer1_1(name[11]), obj);
          const tmp6 = outer1_1(name[11]);
        }
      }
      return tmp2;
    };
    tmp = c16();
    c5 = tmp;
    headingVariant = getStyleConfig(themeType).headingVariant;
    if (null == onPress) {
      tmp6 = jsxs;
      tmp7 = c5;
      obj = {};
      items = [, ];
      items[0] = renderDisplayName();
      items[1] = renderBotTag();
      obj.children = items;
      tmp8Result = jsxs(c5, obj);
    } else {
      tmp9 = user;
      tmp10 = name;
      num2 = 12;
      tmp8 = jsxs;
      obj = {};
      obj.onPress = onPress;
      str = "button";
      obj.accessibilityRole = "button";
      obj.accessibilityLabel = name;
      obj.accessibilityHint = accessibilityHint;
      obj.style = tmp.displayName;
      items1 = [, , ];
      items1[0] = renderDisplayName();
      items1[1] = renderBotTag();
      if (showChevron) {
        tmp2 = jsx;
        tmp3 = user;
        tmp4 = name;
        num = 13;
        showChevron = jsx(require("ChevronSmallDownIcon").ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj.children = items1;
      tmp8Result = tmp8(require("PressableBase").PressableOpacity, obj);
    }
    return tmp8Result;
  }
}
class UserTagAndPronouns {
  constructor(arg0) {
    userTag = global.userTag;
    pronouns = global.pronouns;
    onPressUserTag = global.onPressUserTag;
    userTagAccessibilityHint = global.userTagAccessibilityHint;
    str = global.onPressPronouns;
    textVariant = undefined;
    renderPronouns = function renderPronouns() {
      const obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
      return outer1_13(userTag(onPressUserTag[14]).Text, obj);
    };
    ({ themeType, pronounsAccessibilityHint } = global);
    tmp2 = null != pronouns;
    tmp = c16();
    if (tmp2) {
      num = 0;
      tmp2 = pronouns.length > 0;
    }
    textVariant = getStyleConfig(themeType).textVariant;
    items = [, , , ];
    items[0] = onPressUserTag;
    items[1] = textVariant;
    items[2] = userTag;
    items[3] = userTagAccessibilityHint;
    obj = { style: tmp.detailsText };
    tmp3 = jsxs;
    tmp4 = View;
    items1 = [, ];
    items1[0] = userTagAccessibilityHint.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        let obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, children: userTag };
        const tmp15 = outer1_13(userTag(onPressUserTag[14]).Text, obj);
        if (null != onPressUserTag) {
          obj = { onPress: onPressUserTag, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp15 };
          let tmp3 = outer1_13(userTag(onPressUserTag[12]).PressableOpacity, obj);
        } else {
          obj = { children: tmp15 };
          tmp3 = outer1_13(outer1_5, obj);
        }
        return tmp3;
      }
    }, items)();
    if (!tmp2) {
      items1[1] = tmp2;
      obj.children = items1;
      return tmp3(tmp4, obj);
    } else {
      obj = {};
      tmp7 = jsx;
      tmp8 = userTag;
      tmp9 = onPressUserTag;
      num2 = 14;
      tmp5 = jsxs;
      tmp6 = Fragment;
      obj1 = { variant: null, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      obj1.variant = textVariant;
      tmp10 = DIVIDER_DOT;
      obj1.children = DIVIDER_DOT;
      items2 = [, ];
      items2[0] = jsx(require("Text").Text, obj1);
      if (null != onPressUserTag) {
        tmp14 = jsx;
        tmp15 = userTag;
        tmp16 = onPressUserTag;
        num3 = 12;
        obj2 = {};
        obj2.onPress = str;
        str = "button";
        obj2.accessibilityRole = "button";
        obj2.accessibilityLabel = pronouns;
        obj2.accessibilityHint = pronounsAccessibilityHint;
        renderPronouns = renderPronouns();
        obj2.children = renderPronouns;
        tmp13 = jsx(require("PressableBase").PressableOpacity, obj2);
      } else {
        tmp11 = jsx;
        tmp12 = View;
        obj3 = {};
        obj3.children = renderPronouns();
        tmp13 = jsx(View, obj3);
      }
      items2[1] = tmp13;
      obj.children = items2;
      tmp5Result = tmp5(tmp6, obj);
    }
    return;
  }
}
function ProfileBadge(source) {
  let badgeSize;
  let showToastOnPress;
  let themeType;
  source = source.source;
  const id = source.id;
  const label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  if (showToastOnPress === undefined) {
    showToastOnPress = true;
  }
  let React;
  let closure_4;
  const tmp = _createForOfIteratorHelperLoose();
  if (null != badgeSize) {
    let obj = { width: badgeSize, height: badgeSize };
  }
  const ref = React.useRef(null);
  let obj1 = source(label[15]);
  React = obj1.useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj2 = source(label[16]);
  closure_4 = obj2.useAdUser("profile_badge");
  let obj3 = source(label[17]);
  const rootNavigationRef = obj3.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  let prop;
  if (null != currentRoute) {
    const params = currentRoute.params;
    if (null != params) {
      prop = params.showOrbsBadgeCoachmark;
    }
  }
  let obj5 = source(label[18]);
  obj = { disabled: !(null != prop && prop) };
  const orbsBadgeCoachmark = obj5.useOrbsBadgeCoachmark(obj);
  const intl = source(label[19]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[19]).t.A0LN9t, { badgeLabel: label });
  let tmp9 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp9) {
    tmp9 = "string" === typeof id;
  }
  let tmp10 = null;
  if (tmp9) {
    obj = { targetRef: ref, badgeId: id };
    tmp10 = callback(id(label[20]), obj);
  }
  let tmp14 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp14) {
    tmp14 = "string" === typeof id;
  }
  if (tmp14) {
    tmp14 = "orb_profile_badge" === id;
  }
  if (tmp14) {
    tmp14 = null != orbsBadgeCoachmark;
  }
  let tmp15 = null;
  if (tmp14) {
    obj1 = { badgeRef: ref };
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp15 = callback(id(label[18]), obj1);
    const tmp19 = id(label[18]);
  }
  obj2 = {};
  if (showToastOnPress) {
    obj3 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress() {
          if (null == callback) {
            if (id !== outer1_7(source(label[21]).BadgeId.GIFTING)) {
              let obj = {};
              const _HermesInternal = HermesInternal;
              obj.key = "PROFILE_BADGE-" + label;
              obj.content = label;
              obj.icon = source;
              id(label[23]).open(obj);
              if (id === source(label[24]).QUEST_COMPLETED_BADGE) {
                obj = {};
                const obj7 = id(label[25]);
                const merged = Object.assign(source(label[26]).getContentProperties(source(label[27]).QuestContent.QUEST_BADGE));
                let advertisingId = null;
                if (null != closure_4) {
                  advertisingId = null;
                  if (obj5.isIOS()) {
                    advertisingId = closure_4.advertisingId;
                  }
                  obj5 = source(label[28]);
                }
                obj["apple_advertising_id"] = advertisingId;
                let advertisingId1 = null;
                if (null != closure_4) {
                  advertisingId1 = null;
                  if (obj6.isAndroid()) {
                    advertisingId1 = closure_4.advertisingId;
                  }
                  obj6 = source(label[28]);
                }
                obj["android_advertising_id"] = advertisingId1;
                obj["is_targeted"] = false;
                obj7.track(outer1_11.QUEST_CONTENT_VIEWED, obj);
                const obj9 = source(label[26]);
              }
              const obj3 = id(label[23]);
            } else {
              obj = source(label[22]);
              const obj1 = { screen: outer1_12.PREMIUM_GIFTING, params: {} };
              obj.openUserSettings(obj1);
            }
          } else {
            callback();
          }
        },
      ref
    };
    const obj4 = {};
    const items = [tmp.badge, tmp2];
    obj4.style = items;
    obj4.source = source;
    obj3.children = callback(closure_4, obj4);
    const items1 = [tmp24(source(label[12]).PressableOpacity, obj3), tmp10, tmp15];
    obj2.children = items1;
    let tmp26 = obj2;
  } else {
    obj5 = {};
    const items2 = [tmp.badge, tmp2];
    obj5.style = items2;
    obj5.source = source;
    obj5.accessible = true;
    obj5.accessibilityRole = "image";
    obj5.accessibilityLabel = formatToPlainStringResult;
    obj5.ref = ref;
    const items3 = [tmp24(closure_4, obj5), tmp10, tmp15];
    obj2.children = items3;
    tmp26 = obj2;
  }
  return closure_14(closure_15, tmp26);
}
class ProfileBadgeRows {
  constructor(arg0) {
    userId = global.userId;
    ({ badges, isTryItOut, style, themeType } = global);
    showToastOnPress = global.showToastOnPress;
    width = undefined;
    tmp = c16();
    Image = tmp;
    tmp2 = getStyleConfig(themeType);
    badgeSize = tmp2.badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    mapped = badges.map((id) => {
      let obj = { id: id.id, userId };
      obj = {};
      let iconSrc = id.iconSrc;
      if (null == iconSrc) {
        iconSrc = badgeRowHorizontalPadding(id.icon);
      }
      obj.uri = iconSrc;
      obj.source = obj;
      obj.label = id.description;
      obj.badgeSize = badgeSize;
      obj.themeType = themeType;
      obj.showToastOnPress = showToastOnPress;
      return outer1_13(outer1_22, obj, id.id);
    });
    getBadgeName = mapped;
    if (isTryItOut) {
      tmp3 = null;
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp4 = jsx;
      tmp5 = ProfileBadge;
      obj = {};
      tmp6 = style;
      tmp7 = themeType;
      num = 29;
      obj.source = require("registerAsset");
      str = "premium";
      obj.id = "premium";
      obj.userId = userId;
      tmp8 = userId;
      num2 = 19;
      intl = require("getSystemLocale").intl;
      obj = {};
      tmp9 = globalThis;
      _Date = Date;
      prototype = Date.prototype;
      tmp10 = new.target;
      tmp11 = new.target;
      date = new Date();
      tmp13 = date;
      obj.date = date;
      obj.label = intl.formatToPlainString(require("getSystemLocale").t["8zbGNR"], obj);
      obj.badgeSize = badgeSize;
      obj.showToastOnPress = showToastOnPress;
      arr = mapped.push(jsx(ProfileBadge, obj));
    }
    width = require("useWindowDimensions")().width;
    items = [, , , ];
    items[0] = mapped;
    items[1] = badgeRowHorizontalPadding;
    items[2] = badgeSize;
    items[3] = width;
    memo = showToastOnPress.useMemo(() => {
      const rounded = Math.floor((width - 2 * outer1_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
      return Array.from({ length: Math.ceil(mapped.length / rounded) }, (arg0, arg1) => outer1_7.slice(arg1 * rounded, (arg1 + 1) * rounded));
    }, items);
    obj1 = { style: items1, accessibilityRole: "list" };
    items1 = [];
    items1[0] = tmp.badges;
    intl2 = require("getSystemLocale").intl;
    obj1.accessibilityLabel = intl2.string(require("getSystemLocale").t.VWV0y5);
    obj1.children = memo.map((children) => {
      let obj = { style: items, children };
      items = [tmp.badgeRow, , ];
      obj = { paddingHorizontal: badgeRowHorizontalPadding };
      items[1] = obj;
      items[2] = closure_1;
      return outer1_13(badgeSize, obj, arg1);
    });
    return jsx(badgeSize, obj1);
  }
}
function GuildTag(arg0) {
  let badgeSize;
  let guildId;
  let guildTagBadgeSize;
  let guildTagHorizontalPadding;
  let showToastOnPress;
  let style;
  let tag;
  let themeType;
  let user;
  ({ user, showToastOnPress } = arg0);
  ({ themeType, style } = arg0);
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7934) /* getUserPrimaryGuild */;
  let primaryGuild;
  if (null != user) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  const tmp4 = getStyleConfig(themeType);
  ({ badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp4);
  let obj1 = require(477) /* set */;
  let tmp6 = null;
  if (null != tag) {
    tmp6 = null;
    if (null != guildId) {
      obj = {};
      const items = [tmp.guildTag, , ];
      obj = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj;
      items[2] = style;
      obj.style = items;
      obj1 = { userId: user.id, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground };
      const obj2 = { lineHeight: tmp5 };
      obj1.textStyle = obj2;
      obj1.badgeSize = guildTagBadgeSize;
      obj1.textVariant = tmp4.guildTagTextVariant;
      obj.children = callback(importDefault(8620), obj1);
      tmp6 = callback(closure_5, obj);
    }
  }
  return tmp6;
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ getBadgeAssetFromCDN: closure_6, getBadgeName: closure_7 } = USER_PROFILE_TOOLTIP_DELAY);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = ARBITRARY_LARGE_OFFSET);
({ AnalyticEvents: closure_11, UserSettingsSections: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 } };
_createForOfIteratorHelperLoose = { alignSelf: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, columnGap: 4 };
_createForOfIteratorHelperLoose.guildTag = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.transparentBackground = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.badge = { resizeMode: "contain" };
_createForOfIteratorHelperLoose.badges = { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
_createForOfIteratorHelperLoose.badgeRow = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
let obj3 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
let closure_18 = { [UserProfileThemeTypes.PREVIEW]: obj3 };
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
  let badgeContainerBackground;
  let badges;
  let displayName;
  let displayNameAccessibilityHint;
  let displayNameAccessibilityRole;
  let guildId;
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
  let user;
  let userTagAccessibilityHint;
  ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
  ({ guildId, pronouns, style, badges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, pendingDisplayNameStyles } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { backgroundColor: badgeContainerBackground };
  let obj1 = importDefault(3969);
  let name = obj1.useName(user);
  let obj2 = importDefault(3969);
  obj = { style: items };
  items = [tmp.container, style];
  obj = { user, guildId };
  let tmp8 = name;
  const userTag = obj2.useUserTag(user);
  if ("" !== displayName) {
    if (null != displayName) {
      name = displayName;
    }
    tmp8 = name;
  }
  obj.name = tmp8;
  obj.themeType = themeType;
  obj.onPress = onPressDisplayName;
  obj.accessibilityHint = displayNameAccessibilityHint;
  obj.displayNameAccessibilityRole = displayNameAccessibilityRole;
  obj.showChevron = showChevron;
  obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
  const items1 = [callback(DisplayName, obj), ];
  obj1 = { style: tmp.details };
  obj2 = {};
  let tmp14 = null;
  if (!user.isProvisional) {
    tmp14 = userTag;
  }
  obj2.userTag = tmp14;
  obj2.pronouns = pronouns;
  obj2.themeType = themeType;
  obj2.onPressUserTag = onPressUserTag;
  obj2.userTagAccessibilityHint = userTagAccessibilityHint;
  obj2.onPressPronouns = onPressPronouns;
  obj2.pronounsAccessibilityHint = pronounsAccessibilityHint;
  const items2 = [callback(UserTagAndPronouns, obj2), callback(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }), callback(ProfileBadgeRows, { userId: user.id, badges, style: obj, themeType, showToastOnPress: showBadgeToastOnPress })];
  obj1.children = items2;
  items1[1] = closure_14(closure_5, obj1);
  obj.children = items1;
  return closure_14(closure_5, obj);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
