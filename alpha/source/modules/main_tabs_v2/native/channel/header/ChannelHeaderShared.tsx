// Module ID: 11305
// Function ID: 11306
// Name: ChannelHeaderShared
// Dependencies: [32, 19, 17, 4951, 1384, 21, 5009, 575, 6974, 1376, 10752, 5619, 1188, 11306, 10779, 5591, 8595, 7143, 11307, 1114, 5647, 5712, 1410, 9183, 2]
// Exports: renderAppSubTitle, renderChannelIcon, renderChannelIconRaw, renderChannelTitle, renderEmptyIcon, renderGroupDMIcon, renderMemberCountText, renderParentChannelSubTitle, renderTitleWrapper, renderUserAvatar

// Module 11305 (ChannelHeaderShared)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import useChannelName from "useChannelName" /* 5647 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Pressables from "Pressables" /* 6974 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7143 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import BotTagDefault from "BotTag" /* 9183 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10779 */;
import AssetRegistryDefault from "AssetRegistry" /* 11306 */;
import GuildActionSheetMemberCountDefault from "GuildActionSheetMemberCount" /* 11307 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let Platform;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
function TitleWrapper(headerAccessibilityLabel) {
  let c1;
  let children;
  let onPress;
  let titleContentHeight;
  let tmp3;
  let tmp6Result;
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  c1 = undefined;
  headerAccessibilityLabel = headerAccessibilityLabel.headerAccessibilityLabel;
  const tmp = closure_11();
  [tmp3, c1] = react.useState(undefined);
  [][0] = titleContentHeight;
  _slicedToArray(react.useState(undefined), 2);
  const callback = react.useCallback((nativeEvent) => {
    const obj = { borderless: true, radius: nativeEvent.nativeEvent.layout.width };
    _undefined(obj);
  }, []);
  if (null == onPress) {
    const obj2 = { style: tmp.wrapper, accessibilityRole: "header", children };
    tmp6Result = metroImportAll(hasOwnProperty, obj2);
  } else {
    const PressableOpacity = Pressables.PressableOpacity;
    let obj = PlatformUtils;
    let tmp9;
    const tmp6 = metroImportAll;
    if (obj.isAndroid()) {
      tmp9 = callback;
    }
    const obj3 = { onLayout: tmp9, onPress, androidRippleConfig: tmp3, accessibilityRole: "header", accessibilityLabel: headerAccessibilityLabel, hitSlop: tmp5, style: tmp.wrapper, children };
    tmp6Result = tmp6(PressableOpacity, obj3);
  }
  return tmp6Result;
}
function ChannelTitle(guildId) {
  let accessibleTitle;
  let disableArrow;
  let icon;
  let items;
  let items1;
  let subtitle;
  let title;
  let tmp5;
  let tmp8;
  let userId;
  ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
  if (disableArrow === undefined) {
    disableArrow = false;
  }
  ({ userId, icon } = guildId);
  guildId = guildId.guildId;
  const tmp = closure_11();
  let tmp4 = null;
  const obj = { style: tmp.channelContent, children: items1 };
  const obj2 = { style: tmp.nameWithArrow, children: items };
  if (null != icon) {
    tmp4 = icon;
  }
  items = [tmp4, , ];
  if (null != userId) {
    const obj3 = { userId, guildId, userName: title, variant: "redesign/heading-18/semibold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, style: null, containerStyle: null, accessibilityLabel: accessibleTitle, accessibilityRole: "header", maxFontSizeMultiplier: 2 };
    ({ channelName: obj4.style, channelNameContainer: obj4.containerStyle } = tmp);
    tmp8 = metroImportAll(UsernameWithEffectsDefault, obj3);
    tmp5 = metroImportAll;
  } else {
    tmp5 = metroImportAll;
    const obj5 = { variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp.channelName, accessibilityLabel: accessibleTitle, accessibilityRole: "header", maxFontSizeMultiplier: 2, children: title };
    tmp8 = metroImportAll(Text_Text.Text, obj5);
  }
  items[1] = tmp8;
  let tmp5Result = !disableArrow;
  if (tmp5Result) {
    const obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
    const Icon = native.Icon;
    tmp5Result = tmp5(Icon, obj6);
  }
  items[2] = tmp5Result;
  items1 = [React4(hasOwnProperty, obj2), ];
  let tmp5Result2 = null != subtitle;
  if (tmp5Result2) {
    const obj11 = { style: tmp.subTitleContainer, children: subtitle };
    tmp5Result2 = tmp5(tmp3, obj11);
  }
  items1[1] = tmp5Result2;
  return React4(hasOwnProperty, obj);
}
function GroupDMIcon(channel) {
  channel = channel.channel;
  const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp = GroupDMAvatarDefault;
  return metroImportAll(tmp, obj);
}
function UserAvatar(user) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let tmp;
  let tmp3;
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = { user, avatarDecoration: user.avatarDecoration, guildId: "Boolean", size: native.AvatarSizes.REFRESH_MEDIUM_32, status: tmp3, isMobileOnline, isVROnline, style: tmp.channelIcon, autoStatusCutout: null };
  tmp = closure_11();
  const Avatar = native.Avatar;
  tmp3 = null;
  const tmp2 = metroImportAll;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  return tmp2(Avatar, obj);
}
function ChannelIconRaw(IconComponent) {
  let tmp6;
  IconComponent = IconComponent.IconComponent;
  const icon = IconComponent.icon;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    const obj2 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
    tmp6 = metroImportAll(IconComponent, obj2);
  } else {
    const obj3 = { size: native.Icon.Sizes.SMALL_20, source: icon, color: tmp4.guildChannelIcon.tintColor };
    const Icon = tmp(1188).Icon;
    tmp6 = metroImportAll(Icon, obj3);
  }
  return tmp6;
}
function MemberCountText(arg0) {
  let leadingAccessoryWidth;
  let memberCount;
  let presenceCount;
  let withSeparator;
  ({ presenceCount, memberCount } = arg0);
  let str = "online";
  ({ withSeparator, leadingAccessoryWidth } = arg0);
  if (0 === presenceCount) {
    str = "online";
    if (null !== memberCount) {
      str = "total";
    }
  }
  let str2 = "text-sm/normal";
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
    str2 = "text-xs/normal";
  }
  const obj2 = { type: str, count: memberCount, color: "text-subtle", dotContainerWidth: leadingAccessoryWidth, textVariant: str2 };
  const tmp4 = React4;
  const tmp5 = authStore;
  const tmp7 = GuildActionSheetMemberCountDefault;
  if ("online" === str) {
    memberCount = presenceCount;
  }
  const children = [metroImportAll(tmp7, obj2), ];
  let tmp6Result = null;
  if (withSeparator) {
    const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
    tmp6Result = tmp6(Text_Text.Text, obj3);
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
}
class SubtitleText {
  constructor(arg0) {
    const obj = { variant: "text-sm/medium", color: "text-subtle", maxFontSizeMultiplier: 2 };
    const Text = Text_Text.Text;
    const merged = Object.assign(arg0);
    return metroImportAll(Text, obj);
  }
}
function ParentChannelSubTitle(channel) {
  let BjYvHO;
  let formatToPlainString;
  let obj2;
  let obj3;
  let obj4;
  let tmp;
  channel = channel.channel;
  const obj = { lineClamp: 1, accessibilityLabel: formatToPlainString(BjYvHO, obj2), style: tmp.parentChannelName, children: obj4.computeChannelName(channel, UserStore, RelationshipStore) };
  tmp = closure_11();
  const intl = intl2.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { channelName: obj3.computeChannelName(channel, UserStore, RelationshipStore) };
  BjYvHO = intl2.t.BjYvHO;
  obj3 = useChannelName;
  obj4 = useChannelName;
  return metroImportAll(SubtitleText, obj);
}
function AppSubTitle(application) {
  let items;
  let obj4;
  let obj6;
  application = application.application;
  const tmp = closure_11();
  let tmp7 = null;
  const obj2 = { style: tmp.appSubTitle, children: items };
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle");
  const tmp5 = React4;
  const tmp6 = hasOwnProperty;
  if (null != application.icon) {
    const obj3 = { source: obj4.getApplicationIconSource(obj6), style: tmp.appIcon };
    obj6 = { id: null, icon: null, size: 16 };
    ({ id: obj5.id, icon: obj5.icon } = application);
    const tmp10 = FastImageDefault;
    obj4 = AvatarUtilsDefault;
    tmp7 = metroImportAll(tmp10, obj3);
  }
  items = [tmp7, , ];
  let str = "text-sm/normal";
  const Text = Text_Text.Text;
  if (manaTypeConsolidationExperiment) {
    str = "text-xs/normal";
  }
  const obj7 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, color: "text-subtle", style: tmp.appName, children: application.name };
  items[1] = metroImportAll(Text, obj7);
  const obj12 = { verified: application.isVerified, size: "sm" };
  items[2] = metroImportAll(BotTagDefault, obj12);
  return tmp5(tmp6, obj2);
}
function AppSubTitleSkeleton() {
  let items;
  const tmp = closure_11();
  const obj = { style: tmp.appSubTitle, "aria-hidden": true, children: items };
  items = [, ];
  const obj2 = { style: tmp.skeletonIcon };
  items[0] = metroImportAll(hasOwnProperty, obj2);
  const obj3 = { style: tmp.skeletonName };
  items[1] = metroImportAll(hasOwnProperty, obj3);
  return React4(hasOwnProperty, obj);
}
function NoAppSubTitle() {
  let intl;
  const tmp = closure_11();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle");
  let str = "text-sm/normal";
  const Text = Text_Text.Text;
  const tmp5 = metroImportAll;
  if (manaTypeConsolidationExperiment) {
    str = "text-xs/normal";
  }
  const obj2 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, color: "text-subtle", style: tmp.noApp, children: intl.string(intl2.t.tU5fiM) };
  intl = tmp2(1114).intl;
  return tmp5(Text, obj2);
}
function EmptyIcon() {
  const obj = { style: closure_11().channelIconWrapper };
  return metroImportAll(hasOwnProperty, obj);
}
({ View: hasOwnProperty, Platform } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let closure_11 = createStyles.createStyles(() => {
  let size1;
  let size2;
  const obj = { wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 }, channelContent: { flex: 1, flexShrink: 1, justifyContent: "center", marginTop: 4 }, nameWithArrow: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, channelNameContainer: { flexShrink: 1 }, channelName: { flexShrink: 1 }, arrowIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0, flexGrow: 0, marginTop: 2, marginLeft: 2 }, channelIcon: { marginRight: 12, flexShrink: 0 }, channelIconWrapper: { width: 32, height: 32, justifyContent: "center", alignItems: "center" }, guildChannelIcon: { tintColor: nativeDefault.colors.TEXT_STRONG }, subTitleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 }, appSubTitle: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 }, appIcon: size, appName: { flexShrink: 1 }, noApp: { fontStyle: "italic" }, skeletonIcon: size1, skeletonName: size2, parentChannelName: { lineHeight: 20, flexShrink: 1 } };
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0, flexGrow: 0, marginTop: 2, marginLeft: 2 });
  ({ tintColor: nativeDefault.colors.TEXT_STRONG });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 });
  size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs };
  size1 = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  size2 = { width: 96, height: 10, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export function renderTitleWrapper(tmp31Result, callback, joined, titleContentHeight) {
  const obj = { onPress: callback, headerAccessibilityLabel: joined, titleContentHeight, children: tmp31Result };
  return metroImportAll(TitleWrapper, obj);
}
export function renderChannelTitle(channelName, arg1) {
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
  const obj2 = { title: channelName, accessibleTitle, subtitle, disableArrow: tmp, userId: obj.userId, guildId: obj.guildId, icon: obj.icon };
  return metroImportAll(ChannelTitle, obj2);
}
export function renderGroupDMIcon(stateFromStores) {
  const obj = { channel: stateFromStores };
  return metroImportAll(GroupDMIcon, obj);
}
export function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  const obj = { user: stateFromStores1, status, isMobileOnline, isVROnline };
  return metroImportAll(UserAvatar, obj);
}
export function renderChannelIconRaw(icon, IconComponent) {
  const obj = { icon, IconComponent };
  return metroImportAll(ChannelIconRaw, obj);
}
export function renderChannelIcon(id, rulesChannelId) {
  const obj = utils_ChannelUtils;
  const channelIconWithGuild = obj.getChannelIconWithGuild(id, rulesChannelId);
  rulesChannelId = undefined;
  const getChannelIconComponent = utils_ChannelUtils.getChannelIconComponent;
  utils_ChannelUtils;
  if (rulesChannelId != null) {
    rulesChannelId = rulesChannelId.rulesChannelId;
  }
  const obj2 = { isRulesChannel: rulesChannelId === id.id };
  const obj3 = { icon: channelIconWithGuild, IconComponent: getChannelIconComponent(id, obj2) };
  return metroImportAll(ChannelIconRaw, obj3);
}
export function renderMemberCountText(online, memberCount, flag, leadingAccessoryWidth) {
  let tmp;
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount, withSeparator: flag, leadingAccessoryWidth };
    tmp = metroImportAll(MemberCountText, obj);
  } else {
    tmp = null;
  }
  return tmp;
}
export { SubtitleText };
export function renderParentChannelSubTitle(stateFromStores2) {
  const obj = { channel: stateFromStores2 };
  return metroImportAll(ParentChannelSubTitle, obj);
}
export function renderAppSubTitle(appChannelApplication, arg1) {
  let tmp2;
  if (null != appChannelApplication) {
    const obj = { application: appChannelApplication };
    tmp2 = metroImportAll(AppSubTitle, obj);
  } else {
    tmp2 = metroImportAll(arg1 ? AppSubTitleSkeleton : NoAppSubTitle, {});
  }
  return tmp2;
}
export function renderEmptyIcon() {
  return metroImportAll(EmptyIcon, {});
}
