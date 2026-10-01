// Module ID: 15745
// Function ID: 15746
// Name: ThreadChannel
// Dependencies: [19, 17, 4471, 2045, 4469, 4851, 2099, 1372, 4855, 4860, 9577, 1074, 5018, 1114, 21, 4836, 576, 7909, 5288, 504, 11777, 4847, 9681, 15746, 15748, 9060, 15751, 1177, 15753, 15762, 4981, 2]
// Exports: default

// Module 15745 (ThreadChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 9681 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 15746 */;
import react_mod from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let CHANNEL_MARGIN_VERTICAL;
let closure_17;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let size;
function ThreadChannel(channel) {
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let items5;
  let items6;
  let mentionCount;
  let muted;
  let obj13;
  let obj14;
  let selected;
  let selectedVoiceChannelId;
  let threadIndex;
  let threadLineSegment;
  let tmp15Result;
  let tmp15Result5;
  let tmp21;
  let tmp4Result;
  let unread;
  let voiceStates;
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  let parent_id;
  let fontScale;
  let user;
  let parentChannel;
  const threadId = channel.threadId;
  const tmp = closure_20();
  react = tmp;
  const id = channel.id;
  let ownerId;
  if (channel != null) {
    ownerId = channel.ownerId;
  }
  parent_id = undefined;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let tmp4 = channel;
  let tmp5 = threadCount;
  let obj = channel(threadCount[18]);
  fontScale = obj.useFontScale();
  let obj2 = channel(threadCount[19]);
  const items = [parent_id, ownerId, UserStore, SortedVoiceStateStore, VoiceStateStore, user, parentChannel, fontScale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let hasUnreadResult;
    const isMutedResult = JoinedThreadsStore.isMuted(id);
    const obj = { user: UserStore.getUser(ownerId), parentChannel: ChannelStore.getChannel(parent_id), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasVideo: VoiceStateStore.hasVideo(channel.id), isLocked: !PermissionStore.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: hasUnreadResult, mentionCount: ReadStateStore.getMentionCount(id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id), selectedVoiceChannelId: SelectedChannelStore.getVoiceChannelId() };
    hasUnreadResult = !isMutedResult && ReadStateStore.hasUnread(tmp);
    return obj;
  });
  user = stateFromStoresObject.user;
  parentChannel = stateFromStoresObject.parentChannel;
  ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
  const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
  ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
  let num = 0;
  const memo = react.useMemo(() => {
    let num4;
    let num5;
    let num6;
    let num7;
    let str;
    const style = [threadLineSegment.threadLineSegment, ];
    let num = 0;
    const diff = threadCount - 1;
    const tmp4 = closure_17;
    const tmp5 = View;
    if (0 === threadIndex) {
      num = 2;
    }
    const obj = { top: num, height: str, borderTopRightRadius: num4, borderTopLeftRadius: num5, borderBottomRightRadius: num6, borderBottomLeftRadius: num7 };
    str = "100%";
    if (threadIndex === diff) {
      const _Math = Math;
      const _Math2 = Math;
      str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
    }
    num4 = 0;
    if (0 === threadIndex) {
      num4 = nativeDefault.radii.round;
    }
    num5 = 0;
    if (0 === threadIndex) {
      num5 = nativeDefault.radii.round;
    }
    num6 = 0;
    if (threadIndex === diff) {
      num6 = nativeDefault.radii.round;
    }
    num7 = 0;
    if (threadIndex === diff) {
      num7 = nativeDefault.radii.round;
    }
    style[1] = obj;
    return tmp4(tmp5, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  const items2 = [channel];
  const items3 = [channel, user, parentChannel];
  const tmp10 = threadIndex(tmp5[20])({ channel, locked: isLocked, video: hasVideo, selected });
  const callback = obj3.useCallback(() => {
    const obj = transitionToChannel;
    const obj2 = { source: constants.CHANNEL_LIST };
    obj.transitionToThread(channel, obj2);
  }, items2);
  const items4 = [memo, , ];
  const obj4 = { color: tmp.threadLineSegment.backgroundColor, fontScale };
  const callback1 = obj3.useCallback(() => {
    if (channel.isForumPost()) {
      if (null != user) {
        if (null != parentChannel) {
          if (parentChannel.isForumLikeChannel()) {
            showLongPressForumPostActionSheetDefault(channel, parentChannel);
          }
        }
      }
    }
    showThreadLongPressActionSheetDefault(channel.id);
  }, items3);
  items4[1] = closure_17(closure_21, obj4);
  const obj6 = { style: tmp.unreadContainer, children: tmp15Result };
  tmp15Result = unread;
  const obj5 = { style: tmp.threadRow, children: items5 };
  const tmp14 = closure_19;
  if (tmp15Result) {
    const obj7 = { style: tmp.unreadIcon };
    tmp15Result = tmp15(tmp16, obj7);
  }
  items5 = [tmp15(tmp16, obj6), , ];
  const obj8 = { style: tmp.spineSpacer };
  items5[1] = closure_17(id, obj8);
  const obj9 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: threadIndex(tmp5[25])({ channel, unread, mentionCount }), accessibilityState: { selected }, channel, selected, muted, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, hideIcon: true, channelInfo: tmp15Result5, children: tmp21 };
  const tmp9Result = threadIndex(tmp5[24]);
  if (0 === mentionCount) {
    let tmp15Result4 = null;
    if (tmp10) {
      const obj10 = { userCount: num, video: hasVideo, channel };
      tmp15Result4 = tmp15(tmp4(tmp5[26]).ConnectedUserLimit, obj10);
    }
    tmp15Result5 = tmp15Result4;
  } else {
    const obj11 = { value: mentionCount, isMentionLowImportance };
    tmp15Result5 = tmp15(tmp4(tmp5[27]).Badge, obj11);
  }
  tmp21 = null;
  if (0 !== voiceStates.length) {
    if (selectedVoiceChannelId !== threadId) {
      let tmp15Result6;
      if (1 !== voiceStates.length) {
        const obj12 = { users: tmp4Result.computeSummarizedVoiceUsers(obj13), max: 8, guildId: channel.guild_id, renderIcon: false, noPadding: true };
        obj13 = { channels: items6, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: obj14 };
        items6 = [channel];
        obj14 = {};
        obj14[channel.id] = voiceStates;
        const tmp9Result2 = threadIndex(tmp5[29]);
        tmp4Result = tmp4(tmp5[30]);
        tmp15Result6 = tmp15(tmp9Result2, obj12);
      }
      tmp21 = tmp15Result6;
    }
    const obj15 = { channel, collapsed: false, voiceStates };
    tmp15Result6 = tmp15(tmp9(tmp5[28]), obj15);
  }
  const obj16 = { children: items4 };
  items5[2] = closure_17(tmp9Result, obj9);
  items4[2] = closure_18(id, obj5);
  return closure_18(tmp14, obj16);
}
let react = react_mod;
const View = react_native.View;
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = Constants.Permissions;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_16 = ThreadConstants.OpenThreadAnalyticsLocations;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, threadRow: { flex: 0, flexDirection: "row", alignSelf: "stretch" }, unreadContainer: { width: 8, alignItems: "flex-start", justifyContent: "flex-start" }, spineSpacer: { width: 28 }, unreadIcon: size, threadLineSegment: obj3 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj3 = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
let closure_20 = createStyles(obj);
let closure_21 = react.memo((arg0) => {
  let color;
  let fontScale;
  let rect;
  ({ color, fontScale } = arg0);
  size = { width: 12, height: 16, style: rect, children: closure_17(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" }) };
  rect = { position: "absolute", left: 23, top: map1(fontScale) / 2 - 16 + 2 };
  const tmp = inlineStylesDefault;
  return closure_17(tmp, size);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default function ConnectedThreadChannel(threadId) {
  let selected;
  let threadCount;
  let threadIndex;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = closure_17(ThreadChannel, obj2);
  }
  return tmp2;
};
