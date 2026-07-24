// Module ID: 15723
// Function ID: 121209
// Name: user
// Dependencies: [31, 4122, 1921, 1348, 4217, 11135, 4325, 653, 4326, 33, 4130, 689, 15706, 4140, 4549, 566, 21, 6883, 15707, 4660, 15708, 15710, 1273, 7969, 15711, 3969, 10286, 3808, 15713, 14919, 14256, 2]

// Module 15723 (user)
import importAllResult from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { StatusTypes } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function UserResult(user) {
  let activities;
  let channel;
  let comparator;
  let isMobileOnline;
  let isVROnline;
  let lastMessage;
  let unread;
  user = user.user;
  ({ comparator, channel, lastMessage, unread } = user);
  if (unread === undefined) {
    unread = false;
  }
  let num = user.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  let flag = user.muted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.isTyping;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback2();
  const tmp2 = importDefault(15706)();
  let items = [user.id];
  const callback = importAllResult.useCallback(() => {
    const items = [user.id];
    outer1_1(outer1_2[13]).openPrivateChannel({ recipientIds: items });
  }, items);
  let obj = user(4549);
  const fontScale = obj.useFontScale();
  let obj1 = user(566);
  const items1 = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_5.locale);
  let obj2 = user(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => outer1_4.useReducedMotion);
  let obj3 = user(566);
  const items3 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => ({ isMobileOnline: outer1_7.isMobileOnline(user.id), isVROnline: outer1_7.isVROnline(user.id), status: outer1_7.getStatus(user.id), activities: outer1_7.getActivities(user.id) }));
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    let obj4 = importDefault(21);
    extractTimestampResult = obj4.extractTimestamp(lastMessage.id);
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    let obj5 = user(6883);
    relativeTimestamp = obj5.getRelativeTimestamp(extractTimestampResult);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!flag) {
      str = "text-default";
    }
  }
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items4 };
  items4 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = {};
  const tmp14 = importDefault(15707);
  const tmp15 = callback;
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items5 = [callback(importDefault(15710), obj1), , ];
  obj2 = { user, guildId: undefined, isMobileOnline, isVROnline };
  let tmp20 = null;
  if (!user.isSystemUser()) {
    tmp20 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp20 = status;
    }
  }
  obj2.status = tmp20;
  obj2.streaming = importDefault(7969)(activities);
  obj2.style = tmp2.icon.margin;
  obj2.size = tmp2.icon.avatarSize;
  let tmp22 = !stateFromStores1;
  if (tmp22) {
    let tmp23 = flag2;
    if (!flag2) {
      tmp23 = unread;
    }
    tmp22 = tmp23;
  }
  obj2.animate = tmp22;
  obj2.typing = flag2;
  obj2.autoStatusCutout = true;
  items5[1] = callback(user(1273).Avatar, obj2);
  obj3 = {};
  const tmp16 = importDefault(15708);
  const tmp17 = closure_14;
  const tmp18 = closure_13;
  const tmp19 = callback;
  if (null == comparator) {
    comparator = importDefault(3969).getUserTag(user);
    const obj12 = importDefault(3969);
  }
  obj3.name = comparator;
  let tmp27;
  if (null != lastMessage) {
    if (null != channel) {
      obj4 = { channel, message: lastMessage, color: str, muted: flag, layout: user(3808).ChannelListLayoutTypes.COMPACT };
      tmp27 = callback(user(10286).ChannelRowPreview, obj4);
    }
  }
  obj3.subtitle = tmp27;
  obj3.unread = unread;
  obj3.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj3.muted = flag;
  obj3.lastMessageTimestampString = relativeTimestamp;
  obj3.mentionCount = num;
  obj5 = { mentionCount: num, locale: stateFromStores };
  obj3.mentionBadge = importDefault(15713)(obj5);
  items5[2] = importDefault(15711)(obj3);
  obj.children = items5;
  obj.children = tmp16(tmp17(tmp18, obj), { fontScale });
  return tmp14(tmp15(user(4660).PressableHighlight, obj));
}
function UserResultWithChannel(arg0) {
  let channel;
  let mentionCount;
  let require;
  let unread;
  ({ user: require, channel } = arg0);
  let obj = require(566) /* initialize */;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.isChannelMuted(undefined, channel.id));
  const baseChannelUnreadBadgeState = require(14919) /* useBaseChannelUnreadBadgeState */.useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const obj2 = require(14919) /* useBaseChannelUnreadBadgeState */;
  const items1 = [closure_8];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_8.isTyping(channel.id, id.id));
  obj = {};
  const obj3 = require(566) /* initialize */;
  const merged = Object.assign(arg0);
  obj["channel"] = channel;
  obj["lastMessage"] = channel(14256)(channel, { unread });
  obj["unread"] = unread;
  obj["mentionCount"] = mentionCount;
  obj["muted"] = stateFromStores;
  obj["isTyping"] = stateFromStores1;
  return callback(UserResult, obj);
}
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
let obj = { pressable: { flex: 1 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.pressableUnderlayColor = obj;
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  let obj = user(566);
  const items = [closure_6];
  let closure_1 = obj.useStateFromStores(items, () => outer1_6.getDMFromUserId(user.id));
  const items1 = [closure_6];
  const stateFromStores = user(566).useStateFromStores(items1, () => outer1_6.getChannel(closure_1));
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(user);
    obj["channel"] = stateFromStores;
    let tmp7 = callback(UserResultWithChannel, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(user);
    tmp7 = callback(UserResult, obj);
  }
  return tmp7;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default memoResult;
