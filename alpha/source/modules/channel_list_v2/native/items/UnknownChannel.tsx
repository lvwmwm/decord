// Module ID: 18246
// Function ID: 18247
// Name: UnknownChannel
// Dependencies: [19, 11027, 6770, 21, 5009, 575, 5707, 1114, 5730, 5647, 10782, 18118, 2]

// Module 18246 (UnknownChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10782 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import ChannelItemDefault from "ChannelItem" /* 18118 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

function handlePress() {
  let intl;
  const obj = { text: intl.string(intl2.t["/ZjyYE"]), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("UNKNOWN_CHANNEL_UPDATE_DISCORD", obj);
}
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { container: { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
({ marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md });
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function UnknownChannel(channel) {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = closure_6();
  const tmp2 = useChannelNameDefault(channel);
  const callback = react.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }, items);
  ChannelItemDefault;
  const intl = channel(1114).intl;
  return <tmp4 onPress={handlePress} onLongPress={callback} style={tmp.container} accessible accessibilityLabel={intl.formatToPlainString(channel(1114).t.yjQ9P8, { channelName: tmp2 })} accessibilityState={{ selected }} channel={channel} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
