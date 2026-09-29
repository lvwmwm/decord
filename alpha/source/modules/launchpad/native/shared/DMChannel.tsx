// Module ID: 17002
// Function ID: 17003
// Name: shared/DMChannel
// Dependencies: [19, 5018, 21, 4847, 10543, 4836, 576, 16667, 16156, 15039, 11, 5454, 16994, 5602, 16666, 16995, 9735, 7469, 4989, 2]

// Module 17002 (shared/DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10543 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(5018).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default noop.memo(function DMChannel(navigationReplace) {
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const tmp4 = flag(16667)();
  const baseChannelUnreadBadgeState = channel(16156).useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(15039)(channel, { unread });
  let extractTimestampResult;
  if (null != tmp7) {
    extractTimestampResult = tmp2(11).extractTimestamp(tmp7.id);
    const tmp2Result = tmp2(11);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  const obj = channel(16156);
  const fontScale = channel(5454).useFontScale();
  const tmp5Result = channel(5454);
  const obj2 = { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj2.style = items;
  const obj3 = { onPress: null, onLongPress: null };
  const items1 = [channel.id, flag];
  obj3.onPress = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id, { navigationReplace: flag });
  }, items1);
  const items2 = [channel.id];
  obj3.onLongPress = noop.useCallback(() => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id), items2);
  const merged = Object.assign(obj3);
  const obj4 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: null, latestMessageTimestamp: null, channelName: null, fontScale: null };
  const tmp2Result3 = flag(16994);
  obj4.unreadBadge = jsx(flag(16995), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: tmp5(7469).ChannelListLayoutTypes.COMPACT };
    tmp11Result = tmp11(tmp5(9735).ChannelRowPreview, obj6);
  }
  obj4.subtitle = tmp11Result;
  obj4.latestMessageTimestamp = extractTimestampResult;
  obj4.channelName = flag(4989)(channel);
  obj4.fontScale = fontScale;
  obj2.children = flag(16666)(obj4);
  return tmp2Result3(jsx(channel(5602).PressableHighlight, { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor }));
});
