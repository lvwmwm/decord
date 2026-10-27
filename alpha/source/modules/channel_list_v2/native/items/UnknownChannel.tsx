// Module ID: 17711
// Function ID: 17712
// Name: UnknownChannel
// Dependencies: [19, 11954, 6706, 21, 4972, 587, 5664, 1125, 5687, 558, 576, 5605, 10694, 17596, 2]

// Module 17711 (UnknownChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import useChannelNameDefault from "useChannelName" /* 5605 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5687 */;
import ReadStateConstants from "ReadStateConstants" /* 6706 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10694 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11954 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const ChannelItemDefault = tmp5(17596);
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
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UnknownChannel(channel) {
  let tmp10;
  let tmp7;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(13);
  channel = channel.channel;
  const selected = channel.selected;
  const tmp4 = closure_6();
  const tmp6 = useChannelNameDefault(channel);
  if (cResult[0] !== channel.id) {
    const fn = function t() {
      const obj = openChannelLongPressActionSheet;
      const result = obj.openChannelLongPressActionSheet(channel.id);
    };
    cResult[0] = channel.id;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const container = tmp4.container;
  if (cResult[2] !== tmp6) {
    const intl = tmp(1125).intl;
    const obj2 = { channelName: tmp6 };
    const formatToPlainStringResult = intl.formatToPlainString(channel(1125).t.yjQ9P8, obj2);
    cResult[2] = tmp6;
    cResult[3] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== selected) {
    const obj3 = { selected };
    cResult[4] = selected;
    cResult[5] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === channel) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === selected) {
        if (cResult[9] === tmp4.container) {
          if (cResult[10] === tmp8) {
            let tmp11;
            if (cResult[11] === tmp10) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
      }
    }
  }
  const tmp12 = jsx(ChannelItemDefault, { onPress: handlePress, onLongPress: tmp7, style: container, accessible: true, accessibilityLabel: tmp8, accessibilityState: tmp10, channel, selected, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS });
  cResult[6] = channel;
  cResult[7] = tmp7;
  cResult[8] = selected;
  cResult[9] = tmp4.container;
  cResult[10] = tmp8;
  cResult[11] = tmp10;
  cResult[12] = tmp12;
  tmp11 = tmp12;
}) : (function UnknownChannel(channel) {
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
  const intl = channel(1125).intl;
  return <tmp4 onPress={handlePress} onLongPress={callback} style={tmp.container} accessible accessibilityLabel={intl.formatToPlainString(channel(1125).t.yjQ9P8, { channelName: tmp2 })} accessibilityState={{ selected }} channel={channel} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
