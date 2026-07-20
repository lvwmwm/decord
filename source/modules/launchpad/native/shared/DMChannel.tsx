// Module ID: 15538
// Function ID: 118573
// Name: usePrivateChannelPressEvents
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15538 (usePrivateChannelPressEvents)
import importAllResult from "result";
import { UnreadSetting } from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

function usePrivateChannelPressEvents(channel, flag) {
  flag = channel;
  const importDefault = flag;
  const items = [channel.id, flag];
  const items1 = [channel.id];
  return {
    onPress: importAllResult.useCallback(() => {
      let obj = arg0(closure_2[3]);
      obj = { navigationReplace: arg1 };
      obj.transitionToChannel(arg0.id, obj);
    }, items),
    onLongPress: importAllResult.useCallback(() => arg0(closure_2[4]).openChannelLongPressActionSheet(arg0.id), items1)
  };
}
let obj = { pressable: { flex: 1 } };
obj = { backgroundColor: require("result").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.pressableUnderlayColor = obj;
let closure_6 = result.createStyles(obj);
result = result.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default importAllResult.memo(function DMChannel(navigationReplace) {
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
  let obj = arg1(dependencyMap[8]);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  const unread = baseChannelUnreadBadgeState.unread;
  const tmp4 = importDefault(dependencyMap[9])(channel, { unread });
  let extractTimestampResult;
  if (null != tmp4) {
    let obj1 = importDefault(dependencyMap[10]);
    extractTimestampResult = obj1.extractTimestamp(tmp4.id);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  let obj2 = arg1(dependencyMap[11]);
  const fontScale = obj2.useFontScale();
  const tmp2 = importDefault(dependencyMap[7])();
  obj = { style: items, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  const items = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  const merged = Object.assign(usePrivateChannelPressEvents(channel, flag));
  obj = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount: baseChannelUnreadBadgeState.mentionCount };
  const tmp10 = jsx;
  const tmp9 = importDefault(dependencyMap[12]);
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted };
  obj.unreadBadge = jsx(importDefault(dependencyMap[15]), obj1);
  let tmp13 = null != tmp4;
  if (tmp13) {
    obj2 = { channel, message: tmp4, color: str, muted, layout: arg1(dependencyMap[17]).ChannelListLayoutTypes.COMPACT };
    tmp13 = jsx(arg1(dependencyMap[16]).ChannelRowPreview, obj2);
  }
  obj.subtitle = tmp13;
  obj.latestMessageTimestamp = extractTimestampResult;
  obj.channelName = importDefault(dependencyMap[18])(channel);
  obj.fontScale = fontScale;
  obj["children"] = importDefault(dependencyMap[14])(obj);
  return tmp9(tmp10(arg1(dependencyMap[13]).PressableHighlight, obj));
});
