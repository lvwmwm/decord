// Module ID: 15130
// Function ID: 115181
// Dependencies: [31, 4143, 4326, 10223, 4327, 33, 4131, 689, 9029, 4139, 566, 14959, 15027, 8254, 2]

// Module 15130
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.container = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  let hasUnread;
  let isIncomingCall;
  let isOngoingCall;
  let mentionCount;
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const callback = importAllResult.useCallback(() => {
    const result = channel(outer1_2[8]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = importAllResult.useCallback(() => {
    channel(outer1_2[9]).transitionToChannel(channel.id);
  }, items1);
  let obj = channel(566);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items2, () => ({ hasUnread: outer1_4.hasUnread(channel.id), mentionCount: outer1_4.getMentionCount(channel.id) }), items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const tmp = callback();
  const items4 = [closure_5];
  const items5 = [channel];
  const stateFromStores = channel(566).useStateFromStores(items4, () => outer1_5.isChannelMuted(channel.getGuildId(), channel.id), items5);
  const obj2 = channel(566);
  ({ isIncomingCall, isOngoingCall } = importDefault(14959)(channel.id));
  obj = { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button" };
  const tmp6 = importDefault(14959)(channel.id);
  obj.accessibilityLabel = importDefault(8254)({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.unread = hasUnread;
  obj.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj.mentionCount = mentionCount;
  obj.muted = stateFromStores;
  return jsx(importDefault(15027), { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button" });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default memoResult;
