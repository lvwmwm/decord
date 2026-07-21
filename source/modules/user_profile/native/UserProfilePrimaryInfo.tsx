// Module ID: 8505
// Function ID: 67850
// Name: getStyleConfig
// Dependencies: []
// Exports: default

// Module 8505 (getStyleConfig)
let UserProfileThemeTypes;
function getStyleConfig(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_18[arg0];
  }
  if (null == tmp) {
    tmp = closure_17;
  }
  return tmp;
}
class DisplayName {
  constructor(arg0) {
    ({ user: closure_0, guildId: closure_1, name } = global);
    dependencyMap = name;
    ({ onPress, showChevron } = global);
    ({ themeType, accessibilityHint } = global);
    if (showChevron === undefined) {
      showChevron = false;
    }
    ({ pendingDisplayNameStyles: closure_3, displayNameAccessibilityRole: closure_4 } = global);
    closure_5 = undefined;
    getBadgeAssetFromCDN = undefined;
    renderDisplayName = function renderDisplayName() {
      const obj = { userId: lib.id, guildId: callback, userName: name, variant: headingVariant, effectDisplayType: lib(name[10]).EffectDisplayType.STATIC, lineClamp: 2, pendingDisplayNameStyles: closure_3, defaultColor: "mobile-text-heading-primary", accessibilityRole: closure_4 };
      return callback2(callback(name[9]), obj);
    };
    renderBotTag = function renderBotTag() {
      if (lib.isSystemUser()) {
        let obj = { style: tmp.botTag, type: callback(name[11]).Types.SYSTEM_DM, verified: lib.isVerifiedBot() };
        let tmp2 = callback2(callback(name[11]), obj);
        const tmp12 = callback(name[11]);
      } else {
        tmp2 = null;
        if (lib.bot) {
          obj = { style: tmp.botTag, type: callback(name[11]).Types.BOT, verified: lib.isVerifiedBot() };
          tmp2 = callback2(callback(name[11]), obj);
          const tmp6 = callback(name[11]);
        }
      }
      return tmp2;
    };
    tmp = closure_16();
    closure_5 = tmp;
    getBadgeAssetFromCDN = getStyleConfig(themeType).headingVariant;
    if (null == onPress) {
      tmp6 = jsxs;
      tmp7 = closure_5;
      obj = {};
      items = [, ];
      items[0] = renderDisplayName();
      items[1] = renderBotTag();
      obj.children = items;
      tmp8Result = jsxs(closure_5, obj);
    } else {
      tmp9 = arg1;
      tmp10 = dependencyMap;
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
        tmp3 = arg1;
        tmp4 = dependencyMap;
        num = 13;
        showChevron = jsx(arg1(dependencyMap[13]).ChevronSmallDownIcon, { flex: "png", flexGrow: true });
      }
      items1[2] = showChevron;
      obj.children = items1;
      tmp8Result = tmp8(arg1(dependencyMap[12]).PressableOpacity, obj);
    }
    return tmp8Result;
  }
}
class UserTagAndPronouns {
  constructor(arg0) {
    userTag = global.userTag;
    arg1 = userTag;
    pronouns = global.pronouns;
    importDefault = pronouns;
    onPressUserTag = global.onPressUserTag;
    dependencyMap = onPressUserTag;
    userTagAccessibilityHint = global.userTagAccessibilityHint;
    importAll = userTagAccessibilityHint;
    str = global.onPressPronouns;
    Image = undefined;
    renderPronouns = function renderPronouns() {
      return callback(userTag(onPressUserTag[14]).Text, { variant: textVariant, children: pronouns });
    };
    ({ themeType, pronounsAccessibilityHint } = global);
    tmp2 = null != pronouns;
    tmp = closure_16();
    if (tmp2) {
      num = 0;
      tmp2 = pronouns.length > 0;
    }
    textVariant = getStyleConfig(themeType).textVariant;
    Image = textVariant;
    items = [, , , ];
    items[0] = onPressUserTag;
    items[1] = textVariant;
    items[2] = userTag;
    items[3] = userTagAccessibilityHint;
    obj = { style: tmp.detailsText };
    tmp3 = jsxs;
    tmp4 = View;
    items1 = [, ];
    items1[0] = importAll.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        let obj = { -9223372036854775808: "isArray", 0: "accessibilityRole", 0: "value", variant: textVariant, children: userTag };
        const tmp15 = callback(userTag(onPressUserTag[14]).Text, obj);
        if (null != onPressUserTag) {
          obj = { onPress: onPressUserTag, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp15 };
          let tmp3 = callback(userTag(onPressUserTag[12]).PressableOpacity, obj);
        } else {
          obj = { children: tmp15 };
          tmp3 = callback(closure_5, obj);
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
      tmp8 = arg1;
      tmp9 = dependencyMap;
      num2 = 14;
      tmp5 = jsxs;
      tmp6 = Fragment;
      obj1 = {};
      obj1.variant = textVariant;
      tmp10 = DIVIDER_DOT;
      obj1.children = DIVIDER_DOT;
      items2 = [, ];
      items2[0] = jsx(arg1(dependencyMap[14]).Text, obj1);
      if (null != onPressUserTag) {
        tmp14 = jsx;
        tmp15 = arg1;
        tmp16 = dependencyMap;
        num3 = 12;
        obj2 = {};
        obj2.onPress = str;
        str = "button";
        obj2.accessibilityRole = "button";
        obj2.accessibilityLabel = pronouns;
        obj2.accessibilityHint = pronounsAccessibilityHint;
        renderPronouns = renderPronouns();
        obj2.children = renderPronouns;
        tmp13 = jsx(arg1(dependencyMap[12]).PressableOpacity, obj2);
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
  const arg1 = source;
  const id = source.id;
  const importDefault = id;
  const label = source.label;
  const dependencyMap = label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  if (showToastOnPress === undefined) {
    showToastOnPress = true;
  }
  let React;
  let closure_4;
  const tmp = callback3();
  if (null != badgeSize) {
    let obj = { width: badgeSize, height: badgeSize };
  }
  const ref = React.useRef(null);
  let obj1 = arg1(dependencyMap[15]);
  React = obj1.useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj2 = arg1(dependencyMap[16]);
  closure_4 = obj2.useAdUser("profile_badge");
  let obj3 = arg1(dependencyMap[17]);
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
  let obj5 = arg1(dependencyMap[18]);
  obj = { disabled: !(null != prop && prop) };
  const orbsBadgeCoachmark = obj5.useOrbsBadgeCoachmark(obj);
  const intl = arg1(dependencyMap[19]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[19]).t.A0LN9t, { badgeLabel: label });
  let tmp9 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp9) {
    tmp9 = "string" === typeof id;
  }
  let tmp10 = null;
  if (tmp9) {
    obj = { targetRef: ref, badgeId: id };
    tmp10 = callback(importDefault(dependencyMap[20]), obj);
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
    const merged = Object.assign(orbsBadgeCoachmark.props);
    tmp15 = callback(importDefault(dependencyMap[18]), obj1);
    const tmp19 = importDefault(dependencyMap[18]);
  }
  obj2 = {};
  if (showToastOnPress) {
    obj3 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress() {
          if (null == callback) {
            if (id !== callback2(source(label[21]).BadgeId.GIFTING)) {
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
                  const obj5 = source(label[28]);
                }
                obj["apple_advertising_id"] = advertisingId;
                let advertisingId1 = null;
                if (null != closure_4) {
                  advertisingId1 = null;
                  if (obj6.isAndroid()) {
                    advertisingId1 = closure_4.advertisingId;
                  }
                  const obj6 = source(label[28]);
                }
                obj["android_advertising_id"] = advertisingId1;
                obj["is_targeted"] = false;
                obj7.track(constants.QUEST_CONTENT_VIEWED, obj);
                const obj9 = source(label[26]);
              }
              const obj3 = id(label[23]);
            } else {
              obj = source(label[22]);
              const obj1 = { screen: constants2.PREMIUM_GIFTING, params: {} };
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
    const items1 = [tmp24(arg1(dependencyMap[12]).PressableOpacity, obj3), tmp10, tmp15];
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
    arg1 = userId;
    ({ badges, isTryItOut, style: closure_1, themeType } = global);
    dependencyMap = themeType;
    showToastOnPress = global.showToastOnPress;
    importAll = showToastOnPress;
    DIVIDER_DOT = undefined;
    tmp = closure_16();
    Image = tmp;
    tmp2 = getStyleConfig(themeType);
    badgeSize = tmp2.badgeSize;
    View = badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    getBadgeAssetFromCDN = badgeRowHorizontalPadding;
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
      return closure_13(closure_22, obj, id.id);
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
      tmp6 = importDefault;
      tmp7 = dependencyMap;
      num = 29;
      obj.source = importDefault(dependencyMap[29]);
      str = "premium";
      obj.id = "premium";
      obj.userId = userId;
      tmp8 = arg1;
      num2 = 19;
      intl = arg1(dependencyMap[19]).intl;
      obj = {};
      tmp9 = globalThis;
      _Date = Date;
      prototype = Date.prototype;
      tmp10 = new.target;
      tmp11 = new.target;
      date = new Date();
      tmp13 = date;
      obj.date = date;
      obj.label = intl.formatToPlainString(arg1(dependencyMap[19]).t.8zbGNR, obj);
      obj.badgeSize = badgeSize;
      obj.showToastOnPress = showToastOnPress;
      arr = mapped.push(jsx(ProfileBadge, obj));
    }
    width = importDefault(dependencyMap[30])().width;
    DIVIDER_DOT = width;
    items = [, , , ];
    items[0] = mapped;
    items[1] = badgeRowHorizontalPadding;
    items[2] = badgeSize;
    items[3] = width;
    memo = importAll.useMemo(() => {
      const rounded = Math.floor((width - 2 * closure_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
      const userId = rounded;
      return Array.from({ length: Math.ceil(mapped.length / rounded) }, (arg0, arg1) => arr.slice(arg1 * rounded, (arg1 + 1) * rounded));
    }, items);
    obj1 = { style: items1, accessibilityRole: "list" };
    items1 = [];
    items1[0] = tmp.badges;
    intl2 = arg1(dependencyMap[19]).intl;
    obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[19]).t.VWV0y5);
    obj1.children = memo.map((children) => {
      let obj = { style: items, children };
      const items = [tmp.badgeRow, , ];
      obj = { paddingHorizontal: badgeRowHorizontalPadding };
      items[1] = obj;
      items[2] = closure_1;
      return callback(badgeSize, obj, arg1);
    });
    return jsx(View, obj1);
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
  const tmp = callback3();
  let obj = arg1(dependencyMap[31]);
  let primaryGuild;
  if (null != user) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  const tmp4 = getStyleConfig(themeType);
  ({ badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp4);
  let obj1 = arg1(dependencyMap[28]);
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
      obj.children = callback(importDefault(dependencyMap[32]), obj1);
      tmp6 = callback(closure_5, obj);
    }
  }
  return tmp6;
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ getBadgeAssetFromCDN: closure_6, getBadgeName: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_11, UserSettingsSections: closure_12 } = arg1(dependencyMap[4]));
const GuildTagBadgeSize = arg1(dependencyMap[5]).GuildTagBadgeSize;
const tmp5 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { flexDirection: "column" }, displayName: { 9223372036854775807: "safety_user_sentiment_notice_dismissed_at", 9223372036854775807: "message", 0: null }, details: {}, detailsText: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null }, botTag: { marginLeft: 4 } };
obj = { RESPONDER_INACTIVE_PRESS_OUT: "DIS_Nitro_Gifcard_001_Gift_Loop", RESPONDER_ACTIVE_PRESS_IN: 0, RESPONDER_ACTIVE_PRESS_OUT: 183.333, RESPONDER_ACTIVE_LONG_PRESS_IN: 3, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.guildTag = obj;
obj.transparentBackground = { backgroundColor: "transparent" };
obj.badge = { resizeMode: "contain" };
obj.badges = {};
const obj1 = { "Bool(false)": -0.0000000000001207922650915279, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005284811110255182, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000067606868790614, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026618315203386, "Bool(false)": 17311091029112627000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 145578.1535054913, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.badgeRow = obj1;
let closure_16 = obj.createStyles(obj);
let closure_17 = { guildTagBadgeSize: GuildTagBadgeSize.SIZE_16 };
const obj2 = { speakingIndicatorUnderlay: false, SSO_TOKEN: false, alignSelf: false, margin: false, briefcase: false, STREAM_WATCH: false, objectFit: false, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12 };
let closure_18 = { [UserProfileThemeTypes.PREVIEW]: obj2 };
const tmp6 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

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
  const tmp = callback3();
  let obj = { backgroundColor: badgeContainerBackground };
  let obj1 = importDefault(dependencyMap[33]);
  let name = obj1.useName(user);
  let obj2 = importDefault(dependencyMap[33]);
  obj = { style: items };
  const items = [tmp.container, style];
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
