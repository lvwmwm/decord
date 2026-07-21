// Module ID: 14933
// Function ID: 112413
// Name: _handleVoiceChannelPress
// Dependencies: []

// Module 14933 (_handleVoiceChannelPress)
function _handleVoiceChannelPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleVoiceChannelPress = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const NO_VOICE_STATES = arg1(dependencyMap[7]).NO_VOICE_STATES;
({ AnalyticEvents: closure_11, Permissions: closure_12 } = arg1(dependencyMap[9]));
const jsx = arg1(dependencyMap[10]).jsx;
let obj = {};
obj = { gap: importDefault(dependencyMap[11]).space.PX_8 };
obj.channelInfo = obj;
obj.voiceStates = { -1361444630: "LengthDelimited", 1381786073: "isArray", -1359566243: "%parseFloat%" };
obj.voiceStatesCollapsed = { marginLeft: 16 };
const tmp2 = arg1(dependencyMap[9]);
obj.container = { marginVertical: arg1(dependencyMap[8]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[11]).radii.md };
let closure_15 = importAllResult.memo((channel) => {
  let collapsed;
  let embeddedActivitiesCount;
  let locked;
  let mentionCount;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let voiceStates;
  channel = channel.channel;
  const arg1 = channel;
  ({ selected, collapsed, subtitle } = channel);
  let importDefault;
  ({ locked, voiceStates, embeddedActivitiesCount } = channel);
  let obj = arg1(dependencyMap[16]);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = arg1(dependencyMap[17]);
  const startTime = obj1.useStartTime(channel);
  let obj2 = arg1(dependencyMap[18]);
  const ensureSyncedChannelVoiceStates = obj2.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  let obj3 = arg1(dependencyMap[19]);
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  let obj4 = arg1(dependencyMap[20]);
  const items = [closure_8, closure_9];
  const items1 = [channel];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => ({ hasUnread: closure_8.hasUnread(channel.id), mentionCount: closure_8.getMentionCount(channel.id), resolvedUnreadSetting: closure_9.resolveUnreadSetting(channel) }), items1);
  let hasUnread = stateFromStoresObject.hasUnread;
  ({ mentionCount, resolvedUnreadSetting } = stateFromStoresObject);
  let obj5 = arg1(dependencyMap[21]);
  const channelSubtitleData = obj5.getChannelSubtitleData(subtitle);
  let type;
  if (null != subtitle) {
    type = subtitle.type;
  }
  let text = null;
  if ("voice" === type) {
    text = null;
    if (subtitle.text.length > 0) {
      text = subtitle.text;
    }
  }
  let obj6 = arg1(dependencyMap[22]);
  const gameMentionsAsPlainText = obj6.useGameMentionsAsPlainText(text);
  importDefault = gameMentionsAsPlainText;
  let result = null;
  if (null != gameMentionsAsPlainText) {
    let obj7 = importDefault(dependencyMap[23]);
    obj = { channelId: channel.id, linkVariant: "text-xs/medium" };
    result = obj7.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj);
  }
  let tmp12;
  if (!obj10.shouldSkipAccessibilityLabels()) {
    obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
    tmp12 = importDefault(dependencyMap[25])(obj);
  }
  const items2 = [, , ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const effect = importAllResult.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      let obj = gameMentionsAsPlainText(closure_2[26]);
      obj = {};
      ({ guild_id: obj2.guild_id, id: obj2.channel_id } = channel);
      obj.track(constants.VOICE_CHANNEL_TOPIC_VIEWED, obj);
    }
  }, items2);
  if (null == result) {
    subtitle = undefined;
    if (null != channelSubtitleData) {
      subtitle = channelSubtitleData.subtitle;
    }
    result = subtitle;
  }
  const obj10 = arg1(dependencyMap[24]);
  const tmp17 = jsx;
  obj1 = {
    onPress() {
      return function handleVoiceChannelPress(channel) {
        return callback(...arguments);
      }(channel);
    },
    onLongPress() {
      const result = channel(closure_2[29]).openChannelLongPressActionSheet(channel.id);
    },
    style: obj.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: tmp12
  };
  const tmp18 = jsx(importDefault(dependencyMap[27]), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  const intl = arg1(dependencyMap[30]).intl;
  obj1.accessibilityHint = intl.string(arg1(dependencyMap[30]).t.9C444m);
  obj1.channel = channel;
  obj1.selected = selected;
  obj1.locked = locked;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  obj1.unread = hasUnread;
  obj1.resolvedUnreadSetting = resolvedUnreadSetting;
  obj1.subtitle = result;
  obj1.isChannelLive = null != activeEvent || null != startTime;
  obj1.channelInfo = tmp18;
  let tmp20 = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      obj2 = { EMPHASIZE_NOTICE: false, maxHeight: false, hideFriendRequestNotes: null };
      const items3 = [channel];
      obj2.channels = items3;
      obj3 = {};
      obj3[channel.id] = ensureSyncedChannelVoiceStates;
      obj2.voiceStates = obj3;
      obj4 = { style: obj.voiceStatesCollapsed };
      const summarizedVoiceUsers = arg1(dependencyMap[31]).computeSummarizedVoiceUsers(obj2);
      obj5 = { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false };
      obj4.children = jsx(importDefault(dependencyMap[32]), obj5);
      tmp20 = <View {...obj4} />;
      const obj15 = arg1(dependencyMap[31]);
    } else {
      obj6 = { style: obj.voiceStates };
      obj7 = { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates };
      obj6.children = jsx(importDefault(dependencyMap[33]), obj7);
      tmp20 = <View {...obj6} />;
    }
  }
  obj1.children = tmp20;
  return tmp17(importDefault(dependencyMap[28]), obj1);
});
const obj1 = { marginVertical: arg1(dependencyMap[8]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[11]).radii.md };
const memoResult = importAllResult.memo((channel) => {
  let bypassLimit;
  let collapsed;
  let locked;
  let selected;
  let subtitle;
  channel = channel.channel;
  const arg1 = channel;
  ({ selected, subtitle } = channel);
  const arr = importDefault(dependencyMap[35])(channel);
  let obj = arg1(dependencyMap[20]);
  const items = [closure_7, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ locked: !closure_7.can(constants.CONNECT, channel), bypassLimit: closure_7.can(constants.MOVE_MEMBERS, channel), collapsed: collapsed.isCollapsed(channel.id) }));
  obj = { channel };
  let length;
  ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
  if (null != arr) {
    length = arr.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  obj.embeddedActivitiesCount = num;
  obj.collapsed = collapsed;
  let tmp6 = importDefault(dependencyMap[34])(channel.guild_id)[channel.id];
  if (null == tmp6) {
    tmp6 = NO_VOICE_STATES;
  }
  obj.voiceStates = tmp6;
  obj.selected = selected;
  obj.locked = locked;
  obj.bypassLimit = bypassLimit;
  obj.subtitle = subtitle;
  return <closure_15 {...obj} />;
});
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default memoResult;
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;
