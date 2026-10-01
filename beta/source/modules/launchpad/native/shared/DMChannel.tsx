// Module ID: 16815
// Function ID: 16816
// Name: shared/DMChannel
// Dependencies: [19, 5018, 21, 4847, 10374, 4836, 576, 16479, 15980, 14864, 11, 5288, 16807, 5435, 16478, 16808, 9568, 7304, 4989, 2]

// Module 16815 (shared/DMChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  const tmp4 = flag(16479)();
  let obj = channel(15980);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(14864)(channel, { unread });
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
  const tmp5Result = channel(5288);
  const fontScale = tmp5Result.useFontScale();
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  const tmp2Result3 = flag(16807);
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
  const PressableHighlight = tmp5(5435).PressableHighlight;
  items2 = [channel.id];
  const merged = Object.assign(obj3);
  const obj4 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: tmp11Result, latestMessageTimestamp: extractTimestampResult, channelName: flag(4989)(channel), fontScale };
  tmp11Result = null != tmp7;
  const tmp2Result4 = flag(16478);
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: channel(7304).ChannelListLayoutTypes.COMPACT };
    const ChannelRowPreview = tmp5(9568).ChannelRowPreview;
    tmp11Result = tmp11(ChannelRowPreview, obj6);
  }
  return tmp2Result3(<PressableHighlight style={items} underlayColor={tmp.pressableUnderlayColor.backgroundColor}>{tmp2Result4(obj4)}</PressableHighlight>);
});
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;
