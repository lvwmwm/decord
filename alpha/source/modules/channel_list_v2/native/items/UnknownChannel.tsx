// Module ID: 17634
// Function ID: 17635
// Name: UnknownChannel
// Dependencies: [19, 5523, 6434, 21, 4794, 575, 5476, 1112, 5498, 5410, 13723, 17512, 2]

// Module 17634 (UnknownChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import useChannelNameDefault from "useChannelName" /* 5410 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5476 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5498 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5523 */;
import ReadStateConstants from "ReadStateConstants" /* 6434 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13723 */;
import ChannelItemDefault from "ChannelItem" /* 17512 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
