// Module ID: 16816
// Function ID: 16817
// Name: VoiceOrStageChannel
// Dependencies: [5, 19, 17, 5730, 2050, 2112, 5017, 4860, 1074, 1181, 2052, 21, 1115, 5043, 1981, 5314, 5364, 5881, 1101, 6760, 10429, 10374, 4836, 4767, 7298, 4685, 16479, 8833, 15980, 504, 5743, 5737, 11541, 16478, 4989, 16811, 5288, 9575, 16807, 5435, 16813, 16809, 15864, 11774, 16817, 15870, 2]

// Module 16816 (VoiceOrStageChannel)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import FormConstants from "FormConstants" /* 1181 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 9575 */;
import useStageChannelSpeakerVoiceStates from "useStageChannelSpeakerVoiceStates" /* 15870 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5730 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_14;
let closure_15;
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[13], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          value.openGuildVoiceModal(closure_0, "Channel List");
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
const Routes = Constants.Routes;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_18 = createStyles.createStyles(() => ({ voiceUsers: { display: "flex", flexDirection: "row", paddingRight: 16, marginTop: -2 }, pressable: { flex: 1 } }));
let closure_19 = [];
let closure_20 = react.memo(function UnmemoedVoiceOrStageChannelBase(channel) {
  let guild_id;
  let id;
  let intl3;
  let isSubscriptionGated;
  let items1;
  let items2;
  let items8;
  let items9;
  let locale;
  let mentionCount;
  let needSubscriptionToAccess;
  let obj20;
  let renderChannelSubtitle;
  let tmp32;
  let tmp33;
  let unread;
  channel = channel.channel;
  const subtitle = channel.subtitle;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = closure_19;
  }
  let speakerVoiceStates = channel.speakerVoiceStates;
  if (speakerVoiceStates === undefined) {
    speakerVoiceStates = closure_19;
  }
  const tmp = subtitle;
  let tmp2 = dependencyMap;
  ({ id, guild_id } = channel);
  const tmp3 = subtitle(4767)();
  const tmp4 = subtitle(7298)();
  obj = channel(4685);
  const tmp6 = closure_18(tmp4, obj.isThemeLight(tmp3));
  const tmp7 = subtitle(16479)();
  const obj2 = channel(8833);
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  const obj3 = channel(15980);
  const baseChannelUnreadBadgeState = obj3.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj4 = channel(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj4.useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(channel));
  const obj5 = channel(5743);
  const stageParticipantsCount = obj5.useStageParticipantsCount(channel.id, channel(5737).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + voiceStates.length;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let result;
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              let transitionToResult;
              closure_1 = tmp;
              guildId = undefined;
              const obj8 = guildId(paths[15]);
              const needSubscriptionToAccess = obj8.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                const tmp18Result = guildId(paths[16]);
                if (tmp18Result.shouldShowMembershipVerificationGate(guildId)) {
                  paths = 1;
                  c3 = 1;
                  const obj4 = { value: guildId(paths[14])(paths[17], paths.paths), done: false };
                  return obj4;
                }
              }
              if (needSubscriptionToAccess) {
                const tmp18Result2 = guildId(paths[18]);
                transitionToResult = tmp18Result2.transitionTo(closure_1_11.CHANNEL(guildId.guild_id, constants.ROLE_SUBSCRIPTIONS));
              } else {
                closure_1_16(guildId);
              }
              result = transitionToResult;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            result = value.openMemberVerificationModal(guildId, () => closure_2_16(guildId));
          }
          c3 = 3;
          return { value: result, done: true };
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  });
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const obj7 = {
    onPress: react.useCallback(() => {
      if (null != channel.guild_id) {
        obj = channel(dependencyMap[19]);
        obj.transitionToGuild(channel.guild_id);
      }
      subtitle(dependencyMap[20])();
      callback(channel);
    }, items1),
    onLongPress: react.useCallback(() => {
      obj = channel(dependencyMap[21]);
      return obj.openChannelLongPressActionSheet(channel.id);
    }, items2)
  };
  items1 = [channel, callback];
  items2 = [channel.id];
  const arr5 = subtitle(11541)(channel);
  let obj8 = channel(16478);
  const obj9 = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr5.length };
  let channelAccessibilityProps = obj8.getChannelAccessibilityProps(obj9);
  const items3 = [StageInstanceStore];
  const items4 = [channel.id];
  const obj10 = channel(504);
  const stateFromStores1 = obj10.useStateFromStores(items3, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items4);
  let topic;
  const obj6 = react;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  const tmp17 = tmp(4989)(channel, false);
  let arr8 = voiceStates;
  if (channel.isGuildStageVoice()) {
    arr8 = speakerVoiceStates;
  }
  const mapped = arr8.map((user) => user.user);
  const tmp19 = tmp(16811)();
  const tmp5Result = channel(5288);
  const fontScale = tmp5Result.useFontScale();
  const items5 = [LocaleStore];
  const tmp5Result3 = channel(504);
  const stateFromStores2 = tmp5Result3.useStateFromStores(items5, () => locale.locale);
  const items6 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = tmp(5314)(channel.id));
  tmp(5314)(channel.id);
  const effect = obj6.useEffect(() => {
    const tmp2 = null != subtitle && typeof tmp !== "string" && "voice" === tmp.type;
    if (tmp2) {
      const messagePreviewASTCache = MessagePreviewMarkup.messagePreviewASTCache;
      messagePreviewASTCache.del(subtitle.text);
    }
  }, items6);
  const items7 = [tmp6.pressable, ];
  let num = 0;
  const tmpResult = tmp(16807);
  const PressableHighlight = tmp5(5435).PressableHighlight;
  const tmp25 = closure_15;
  if (voiceStates.length > 0) {
    num = 6;
  }
  items7[1] = { paddingBottom: num, borderRadius: tmp7.container.borderRadius };
  const obj11 = { style: items7, underlayColor: tmp19, androidRippleConfig: getThemedRippleConfig({ color: tmp19 }), children: items8 };
  const merged = Object.assign(obj7);
  if (channel.isGuildStageVoice()) {
    let formatToPlainStringResult1;
    const intl = tmp5(1115).intl;
    const obj12 = { channelName: tmp17 };
    const formatToPlainStringResult = intl.formatToPlainString(channel(1115).t.TPPk2T, obj12);
    if (null != channel.userLimit) {
      if (channel.userLimit > 0) {
        const intl2 = tmp5(1115).intl;
        const obj13 = { channelName: tmp17, userCount: sum, limit: channel.userLimit };
        formatToPlainStringResult1 = intl2.formatToPlainString(tmp5(1115).t.rhh6Ev, obj13);
      }
      const obj14 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, accessibilityHint: intl3.string(channel(1115).t.g6pBAk) };
      intl3 = tmp5(1115).intl;
      channelAccessibilityProps = obj14;
    }
    formatToPlainStringResult1 = formatToPlainStringResult;
    if (sum > 0) {
      const intl4 = tmp5(1115).intl;
      const obj15 = { channelName: tmp17, userCount: sum };
      formatToPlainStringResult1 = intl4.formatToPlainString(tmp5(1115).t["7yr3Qc"], obj15);
    }
  }
  const merged1 = Object.assign(channelAccessibilityProps);
  const obj16 = { channel, subtitle: renderChannelSubtitle({ subtitle: topic, channelId: id, guildId: guild_id, connected: isConnectedToVoiceChannel }), unread, resolvedUnreadSetting: stateFromStores, mentionCount, mentionBadge: tmp(16809)({ mentionCount, locale: stateFromStores2 }), live: null != stateFromStores1, end: tmp33, connected: isConnectedToVoiceChannel, fontScale, isSubscriptionGated, needSubscriptionToAccess, showGuildBadgeIcon: true };
  const tmpResult2 = tmp(16478);
  renderChannelSubtitle = tmp5(16813).renderChannelSubtitle;
  channel(16813);
  if (topic == null) {
    topic = subtitle;
  }
  if (!unread) {
    unread = mentionCount > 0;
  }
  if (arr5.length > 0) {
    const obj17 = { embeddedApps: arr5, size: tmp7.joinVoiceButton.icon.gameSize };
    tmp33 = closure_14(tmp(15864), obj17);
    tmp32 = closure_14;
  } else {
    tmp32 = closure_14;
    const obj18 = { channel, voiceStates };
    tmp33 = closure_14(tmp5(11774).VocalChannelJoinButton, obj18);
  }
  items8 = [tmpResult2(obj16), ];
  let tmp32Result = null;
  if (voiceStates.length > 0) {
    const obj19 = { style: items9, children: tmp32(tmp(16817), obj20) };
    items9 = [tmp6.voiceUsers, tmp7.voiceUsers.margin];
    obj20 = { users: mapped, max: 5, guildId: channel.guild_id, audienceCount: stageParticipantsCount };
    tmp32Result = tmp32(View, obj19);
  }
  items8[1] = tmp32Result;
  return tmpResult(tmp25(PressableHighlight, obj11));
});
const memoResult = react.memo(function VoiceOrStageChannel(channel) {
  channel = channel.channel;
  const customSubtitle = channel.customSubtitle;
  const items = [SortedVoiceStateStore];
  obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel));
  const items1 = [StageChannelParticipantStore];
  const obj2 = channel(504);
  const obj3 = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: obj2.useStateFromStoresArray(items1, () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === channel(closure_1_2[31]).StageChannelParticipantTypes.VOICE);
      return found.map(useStageChannelSpeakerVoiceStates.transformParticipantToSortedVoiceState);
    }),
    subtitle: customSubtitle
  };
  return closure_14(closure_20, obj3);
});
let result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default memoResult;
