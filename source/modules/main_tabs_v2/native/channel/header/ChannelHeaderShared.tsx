// Module ID: 10151
// Function ID: 78502
// Name: TitleWrapper
// Dependencies: [57, 31, 27, 3767, 1849, 9159, 33, 4130, 689, 1324, 4660, 477, 8558, 4126, 1273, 10152, 9134, 3834, 4593, 10153, 1212, 4320, 2]
// Exports: renderChannelIcon, renderChannelTitle, renderEmptyIcon, renderGroupDMIcon, renderMemberCountText, renderParentChannelSubTitle, renderTitleWrapper, renderUserAvatar

// Module 10151 (TitleWrapper)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { getMinHeaderHeight } from "MIN_HEADER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function TitleWrapper(headerAccessibilityLabel) {
  let children;
  let onPress;
  let titleContentHeight;
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  const tmp = callback3(importDefault(1324)("ChannelHeaderShared"));
  const tmp2 = callback(React.useState(undefined), 2);
  importDefault = tmp2[1];
  [][0] = titleContentHeight;
  callback = React.useCallback((nativeEvent) => {
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
    tmp5Result = callback2(titleContentHeight(4660).PressableOpacity, obj);
    obj2 = titleContentHeight(477);
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
  const tmp = importDefault(1324)("ChannelTitle");
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
    let tmp8Result = callback2(importDefault(8558), obj);
    const tmp12 = callback2;
    const tmp15 = importDefault(8558);
  } else {
    const obj1 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, accessibilityLabel: null, accessibilityRole: "header", maxFontSizeMultiplier: 2 };
    let str = "heading-lg/bold";
    if (tmp) {
      str = "redesign/heading-18/semibold";
    }
    obj1.variant = str;
    obj1.style = tmp2.channelName;
    obj1.accessibilityLabel = accessibleTitle;
    obj1.children = title;
    tmp8Result = callback2(require(4126) /* Text */.Text, obj1);
    const tmp8 = callback2;
  }
  items[1] = tmp8Result;
  let tmp16 = !disableArrow;
  if (tmp16) {
    const obj2 = { source: importDefault(10152), size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, style: tmp2.arrowIcon };
    tmp16 = callback2(require(1273) /* Button */.Icon, obj2);
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
  const tmp = callback3(importDefault(1324)("ChannelHeaderShared"));
  obj.size = require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32;
  obj.channel = channel.channel;
  obj.style = tmp.channelIcon;
  return callback2(importDefault(9134), obj);
}
function UserAvatar(user) {
  let isMobileOnline;
  let isVROnline;
  let status;
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = { user, avatarDecoration: user.avatarDecoration, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32 };
  let tmp3 = null;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  obj.status = tmp3;
  obj.isMobileOnline = isMobileOnline;
  obj.isVROnline = isVROnline;
  obj.style = callback3(importDefault(1324)("ChannelHeaderShared")).channelIcon;
  obj.autoStatusCutout = true;
  return closure_9(require(1273) /* Button */.Avatar, obj);
}
function renderChannelIconRaw(icon, IconComponent) {
  return callback2(ChannelIconRaw, { icon, IconComponent });
}
function ChannelIconRaw(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const tmp = importDefault(1324)("ChannelHeaderShared");
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    obj = { size: token };
    let str = "text-strong";
    if (tmp) {
      str = "icon-strong";
    }
    obj.color = str;
    let tmp9;
    if (tmp) {
      obj = { marginEnd: 4 };
      tmp9 = obj;
    }
    obj.style = tmp9;
    let tmp8Result = callback2(IconComponent, obj);
    const tmp8 = callback2;
  } else {
    const obj1 = { size: require(1273) /* Button */.Icon.Sizes.SMALL_20, source: IconComponent.icon, color: tmp3.guildChannelIcon.tintColor };
    tmp8Result = callback2(require(1273) /* Button */.Icon, obj1);
  }
  return tmp8Result;
}
function MemberCountText(arg0) {
  let leadingAccessoryWidth;
  let memberCount;
  let presenceCount;
  let withSeparator;
  ({ presenceCount, memberCount } = arg0);
  ({ withSeparator, leadingAccessoryWidth } = arg0);
  const tmp = importDefault(1324)("ChannelHeaderShared");
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
  let tmp8;
  if (tmp) {
    tmp8 = leadingAccessoryWidth;
  }
  obj.dotContainerWidth = tmp8;
  const items = [closure_9(importDefault(10153), obj), ];
  let tmp10Result = null;
  if (withSeparator) {
    obj = { variant: null, color: "text-subtle", children: "\u2022" };
    let str3 = "text-xs/medium";
    if (tmp) {
      str3 = "text-sm/normal";
    }
    obj.variant = str3;
    tmp10Result = closure_9(require(4126) /* Text */.Text, obj);
    const tmp10 = closure_9;
  }
  items[1] = tmp10Result;
  obj.children = items;
  return closure_10(closure_11, obj);
}
function ParentChannelSubTitle(channel) {
  channel = channel.channel;
  const tmp = importDefault(1324)("ChannelHeaderShared");
  let obj = { lineClamp: 1, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const tmp2 = callback3(tmp);
  const tmp3 = closure_9;
  obj.channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_7, _isNativeReflectConstruct);
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BjYvHO, obj);
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
  const obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  obj.children = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_7, _isNativeReflectConstruct);
  return tmp3(require(4126) /* Text */.Text, obj);
}
function EmptyIcon() {
  return callback2(View, { style: callback3(importDefault(1324)("ChannelHeaderShared")).channelIconWrapper });
}
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 } };
  obj = { flex: 1, flexShrink: 1, justifyContent: "center" };
  let num;
  if (arg0) {
    num = 4;
  }
  obj.marginTop = num;
  obj.channelContent = obj;
  obj.nameWithArrow = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
  obj = { flexShrink: 1 };
  const merged = Object.assign(arg0 ? {} : { fontSize: 18, lineHeight: 24 });
  obj.channelName = obj;
  const obj1 = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0, flexGrow: 0, marginTop: 2, marginLeft: 2 };
  obj.arrowIcon = obj1;
  obj.channelIcon = { marginRight: 12, flexShrink: 0 };
  obj.channelIconWrapper = { width: 32, height: 32, justifyContent: "center", alignItems: "center" };
  obj.guildChannelIcon = { tintColor: importDefault(689).colors.TEXT_STRONG };
  obj.subTitleContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
  obj.parentChannelName = { lineHeight: 16, flexShrink: 1 };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

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
  let obj = require(4593) /* getThreadChannelIcon */;
  const channelIconWithGuild = obj.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  obj = {};
  let rulesChannelId;
  if (null != stateFromStores3) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  obj.isRulesChannel = rulesChannelId === stateFromStores.id;
  return renderChannelIconRaw(channelIconWithGuild, require(4593) /* getThreadChannelIcon */.getChannelIconComponent(stateFromStores, obj));
};
export const renderMemberCountText = function renderMemberCountText(online, length, flag, leadingAccessoryWidth) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount: length, withSeparator: flag, leadingAccessoryWidth };
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
