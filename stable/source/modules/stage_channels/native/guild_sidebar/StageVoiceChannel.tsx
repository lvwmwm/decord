// Module ID: 16334
// Function ID: 16335
// Name: StageVoiceChannel
// Dependencies: [19, 17, 7630, 4275, 4651, 4817, 4660, 1962, 1074, 10246, 21, 1114, 4636, 576, 504, 5498, 16335, 5512, 5506, 5138, 5650, 1874, 8511, 11048, 4789, 9601, 16213, 16324, 16218, 2]

// Module 16334 (StageVoiceChannel)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import useChannelNameDefault from "useChannelName" /* 4789 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5138 */;
import StageMediaHooks from "StageMediaHooks" /* 5498 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5650 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8511 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11048 */;
import ChannelItemDefault from "ChannelItem" /* 16213 */;
import useStageChannelSpeakerVoiceStatesDefault from "useStageChannelSpeakerVoiceStates" /* 16335 */;
import noop from "module_19" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7630 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import ReadStateStore from "ReadStateStore" /* 4651 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4660 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

require = fn;
const View = fn(17).View;
const NO_VOICE_STATES = fn(4660).NO_VOICE_STATES;
const Constants = fn(1074);
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: { marginVertical: fn(10246).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_16 = createStyles.createStyles(obj);
let obj3 = { marginVertical: fn(10246).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  let tmp = closure_16();
  const items = [StageInstanceStore, ReadStateStore, UserGuildSettingsStore, SortedVoiceStateStore, PermissionStore, CollapsedVoiceChannelStore];
  const items1 = [channel];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    const obj = { stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id), hasUnread: ReadStateStore.hasUnread(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasMedia: StageMediaHooks.getStageHasMedia(channel.id), locked: !PermissionStore.can(constants.CONNECT, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  let obj = channel(504);
  const stageParticipantsCount = channel(5512).useStageParticipantsCount(channel.id, tmp2(5506).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + arr3.length;
  const items2 = [channel];
  const items3 = [channel.id];
  const callback = noop.useCallback(() => {
    const guildId = channel.getGuildId();
    if (null != guildId) {
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        return MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
      }
      obj = useShowMemberVerificationGate;
    }
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const tmp = channel;
    StageChannelModalActionCreators.connectAndOpen(tmp);
  }, items2);
  const callback1 = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items3);
  const tmp10 = useChannelNameDefault(channel, false);
  const tmp2Result = channel(5512);
  const isConnectedToVoiceChannel = channel(9601).useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    const topic = stageInstance.topic;
  }
  const tmp2Result2 = channel(9601);
  const intl = tmp2(1114).intl;
  const tmp5Result = ChannelItemDefault;
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = tmp2(1114).intl;
      let obj2 = { channelName: tmp10, userCount: sum, limit: channel.userLimit };
      let formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1114).t.rhh6Ev, obj2);
    }
    const obj3 = {};
    const obj4 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, accessibilityHint: null };
    const intl3 = tmp2(1114).intl;
    obj4.accessibilityHint = intl3.string(tmp2(1114).t["9C444m"]);
    const merged = Object.assign(obj4);
    obj3.onPress = callback;
    obj3.onLongPress = callback1;
    obj3.style = tmp.container;
    obj3.channel = channel;
    obj3.selected = selected;
    obj3.locked = locked;
    obj3.isChannelLive = null != stageInstance;
    if (hasUnread) {
      hasUnread = isConnectedToVoiceChannel;
    }
    obj3.unread = hasUnread;
    obj3.resolvedUnreadSetting = resolvedUnreadSetting;
    obj3.subtitle = topic;
    const obj5 = { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, enableConnectedUserLimit: null, voiceStates: null };
    if (!hasMedia) {
      let tmp20 = channel.userLimit > 0;
      if (tmp20) {
        tmp20 = channel.userLimit < closure_13;
      }
      hasMedia = tmp20;
    }
    obj5.enableConnectedUserLimit = hasMedia;
    obj5.voiceStates = voiceStates;
    obj3.channelInfo = tmp12(tmp5(16324), obj5);
    let tmp12Result = arr3.length > 0;
    if (tmp12Result) {
      const obj6 = { style: tmp.voiceStates, children: null };
      const obj7 = { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount };
      obj6.children = tmp12(tmp5(16218), obj7);
      tmp12Result = tmp12(View, obj6);
    }
    obj3.children = tmp12Result;
    return tmp12(tmp5Result, obj3);
  }
  formatToPlainStringResult1 = intl.formatToPlainString(channel(1114).t.TPPk2T, { channelName: tmp10 });
  if (sum > 0) {
    const intl4 = tmp2(1114).intl;
    const obj8 = { channelName: tmp10, userCount: sum };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1114).t["7yr3Qc"], obj8);
  }
});
