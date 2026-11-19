// Module ID: 18888
// Function ID: 18889
// Name: ChannelDetailsMoreButton
// Dependencies: [19, 21, 13754, 8445, 8442, 1113, 7909, 2]
// Exports: default

// Module 18888 (ChannelDetailsMoreButton)
import Fragment from "Fragment" /* 21 */;
import AssetRegistryDefault from "AssetRegistry" /* 7909 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8445 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13754 */;
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
      const HeaderIconButton = channel(8442).HeaderIconButton;
      intl = channel(1113).intl;
      tmp2 = <tmp6>{null}</tmp6>;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
