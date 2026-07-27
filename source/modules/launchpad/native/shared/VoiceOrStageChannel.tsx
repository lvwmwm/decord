// Module ID: 15744
// Function ID: 121395
// Name: getStageChannelAccessibilityProps
// Dependencies: [5, 31, 27, 4952, 1353, 1922, 4326, 4204, 653, 1277, 1355, 33, 1212, 6653, 1935, 4342, 4575, 4620, 9073, 1198, 6633, 11814, 9029, 4131, 4067, 8757, 3977, 15729, 10178, 14931, 566, 4964, 4958, 11171, 15742, 4321, 15738, 4550, 10221, 15730, 4661, 15740, 15736, 15124, 11382, 15745, 15129, 2]

// Module 15744 (getStageChannelAccessibilityProps)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "useStageParticipants";
import { View } from "items";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Routes } from "ME";
import { getThemedRippleConfig } from "semanticColor";
import { StaticChannelRoute } from "set";
import jsxProd from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
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
function handleVoiceOrStageChannelConnectPress() {
  return _handleVoiceOrStageChannelConnectPress(...arguments);
}
function _handleVoiceOrStageChannelConnectPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function useVoiceChannelPressEvents(channel) {
  let closure_0 = channel;
  const tmp = (function useVoiceChannelOnPressHandler() {
    return outer1_4.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer2_3(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), []);
  })();
  const importDefault = tmp;
  const items = [channel, tmp];
  const items1 = [channel.id];
  return {
    onPress: importAllResult.useCallback(() => {
      if (null != channel.guild_id) {
        channel(outer1_2[20]).transitionToGuild(channel.guild_id);
        const obj = channel(outer1_2[20]);
      }
      tmp(outer1_2[21])();
      tmp(channel);
    }, items),
    onLongPress: importAllResult.useCallback(() => channel(outer1_2[22]).openChannelLongPressActionSheet(channel.id), items1)
  };
}
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles(() => ({ voiceUsers: { display: "flex", flexDirection: "row", paddingRight: 16, marginTop: -2 }, pressable: { flex: 1 } }));
let closure_17 = [];
let closure_18 = importAllResult.memo(function UnmemoedVoiceOrStageChannelBase(channel) {
  let guild_id;
  let id;
  let isSubscriptionGated;
  let mentionCount;
  let needSubscriptionToAccess;
  let unread;
  channel = channel.channel;
  let subtitle = channel.subtitle;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = closure_17;
  }
  let speakerVoiceStates = channel.speakerVoiceStates;
  if (speakerVoiceStates === undefined) {
    speakerVoiceStates = closure_17;
  }
  ({ id, guild_id } = channel);
  let tmp = subtitle(4067)();
  let obj = channel(3977);
  const tmp3 = callback3(subtitle(8757)(), obj.isThemeLight(tmp));
  const tmp4 = subtitle(15729)();
  let obj1 = channel(10178);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(14931);
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj3 = channel(566);
  const items = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_9.resolveUnreadSetting(channel));
  let obj4 = channel(4964);
  const stageParticipantsCount = obj4.useStageParticipantsCount(channel.id, channel(4958).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + voiceStates.length;
  let num = 0;
  if (null != sum) {
    num = sum;
  }
  const tmp2 = subtitle(8757)();
  const arr3 = subtitle(11171)(channel);
  let obj5 = channel(15742);
  obj = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr3.length };
  let channelAccessibilityProps = obj5.getChannelAccessibilityProps(obj);
  let obj7 = channel(566);
  const items1 = [closure_7];
  const items2 = [channel.id];
  const stateFromStores1 = obj7.useStateFromStores(items1, () => outer1_7.getStageInstanceByChannel(channel.id), items2);
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
  const tmp16 = subtitle(15738)();
  let obj8 = channel(4550);
  const fontScale = obj8.useFontScale();
  const tmp14 = subtitle(4321)(channel, false);
  const items3 = [closure_8];
  const stateFromStores2 = channel(566).useStateFromStores(items3, () => outer1_8.locale);
  const obj10 = channel(566);
  const items4 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = subtitle(4575)(channel.id));
  const effect = importAllResult.useEffect(() => {
    let tmp = null != subtitle;
    if (tmp) {
      tmp = "string" !== typeof subtitle;
    }
    if (tmp) {
      tmp = "voice" === subtitle.type;
    }
    if (tmp) {
      const messagePreviewASTCache = channel(outer1_2[38]).messagePreviewASTCache;
      messagePreviewASTCache.del(subtitle.text);
    }
  }, items4);
  const tmp19 = subtitle(4575)(channel.id);
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
  const tmp21 = subtitle(15730);
  const tmp22 = closure_15;
  const tmp26 = subtitle(15742);
  obj4 = {};
  if (null != topic) {
    subtitle = topic;
  }
  obj4.subtitle = subtitle;
  obj4.channelId = id;
  obj4.guildId = guild_id;
  obj4.connected = isConnectedToVoiceChannel;
  obj3.subtitle = channel(15740).renderChannelSubtitle(obj4);
  if (!unread) {
    unread = mentionCount > 0;
  }
  obj3.unread = unread;
  obj3.resolvedUnreadSetting = stateFromStores;
  obj3.mentionCount = mentionCount;
  obj3.mentionBadge = subtitle(15736)({ mentionCount, locale: stateFromStores2 });
  obj3.live = null != stateFromStores1;
  if (arr3.length > 0) {
    obj5 = { embeddedApps: arr3, size: tmp4.joinVoiceButton.icon.gameSize };
    let tmp30 = callback2(subtitle(15124), obj5);
  } else {
    const obj6 = { channel, voiceStates };
    tmp30 = callback2(channel(11382).VocalChannelJoinButton, obj6);
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
    obj7.children = callback2(subtitle(15745), obj8);
    tmp34 = callback2(View, obj7);
  }
  items6[1] = tmp34;
  obj["children"] = items6;
  return tmp21(tmp22(channel(4661).PressableHighlight, obj));
});
const memoResult = importAllResult.memo(function VoiceOrStageChannel(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getVoiceStatesForChannel(channel));
  const items1 = [closure_6];
  obj = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: channel(566).useStateFromStoresArray(items1, () => {
      const mutableParticipants = outer1_6.getMutableParticipants(channel.id, channel(outer1_2[32]).StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === channel(outer2_2[32]).StageChannelParticipantTypes.VOICE);
      return found.map(channel(outer1_2[46]).transformParticipantToSortedVoiceState);
    }),
    subtitle: channel.customSubtitle
  };
  return callback2(closure_18, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default memoResult;
