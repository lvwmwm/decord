// Module ID: 19087
// Function ID: 19088
// Name: ChannelDetailsMoreButton
// Dependencies: [19, 21, 10980, 9964, 9961, 1113, 9245, 2]
// Exports: default

// Module 19087 (ChannelDetailsMoreButton)
import Fragment from "Fragment" /* 21 */;
import AssetRegistryDefault from "AssetRegistry" /* 9245 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9964 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10980 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  let intl;
  let tmp;
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj2 = { accessibilityLabel: intl.string(channel(1113).t["UKOtz+"]), source: AssetRegistryDefault, onPress: tmp };
      PressableNavigatorButtonWrapperDefault;
      const HeaderIconButton = channel(9961).HeaderIconButton;
      intl = channel(1113).intl;
      tmp2 = <tmp6>{null}</tmp6>;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
