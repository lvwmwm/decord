// Module ID: 15421
// Function ID: 118548
// Name: MoreButton
// Dependencies: [31, 33, 9099, 9125, 9122, 1212, 8468, 2]
// Exports: default

// Module 15421 (MoreButton)
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
      obj.source = importDefault(8468);
      obj.onPress = tmp;
      obj.children = jsx(channel(9122).HeaderIconButton, {});
      tmp2 = jsx(importDefault(9125), {});
      const tmp6 = importDefault(9125);
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
