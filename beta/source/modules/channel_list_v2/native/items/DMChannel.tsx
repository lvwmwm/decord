// Module ID: 16589
// Function ID: 16590
// Name: DMChannel
// Dependencies: [19, 4805, 4971, 12249, 4972, 21, 4790, 580, 558, 568, 11255, 4801, 504, 16381, 9878, 16477, 2]

// Module 16589 (DMChannel)
import nativeDefault from "native" /* 580 */;
import transitionToChannel from "transitionToChannel" /* 4801 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11255 */;
import useCallA11yStateDefault from "useCallA11yState" /* 16381 */;
import ChannelItemDefault from "ChannelItem" /* 16477 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

const getChannelA11yLabelDefault = tmp16(9878);
require = fn;
const UnreadSetting = fn(4972).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj = { container: { marginVertical: fn(12249).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(12249).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(31);
  channel = channel.channel;
  closure_8();
  if (cResult[0] !== channel.id) {
    const fn = function s() {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
    };
    cResult[0] = channel.id;
    cResult[1] = fn;
  }
  if (cResult[2] !== channel.id) {
    const fn2 = function _() {
      transitionToChannel.transitionToChannel(channel.id);
    };
    cResult[2] = channel.id;
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[4] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] !== channel.id) {
    class L {
      constructor() {
        obj = { hasUnread: closure_4.hasUnread(channel.id), mentionCount: closure_4.getMentionCount(channel.id) };
        return obj;
      }
    }
    const items1 = [channel.id];
    cResult[5] = channel.id;
    cResult[6] = L;
    cResult[7] = items1;
    let tmp10 = items1;
    const tmp9 = L;
  } else {
    class L {
      constructor() {
        obj = { hasUnread: closure_4.hasUnread(channel.id), mentionCount: closure_4.getMentionCount(channel.id) };
        return obj;
      }
    }
    tmp10 = cResult[7];
  }
  const obj = channel(568);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp7, tmp9, tmp10);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        obj = { hasUnread: closure_4.hasUnread(channel.id), mentionCount: closure_4.getMentionCount(channel.id) };
        return obj;
      }
    }
    const items2 = [UserGuildSettingsStore];
    cResult[8] = items2;
    const tmp12 = items2;
  } else {
    class L {
      constructor() {
        obj = { hasUnread: closure_4.hasUnread(channel.id), mentionCount: closure_4.getMentionCount(channel.id) };
        return obj;
      }
    }
  }
  if (cResult[9] !== channel) {
    class U {
      constructor() {
        return closure_5.isChannelMuted(channel.getGuildId(), channel.id);
      }
    }
    const items3 = [channel];
    cResult[9] = channel;
    cResult[10] = U;
    cResult[11] = items3;
    let tmp14 = items3;
    const tmp13 = U;
  } else {
    class U {
      constructor() {
        return closure_5.isChannelMuted(channel.getGuildId(), channel.id);
      }
    }
    tmp14 = cResult[11];
  }
  const tmpResult = channel(504);
  const stateFromStores = channel(504).useStateFromStores(tmp12, tmp13, tmp14);
  const tmpResult2 = channel(504);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  if (cResult[12] === channel) {
    class U {
      constructor() {
        return closure_5.isChannelMuted(channel.getGuildId(), channel.id);
      }
    }
  }
  const tmp17 = useCallA11yStateDefault(channel.id);
  cResult[12] = channel;
  cResult[13] = hasUnread;
  cResult[14] = isIncomingCall;
  cResult[15] = isOngoingCall;
  cResult[16] = mentionCount;
  cResult[17] = getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
}) : ((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id);
  }, items1);
  const tmp = closure_8();
  const items2 = [ReadStateStore];
  const items3 = [channel.id];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items2, () => ({ hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) }), items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const obj = channel(504);
  const items4 = [UserGuildSettingsStore];
  const items5 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items4, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), items5);
  const obj2 = channel(504);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  const obj3 = { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null };
  const tmp6 = useCallA11yStateDefault(channel.id);
  obj3.accessibilityLabel = getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj3.accessibilityState = { selected };
  obj3.channel = channel;
  obj3.selected = selected;
  obj3.unread = hasUnread;
  obj3.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj3.mentionCount = mentionCount;
  obj3.muted = stateFromStores;
  return jsx(ChannelItemDefault, { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null });
}));
