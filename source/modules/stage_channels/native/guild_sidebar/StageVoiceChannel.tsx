// Module ID: 15059
// Function ID: 114671
// Name: getStageChannelAccessibilityProps
// Dependencies: [31, 27, 6759, 3758, 4142, 4325, 4203, 1353, 653, 10260, 33, 1212, 4130, 689, 566, 4950, 15060, 4963, 4957, 4619, 9145, 1820, 7477, 9099, 4320, 10214, 14969, 15050, 14974, 2]

// Module 15059 (getStageChannelAccessibilityProps)
import importAllResult from "result";
import { View } from "LimitAndDurationInfo";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { NO_VOICE_STATES } from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
const require = arg1;
function getStageChannelAccessibilityProps(arg0) {
  let channel;
  let channelName;
  let userCount;
  ({ channelName, channel, userCount } = arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  let formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.TPPk2T, { channelName });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let obj = { channelName, userCount, limit: channel.userLimit };
      formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.rhh6Ev, obj);
    }
    obj = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult };
    return obj;
  }
  if (userCount > 0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { channelName, userCount };
    formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["7yr3Qc"], obj);
  }
}
({ MAX_STAGE_VOICE_USER_LIMIT: closure_13, Permissions: closure_14 } = ME);
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 } };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.container = obj;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  let collapsed;
  let hasMedia;
  let hasUnread;
  let locked;
  let resolvedUnreadSetting;
  let stageInstance;
  let voiceStates;
  channel = channel.channel;
  const selected = channel.selected;
  const tmp = callback();
  let obj = channel(566);
  const items = [closure_12, closure_8, closure_9, closure_10, closure_7, _isNativeReflectConstruct];
  const items1 = [channel];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { stageInstance: outer1_12.getStageInstanceByChannel(channel.id), hasUnread: outer1_8.hasUnread(channel.id), resolvedUnreadSetting: outer1_9.resolveUnreadSetting(channel), voiceStates: outer1_10.getVoiceStatesForChannel(channel), hasMedia: channel(outer1_3[15]).getStageHasMedia(channel.id), locked: !outer1_7.can(outer1_14.CONNECT, channel), collapsed: outer1_6.isCollapsed(channel.id) };
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = importDefault(15060)(channel.guild_id)[channel.id];
  if (null == arr3) {
    arr3 = NO_VOICE_STATES;
  }
  let obj1 = channel(4963);
  const stageParticipantsCount = obj1.useStageParticipantsCount(channel.id, channel(4957).StageChannelParticipantNamedIndex.AUDIENCE);
  const items2 = [channel];
  const sum = stageParticipantsCount + arr3.length;
  const items3 = [channel.id];
  callback = importAllResult.useCallback(() => {
    const guildId = channel.getGuildId();
    if (null != guildId) {
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        return channel(outer1_3[20]).openMemberVerificationModal(guildId);
      }
      obj = channel(outer1_3[19]);
    }
    const result = outer1_2(outer1_3[21]).dismissGlobalKeyboard();
    const obj2 = outer1_2(outer1_3[21]);
    channel(outer1_3[22]).connectAndOpen(channel);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    const result = channel(outer1_3[23]).openChannelLongPressActionSheet(channel.id);
  }, items3);
  let obj2 = channel(10214);
  let topic;
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  if (null != stageInstance) {
    topic = stageInstance.topic;
  }
  obj = {};
  const tmp10 = jsx;
  const tmp7 = importDefault(4320)(channel, false);
  const merged = Object.assign(getStageChannelAccessibilityProps({ channel, channelName: tmp7, userCount: sum }));
  obj["onPress"] = callback;
  obj["onLongPress"] = callback1;
  obj["style"] = tmp.container;
  obj["channel"] = channel;
  obj["selected"] = selected;
  obj["locked"] = locked;
  obj["isChannelLive"] = null != stageInstance;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  obj["unread"] = hasUnread;
  obj["resolvedUnreadSetting"] = resolvedUnreadSetting;
  obj["subtitle"] = topic;
  obj = { channel, isChannelSelected: selected, isChannelCollapsed: collapsed };
  const tmp11 = importDefault(14969);
  const tmp13 = jsx;
  if (!hasMedia) {
    let tmp15 = channel.userLimit > 0;
    if (tmp15) {
      tmp15 = channel.userLimit < closure_13;
    }
    hasMedia = tmp15;
  }
  obj.enableConnectedUserLimit = hasMedia;
  obj.voiceStates = voiceStates;
  obj["channelInfo"] = tmp13(importDefault(15050), obj);
  let tmp17 = arr3.length > 0;
  if (tmp17) {
    obj1 = { style: tmp.voiceStates };
    obj2 = { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount };
    obj1.children = jsx(importDefault(14974), { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount });
    tmp17 = <View style={tmp.voiceStates} />;
  }
  obj["children"] = tmp17;
  return tmp10(tmp11, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;
