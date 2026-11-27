// Module ID: 17971
// Function ID: 17972
// Name: StageVoiceChannel
// Dependencies: [19, 17, 8286, 4975, 6932, 6167, 5854, 4897, 1071, 6123, 21, 1112, 5043, 575, 504, 6811, 17972, 6861, 6855, 7125, 7031, 2019, 8450, 11407, 5659, 10013, 17851, 17961, 17856, 2]

// Module 17971 (StageVoiceChannel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2019 */;
import useChannelNameDefault from "useChannelName" /* 5659 */;
import SortedVoiceStateStore2 from "SortedVoiceStateStore" /* 5854 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 6123 */;
import StageMediaHooks from "StageMediaHooks" /* 6811 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7031 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 7125 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8450 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11407 */;
import ChannelItemDefault from "ChannelItem" /* 17851 */;
import ChannelInfoDefault from "ChannelInfo" /* 17961 */;
import useStageChannelSpeakerVoiceStatesDefault from "useStageChannelSpeakerVoiceStates" /* 17972 */;
import react from "react" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 8286 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import ReadStateStore from "ReadStateStore" /* 6932 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6167 */;
import StageInstanceStore from "StageInstanceStore" /* 4897 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const SortedVoiceStateStore = SortedVoiceStateStore2;

let closure_14;
let map1;
let obj2;
const View = react_native.View;
const NO_VOICE_STATES = SortedVoiceStateStore2.NO_VOICE_STATES;
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_16 = createStyles.createStyles(obj);
const memoResult = react.memo(function StageVoiceChannel(channel) {
  let collapsed;
  let formatToPlainStringResult1;
  let hasMedia;
  let hasUnread;
  let intl3;
  let locked;
  let resolvedUnreadSetting;
  let stageInstance;
  let topic;
  let voiceStates;
  channel = channel.channel;
  const selected = channel.selected;
  let tmp = closure_16();
  let obj = channel(504);
  const items = [StageInstanceStore, ReadStateStore, UserGuildSettingsStore, SortedVoiceStateStore, PermissionStore, CollapsedVoiceChannelStore];
  const items1 = [channel];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj2;
    const obj = { stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id), hasUnread: ReadStateStore.hasUnread(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasMedia: obj2.getStageHasMedia(channel.id), locked: !PermissionStore.can(constants.CONNECT, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
    obj2 = StageMediaHooks;
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  const tmp2Result = channel(6861);
  const stageParticipantsCount = tmp2Result.useStageParticipantsCount(channel.id, tmp2(6855).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + arr3.length;
  const items2 = [channel];
  const items3 = [channel.id];
  const callback = react.useCallback(() => {
    const guildId = channel.getGuildId();
    const tmp = channel;
    if (null != guildId) {
      const obj = useShowMemberVerificationGate;
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        const obj4 = MemberVerificationModalActionCreators;
        return obj4.openMemberVerificationModal(guildId);
      }
    }
    const obj2 = KeyboardManagerUtilsAll;
    const result = obj2.dismissGlobalKeyboard();
    const obj3 = PrivateChannelCallUtils;
    obj3.openGuildVoiceModal(tmp, "Channel List");
  }, items2);
  const callback1 = react.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }, items3);
  const tmp10 = useChannelNameDefault(channel, false);
  const tmp2Result2 = channel(10013);
  const isConnectedToVoiceChannel = tmp2Result2.useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    topic = stageInstance.topic;
  }
  ChannelItemDefault;
  const intl = tmp2(1112).intl;
  const formatToPlainStringResult = intl.formatToPlainString(channel(1112).t.TPPk2T, { channelName: tmp10 });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = tmp2(1112).intl;
      let obj2 = { channelName: tmp10, userCount: sum, limit: channel.userLimit };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1112).t.rhh6Ev, obj2);
    }
    let obj4 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, accessibilityHint: intl3.string(channel(1112).t.g6pBAk) };
    intl3 = tmp2(1112).intl;
    const merged = Object.assign(obj4);
    if (hasUnread) {
      hasUnread = isConnectedToVoiceChannel;
    }
    ChannelInfoDefault;
    if (!hasMedia) {
      hasMedia = channel.userLimit > 0 && channel.userLimit < closure_13;
      const tmp20 = channel.userLimit > 0 && channel.userLimit < closure_13;
    }
    let tmp12Result = arr3.length > 0;
    if (tmp12Result) {
      const obj6 = { style: tmp.voiceStates, children: null };
      tmp12Result = tmp12(View, obj6);
    }
    return <tmp5Result onPress={callback} onLongPress={callback1} style={tmp.container} channel={channel} selected={selected} locked={locked} isChannelLive={null != stageInstance} unread={hasUnread} resolvedUnreadSetting={resolvedUnreadSetting} subtitle={topic} channelInfo={<tmp5Result2 channel={channel} isChannelSelected={selected} isChannelCollapsed={collapsed} enableConnectedUserLimit={hasMedia} voiceStates={voiceStates} />}>{tmp12Result}</tmp5Result>;
  }
  formatToPlainStringResult1 = formatToPlainStringResult;
  if (sum > 0) {
    const intl4 = tmp2(1112).intl;
    const obj8 = { channelName: tmp10, userCount: sum };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1112).t["7yr3Qc"], obj8);
  }
});
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;
