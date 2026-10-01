// Module ID: 16556
// Function ID: 16557
// Name: ChannelDetailsMoreButton
// Dependencies: [19, 21, 10374, 7291, 7288, 1115, 9091, 2]
// Exports: default

// Module 16556 (ChannelDetailsMoreButton)
import Fragment from "Fragment" /* 21 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7291 */;
import AssetRegistryDefault from "AssetRegistry" /* 9091 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
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
      let obj2 = { accessibilityLabel: intl.string(channel(1115).t["UKOtz+"]), source: AssetRegistryDefault, onPress: tmp };
      PressableNavigatorButtonWrapperDefault;
      const HeaderIconButton = channel(7288).HeaderIconButton;
      intl = channel(1115).intl;
      tmp2 = <tmp6>{null}</tmp6>;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
