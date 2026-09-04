// Module ID: 16652
// Function ID: 16653
// Name: MoreButton
// Dependencies: [19, 21, 10844, 7798, 7795, 1233, 9729, 2]
// Exports: default

// Module 16652 (MoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7798 */;
import registerAssetDefault from "registerAsset" /* 9729 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj = { children: null };
      obj = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1233).intl;
      obj[0] = intl.string(channel(1233).t["UKOtz+"]);
      obj[1] = registerAssetDefault;
      obj[2] = tmp;
      obj[0] = jsx(channel(7795).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { accessibilityLabel: null, source: null, onPress: null });
      const tmp6 = PressableNavigatorButtonWrapperDefault;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
