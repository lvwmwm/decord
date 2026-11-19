// Module ID: 17806
// Function ID: 17807
// Name: DMChannel
// Dependencies: [19, 6498, 6431, 5521, 6432, 21, 4792, 575, 13754, 5525, 504, 17601, 17685, 7890, 2]

// Module 17806 (DMChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5521 */;
import transitionToChannel from "transitionToChannel" /* 5525 */;
import ReadStateConstants from "ReadStateConstants" /* 6432 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 7890 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13754 */;
import useCallA11yStateDefault from "useCallA11yState" /* 17601 */;
import ChannelItemDefault from "ChannelItem" /* 17685 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6498 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6431 */;
import createStyles from "createStyles" /* 4792 */;
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
