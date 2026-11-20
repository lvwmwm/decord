// Module ID: 17631
// Function ID: 17632
// Name: StageVoiceChannel
// Dependencies: [19, 17, 8200, 4726, 6500, 6433, 5538, 4648, 1071, 5523, 21, 1112, 4794, 575, 504, 6414, 17632, 6424, 6418, 7165, 7166, 2018, 6375, 13723, 5410, 10520, 17512, 17621, 17517, 2]

// Module 17631 (StageVoiceChannel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2018 */;
import useChannelNameDefault from "useChannelName" /* 5410 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5523 */;
import SortedVoiceStateStore2 from "SortedVoiceStateStore" /* 5538 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6375 */;
import StageMediaHooks from "StageMediaHooks" /* 6414 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 7165 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7166 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13723 */;
import ChannelItemDefault from "ChannelItem" /* 17512 */;
import ChannelInfoDefault from "ChannelInfo" /* 17621 */;
import useStageChannelSpeakerVoiceStatesDefault from "useStageChannelSpeakerVoiceStates" /* 17632 */;
import react from "react" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 8200 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import ReadStateStore from "ReadStateStore" /* 6500 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6433 */;
import StageInstanceStore from "StageInstanceStore" /* 4648 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 4794 */;
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
  const tmp2Result = channel(6424);
  const stageParticipantsCount = tmp2Result.useStageParticipantsCount(channel.id, tmp2(6418).StageChannelParticipantNamedIndex.AUDIENCE);
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
  const tmp2Result2 = channel(10520);
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
