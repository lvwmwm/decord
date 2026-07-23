// Module ID: 15356
// Function ID: 117222
// Name: LaunchpadChannelIcon
// Dependencies: [31, 27, 1838, 3767, 1849, 4326, 33, 8450, 1212, 4130, 689, 10261, 566, 5515, 11311, 6884, 15168, 9096, 15354, 4320, 2]
// Exports: getChannelAccessibilityProps, renderChannelItem

// Module 15356 (LaunchpadChannelIcon)
import "result";
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const layout = channel.layout;
  let obj = channel(10261);
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = channel(566);
  const items = [closure_4];
  obj = {};
  obj = { style: callback2(layout).guildBadgeIcon };
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  obj1 = { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize };
  obj.children = callback(importDefault(5515), obj1);
  const items1 = [callback(View, obj), ];
  const obj2 = { channel };
  const tmp = callback2(layout);
  const tmp4 = closure_10;
  const tmp5 = closure_9;
  const tmp6 = callback;
  let str = "sm";
  if (obj7.isLayoutCozy(layout)) {
    str = "md";
  }
  obj2.size = str;
  obj7 = channel(10261);
  let num = 32;
  if (obj8.isLayoutCozy(layout)) {
    num = 48;
  }
  obj2.wrapperSize = num;
  items1[1] = tmp6(channel(11311).ChannelIcon, obj2);
  obj.children = items1;
  return tmp4(tmp5, obj);
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((layout) => {
  let obj = {};
  obj = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderWidth: 2 };
  let num = 6;
  if (obj3.isLayoutCozy(layout)) {
    num = 9;
  }
  obj.borderRadius = num;
  obj.guildBadgeIcon = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx");

export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  let embeddedActivitiesCount;
  let mentionCount;
  let unread;
  let voiceStates;
  channel = channel.channel;
  let obj = { accessible: true, accessibilityRole: "button" };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  obj.accessibilityLabel = importDefault(8450)({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount });
  if (channel.isGuildVoice()) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t["9C444m"]);
    const tmp = obj;
  }
  const merged = Object.assign(tmp);
  return obj;
};
export const renderChannelItem = function renderChannelItem(unread) {
  let channel;
  let channelName;
  let connected;
  let end;
  let fontScale;
  let isSubscriptionGated;
  let latestMessageTimestamp;
  let launchpad;
  let layout;
  let locked;
  let mentionBadge;
  let mentionCount;
  let subtitle;
  let unreadBadge;
  ({ channel, locked } = unread);
  ({ subtitle, unreadBadge, mentionBadge } = unread);
  if (locked === undefined) {
    locked = false;
  }
  let flag = unread.unread;
  if (flag === undefined) {
    flag = false;
  }
  let ONLY_MENTIONS = unread.resolvedUnreadSetting;
  if (ONLY_MENTIONS === undefined) {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  let flag2 = unread.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = unread.muted;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ latestMessageTimestamp, layout, end, channelName, isSubscriptionGated, connected, mentionCount, launchpad, fontScale } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = unread.panelVariant;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      let obj = require(6884) /* getRelativeTimestamp */;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  let obj1 = require(10261) /* getLayoutStyles */;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = require(15168) /* renderChannelWrapper */;
  obj = {};
  const items = [unreadBadge, , , ];
  obj = {};
  obj1 = { position: "relative", borderRadius: importDefault(689).radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0 };
  let obj6 = require(10261) /* getLayoutStyles */;
  const merged = Object.assign(obj6.makeSizeStyle(layoutStyles.icon.wrapper.size));
  const merged1 = Object.assign(layoutStyles.icon.margin);
  obj.style = obj1;
  if (channel.isGroupDM()) {
    obj2 = { channel, size: layoutStyles.icon.avatarSize };
    let tmp12Result = tmp12(importDefault(9096), obj2);
  } else {
    const obj3 = { channel, layout };
    tmp12Result = tmp12(LaunchpadChannelIcon, obj3);
  }
  obj.children = tmp12Result;
  items[1] = callback(View, obj);
  const obj4 = { layout };
  if (null == channelName) {
    channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_6, _isNativeReflectConstruct);
    const obj12 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  }
  obj4.name = channelName;
  obj4.subtitle = subtitle;
  obj4.unread = flag;
  obj4.resolvedUnreadSetting = ONLY_MENTIONS;
  obj4.muted = flag3;
  obj4.lastMessageTimestampString = relativeTimestamp;
  obj4.channel = channel;
  obj4.locked = locked;
  obj4.connected = connected;
  obj4.live = flag2;
  obj4.mentionCount = mentionCount;
  obj4.mentionBadge = mentionBadge;
  obj4.isSubscriptionGated = isSubscriptionGated;
  obj4.needSubscriptionToAccess = flag4;
  items[2] = require(15354) /* ChannelContentComponent */.renderChannelContent(obj4);
  let tmp21 = null;
  if (null != end) {
    const obj5 = {};
    obj6 = { paddingLeft: 8 };
    obj5.style = obj6;
    obj5.children = end;
    tmp21 = callback(View, obj5);
  }
  items[3] = tmp21;
  obj.children = items;
  const obj7 = { channel, layout, launchpad, fontScale, panelVariant: flag5 };
  return obj2.renderChannelWrapper(closure_10(closure_9, obj), obj7);
};
