// Module ID: 15468
// Function ID: 118870
// Name: MoreButton
// Dependencies: [31, 33, 9137, 9161, 9158, 1212, 8512, 2]
// Exports: default

// Module 15468 (MoreButton)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("openChannelLongPressActionSheet").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj = {};
      obj = {};
      const intl = channel(1212).intl;
      obj.accessibilityLabel = intl.string(channel(1212).t["UKOtz+"]);
      obj.source = importDefault(8512);
      obj.onPress = tmp;
      obj.children = jsx(channel(9158).HeaderIconButton, {});
      tmp2 = jsx(importDefault(9161), {});
      const tmp6 = importDefault(9161);
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
