// Module ID: 17308
// Function ID: 17309
// Name: ChannelDetailsMoreButton
// Dependencies: [19, 21, 11265, 8197, 8194, 1115, 9982, 2]
// Exports: default

// Module 17308 (ChannelDetailsMoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8197 */;
import _modDef9982 from "module_9982" /* 9982 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11265 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      const obj = { children: null };
      let obj2 = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1115).intl;
      obj2.accessibilityLabel = intl.string(channel(1115).t["UKOtz+"]);
      obj2.source = _modDef9982;
      obj2.onPress = tmp;
      obj.children = jsx(channel(8194).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
