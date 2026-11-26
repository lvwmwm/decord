// Module ID: 17771
// Function ID: 17772
// Name: DMChannel
// Dependencies: [19, 6619, 6552, 5642, 6553, 21, 4913, 575, 13849, 5646, 504, 17566, 17650, 8009, 2]

// Module 17771 (DMChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5642 */;
import transitionToChannel from "transitionToChannel" /* 5646 */;
import ReadStateConstants from "ReadStateConstants" /* 6553 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 8009 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13849 */;
import useCallA11yStateDefault from "useCallA11yState" /* 17566 */;
import ChannelItemDefault from "ChannelItem" /* 17650 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6619 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let obj2;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function DMChannel(channel) {
  let hasUnread;
  let isIncomingCall;
  let isOngoingCall;
  let mentionCount;
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const tmp = closure_8();
  const callback = react.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToChannel(channel.id);
  }, items1);
  let obj = channel(504);
  const items2 = [ReadStateStore];
  const items3 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items2, () => {
    const obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
    return obj;
  }, items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items4 = [UserGuildSettingsStore];
  const items5 = [channel];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items4, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), items5);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  useCallA11yStateDefault(channel.id);
  ChannelItemDefault;
  return <tmp7 onPress={callback1} onLongPress={callback} style={tmp.container} accessible accessibilityRole="button" accessibilityLabel={getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall })} accessibilityState={{ selected }} channel={channel} selected={selected} unread={hasUnread} resolvedUnreadSetting={UnreadSetting.ALL_MESSAGES} mentionCount={mentionCount} muted={stateFromStores} />;
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default memoResult;
