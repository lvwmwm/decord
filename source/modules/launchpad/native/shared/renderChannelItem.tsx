// Module ID: 15547
// Function ID: 118630
// Name: LaunchpadChannelIcon
// Dependencies: []
// Exports: default, getChannelAccessibilityProps

// Module 15547 (LaunchpadChannelIcon)
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_4];
  obj = {};
  obj = { style: tmp.guildBadgeIcon };
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  const tmp2 = importDefault(dependencyMap[10])();
  obj.children = callback(importDefault(dependencyMap[12]), { guild: stateFromStores, size: importDefault(dependencyMap[10])().icon.guildBadgeIconSize });
  const items1 = [callback(View, obj), ];
  const obj2 = { "Null": false, "Null": false, "Null": false, channel };
  items1[1] = callback(arg1(dependencyMap[13]).ChannelIcon, obj2);
  obj.children = items1;
  return callback2(closure_9, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const UnreadSetting = arg1(dependencyMap[5]).UnreadSetting;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[8]).createStyles(() => {
  let obj = {};
  obj = { "Bool(true)": "hidden", "Null": 2.18, "Null": "rgba(151, 151, 159, 0.24)", "Null": null, "Null": "solid", "Null": null, "Null": "hidden", borderColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
  obj.guildBadgeIcon = obj;
  return obj;
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

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
      let obj = arg1(dependencyMap[14]);
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp5 = importDefault(dependencyMap[10])();
  obj = {};
  const items = [unreadBadge, , , ];
  obj = {};
  const obj1 = { stroke: true, strokeWidth: true, strokeDasharray: true, strokeLinecap: true, position: true, bottom: true, borderRadius: importDefault(dependencyMap[9]).radii.round, width: tmp5.icon.wrapper.size, height: tmp5.icon.wrapper.size };
  const merged = Object.assign(tmp5.icon.margin);
  obj.style = obj1;
  if (channel.isGroupDM()) {
    const obj2 = { channel, size: tmp5.icon.avatarSize };
    let tmp12Result = tmp12(importDefault(dependencyMap[16]), obj2);
  } else {
    const obj3 = { channel };
    tmp12Result = tmp12(LaunchpadChannelIcon, obj3);
  }
  obj.children = tmp12Result;
  items[1] = callback(View, obj);
  const obj4 = {};
  const tmp10 = View;
  const tmp6 = importDefault(dependencyMap[15]);
  const tmp7 = closure_10;
  const tmp8 = closure_9;
  const tmp9 = callback;
  if (null == channelName) {
    channelName = arg1(dependencyMap[18]).computeChannelName(channel, closure_6, closure_5);
    const obj8 = arg1(dependencyMap[18]);
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
  items[2] = importDefault(dependencyMap[17])(obj4);
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
  const obj = { fontFamily: null, fontSize: null };
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  obj.accessibilityLabel = importDefault(dependencyMap[7])({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount });
  return obj;
};
