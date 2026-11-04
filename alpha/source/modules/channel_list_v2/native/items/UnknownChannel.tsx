// Module ID: 18555
// Function ID: 18556
// Name: UnknownChannel
// Dependencies: [19, 11236, 6911, 21, 5141, 575, 5846, 1113, 5869, 5786, 10980, 18429, 2]

// Module 18555 (UnknownChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useChannelNameDefault from "useChannelName" /* 5786 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5869 */;
import ReadStateConstants from "ReadStateConstants" /* 6911 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10980 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11236 */;
import ChannelItemDefault from "ChannelItem" /* 18429 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
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
  const intl = channel(1113).intl;
  return <tmp4 onPress={handlePress} onLongPress={callback} style={tmp.container} accessible accessibilityLabel={intl.formatToPlainString(channel(1113).t.yjQ9P8, { channelName: tmp2 })} accessibilityState={{ selected }} channel={channel} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
