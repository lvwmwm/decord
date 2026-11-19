// Module ID: 19192
// Function ID: 19193
// Name: shared/DMChannel
// Dependencies: [19, 6432, 21, 5525, 13754, 4792, 575, 18803, 17964, 16776, 11, 5398, 19184, 6911, 18802, 19185, 11063, 5453, 5408, 2]

// Module 19192 (shared/DMChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import transitionToChannel from "transitionToChannel" /* 5525 */;
import ReadStateConstants from "ReadStateConstants" /* 6432 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13754 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let obj2;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function DMChannel(navigationReplace) {
  let channel;
  let items1;
  let items2;
  let mentionCount;
  let muted;
  let tmp11Result;
  let unread;
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const tmp4 = flag(18803)();
  let obj = channel(17964);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(16776)(channel, { unread });
  let extractTimestampResult;
  if (null != tmp7) {
    const tmp2Result = flag(11);
    extractTimestampResult = tmp2Result.extractTimestamp(tmp7.id);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  const tmp5Result = channel(5398);
  const fontScale = tmp5Result.useFontScale();
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  const tmp2Result3 = flag(19184);
  const obj3 = {
    onPress: react.useCallback(() => {
      const obj = transitionToChannel;
      const obj2 = { navigationReplace: flag };
      obj.transitionToChannel(channel.id, obj2);
    }, items1),
    onLongPress: react.useCallback(() => {
      const obj = openChannelLongPressActionSheet;
      return obj.openChannelLongPressActionSheet(channel.id);
    }, items2)
  };
  items1 = [channel.id, flag];
  const PressableHighlight = tmp5(6911).PressableHighlight;
  items2 = [channel.id];
  const merged = Object.assign(obj3);
  const obj4 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: tmp11Result, latestMessageTimestamp: extractTimestampResult, channelName: flag(5408)(channel), fontScale };
  tmp11Result = null != tmp7;
  const tmp2Result4 = flag(18802);
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: channel(5453).ChannelListLayoutTypes.COMPACT };
    const ChannelRowPreview = tmp5(11063).ChannelRowPreview;
    tmp11Result = tmp11(ChannelRowPreview, obj6);
  }
  return tmp2Result3(<PressableHighlight style={items} underlayColor={tmp.pressableUnderlayColor.backgroundColor}>{tmp2Result4(obj4)}</PressableHighlight>);
});
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;
