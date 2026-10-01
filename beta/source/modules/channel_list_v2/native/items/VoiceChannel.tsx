// Module ID: 15867
// Function ID: 15868
// Name: VoiceChannel
// Dependencies: [5, 19, 17, 6947, 4469, 4851, 5017, 4860, 9577, 1074, 21, 576, 5364, 5881, 1981, 5043, 8943, 15865, 15868, 8833, 504, 15858, 10339, 4823, 7393, 9060, 1241, 15859, 15748, 10374, 1115, 4981, 15762, 15753, 11541, 2]

// Module 15867 (VoiceChannel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SortedVoiceStateStore2 from "SortedVoiceStateStore" /* 4860 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9060 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11541 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 6947 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SortedVoiceStateStore = SortedVoiceStateStore2;
let channel;

let CHANNEL_MARGIN_VERTICAL;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj = function _handleVoiceChannelPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      guildId = guildId.getGuildId();
      if (null != guildId) {
        const obj4 = require("useShowMemberVerificationGate");
        const tmp9 = require;
        if (obj4.shouldShowMembershipVerificationGate(guildId)) {
          c2 = 1;
          c3 = 1;
          const obj5 = { value: tmp9(paths[14])(paths[13], paths.paths), done: false };
          return obj5;
        }
      }
      await require("asyncRequire")(paths[15], paths.paths);
      value.openGuildVoiceModal(guildId, "Channel List");
      await "HermesInternal";
      return value.openMemberVerificationModal(guildId);
    })();
  });
  return obj(...arguments);
};
let react = react_mod;
const View = react_native.View;
const NO_VOICE_STATES = SortedVoiceStateStore2.NO_VOICE_STATES;
({ CHANNEL_SUBTITLE_TEXT_VARIANT: closure_12, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
({ AnalyticEvents: map1, Permissions: closure_14 } = Constants);
const jsx = Fragment.jsx;
obj = { channelInfo: obj2, voiceStates: { marginLeft: 36, marginTop: -4, marginBottom: 2 }, voiceStatesCollapsed: { marginLeft: 16 }, container: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 };
obj3 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_18 = react.memo((channel) => {
  let c4;
  let collapsed;
  let embeddedActivitiesCount;
  let items3;
  let locked;
  let mentionCount;
  let obj12;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let voiceStates;
  channel = channel.channel;
  ({ selected, collapsed, subtitle, embeddedActivitiesCount: importDefault } = channel);
  let ensureSyncedChannelVoiceStates;
  react = undefined;
  let gameMentionsAsPlainText;
  ({ locked, voiceStates } = channel);
  obj = channel(ensureSyncedChannelVoiceStates[16]);
  const activeEvent = obj.useActiveEvent(channel.id);
  const obj2 = channel(ensureSyncedChannelVoiceStates[17]);
  const startTime = obj2.useStartTime(channel);
  let obj3 = channel(ensureSyncedChannelVoiceStates[18]);
  ensureSyncedChannelVoiceStates = obj3.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  const obj4 = channel(ensureSyncedChannelVoiceStates[19]);
  const isConnectedToVoiceChannel = obj4.useIsConnectedToVoiceChannel(channel);
  const items = [ReadStateStore, UserGuildSettingsStore];
  const items1 = [channel];
  const obj5 = channel(ensureSyncedChannelVoiceStates[20]);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items, () => {
    obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel) };
    return obj;
  }, items1);
  let hasUnread = stateFromStoresObject.hasUnread;
  ({ mentionCount: c4, resolvedUnreadSetting } = stateFromStoresObject);
  const obj6 = channel(ensureSyncedChannelVoiceStates[21]);
  const channelSubtitleData = obj6.getChannelSubtitleData(subtitle);
  let type;
  if (subtitle != null) {
    type = subtitle.type;
  }
  let text = null;
  if ("voice" === type) {
    text = null;
    if (subtitle.text.length > 0) {
      text = subtitle.text;
    }
  }
  const tmpResult = channel(ensureSyncedChannelVoiceStates[22]);
  gameMentionsAsPlainText = tmpResult.useGameMentionsAsPlainText(text);
  let result = null;
  if (null != gameMentionsAsPlainText) {
    const obj7 = { channelId: channel.id, linkVariant: textVariant, textVariant };
    const obj8 = require("MarkupUtils");
    result = obj8.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj7);
  }
  const items2 = [, , ];
  const obj9 = {
    expensive() {
      obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount: importDefault };
      return getChannelA11yLabelDefault(obj);
    },
    cheap: channel.name
  };
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const tmpResult3 = channel(ensureSyncedChannelVoiceStates[24]);
  const accessibilityLabelOrCheapFallbackUnsafe = tmpResult3.getAccessibilityLabelOrCheapFallbackUnsafe(obj9);
  const effect = react.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      const obj3 = { guild_id: null, channel_id: null };
      ({ guild_id: obj2.guild_id, id: obj2.channel_id } = channel);
      obj = AnalyticsUtilsDefault;
      obj.track(map1.VOICE_CHANNEL_TOPIC_VIEWED, obj3);
    }
  }, items2);
  if (result == null) {
    let subtitle1;
    if (channelSubtitleData != null) {
      subtitle1 = channelSubtitleData.subtitle;
    }
    result = subtitle1;
  }
  const tmp19 = jsx(require("ChannelInfo"), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  require("ChannelItem");
  const intl = tmp(tmp2[30]).intl;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  let tmp17Result = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      const obj11 = { channels: items3, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: obj12 };
      items3 = [channel];
      obj12 = {};
      obj12[channel.id] = ensureSyncedChannelVoiceStates;
      const obj13 = { style: obj.voiceStatesCollapsed, children: null };
      const tmpResult4 = channel(ensureSyncedChannelVoiceStates[31]);
      const summarizedVoiceUsers = tmpResult4.computeSummarizedVoiceUsers(obj11);
      tmp17Result = tmp17(gameMentionsAsPlainText, obj13);
    } else {
      const obj15 = { style: obj.voiceStates, children: null };
      tmp17Result = tmp17(gameMentionsAsPlainText, obj15);
    }
  }
  return <tmp20 onPress={function onPress() {
    function handleVoiceChannelPress() {
      return closure_1_17(...arguments);
    }
    return handleVoiceChannelPress(channel);
  }} onLongPress={function onLongPress() {
    obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }} style={obj.container} accessible accessibilityRole="button" accessibilityLabel={accessibilityLabelOrCheapFallbackUnsafe} accessibilityHint={intl.string(channel(ensureSyncedChannelVoiceStates[30]).t["9C444m"])} channel={channel} selected={selected} locked={locked} unread={hasUnread} resolvedUnreadSetting={resolvedUnreadSetting} subtitle={result} isChannelLive={null != activeEvent || null != startTime} channelInfo={tmp19}>{tmp17Result}</tmp20>;
});
const memoResult = react.memo((channel) => {
  let bypassLimit;
  let collapsed;
  let locked;
  let num;
  let selected;
  let subtitle;
  let tmp5;
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(channel.guild_id), items1);
  const arr3 = useEmbeddedAppsForChannelDefault(channel);
  const items2 = [PermissionStore, CollapsedVoiceChannelStore];
  const obj2 = channel(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    obj = { locked: !PermissionStore.can(constants.CONNECT, channel), bypassLimit: PermissionStore.can(constants.MOVE_MEMBERS, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
    return obj;
  });
  const obj3 = { channel, embeddedActivitiesCount: num, collapsed, voiceStates: tmp5, selected, locked, bypassLimit, subtitle };
  num = undefined;
  ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
  const tmp3 = jsx;
  const tmp4 = closure_18;
  if (arr3 != null) {
    num = arr3.length;
  }
  if (num == null) {
    num = 0;
  }
  tmp5 = stateFromStores[channel.id];
  if (tmp5 == null) {
    tmp5 = NO_VOICE_STATES;
  }
  return tmp3(tmp4, obj3);
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default memoResult;
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;
