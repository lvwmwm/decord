// Module ID: 15240
// Function ID: 115052
// Name: LaunchpadChannelIcon
// Dependencies: []
// Exports: getChannelAccessibilityProps, renderChannelItem

// Module 15240 (LaunchpadChannelIcon)
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const layout = channel.layout;
  let obj = arg1(dependencyMap[11]);
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_4];
  obj = {};
  obj = { style: callback2(layout).guildBadgeIcon };
  const stateFromStores = obj1.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  obj1 = { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize };
  obj.children = callback(importDefault(dependencyMap[13]), obj1);
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
  const obj7 = arg1(dependencyMap[11]);
  let num = 32;
  if (obj8.isLayoutCozy(layout)) {
    num = 48;
  }
  obj2.wrapperSize = num;
  items1[1] = tmp6(arg1(dependencyMap[14]).ChannelIcon, obj2);
  obj.children = items1;
  return tmp4(tmp5, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const UnreadSetting = arg1(dependencyMap[5]).UnreadSetting;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[9]).createStyles((layout) => {
  let obj = {};
  obj = { GIFT_INFO_OPTIONS_MISSING: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000047872310352241, EmptyServerSettingsEmoji: 1758583134256773600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, editId: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011273447027010936, focused: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179210413226, selectionStart: -2852683437278811300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, selectionEnd: 131072.00119210233, borderColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
  let num = 6;
  if (obj3.isLayoutCozy(layout)) {
    num = 9;
  }
  obj.borderRadius = num;
  obj.guildBadgeIcon = obj;
  return obj;
});
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx");

export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  let embeddedActivitiesCount;
  let mentionCount;
  let unread;
  let voiceStates;
  channel = channel.channel;
  let obj = { marginBottom: null, borderWidth: null };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  obj.accessibilityLabel = importDefault(dependencyMap[7])({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount });
  if (channel.isGuildVoice()) {
    obj = {};
    const intl = arg1(dependencyMap[8]).intl;
    obj.accessibilityHint = intl.string(arg1(dependencyMap[8]).t.9C444m);
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
      let obj = arg1(dependencyMap[15]);
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  let obj1 = arg1(dependencyMap[11]);
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = arg1(dependencyMap[16]);
  obj = {};
  const items = [unreadBadge, , , ];
  obj = {};
  obj1 = { FPS_15: "shapes", getImageSourcesFromImageProps: "Symbol", numpad 4: "accessibilityRole", useIsWindowSmall: "Reflect", maskRemainder: "HTTP", overflow: "Reflect", borderRadius: importDefault(dependencyMap[10]).radii.round };
  let obj6 = arg1(dependencyMap[11]);
  const merged = Object.assign(obj6.makeSizeStyle(layoutStyles.icon.wrapper.size));
  const merged1 = Object.assign(layoutStyles.icon.margin);
  obj.style = obj1;
  if (channel.isGroupDM()) {
    obj2 = { channel, size: layoutStyles.icon.avatarSize };
    let tmp12Result = tmp12(importDefault(dependencyMap[17]), obj2);
  } else {
    const obj3 = { channel, layout };
    tmp12Result = tmp12(LaunchpadChannelIcon, obj3);
  }
  obj.children = tmp12Result;
  items[1] = callback(View, obj);
  const obj4 = { layout };
  if (null == channelName) {
    channelName = arg1(dependencyMap[19]).computeChannelName(channel, closure_6, closure_5);
    const obj12 = arg1(dependencyMap[19]);
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
  items[2] = arg1(dependencyMap[18]).renderChannelContent(obj4);
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
