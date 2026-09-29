// Module ID: 16566
// Function ID: 16567
// Name: UnknownChannel
// Dependencies: [19, 10413, 4970, 21, 4788, 576, 4486, 1115, 4742, 4941, 11206, 16458, 2]

// Module 16566 (UnknownChannel)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4742 */;
import useChannelNameDefault from "useChannelName" /* 4941 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11206 */;
import ChannelItemDefault from "ChannelItem" /* 16458 */;
import noop from "module_19" /* 19 */;

require = fn;
function handlePress() {
  const obj2 = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["/ZjyYE"]);
  obj2.IconComponent = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open(obj2);
}
const UnreadSetting = fn(4970).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj = { container: { marginVertical: fn(10413).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { marginVertical: fn(10413).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
  const tmp2 = useChannelNameDefault(channel);
  const intl = channel(1115).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1115).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(ChannelItemDefault, { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
});
