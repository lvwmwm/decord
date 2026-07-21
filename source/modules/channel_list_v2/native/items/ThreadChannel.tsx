// Module ID: 14842
// Function ID: 111863
// Name: ThreadChannel
// Dependencies: []
// Exports: default

// Module 14842 (ThreadChannel)
function ThreadChannel(channel) {
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let mentionCount;
  let muted;
  let selected;
  let selectedVoiceChannelId;
  let threadIndex;
  let unread;
  let voiceStates;
  let flag = channel.channel;
  const arg1 = flag;
  ({ selected, threadIndex } = channel);
  const importDefault = threadIndex;
  const threadCount = channel.threadCount;
  const dependencyMap = threadCount;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  const tmp = callback2();
  const View = flag.id;
  let ownerId;
  if (null != flag) {
    ownerId = flag.ownerId;
  }
  closure_5 = ownerId;
  let parent_id;
  if (null != flag) {
    parent_id = flag.parent_id;
  }
  closure_6 = parent_id;
  let obj = arg1(dependencyMap[18]);
  const fontScale = obj.useFontScale();
  closure_7 = fontScale;
  let obj1 = arg1(dependencyMap[19]);
  const items = [closure_6, closure_5, closure_10, closure_12, closure_11, closure_8, closure_9, closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const isMutedResult = ownerId.isMuted(id);
    const obj = { user: user.getUser(ownerId), parentChannel: parent_id.getChannel(parent_id), voiceStates: voiceStatesForChannel.getVoiceStatesForChannel(flag), hasVideo: closure_11.hasVideo(flag.id), isLocked: !fontScale.can(constants.CONNECT, flag), muted: isMutedResult };
    let hasUnreadResult = !isMutedResult;
    if (hasUnreadResult) {
      hasUnreadResult = user.hasUnread(id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = user.getMentionCount(id);
    obj.isMentionLowImportance = user.getIsMentionLowImportance(id);
    obj.selectedVoiceChannelId = parentChannel.getVoiceChannelId();
    return obj;
  });
  const user = stateFromStoresObject.user;
  closure_8 = user;
  const parentChannel = stateFromStoresObject.parentChannel;
  closure_9 = parentChannel;
  ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
  const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
  ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
  let num = 0;
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    const items = [0 === threadIndex.threadLineSegment, ];
    obj = {};
    let num = 0;
    if (0 === threadIndex) {
      num = 2;
    }
    obj.top = num;
    let str = "100%";
    if (threadIndex === threadCount - 1) {
      const _Math = Math;
      const _Math2 = Math;
      str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
    }
    obj.height = str;
    let num4 = 0;
    if (0 === threadIndex) {
      num4 = threadIndex(threadCount[16]).radii.round;
    }
    obj.borderTopRightRadius = num4;
    let num6 = 0;
    if (0 === threadIndex) {
      num6 = threadIndex(threadCount[16]).radii.round;
    }
    obj.borderTopLeftRadius = num6;
    let num8 = 0;
    if (threadIndex === threadCount - 1) {
      num8 = threadIndex(threadCount[16]).radii.round;
    }
    obj.borderBottomRightRadius = num8;
    let num10 = 0;
    if (threadIndex === threadCount - 1) {
      num10 = threadIndex(threadCount[16]).radii.round;
    }
    obj.borderBottomLeftRadius = num10;
    items[1] = obj;
    obj.style = items;
    return closure_17(id, obj);
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  obj = { channel: flag, locked: isLocked, video: hasVideo, selected };
  const items2 = [flag];
  const items3 = [flag, user, parentChannel];
  const callback = importAllResult.useCallback(() => {
    let obj = flag(threadCount[21]);
    obj = { source: constants2.CHANNEL_LIST };
    obj.transitionToThread(flag, obj);
  }, items2);
  obj = {};
  const items4 = [memo, , ];
  obj1 = { color: tmp.threadLineSegment.backgroundColor, fontScale };
  const callback1 = importAllResult.useCallback(() => {
    if (flag.isForumPost()) {
      if (null != user) {
        if (null != parentChannel) {
          if (parentChannel.isForumLikeChannel()) {
            threadIndex(threadCount[22])(flag, parentChannel);
          }
        }
      }
    }
    threadIndex(threadCount[23])(flag.id);
  }, items3);
  items4[1] = callback(closure_21, obj1);
  const obj2 = { style: tmp.threadRow };
  const obj3 = { style: tmp.unreadContainer };
  let tmp16 = unread;
  if (unread) {
    const obj4 = { style: tmp.unreadIcon };
    tmp16 = callback(View, obj4);
  }
  obj3.children = tmp16;
  const items5 = [callback(View, obj3), callback(View, { style: tmp.spineSpacer }), ];
  const obj6 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button" };
  const obj5 = { style: tmp.spineSpacer };
  const tmp10 = closure_18;
  const tmp11 = closure_19;
  const tmp12 = closure_18;
  const tmp13 = View;
  const tmp14 = callback;
  const tmp15 = View;
  const tmp19 = callback;
  const tmp7 = importDefault(dependencyMap[20])(obj);
  const obj7 = { channel: flag, unread, mentionCount };
  obj6.accessibilityLabel = importDefault(dependencyMap[25])(obj7);
  obj6.accessibilityState = { selected };
  obj6.channel = flag;
  obj6.selected = selected;
  obj6.muted = muted;
  obj6.unread = unread;
  obj6.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj6.hideIcon = true;
  if (0 === mentionCount) {
    let tmp25 = null;
    if (tmp7) {
      const obj8 = { userCount: num, video: hasVideo, channel: flag };
      tmp25 = callback(arg1(dependencyMap[26]).ConnectedUserLimit, obj8);
    }
    let tmp24 = tmp25;
  } else {
    const obj9 = { value: mentionCount, isMentionLowImportance };
    tmp24 = callback(arg1(dependencyMap[27]).Badge, obj9);
  }
  obj6.channelInfo = tmp24;
  if (0 === voiceStates.length) {
    obj6.children = null;
    items5[2] = tmp19(tmp20, obj6);
    obj2.children = items5;
    items4[2] = tmp12(tmp13, obj2);
    obj.children = items4;
    return tmp10(tmp11, obj);
  } else {
    if (selectedVoiceChannelId !== channel.threadId) {
      if (1 !== voiceStates.length) {
        const obj10 = {};
        const tmp37 = importDefault(dependencyMap[29]);
        const obj11 = { EMPHASIZE_NOTICE: false, maxHeight: false, hideFriendRequestNotes: null };
        const items6 = [flag];
        obj11.channels = items6;
        const obj12 = {};
        obj12[flag.id] = voiceStates;
        obj11.voiceStates = obj12;
        obj10.users = arg1(dependencyMap[30]).computeSummarizedVoiceUsers(obj11);
        obj10.guildId = flag.guild_id;
        let tmp32 = callback(tmp37, obj10);
        const obj16 = arg1(dependencyMap[30]);
      }
    }
    const obj13 = { channel: flag };
    flag = false;
    obj13.collapsed = false;
    obj13.voiceStates = voiceStates;
    tmp32 = callback(importDefault(dependencyMap[28]), obj13);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[10]);
const getScaledChannelRowHeight = tmp2.getScaledChannelRowHeight;
const Permissions = arg1(dependencyMap[11]).Permissions;
const UnreadSetting = arg1(dependencyMap[12]).UnreadSetting;
let closure_16 = arg1(dependencyMap[13]).OpenThreadAnalyticsLocations;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = arg1(dependencyMap[14]));
let obj1 = arg1(dependencyMap[15]);
let obj = {};
obj = { 0: -1437532158, -9223372036854775808: 174014891, 0: -1908342783, 0: 1358955121, -9223372036854775808: 1296114894, marginVertical: tmp2.CHANNEL_MARGIN_VERTICAL, borderRadius: importDefault(dependencyMap[16]).radii.md };
obj.container = obj;
obj.threadRow = { alignItems: null, flexDirection: "text-xs/bold", justifyContent: "badge-text-brand" };
obj.unreadContainer = { to: 9, Z_NO_FLUSH: null, Z_PARTIAL_FLUSH: "\u{1F91B}\u{1F3FC}" };
obj.spineSpacer = { width: 28 };
obj1 = { text: "r", variant: "INSTANT_INVITE_CREATE_SUCCESS", grow: "Array", spacing: "th", justify: "isArray", align: "STICKER_PACK_VIEW_ALL", borderRadius: importDefault(dependencyMap[16]).radii.xs, backgroundColor: importDefault(dependencyMap[16]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.unreadIcon = obj1;
const obj2 = { alignItems: "4.8.0", justifyContent: null, flexDirection: 60, alignItems: 3, backgroundColor: importDefault(dependencyMap[16]).colors.SPINE_DEFAULT };
obj.threadLineSegment = obj2;
let closure_20 = obj1.createStyles(obj);
let closure_21 = importAllResult.memo((arg0) => {
  let color;
  let fontScale;
  ({ color, fontScale } = arg0);
  let obj = { "Null": "166185917b52ede00e3e20d3f1f7faeb", "Null": "CheckmarkSmallIcon" };
  obj = { position: 60, shadowRadius: 3, top: getScaledChannelRowHeight(fontScale) / 2 - 16 + 2 };
  obj.style = obj;
  obj.children = callback(arg1(dependencyMap[17]).Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" });
  return callback(importDefault(dependencyMap[17]), obj);
});
const tmp3 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default function ConnectedThreadChannel(threadId) {
  let selected;
  let threadCount;
  let threadIndex;
  threadId = threadId.threadId;
  const arg1 = threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  let obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = callback(ThreadChannel, obj);
  }
  return tmp2;
};
