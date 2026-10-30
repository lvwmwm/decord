// Module ID: 18763
// Function ID: 18764
// Name: ChannelDetailsMoreButton
// Dependencies: [19, 21, 10782, 9794, 9791, 1114, 9081, 2]
// Exports: default

// Module 18763 (ChannelDetailsMoreButton)
import Fragment from "Fragment" /* 21 */;
import AssetRegistryDefault from "AssetRegistry" /* 9081 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9794 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10782 */;
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
      let obj2 = { accessibilityLabel: intl.string(channel(1114).t["UKOtz+"]), source: AssetRegistryDefault, onPress: tmp };
      PressableNavigatorButtonWrapperDefault;
      const HeaderIconButton = channel(9791).HeaderIconButton;
      intl = channel(1114).intl;
      tmp2 = <tmp6>{null}</tmp6>;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
