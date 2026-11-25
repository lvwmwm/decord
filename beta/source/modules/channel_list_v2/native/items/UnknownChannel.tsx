// Module ID: 17768
// Function ID: 17769
// Name: UnknownChannel
// Dependencies: [19, 5642, 6553, 21, 4913, 575, 5595, 1112, 5617, 5529, 13846, 17646, 2]

// Module 17768 (UnknownChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import useChannelNameDefault from "useChannelName" /* 5529 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5617 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5642 */;
import ReadStateConstants from "ReadStateConstants" /* 6553 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13846 */;
import ChannelItemDefault from "ChannelItem" /* 17646 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
  const intl = channel(1112).intl;
  return <tmp4 onPress={handlePress} onLongPress={callback} style={tmp.container} accessible accessibilityLabel={intl.formatToPlainString(channel(1112).t.yjQ9P8, { channelName: tmp2 })} accessibilityState={{ selected }} channel={channel} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
