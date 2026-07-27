// Module ID: 15743
// Function ID: 121390
// Name: usePrivateChannelPressEvents
// Dependencies: [31, 4327, 33, 4139, 9029, 4131, 689, 15729, 14931, 14268, 21, 4550, 15730, 4661, 15742, 15733, 10220, 3809, 4321, 2]

// Module 15743 (usePrivateChannelPressEvents)
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
  let obj = require(14931) /* useBaseChannelUnreadBadgeState */;
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  const unread = baseChannelUnreadBadgeState.unread;
  const tmp4 = importDefault(14268)(channel, { unread });
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
  let obj2 = require(4550) /* getFontScale */;
  const fontScale = obj2.useFontScale();
  const tmp2 = importDefault(15729)();
  obj = { style: items, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  items = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  const merged = Object.assign(usePrivateChannelPressEvents(channel, flag));
  obj = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount: baseChannelUnreadBadgeState.mentionCount };
  const tmp10 = jsx;
  const tmp9 = importDefault(15730);
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted };
  obj.unreadBadge = jsx(importDefault(15733), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp13 = null != tmp4;
  if (tmp13) {
    obj2 = { channel, message: tmp4, color: str, muted, layout: require(3809) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT };
    tmp13 = jsx(require(10220) /* PreviewIcon */.ChannelRowPreview, { channel, message: tmp4, color: str, muted, layout: require(3809) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT });
  }
  obj.subtitle = tmp13;
  obj.latestMessageTimestamp = extractTimestampResult;
  obj.channelName = importDefault(4321)(channel);
  obj.fontScale = fontScale;
  obj["children"] = importDefault(15742)(obj);
  return tmp9(tmp10(require(4661) /* PressableBase */.PressableHighlight, obj));
});
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;
