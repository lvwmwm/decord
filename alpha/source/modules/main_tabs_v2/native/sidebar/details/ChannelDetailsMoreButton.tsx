// Module ID: 18994
// Function ID: 18995
// Name: ChannelDetailsMoreButton
// Dependencies: [19, 21, 11360, 8965, 8962, 1112, 8583, 2]
// Exports: default

// Module 18994 (ChannelDetailsMoreButton)
import Fragment from "Fragment" /* 21 */;
import AssetRegistryDefault from "AssetRegistry" /* 8583 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8965 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11360 */;
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
      let obj2 = { accessibilityLabel: intl.string(channel(1112).t["UKOtz+"]), source: AssetRegistryDefault, onPress: tmp };
      PressableNavigatorButtonWrapperDefault;
      const HeaderIconButton = channel(8962).HeaderIconButton;
      intl = channel(1112).intl;
      tmp2 = <tmp6>{null}</tmp6>;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
