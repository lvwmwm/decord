// Module ID: 15013
// Function ID: 114395
// Name: ThreadChannel
// Dependencies: [31, 27, 3760, 1348, 3758, 4142, 1906, 1849, 4146, 4203, 10289, 653, 4326, 1211, 33, 4130, 689, 8063, 4549, 566, 11421, 4138, 10369, 15014, 15016, 8494, 15019, 1273, 15021, 15027, 4312, 2]
// Exports: default

// Module 15013 (ThreadChannel)
import importAllResult from "set";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import hairlineWidth from "hairlineWidth";
import { Permissions } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { OpenThreadAnalyticsLocations as closure_16 } from "AbortCodes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_17;
let closure_18;
let closure_19;
const require = arg1;
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
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  let ownerId;
  let parent_id;
  let fontScale;
  let user;
  let parentChannel;
  const tmp = callback2();
  const id = flag.id;
  ownerId = undefined;
  if (null != flag) {
    ownerId = flag.ownerId;
  }
  parent_id = undefined;
  if (null != flag) {
    parent_id = flag.parent_id;
  }
  let obj = flag(threadCount[18]);
  fontScale = obj.useFontScale();
  let obj1 = flag(threadCount[19]);
  let items = [parent_id, ownerId, closure_10, closure_12, closure_11, user, parentChannel, fontScale];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const isMutedResult = ownerId.isMuted(id);
    const obj = { user: outer1_10.getUser(ownerId), parentChannel: parent_id.getChannel(parent_id), voiceStates: outer1_12.getVoiceStatesForChannel(flag), hasVideo: outer1_11.hasVideo(flag.id), isLocked: !fontScale.can(outer1_14.CONNECT, flag), muted: isMutedResult };
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
  user = stateFromStoresObject.user;
  parentChannel = stateFromStoresObject.parentChannel;
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
    return outer1_17(id, obj);
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  obj = { channel: flag, locked: isLocked, video: hasVideo, selected };
  const items2 = [flag];
  const items3 = [flag, user, parentChannel];
  const callback = importAllResult.useCallback(() => {
    let obj = flag(threadCount[21]);
    obj = { source: outer1_16.CHANNEL_LIST };
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
    tmp16 = callback(id, obj4);
  }
  obj3.children = tmp16;
  const items5 = [callback(id, obj3), callback(id, { style: tmp.spineSpacer }), ];
  const obj6 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button" };
  const obj5 = { style: tmp.spineSpacer };
  const tmp10 = closure_18;
  const tmp11 = closure_19;
  const tmp12 = closure_18;
  const tmp13 = id;
  const tmp14 = callback;
  const tmp15 = id;
  const tmp19 = callback;
  const tmp7 = threadIndex(threadCount[20])(obj);
  const obj7 = { channel: flag, unread, mentionCount };
  obj6.accessibilityLabel = threadIndex(threadCount[25])(obj7);
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
      tmp25 = callback(flag(threadCount[26]).ConnectedUserLimit, obj8);
    }
    let tmp24 = tmp25;
  } else {
    const obj9 = { value: mentionCount, isMentionLowImportance };
    tmp24 = callback(flag(threadCount[27]).Badge, obj9);
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
        const obj10 = { users: null, max: 8, guildId: null, renderIcon: false, noPadding: true };
        const tmp37 = threadIndex(threadCount[29]);
        const obj11 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null };
        const items6 = [flag];
        obj11.channels = items6;
        const obj12 = {};
        obj12[flag.id] = voiceStates;
        obj11.voiceStates = obj12;
        obj10.users = flag(threadCount[30]).computeSummarizedVoiceUsers(obj11);
        obj10.guildId = flag.guild_id;
        let tmp32 = callback(tmp37, obj10);
        const obj16 = flag(threadCount[30]);
      }
    }
    const obj13 = { channel: flag };
    flag = false;
    obj13.collapsed = false;
    obj13.voiceStates = voiceStates;
    tmp32 = callback(threadIndex(threadCount[28]), obj13);
  }
}
const getScaledChannelRowHeight = hairlineWidth.getScaledChannelRowHeight;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let obj = {};
obj = { marginVertical: hairlineWidth.CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, flex: 1 };
obj.container = obj;
obj.threadRow = { flex: 0, flexDirection: "row", alignSelf: "stretch" };
obj.unreadContainer = { width: 8, alignItems: "flex-start", justifyContent: "flex-start" };
obj.spineSpacer = { width: 28 };
_createForOfIteratorHelperLoose = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj.unreadIcon = _createForOfIteratorHelperLoose;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
obj.threadLineSegment = obj2;
let closure_20 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_21 = importAllResult.memo((arg0) => {
  let color;
  let fontScale;
  ({ color, fontScale } = arg0);
  let obj = { width: 12, height: 16 };
  obj = { position: "absolute", left: 23, top: getScaledChannelRowHeight(fontScale) / 2 - 16 + 2 };
  obj.style = obj;
  obj.children = callback(require(8063) /* inlineStyles */.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" });
  return callback(importDefault(8063), obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default function ConnectedThreadChannel(threadId) {
  let selected;
  let threadCount;
  let threadIndex;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  let obj = threadId(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = callback(ThreadChannel, obj);
  }
  return tmp2;
};
