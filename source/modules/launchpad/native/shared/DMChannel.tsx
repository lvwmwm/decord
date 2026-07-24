// Module ID: 15720
// Function ID: 121174
// Name: usePrivateChannelPressEvents
// Dependencies: [31, 4326, 33, 4138, 9137, 4130, 689, 15706, 14919, 14256, 21, 4549, 15707, 4660, 15719, 15710, 10286, 3808, 4320, 2]

// Module 15720 (usePrivateChannelPressEvents)
import importAllResult from "result";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function usePrivateChannelPressEvents(channel, flag) {
  let closure_0 = channel;
  let closure_1 = flag;
  const items = [channel.id, flag];
  const items1 = [channel.id];
  return {
    onPress: importAllResult.useCallback(() => {
      let obj = channel(outer1_2[3]);
      obj = { navigationReplace: closure_1 };
      obj.transitionToChannel(channel.id, obj);
    }, items),
    onLongPress: importAllResult.useCallback(() => channel(outer1_2[4]).openChannelLongPressActionSheet(channel.id), items1)
  };
}
let obj = { pressable: { flex: 1 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.pressableUnderlayColor = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function DMChannel(navigationReplace) {
  let channel;
  let muted;
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = require(14919) /* useBaseChannelUnreadBadgeState */;
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  const unread = baseChannelUnreadBadgeState.unread;
  const tmp4 = importDefault(14256)(channel, { unread });
  let extractTimestampResult;
  if (null != tmp4) {
    let obj1 = importDefault(21);
    extractTimestampResult = obj1.extractTimestamp(tmp4.id);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  let obj2 = require(4549) /* getFontScale */;
  const fontScale = obj2.useFontScale();
  const tmp2 = importDefault(15706)();
  obj = { style: items, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  items = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  const merged = Object.assign(usePrivateChannelPressEvents(channel, flag));
  obj = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount: baseChannelUnreadBadgeState.mentionCount };
  const tmp10 = jsx;
  const tmp9 = importDefault(15707);
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted };
  obj.unreadBadge = jsx(importDefault(15710), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp13 = null != tmp4;
  if (tmp13) {
    obj2 = { channel, message: tmp4, color: str, muted, layout: require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT };
    tmp13 = jsx(require(10286) /* PreviewIcon */.ChannelRowPreview, { channel, message: tmp4, color: str, muted, layout: require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT });
  }
  obj.subtitle = tmp13;
  obj.latestMessageTimestamp = extractTimestampResult;
  obj.channelName = importDefault(4320)(channel);
  obj.fontScale = fontScale;
  obj["children"] = importDefault(15719)(obj);
  return tmp9(tmp10(require(4660) /* PressableBase */.PressableHighlight, obj));
});
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;
