// Module ID: 14943
// Function ID: 112503
// Name: getStageChannelAccessibilityProps
// Dependencies: []

// Module 14943 (getStageChannelAccessibilityProps)
function getStageChannelAccessibilityProps(arg0) {
  let channel;
  let channelName;
  let userCount;
  ({ channelName, channel, userCount } = arg0);
  const intl = arg1(dependencyMap[11]).intl;
  let formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[11]).t.TPPk2T, { channelName });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = arg1(dependencyMap[11]).intl;
      let obj = { channelName, userCount, limit: channel.userLimit };
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[11]).t.rhh6Ev, obj);
    }
    obj = { marginBottom: null, borderWidth: null, accessibilityLabel: formatToPlainStringResult };
    return obj;
  }
  if (userCount > 0) {
    const intl3 = arg1(dependencyMap[11]).intl;
    obj = { channelName, userCount };
    formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[11]).t.7yr3Qc, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const NO_VOICE_STATES = arg1(dependencyMap[6]).NO_VOICE_STATES;
let closure_12 = importDefault(dependencyMap[7]);
({ MAX_STAGE_VOICE_USER_LIMIT: closure_13, Permissions: closure_14 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[10]).jsx;
const tmp2 = arg1(dependencyMap[8]);
let obj = { voiceStates: { canUploadLargeFiles: null, y: 16 } };
obj = { marginVertical: arg1(dependencyMap[9]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[13]).radii.md };
obj.container = obj;
let closure_16 = arg1(dependencyMap[12]).createStyles(obj);
const obj2 = arg1(dependencyMap[12]);
const memoResult = importAllResult.memo((channel) => {
  let collapsed;
  let hasMedia;
  let hasUnread;
  let locked;
  let resolvedUnreadSetting;
  let stageInstance;
  let voiceStates;
  channel = channel.channel;
  const arg1 = channel;
  const selected = channel.selected;
  const tmp = callback();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12, closure_8, closure_9, closure_10, closure_7, closure_6];
  const items1 = [channel];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { stageInstance: stageInstanceByChannel.getStageInstanceByChannel(channel.id), hasUnread: closure_8.hasUnread(channel.id), resolvedUnreadSetting: closure_9.resolveUnreadSetting(channel), voiceStates: voiceStatesForChannel.getVoiceStatesForChannel(channel), hasMedia: channel(closure_3[15]).getStageHasMedia(channel.id), locked: !closure_7.can(constants.CONNECT, channel), collapsed: collapsed.isCollapsed(channel.id) };
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = importDefault(dependencyMap[16])(channel.guild_id)[channel.id];
  if (null == arr3) {
    arr3 = NO_VOICE_STATES;
  }
  let obj1 = arg1(dependencyMap[17]);
  const stageParticipantsCount = obj1.useStageParticipantsCount(channel.id, arg1(dependencyMap[18]).StageChannelParticipantNamedIndex.AUDIENCE);
  const items2 = [channel];
  const sum = stageParticipantsCount + arr3.length;
  const items3 = [channel.id];
  const callback = importAllResult.useCallback(() => {
    const guildId = channel.getGuildId();
    if (null != guildId) {
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        return channel(closure_3[20]).openMemberVerificationModal(guildId);
      }
      const obj = channel(closure_3[19]);
    }
    const result = callback(closure_3[21]).dismissGlobalKeyboard();
    const obj2 = callback(closure_3[21]);
    channel(closure_3[22]).connectAndOpen(channel);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    const result = channel(closure_3[23]).openChannelLongPressActionSheet(channel.id);
  }, items3);
  let obj2 = arg1(dependencyMap[25]);
  let topic;
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  if (null != stageInstance) {
    topic = stageInstance.topic;
  }
  obj = {};
  const tmp10 = jsx;
  const tmp7 = importDefault(dependencyMap[24])(channel, false);
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
  const tmp11 = importDefault(dependencyMap[26]);
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
  obj["channelInfo"] = tmp13(importDefault(dependencyMap[27]), obj);
  let tmp17 = arr3.length > 0;
  if (tmp17) {
    obj1 = { style: tmp.voiceStates };
    obj2 = { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount };
    obj1.children = jsx(importDefault(dependencyMap[28]), obj2);
    tmp17 = <View {...obj1} />;
  }
  obj["children"] = tmp17;
  return tmp10(tmp11, obj);
});
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;
