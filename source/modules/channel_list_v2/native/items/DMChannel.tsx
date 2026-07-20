// Module ID: 14927
// Function ID: 112417
// Dependencies: []

// Module 14927
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UnreadSetting = arg1(dependencyMap[4]).UnreadSetting;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = {};
obj = { marginVertical: arg1(dependencyMap[3]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.container = obj;
let closure_8 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((channel) => {
  let hasUnread;
  let isIncomingCall;
  let isOngoingCall;
  let mentionCount;
  channel = channel.channel;
  const arg1 = channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const callback = importAllResult.useCallback(() => {
    const result = channel(closure_2[8]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = importAllResult.useCallback(() => {
    channel(closure_2[9]).transitionToChannel(channel.id);
  }, items1);
  let obj = arg1(dependencyMap[10]);
  const items2 = [closure_4];
  const items3 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items2, () => ({ hasUnread: closure_4.hasUnread(channel.id), mentionCount: closure_4.getMentionCount(channel.id) }), items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const tmp = callback();
  const items4 = [closure_5];
  const items5 = [channel];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items4, () => channelMuted.isChannelMuted(channel.getGuildId(), channel.id), items5);
  const obj2 = arg1(dependencyMap[10]);
  ({ isIncomingCall, isOngoingCall } = importDefault(dependencyMap[11])(channel.id));
  obj = { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button" };
  const tmp6 = importDefault(dependencyMap[11])(channel.id);
  obj.accessibilityLabel = importDefault(dependencyMap[13])({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.unread = hasUnread;
  obj.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj.mentionCount = mentionCount;
  obj.muted = stateFromStores;
  return jsx(importDefault(dependencyMap[12]), obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default memoResult;
