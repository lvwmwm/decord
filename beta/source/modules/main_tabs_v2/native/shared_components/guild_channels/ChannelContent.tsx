// Module ID: 16476
// Function ID: 16477
// Name: ChannelContent
// Dependencies: [19, 17, 9577, 5018, 21, 4836, 1364, 9580, 5373, 16477, 5409, 8048, 15750, 4832, 2]
// Exports: renderChannelContent

// Module 16476 (ChannelContent)
import react_native from "react-native" /* 17 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5373 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import guild_channels_ChannelTitleDefault from "guild_channels/ChannelTitle" /* 16477 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let num2;
let obj2;
let tmp13;
const GuildRoleSubscriptionGatedChannelIconDefault = tmp13(15750);
function ChannelContentComponent(arg0) {
  let channel;
  let connected;
  let isSubscriptionGated;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let lastMessageTimestampString;
  let layout;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let obj3;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, lastMessageTimestampString, channel, layout, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_8();
  let tmp10Result = null != channel;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (tmp10Result) {
    if (!locked) {
      locked = isRoleRequiredDefault(channel);
    }
    tmp10Result = locked;
  }
  let isNSFWResult;
  if (channel != null) {
    isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = react.isValidElement(subtitle);
  let obj17 = null != lastMessageTimestampString;
  let tmp10Result6 = obj17 && null == mentionBadge;
  const obj2 = { style: tmp.channelContent, children: metroImportDefault(View, obj3) };
  const items = [tmp.leftBox, ];
  let str = "center";
  obj3 = { style: tmp.channelContainer, children: items6 };
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj4 = { style: items, children: items4 };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp10Result6) {
    num = 30;
  }
  const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: items1 };
  const obj6 = { title: name, muted, unread, resolvedUnreadSetting, connected, layout };
  const tmp14 = guild_channels_ChannelTitleDefault;
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  items1 = [metroRequire(tmp14, obj6), ];
  let tmp12Result = tmp10Result || isNSFWResult;
  if (tmp12Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp10Result) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj7 = { style: items2, children: items3 };
    const obj8 = { maxWidth: 14 * num3 };
    items2[1] = obj8;
    if (tmp10Result) {
      const obj9 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp10Result = tmp10(tmp2(5409).LockIcon, obj9);
    }
    items3 = [tmp10Result, , ];
    if (isNSFWResult) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = tmp10(tmp2(8048).WarningIcon, obj10);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj11 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = tmp10(GuildRoleSubscriptionGatedChannelIconDefault, obj11);
    }
    items3[2] = isSubscriptionGated;
    tmp12Result = tmp12(tmp11, obj7);
  }
  items1[1] = tmp12Result;
  items4 = [metroImportDefault(View, obj5), ];
  let tmp10Result4 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj12 = { style: items5, children: subtitle };
    items5 = [{ paddingRight: num5 }, ];
    const obj13 = { paddingRight: num5 };
    const obj14 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
    items5[1] = obj14;
    tmp10Result4 = tmp10(tmp11, obj12);
  }
  items4[1] = tmp10Result4;
  items6 = [metroImportDefault(View, obj4), ];
  let tmp10Result5 = obj17;
  const obj15 = { style: tmp10Result6 ? tmp.rightContentAbsolute : tmp.rightBox, children: items7 };
  if (tmp10Result5) {
    const obj16 = { variant: "text-xs/medium", color: "text-muted", style: { marginLeft: "auto" }, maxFontSizeMultiplier: 1.75, children: lastMessageTimestampString };
    tmp10Result5 = tmp10(tmp2(4832).Text, obj16);
  }
  items7 = [tmp10Result5, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj17) {
    obj17 = { marginTop: 5 };
  }
  items8[1] = obj17;
  items7[1] = metroRequire(View, { style: items8, children: mentionBadge });
  if (tmp10Result6) {
    const obj18 = { style: { flex: 1 } };
    tmp10Result6 = tmp10(tmp11, obj18);
  }
  items7[2] = tmp10Result6;
  items6[1] = metroImportDefault(View, obj15);
  return metroRequire(View, obj2);
}
const View = react_native.View;
const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: obj2 };
obj2 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: num2 };
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx");

export const renderChannelContent = function renderChannelContent(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroRequire(ChannelContentComponent, obj);
};
