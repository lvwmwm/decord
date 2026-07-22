// Module ID: 15559
// Function ID: 118714
// Name: user
// Dependencies: []

// Module 15559 (user)
function UserResult(user) {
  let activities;
  let channel;
  let comparator;
  let isMobileOnline;
  let isVROnline;
  let lastMessage;
  let unread;
  user = user.user;
  const arg1 = user;
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
  const tmp2 = importDefault(dependencyMap[12])();
  const items = [user.id];
  const callback = importAllResult.useCallback(() => {
    const items = [user.id];
    callback(closure_2[13]).openPrivateChannel({ recipientIds: items });
  }, items);
  let obj = arg1(dependencyMap[14]);
  const fontScale = obj.useFontScale();
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items1, () => locale.locale);
  let obj2 = arg1(dependencyMap[15]);
  const items2 = [closure_4];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let obj3 = arg1(dependencyMap[15]);
  const items3 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => ({ isMobileOnline: store.isMobileOnline(user.id), isVROnline: store.isVROnline(user.id), status: store.getStatus(user.id), activities: store.getActivities(user.id) }));
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    let obj4 = importDefault(dependencyMap[16]);
    extractTimestampResult = obj4.extractTimestamp(lastMessage.id);
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    let obj5 = arg1(dependencyMap[17]);
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
  const items4 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = {};
  const tmp14 = importDefault(dependencyMap[18]);
  const tmp15 = callback;
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items5 = [callback(importDefault(dependencyMap[21]), obj1), , ];
  obj2 = { user, guildId: undefined, isMobileOnline, isVROnline };
  let tmp20 = null;
  if (!user.isSystemUser()) {
    tmp20 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp20 = status;
    }
  }
  obj2.status = tmp20;
  obj2.streaming = importDefault(dependencyMap[23])(activities);
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
  items5[1] = callback(arg1(dependencyMap[22]).Avatar, obj2);
  obj3 = {};
  const tmp16 = importDefault(dependencyMap[20]);
  const tmp17 = closure_14;
  const tmp18 = closure_13;
  const tmp19 = callback;
  if (null == comparator) {
    comparator = importDefault(dependencyMap[25]).getUserTag(user);
    const obj12 = importDefault(dependencyMap[25]);
  }
  obj3.name = comparator;
  let tmp27;
  if (null != lastMessage) {
    if (null != channel) {
      obj4 = { channel, message: lastMessage, color: str, muted: flag, layout: arg1(dependencyMap[27]).ChannelListLayoutTypes.COMPACT };
      tmp27 = callback(arg1(dependencyMap[26]).ChannelRowPreview, obj4);
    }
  }
  obj3.subtitle = tmp27;
  obj3.unread = unread;
  obj3.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj3.muted = flag;
  obj3.lastMessageTimestampString = relativeTimestamp;
  obj3.mentionCount = num;
  obj5 = { mentionCount: num, locale: stateFromStores };
  obj3.mentionBadge = importDefault(dependencyMap[28])(obj5);
  items5[2] = importDefault(dependencyMap[24])(obj3);
  obj.children = items5;
  obj.children = tmp16(tmp17(tmp18, obj), { fontScale });
  return tmp14(tmp15(arg1(dependencyMap[19]).PressableHighlight, obj));
}
function UserResultWithChannel(arg0) {
  let channel;
  let mentionCount;
  let unread;
  ({ user: closure_0, channel } = arg0);
  const importDefault = channel;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => channelMuted.isChannelMuted(undefined, channel.id));
  const baseChannelUnreadBadgeState = arg1(dependencyMap[29]).useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const obj2 = arg1(dependencyMap[29]);
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[15]).useStateFromStores(items1, () => typing.isTyping(channel.id, id.id));
  obj = {};
  const obj3 = arg1(dependencyMap[15]);
  const merged = Object.assign(arg0);
  obj["channel"] = channel;
  obj["lastMessage"] = importDefault(dependencyMap[30])(channel, { unread });
  obj["unread"] = unread;
  obj["mentionCount"] = mentionCount;
  obj["muted"] = stateFromStores;
  obj["isTyping"] = stateFromStores1;
  return callback(UserResult, obj);
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const StatusTypes = arg1(dependencyMap[7]).StatusTypes;
const UnreadSetting = arg1(dependencyMap[8]).UnreadSetting;
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
let obj = { pressable: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.pressableUnderlayColor = obj;
let closure_15 = arg1(dependencyMap[10]).createStyles(obj);
const obj2 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo((user) => {
  const arg1 = user.user;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_6];
  let closure_1 = obj.useStateFromStores(items, () => authStore.getDMFromUserId(user.id));
  const items1 = [closure_6];
  const stateFromStores = arg1(dependencyMap[15]).useStateFromStores(items1, () => authStore.getChannel(closure_1));
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
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default memoResult;
