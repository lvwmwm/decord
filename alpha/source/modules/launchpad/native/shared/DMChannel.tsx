// Module ID: 19489
// Function ID: 19490
// Name: shared/DMChannel
// Dependencies: [19, 6834, 21, 5887, 10930, 5142, 575, 19114, 18779, 17658, 11, 5768, 19481, 7046, 19113, 19482, 11180, 5818, 5778, 2]

// Module 19489 (shared/DMChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import transitionToChannel from "transitionToChannel" /* 5887 */;
import ReadStateConstants from "ReadStateConstants" /* 6834 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10930 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
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
  const tmp4 = flag(19114)();
  let obj = channel(18779);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(17658)(channel, { unread });
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
  const tmp5Result = channel(5768);
  const fontScale = tmp5Result.useFontScale();
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  const tmp2Result3 = flag(19481);
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
  const PressableHighlight = tmp5(7046).PressableHighlight;
  items2 = [channel.id];
  const merged = Object.assign(obj3);
  const obj4 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: tmp11Result, latestMessageTimestamp: extractTimestampResult, channelName: flag(5778)(channel), fontScale };
  tmp11Result = null != tmp7;
  const tmp2Result4 = flag(19113);
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: channel(5818).ChannelListLayoutTypes.COMPACT };
    const ChannelRowPreview = tmp5(11180).ChannelRowPreview;
    tmp11Result = tmp11(ChannelRowPreview, obj6);
  }
  return tmp2Result3(<PressableHighlight style={items} underlayColor={tmp.pressableUnderlayColor.backgroundColor}>{tmp2Result4(obj4)}</PressableHighlight>);
});
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;
