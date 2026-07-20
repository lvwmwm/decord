// Module ID: 10104
// Function ID: 78226
// Name: TitleWrapper
// Dependencies: []
// Exports: renderChannelIcon, renderChannelTitle, renderEmptyIcon, renderGroupDMIcon, renderMemberCountText, renderParentChannelSubTitle, renderTitleWrapper, renderUserAvatar

// Module 10104 (TitleWrapper)
function TitleWrapper(headerAccessibilityLabel) {
  let children;
  let onPress;
  let titleContentHeight;
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  const arg1 = titleContentHeight;
  const tmp = callback3(importDefault(dependencyMap[9])("ChannelHeaderShared"));
  const tmp2 = callback(React.useState(undefined), 2);
  const importDefault = tmp2[1];
  [][0] = titleContentHeight;
  const callback = React.useCallback((nativeEvent) => {
    callback({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
  }, []);
  if (null == onPress) {
    let obj = { style: tmp.wrapper, accessibilityRole: "header", children };
    let tmp5Result = callback2(View, obj);
  } else {
    obj = {};
    let tmp8;
    if (obj2.isAndroid()) {
      tmp8 = callback;
    }
    obj.onLayout = tmp8;
    obj.onPress = onPress;
    obj.androidRippleConfig = tmp2[0];
    obj.accessibilityRole = "header";
    obj.accessibilityLabel = headerAccessibilityLabel.headerAccessibilityLabel;
    obj.hitSlop = tmp4;
    obj.style = tmp.wrapper;
    obj.children = children;
    tmp5Result = callback2(arg1(dependencyMap[10]).PressableOpacity, obj);
    const obj2 = arg1(dependencyMap[11]);
    const tmp5 = callback2;
  }
  return tmp5Result;
}
function ChannelTitle(guildId) {
  let accessibleTitle;
  let disableArrow;
  let icon;
  let subtitle;
  let title;
  let userId;
  ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
  if (disableArrow === undefined) {
    disableArrow = false;
  }
  ({ userId, icon } = guildId);
  const tmp = importDefault(dependencyMap[9])("ChannelTitle");
  const tmp2 = callback3(tmp);
  let obj = { style: tmp2.channelContent };
  obj = { style: tmp2.nameWithArrow };
  let tmp7 = null;
  if (tmp) {
    tmp7 = null;
    if (null != icon) {
      tmp7 = icon;
    }
  }
  const items = [tmp7, , ];
  if (null != userId) {
    obj = { userId, guildId: guildId.guildId, userName: title };
    let str2 = "heading-lg/bold";
    if (tmp) {
      str2 = "redesign/heading-18/semibold";
    }
    obj.variant = str2;
    obj.defaultColor = "mobile-text-heading-primary";
    obj.lineClamp = 1;
    obj.style = tmp2.channelName;
    obj.accessibilityLabel = accessibleTitle;
    obj.accessibilityRole = "header";
    obj.maxFontSizeMultiplier = 2;
    let tmp8Result = callback2(importDefault(dependencyMap[12]), obj);
    const tmp12 = callback2;
    const tmp15 = importDefault(dependencyMap[12]);
  } else {
    const obj1 = {};
    let str = "heading-lg/bold";
    if (tmp) {
      str = "redesign/heading-18/semibold";
    }
    obj1.variant = str;
    obj1.style = tmp2.channelName;
    obj1.accessibilityLabel = accessibleTitle;
    obj1.children = title;
    tmp8Result = callback2(arg1(dependencyMap[13]).Text, obj1);
    const tmp8 = callback2;
  }
  items[1] = tmp8Result;
  let tmp16 = !disableArrow;
  if (tmp16) {
    const obj2 = { source: importDefault(dependencyMap[15]), size: arg1(dependencyMap[14]).Icon.Sizes.REFRESH_SMALL_16, style: tmp2.arrowIcon };
    tmp16 = callback2(arg1(dependencyMap[14]).Icon, obj2);
  }
  items[2] = tmp16;
  obj.children = items;
  const items1 = [closure_10(View, obj), ];
  let tmp21 = null != subtitle;
  if (tmp21) {
    const obj3 = { style: tmp2.subTitleContainer, children: subtitle };
    tmp21 = callback2(View, obj3);
  }
  items1[1] = tmp21;
  obj.children = items1;
  return closure_10(View, obj);
}
function GroupDMIcon(channel) {
  const obj = {};
  const tmp = callback3(importDefault(dependencyMap[9])("ChannelHeaderShared"));
  obj.size = arg1(dependencyMap[14]).AvatarSizes.REFRESH_MEDIUM_32;
  obj.channel = channel.channel;
  obj.style = tmp.channelIcon;
  return callback2(importDefault(dependencyMap[16]), obj);
}
function UserAvatar(user) {
  let isMobileOnline;
  let isVROnline;
  let status;
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = { user, avatarDecoration: user.avatarDecoration, guildId: undefined, size: arg1(dependencyMap[14]).AvatarSizes.REFRESH_MEDIUM_32 };
  let tmp3 = null;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  obj.status = tmp3;
  obj.isMobileOnline = isMobileOnline;
  obj.isVROnline = isVROnline;
  obj.style = callback3(importDefault(dependencyMap[9])("ChannelHeaderShared")).channelIcon;
  obj.autoStatusCutout = true;
  return closure_9(arg1(dependencyMap[14]).Avatar, obj);
}
function renderChannelIconRaw(icon, IconComponent) {
  return callback2(ChannelIconRaw, { icon, IconComponent });
}
function ChannelIconRaw(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const tmp = importDefault(dependencyMap[9])("ChannelHeaderShared");
  if (null != IconComponent) {
    let obj = {};
    let str = "md";
    if (tmp) {
      str = "xs";
    }
    obj.size = str;
    let str2 = "text-strong";
    if (tmp) {
      str2 = "icon-strong";
    }
    obj.color = str2;
    let tmp8;
    if (tmp) {
      obj = { marginEnd: 4 };
      tmp8 = obj;
    }
    obj.style = tmp8;
    let tmp7Result = callback2(IconComponent, obj);
    const tmp7 = callback2;
  } else {
    obj = { size: arg1(dependencyMap[14]).Icon.Sizes.SMALL_20, source: IconComponent.icon, color: tmp2.guildChannelIcon.tintColor };
    tmp7Result = callback2(arg1(dependencyMap[14]).Icon, obj);
  }
  return tmp7Result;
}
function MemberCountText(withSeparator) {
  let memberCount;
  let presenceCount;
  ({ presenceCount, memberCount } = withSeparator);
  const tmp = importDefault(dependencyMap[9])("ChannelHeaderShared");
  let str = "online";
  if (0 === presenceCount) {
    str = "online";
    if (null !== memberCount) {
      str = "total";
    }
  }
  let obj = {};
  obj = { type: str };
  if ("online" === str) {
    memberCount = presenceCount;
  }
  let tmp7;
  if (null != memberCount) {
    tmp7 = memberCount;
  }
  obj.count = tmp7;
  let str2 = "text-muted";
  if (tmp) {
    str2 = "text-subtle";
  }
  obj.color = str2;
  const items = [closure_9(importDefault(dependencyMap[18]), obj), ];
  let tmp9Result = null;
  if (withSeparator.withSeparator) {
    obj = {};
    let str3 = "text-xs/medium";
    if (tmp) {
      str3 = "text-sm/normal";
    }
    obj.variant = str3;
    tmp9Result = closure_9(arg1(dependencyMap[13]).Text, obj);
    const tmp9 = closure_9;
  }
  items[1] = tmp9Result;
  obj.children = items;
  return closure_10(closure_11, obj);
}
function ParentChannelSubTitle(channel) {
  channel = channel.channel;
  const tmp = importDefault(dependencyMap[9])("ChannelHeaderShared");
  let obj = { backgroundColor: 503316898, borderRadius: -788528832, marginTop: -2147483112 };
  const intl = arg1(dependencyMap[19]).intl;
  obj = {};
  const tmp2 = callback3(tmp);
  const tmp3 = closure_9;
  obj.channelName = arg1(dependencyMap[20]).computeChannelName(channel, closure_7, closure_6);
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[19]).t.BjYvHO, obj);
  let str = "text-xs/medium";
  if (tmp) {
    str = "text-sm/medium";
  }
  obj.variant = str;
  let str2 = "text-muted";
  if (tmp) {
    str2 = "text-subtle";
  }
  obj.color = str2;
  obj.style = tmp2.parentChannelName;
  const obj3 = arg1(dependencyMap[20]);
  obj.children = arg1(dependencyMap[20]).computeChannelName(channel, closure_7, closure_6);
  return tmp3(arg1(dependencyMap[13]).Text, obj);
}
function EmptyIcon() {
  return callback2(View, { style: callback3(importDefault(dependencyMap[9])("ChannelHeaderShared")).channelIconWrapper });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const getMinHeaderHeight = arg1(dependencyMap[5]).getMinHeaderHeight;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).createStyles((arg0) => {
  let obj = { wrapper: {} };
  obj = {};
  let num;
  if (arg0) {
    num = 4;
  }
  obj.marginTop = num;
  obj.channelContent = obj;
  obj.nameWithArrow = {};
  obj = { flexShrink: 1 };
  const merged = Object.assign(arg0 ? {} : { "Null": null, "Null": "Nostril L" });
  obj.channelName = obj;
  obj.arrowIcon = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.channelIcon = {};
  obj.channelIconWrapper = {};
  const obj1 = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
  const tmp = arg0 ? {} : { "Null": null, "Null": "Nostril L" };
  obj.guildChannelIcon = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_STRONG };
  obj.subTitleContainer = { replace: null, count: null, ip: null, hash: null };
  obj.parentChannelName = { has: "Group 11", colors: 2 };
  return obj;
});
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp13Result, callback, combined, titleContentHeight) {
  return callback2(TitleWrapper, { onPress: callback, headerAccessibilityLabel: combined, titleContentHeight, children: tmp13Result });
};
export const renderChannelTitle = function renderChannelTitle(channelName, arg1) {
  let accessibleTitle;
  let subtitle;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const disableArrow = obj.disableArrow;
  let tmp = undefined !== disableArrow;
  ({ accessibleTitle, subtitle } = obj);
  if (tmp) {
    tmp = disableArrow;
  }
  obj = { title: channelName, accessibleTitle, subtitle, disableArrow: tmp };
  ({ userId: obj2.userId, guildId: obj2.guildId, icon: obj2.icon } = obj);
  return callback2(ChannelTitle, obj);
};
export const renderGroupDMIcon = function renderGroupDMIcon(stateFromStores) {
  return callback2(GroupDMIcon, { channel: stateFromStores });
};
export const renderUserAvatar = function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  return callback2(UserAvatar, { user: stateFromStores1, status, isMobileOnline, isVROnline });
};
export { renderChannelIconRaw };
export const renderChannelIcon = function renderChannelIcon(stateFromStores, stateFromStores3) {
  let obj = stateFromStores3(dependencyMap[17]);
  const channelIconWithGuild = obj.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  obj = {};
  let rulesChannelId;
  if (null != stateFromStores3) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  obj.isRulesChannel = rulesChannelId === stateFromStores.id;
  return renderChannelIconRaw(channelIconWithGuild, stateFromStores3(dependencyMap[17]).getChannelIconComponent(stateFromStores, obj));
};
export const renderMemberCountText = function renderMemberCountText(online, length, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount: length, withSeparator: flag };
    let tmp = callback2(MemberCountText, obj);
  } else {
    tmp = null;
  }
  return tmp;
};
export const renderParentChannelSubTitle = function renderParentChannelSubTitle(parentChannel) {
  return callback2(ParentChannelSubTitle, { channel: parentChannel });
};
export const renderEmptyIcon = function renderEmptyIcon() {
  return callback2(EmptyIcon, {});
};
