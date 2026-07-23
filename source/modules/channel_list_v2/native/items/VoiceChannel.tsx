// Module ID: 15057
// Function ID: 114624
// Name: _handleVoiceChannelPress
// Dependencies: [5, 31, 27, 6759, 3758, 4142, 4325, 4203, 10260, 653, 33, 689, 4619, 9145, 1934, 4341, 8455, 15056, 15058, 10214, 566, 15049, 9067, 4120, 7641, 8450, 675, 15050, 14969, 9099, 1212, 4312, 14980, 14974, 14982, 11179, 2]

// Module 15057 (_handleVoiceChannelPress)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "_createForOfIteratorHelperLoose";
import { View } from "LimitAndDurationInfo";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { NO_VOICE_STATES } from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "AudienceItem";

let closure_11;
let closure_12;
const require = arg1;
function _handleVoiceChannelPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_11, Permissions: closure_12 } = ME);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, maxHeight: 1 };
obj.channelInfo = obj;
obj.voiceStates = { marginLeft: 36, marginTop: -4, marginBottom: 2 };
obj.voiceStatesCollapsed = { marginLeft: 16 };
obj.container = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
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
  ({ selected, collapsed, subtitle } = channel);
  let gameMentionsAsPlainText;
  ({ locked, voiceStates, embeddedActivitiesCount } = channel);
  let obj = channel(8455);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = channel(15056);
  const startTime = obj1.useStartTime(channel);
  let obj2 = channel(15058);
  const ensureSyncedChannelVoiceStates = obj2.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  let obj3 = channel(10214);
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  let obj4 = channel(566);
  const items = [closure_8, closure_9];
  const items1 = [channel];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => ({ hasUnread: outer1_8.hasUnread(channel.id), mentionCount: outer1_8.getMentionCount(channel.id), resolvedUnreadSetting: outer1_9.resolveUnreadSetting(channel) }), items1);
  let hasUnread = stateFromStoresObject.hasUnread;
  ({ mentionCount, resolvedUnreadSetting } = stateFromStoresObject);
  let obj5 = channel(15049);
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
  let obj6 = channel(9067);
  gameMentionsAsPlainText = obj6.useGameMentionsAsPlainText(text);
  let result = null;
  if (null != gameMentionsAsPlainText) {
    let obj7 = gameMentionsAsPlainText(4120);
    obj = { channelId: channel.id, linkVariant: "text-xs/medium" };
    result = obj7.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj);
  }
  let tmp12;
  if (!obj10.shouldSkipAccessibilityLabels()) {
    obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
    tmp12 = gameMentionsAsPlainText(8450)(obj);
  }
  const items2 = [, , ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const effect = importAllResult.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      let obj = gameMentionsAsPlainText(outer1_2[26]);
      obj = {};
      ({ guild_id: obj2.guild_id, id: obj2.channel_id } = channel);
      obj.track(outer1_11.VOICE_CHANNEL_TOPIC_VIEWED, obj);
    }
  }, items2);
  if (null == result) {
    subtitle = undefined;
    if (null != channelSubtitleData) {
      subtitle = channelSubtitleData.subtitle;
    }
    result = subtitle;
  }
  obj10 = channel(7641);
  const tmp17 = jsx;
  obj1 = {
    onPress() {
      return (function handleVoiceChannelPress(channel) {
        return outer2_16(...arguments);
      })(channel);
    },
    onLongPress() {
      const result = channel(outer1_2[29]).openChannelLongPressActionSheet(channel.id);
    },
    style: obj.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: tmp12
  };
  const tmp18 = jsx(gameMentionsAsPlainText(15050), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  const intl = channel(1212).intl;
  obj1.accessibilityHint = intl.string(channel(1212).t["9C444m"]);
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
      obj2 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null };
      const items3 = [channel];
      obj2.channels = items3;
      obj3 = {};
      obj3[channel.id] = ensureSyncedChannelVoiceStates;
      obj2.voiceStates = obj3;
      obj4 = { style: obj.voiceStatesCollapsed };
      const summarizedVoiceUsers = channel(4312).computeSummarizedVoiceUsers(obj2);
      obj5 = { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false };
      obj4.children = jsx(gameMentionsAsPlainText(14980), { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false });
      tmp20 = <View style={obj.voiceStatesCollapsed} />;
      const obj15 = channel(4312);
    } else {
      obj6 = { style: obj.voiceStates };
      obj7 = { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates };
      obj6.children = jsx(gameMentionsAsPlainText(14974), { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates });
      tmp20 = <View style={obj.voiceStates} />;
    }
  }
  obj1.children = tmp20;
  return tmp17(gameMentionsAsPlainText(14969), obj1);
});
let obj1 = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const memoResult = importAllResult.memo((channel) => {
  let bypassLimit;
  let collapsed;
  let locked;
  let selected;
  let subtitle;
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  const arr = importDefault(11179)(channel);
  let obj = channel(566);
  const items = [closure_7, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ locked: !outer1_7.can(outer1_12.CONNECT, channel), bypassLimit: outer1_7.can(outer1_12.MOVE_MEMBERS, channel), collapsed: outer1_6.isCollapsed(channel.id) }));
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
  let tmp6 = importDefault(14982)(channel.guild_id)[channel.id];
  if (null == tmp6) {
    tmp6 = NO_VOICE_STATES;
  }
  obj.voiceStates = tmp6;
  obj.selected = selected;
  obj.locked = locked;
  obj.bypassLimit = bypassLimit;
  obj.subtitle = subtitle;
  return <closure_15 channel={channel} />;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default memoResult;
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;
