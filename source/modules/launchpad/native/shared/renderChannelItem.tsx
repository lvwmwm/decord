// Module ID: 15672
// Function ID: 120846
// Name: LaunchpadChannelIcon
// Dependencies: [31, 27, 1838, 3767, 1849, 4326, 33, 8450, 4130, 689, 15659, 566, 5515, 11311, 6884, 15661, 9096, 15664, 4320, 2]
// Exports: default, getChannelAccessibilityProps

// Module 15672 (LaunchpadChannelIcon)
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
  const tmp = callback3();
  let obj = channel(566);
  const items = [closure_4];
  obj = {};
  obj = { style: tmp.guildBadgeIcon };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  const tmp2 = importDefault(15659)();
  obj.children = callback(importDefault(5515), { guild: stateFromStores, size: importDefault(15659)().icon.guildBadgeIconSize });
  const items1 = [callback(View, obj), ];
  const obj2 = { channel, size: "sm", wrapperSize: 32 };
  items1[1] = callback(channel(11311).ChannelIcon, obj2);
  obj.children = items1;
  return callback2(closure_9, obj);
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj.guildBadgeIcon = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

export default function renderChannelItem(unread) {
  let channel;
  let channelCategoryName;
  let channelName;
  let connected;
  let end;
  let fontScale;
  let isSubscriptionGated;
  let latestMessageTimestamp;
  let locked;
  let mentionBadge;
  let mentionCount;
  let subtitle;
  let unreadBadge;
  ({ channel, locked } = unread);
  ({ channelCategoryName, subtitle, unreadBadge, mentionBadge } = unread);
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
  ({ latestMessageTimestamp, end, channelName, isSubscriptionGated, connected, mentionCount, fontScale } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      let obj = require(6884) /* getRelativeTimestamp */;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp5 = importDefault(15659)();
  obj = {};
  const items = [unreadBadge, , , ];
  obj = {};
  const obj1 = { position: "relative", borderRadius: importDefault(689).radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp5.icon.wrapper.size, height: tmp5.icon.wrapper.size };
  const merged = Object.assign(tmp5.icon.margin);
  obj.style = obj1;
  if (channel.isGroupDM()) {
    const obj2 = { channel, size: tmp5.icon.avatarSize };
    let tmp12Result = tmp12(importDefault(9096), obj2);
  } else {
    const obj3 = { channel };
    tmp12Result = tmp12(LaunchpadChannelIcon, obj3);
  }
  obj.children = tmp12Result;
  items[1] = callback(View, obj);
  const obj4 = {};
  const tmp10 = View;
  const tmp6 = importDefault(15661);
  const tmp7 = closure_10;
  const tmp8 = closure_9;
  const tmp9 = callback;
  if (null == channelName) {
    channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_6, _isNativeReflectConstruct);
    const obj8 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  }
  obj4.name = channelName;
  obj4.subtitle = subtitle;
  obj4.unread = flag;
  obj4.resolvedUnreadSetting = ONLY_MENTIONS;
  obj4.muted = flag3;
  obj4.lastMessageTimestampString = relativeTimestamp;
  obj4.channel = channel;
  obj4.channelCategoryName = channelCategoryName;
  obj4.locked = locked;
  obj4.connected = connected;
  obj4.live = flag2;
  obj4.mentionCount = mentionCount;
  obj4.mentionBadge = mentionBadge;
  obj4.isSubscriptionGated = isSubscriptionGated;
  obj4.needSubscriptionToAccess = flag4;
  items[2] = importDefault(15664)(obj4);
  let tmp22 = null;
  if (null != end) {
    const obj5 = {};
    const obj6 = { paddingLeft: 8 };
    obj5.style = obj6;
    obj5.children = end;
    tmp22 = callback(View, obj5);
  }
  items[3] = tmp22;
  obj.children = items;
  return tmp6(tmp7(tmp8, obj), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(arg0) {
  let channel;
  let embeddedActivitiesCount;
  let mentionCount;
  let unread;
  let voiceStates;
  const obj = { accessible: true, accessibilityRole: "button" };
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  obj.accessibilityLabel = importDefault(8450)({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount });
  return obj;
};
