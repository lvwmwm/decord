// Module ID: 15869
// Function ID: 15870
// Name: StageVoiceChannel
// Dependencies: [19, 17, 6951, 4472, 4852, 5018, 4861, 2056, 1086, 11441, 21, 1127, 4837, 588, 558, 576, 5730, 504, 15870, 5744, 5738, 5365, 5882, 1882, 5044, 10417, 4990, 8828, 15859, 15749, 15759, 2]

// Module 15869 (StageVoiceChannel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1882 */;
import SortedVoiceStateStore2 from "SortedVoiceStateStore" /* 4861 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5044 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5365 */;
import StageMediaHooks from "StageMediaHooks" /* 5730 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5882 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10417 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11441 */;
import ChannelItemDefault from "ChannelItem" /* 15759 */;
import ChannelInfoDefault from "ChannelInfo" /* 15859 */;
import useStageChannelSpeakerVoiceStatesDefault from "useStageChannelSpeakerVoiceStates" /* 15870 */;
import react from "react" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 6951 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import ReadStateStore from "ReadStateStore" /* 4852 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5018 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import Constants from "Constants" /* 1086 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SortedVoiceStateStore = SortedVoiceStateStore2;

let closure_14;
let map1;
let obj2;
let tmp15;
const useChannelNameDefault = tmp15(4990);
function getStageChannelAccessibilityProps(arg0) {
  let channel;
  let channelName;
  let formatToPlainStringResult1;
  let intl3;
  let userCount;
  ({ channelName, channel, userCount } = arg0);
  const intl = intl5.intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.TPPk2T, { channelName });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = tmp(1127).intl;
      const obj = { channelName, userCount, limit: channel.userLimit };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1127).t.rhh6Ev, obj);
    }
    const obj2 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, accessibilityHint: intl3.string(intl5.t.g6pBAk) };
    intl3 = tmp(1127).intl;
    return obj2;
  }
  formatToPlainStringResult1 = formatToPlainStringResult;
  if (userCount > 0) {
    const intl4 = tmp(1127).intl;
    const obj3 = { channelName, userCount };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp(1127).t["7yr3Qc"], obj3);
  }
}
const View = react_native.View;
const NO_VOICE_STATES = SortedVoiceStateStore2.NO_VOICE_STATES;
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_17 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let collapsed;
  let first;
  let hasMedia;
  let hasUnread;
  let locked;
  let resolvedUnreadSetting;
  let stageInstance;
  let tmp12;
  let tmp13;
  let voiceStates;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(38);
  channel = channel.channel;
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore, , , , , ];
    items[1] = ReadStateStore;
    items[2] = UserGuildSettingsStore;
    items[3] = SortedVoiceStateStore;
    items[4] = PermissionStore;
    items[5] = CollapsedVoiceChannelStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function b() {
      let obj2;
      const obj = { stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id), hasUnread: ReadStateStore.hasUnread(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasMedia: obj2.getStageHasMedia(channel.id), locked: !PermissionStore.can(constants.CONNECT, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
      obj2 = StageMediaHooks;
      return obj;
    };
    const items1 = [channel];
    cResult[1] = channel;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp12, tmp13);
  ({ stageInstance, hasUnread, resolvedUnreadSetting, voiceStates, hasMedia, locked, collapsed } = stateFromStoresObject);
  let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  const tmpResult3 = tmp(5744);
  const stageParticipantsCount = tmpResult3.useStageParticipantsCount(channel.id, tmp(5738).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + arr3.length;
  if (cResult[4] !== channel) {
    class N {
      constructor() {
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
      }
    }
    cResult[4] = channel;
    cResult[5] = N;
  } else {
    class N {
      constructor() {
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
      }
    }
  }
  if (cResult[6] !== channel.id) {
    class N {
      constructor() {
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
      }
    }
    cResult[6] = channel.id;
    cResult[7] = tmp20;
  } else {
    class N {
      constructor() {
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
      }
    }
  }
  const tmp21 = useChannelNameDefault(channel, false);
  const tmpResult4 = tmp(8828);
  const isConnectedToVoiceChannel = tmpResult4.useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    class N {
      constructor() {
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
      }
    }
  }
  if (cResult[8] === channel) {
    class N {
      constructor() {
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
      }
    }
  }
  cResult[8] = channel;
  cResult[9] = tmp21;
  cResult[10] = sum;
  cResult[11] = getStageChannelAccessibilityProps({ channel, channelName: tmp21, userCount: sum });
  getStageChannelAccessibilityProps({ channel, channelName: tmp21, userCount: sum });
}) : ((channel) => {
  let collapsed;
  let hasMedia;
  let hasUnread;
  let locked;
  let resolvedUnreadSetting;
  let stageInstance;
  let voiceStates;
  channel = channel.channel;
  const selected = channel.selected;
  let tmp = closure_17();
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
  const tmp2Result = channel(5744);
  const stageParticipantsCount = tmp2Result.useStageParticipantsCount(channel.id, tmp2(5738).StageChannelParticipantNamedIndex.AUDIENCE);
  const items2 = [channel];
  const sum = stageParticipantsCount + arr3.length;
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
  let topic;
  const tmp10 = useChannelNameDefault(channel, false);
  const tmp2Result2 = channel(8828);
  const isConnectedToVoiceChannel = tmp2Result2.useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    topic = stageInstance.topic;
  }
  ChannelItemDefault;
  const merged = Object.assign(getStageChannelAccessibilityProps({ channel, channelName: tmp10, userCount: sum }));
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  ChannelInfoDefault;
  if (!hasMedia) {
    hasMedia = channel.userLimit > 0 && channel.userLimit < closure_13;
    const tmp17 = channel.userLimit > 0 && channel.userLimit < closure_13;
  }
  let tmp13Result = arr3.length > 0;
  if (tmp13Result) {
    let obj4 = { style: tmp.voiceStates, children: null };
    tmp13Result = tmp13(View, obj4);
  }
  return <tmp5Result onPress={callback} onLongPress={callback1} style={tmp.container} channel={channel} selected={selected} locked={locked} isChannelLive={null != stageInstance} unread={hasUnread} resolvedUnreadSetting={resolvedUnreadSetting} subtitle={topic} channelInfo={<tmp5Result2 channel={channel} isChannelSelected={selected} isChannelCollapsed={collapsed} enableConnectedUserLimit={hasMedia} voiceStates={voiceStates} />}>{tmp13Result}</tmp5Result>;
}));
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;
