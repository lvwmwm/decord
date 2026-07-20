// Module ID: 15539
// Function ID: 118578
// Name: getStageChannelAccessibilityProps
// Dependencies: []

// Module 15539 (getStageChannelAccessibilityProps)
function getStageChannelAccessibilityProps(arg0) {
  let channel;
  let channelName;
  let userCount;
  ({ channelName, channel, userCount } = arg0);
  const intl = arg1(dependencyMap[12]).intl;
  let formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[12]).t.TPPk2T, { channelName });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = arg1(dependencyMap[12]).intl;
      let obj = { channelName, userCount, limit: channel.userLimit };
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[12]).t.rhh6Ev, obj);
    }
    obj = { accessibilityLabel: formatToPlainStringResult };
    return obj;
  }
  if (userCount > 0) {
    const intl3 = arg1(dependencyMap[12]).intl;
    obj = { channelName, userCount };
    formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[12]).t.7yr3Qc, obj);
  }
}
function handleVoiceOrStageChannelConnectPress() {
  return _handleVoiceOrStageChannelConnectPress(...arguments);
}
function _handleVoiceOrStageChannelConnectPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleVoiceOrStageChannelConnectPress = obj;
  return obj(...arguments);
}
function useVoiceChannelPressEvents(channel) {
  const arg1 = channel;
  const tmp = function useVoiceChannelOnPressHandler() {
    return React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), []);
  }();
  const importDefault = tmp;
  const items = [channel, tmp];
  const items1 = [channel.id];
  return {
    onPress: importAllResult.useCallback(() => {
      if (null != arg0.guild_id) {
        arg0(closure_2[20]).transitionToGuild(arg0.guild_id);
        const obj = arg0(closure_2[20]);
      }
      tmp(closure_2[21])();
      tmp(arg0);
    }, items),
    onLongPress: importAllResult.useCallback(() => arg0(closure_2[22]).openChannelLongPressActionSheet(arg0.id), items1)
  };
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const Routes = arg1(dependencyMap[8]).Routes;
const getThemedRippleConfig = arg1(dependencyMap[9]).getThemedRippleConfig;
const StaticChannelRoute = arg1(dependencyMap[10]).StaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[11]));
const tmp2 = arg1(dependencyMap[11]);
let closure_16 = arg1(dependencyMap[23]).createStyles(() => ({ voiceUsers: { NP: "<string:16777698>", NR: "<string:1100177745>", NZ: "rgb(144, 144, 250)", OM: "<string:2577019137>" }, pressable: { flex: 1 } }));
let closure_17 = [];
let closure_18 = importAllResult.memo(function UnmemoedVoiceOrStageChannelBase(channel) {
  let guild_id;
  let id;
  let isSubscriptionGated;
  let mentionCount;
  let needSubscriptionToAccess;
  let unread;
  channel = channel.channel;
  const arg1 = channel;
  let subtitle = channel.subtitle;
  const importDefault = subtitle;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = closure_17;
  }
  let speakerVoiceStates = channel.speakerVoiceStates;
  if (speakerVoiceStates === undefined) {
    speakerVoiceStates = closure_17;
  }
  ({ id, guild_id } = channel);
  const tmp = importDefault(dependencyMap[24])();
  let obj = arg1(dependencyMap[26]);
  const tmp3 = callback3(importDefault(dependencyMap[25])(), obj.isThemeLight(tmp));
  const tmp4 = importDefault(dependencyMap[27])();
  let obj1 = arg1(dependencyMap[28]);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = arg1(dependencyMap[29]);
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj3 = arg1(dependencyMap[30]);
  const items = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items, () => closure_9.resolveUnreadSetting(channel));
  let obj4 = arg1(dependencyMap[31]);
  const stageParticipantsCount = obj4.useStageParticipantsCount(channel.id, arg1(dependencyMap[32]).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + voiceStates.length;
  let num = 0;
  if (null != sum) {
    num = sum;
  }
  const tmp2 = importDefault(dependencyMap[25])();
  const arr3 = importDefault(dependencyMap[33])(channel);
  let obj5 = arg1(dependencyMap[34]);
  obj = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr3.length };
  let channelAccessibilityProps = obj5.getChannelAccessibilityProps(obj);
  let obj7 = arg1(dependencyMap[30]);
  const items1 = [closure_7];
  const items2 = [channel.id];
  const stateFromStores1 = obj7.useStateFromStores(items1, () => stageInstanceByChannel.getStageInstanceByChannel(channel.id), items2);
  let topic;
  if (null != stateFromStores1) {
    topic = stateFromStores1.topic;
  }
  const tmp10 = useVoiceChannelPressEvents(channel);
  let arr6 = voiceStates;
  if (channel.isGuildStageVoice()) {
    arr6 = speakerVoiceStates;
  }
  const mapped = arr6.map((user) => user.user);
  const tmp16 = importDefault(dependencyMap[36])();
  let obj8 = arg1(dependencyMap[37]);
  const fontScale = obj8.useFontScale();
  const tmp14 = importDefault(dependencyMap[35])(channel, false);
  const items3 = [closure_8];
  const stateFromStores2 = arg1(dependencyMap[30]).useStateFromStores(items3, () => locale.locale);
  const obj10 = arg1(dependencyMap[30]);
  const items4 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = importDefault(dependencyMap[16])(channel.id));
  const effect = importAllResult.useEffect(() => {
    let tmp = null != subtitle;
    if (tmp) {
      tmp = "string" !== typeof subtitle;
    }
    if (tmp) {
      tmp = "voice" === subtitle.type;
    }
    if (tmp) {
      const messagePreviewASTCache = channel(closure_2[38]).messagePreviewASTCache;
      messagePreviewASTCache.del(subtitle.text);
    }
  }, items4);
  const tmp19 = importDefault(dependencyMap[16])(channel.id);
  obj = {};
  const items5 = [tmp3.pressable, ];
  obj1 = {};
  let num2 = 0;
  if (voiceStates.length > 0) {
    num2 = 6;
  }
  obj1.paddingBottom = num2;
  obj1.borderRadius = tmp4.container.borderRadius;
  items5[1] = obj1;
  obj.style = items5;
  obj.underlayColor = tmp16;
  obj.androidRippleConfig = getThemedRippleConfig({ color: tmp16 });
  const merged = Object.assign(tmp10);
  if (channel.isGuildStageVoice()) {
    obj2 = { channelName: tmp14, channel, userCount: num };
    channelAccessibilityProps = getStageChannelAccessibilityProps(obj2);
  }
  const merged1 = Object.assign(channelAccessibilityProps);
  obj3 = { channel };
  const tmp21 = importDefault(dependencyMap[39]);
  const tmp22 = closure_15;
  const tmp26 = importDefault(dependencyMap[34]);
  obj4 = {};
  if (null != topic) {
    subtitle = topic;
  }
  obj4.subtitle = subtitle;
  obj4.channelId = id;
  obj4.guildId = guild_id;
  obj4.connected = isConnectedToVoiceChannel;
  obj3.subtitle = arg1(dependencyMap[41]).renderChannelSubtitle(obj4);
  if (!unread) {
    unread = mentionCount > 0;
  }
  obj3.unread = unread;
  obj3.resolvedUnreadSetting = stateFromStores;
  obj3.mentionCount = mentionCount;
  obj3.mentionBadge = importDefault(dependencyMap[42])({ mentionCount, locale: stateFromStores2 });
  obj3.live = null != stateFromStores1;
  if (arr3.length > 0) {
    obj5 = { embeddedApps: arr3, size: tmp4.joinVoiceButton.icon.gameSize };
    let tmp30 = callback2(importDefault(dependencyMap[43]), obj5);
  } else {
    const obj6 = { channel, voiceStates };
    tmp30 = callback2(arg1(dependencyMap[44]).VocalChannelJoinButton, obj6);
  }
  obj3.end = tmp30;
  obj3.connected = isConnectedToVoiceChannel;
  obj3.fontScale = fontScale;
  obj3.isSubscriptionGated = isSubscriptionGated;
  obj3.needSubscriptionToAccess = needSubscriptionToAccess;
  obj3.showGuildBadgeIcon = true;
  const items6 = [tmp26(obj3), ];
  let tmp34 = null;
  if (voiceStates.length > 0) {
    obj7 = {};
    const items7 = [tmp3.voiceUsers, tmp4.voiceUsers.margin];
    obj7.style = items7;
    obj8 = { users: mapped, max: 5, guildId: channel.guild_id, audienceCount: stageParticipantsCount };
    obj7.children = callback2(importDefault(dependencyMap[45]), obj8);
    tmp34 = callback2(View, obj7);
  }
  items6[1] = tmp34;
  obj["children"] = items6;
  return tmp21(tmp22(arg1(dependencyMap[40]).PressableHighlight, obj));
});
const obj2 = arg1(dependencyMap[23]);
const memoResult = importAllResult.memo(function VoiceOrStageChannel(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[30]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => voiceStatesForChannel.getVoiceStatesForChannel(channel));
  const items1 = [closure_6];
  obj = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: arg1(dependencyMap[30]).useStateFromStoresArray(items1, () => {
      const mutableParticipants = mutableParticipants.getMutableParticipants(channel.id, channel(closure_2[32]).StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === callback(closure_2[32]).StageChannelParticipantTypes.VOICE);
      return found.map(channel(closure_2[46]).transformParticipantToSortedVoiceState);
    }),
    subtitle: channel.customSubtitle
  };
  return callback2(closure_18, obj);
});
const result = arg1(dependencyMap[47]).fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default memoResult;
