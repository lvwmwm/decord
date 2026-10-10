// Module ID: 16653
// Function ID: 16654
// Name: DMChannel
// Dependencies: [19, 6035, 5966, 11758, 5967, 21, 5092, 587, 558, 576, 10282, 5103, 504, 16444, 8650, 16542, 2]

// Module 16653 (DMChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 8650 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10282 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11758 */;
import useCallA11yStateDefault from "useCallA11yState" /* 16444 */;
import ChannelItemDefault from "ChannelItem" /* 16542 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DMChannel(channel) {
  let hasUnread;
  let isIncomingCall;
  let isOngoingCall;
  let mentionCount;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp9;
  let obj = channel(576);
  const cResult = obj.c(31);
  channel = channel.channel;
  closure_8();
  if (cResult[0] !== channel.id) {
    const fn = function s() {
      const obj = openChannelLongPressActionSheet;
      const result = obj.openChannelLongPressActionSheet(channel.id);
    };
    cResult[0] = channel.id;
    cResult[1] = fn;
  }
  if (cResult[2] !== channel.id) {
    const fn2 = function _() {
      const obj = transitionToChannel;
      obj.transitionToChannel(channel.id);
    };
    cResult[2] = channel.id;
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[4] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] !== channel.id) {
    class L {
      constructor() {
        const obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
        return obj;
      }
    }
    const items1 = [channel.id];
    cResult[5] = channel.id;
    cResult[6] = L;
    cResult[7] = items1;
    tmp10 = items1;
    tmp9 = L;
  } else {
    class L {
      constructor() {
        const obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
        return obj;
      }
    }
    tmp10 = cResult[7];
  }
  const tmpResult = channel(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp9, tmp10);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        const obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
        return obj;
      }
    }
    const items2 = [UserGuildSettingsStore];
    cResult[8] = items2;
    tmp12 = items2;
  } else {
    class L {
      constructor() {
        const obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
        return obj;
      }
    }
  }
  if (cResult[9] !== channel) {
    class U {
      constructor() {
        return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
      }
    }
    const items3 = [channel];
    cResult[9] = channel;
    cResult[10] = U;
    cResult[11] = items3;
    tmp14 = items3;
    tmp13 = U;
  } else {
    class U {
      constructor() {
        return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
      }
    }
    tmp14 = cResult[11];
  }
  const tmpResult2 = channel(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp12, tmp13, tmp14);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  useCallA11yStateDefault(channel.id);
  if (cResult[12] === channel) {
    class U {
      constructor() {
        return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
      }
    }
  }
  cResult[12] = channel;
  cResult[13] = hasUnread;
  cResult[14] = isIncomingCall;
  cResult[15] = isOngoingCall;
  cResult[16] = mentionCount;
  cResult[17] = getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
}) : (function DMChannel(channel) {
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
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default memoResult;
