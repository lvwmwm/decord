// Module ID: 15530
// Function ID: 119203
// Name: MoreButton
// Dependencies: [31, 33, 9073, 9097, 9094, 1212, 8310, 2]
// Exports: default

// Module 15530 (MoreButton)
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
      obj.source = importDefault(8310);
      obj.onPress = tmp;
      obj.children = jsx(channel(9094).HeaderIconButton, {});
      tmp2 = jsx(importDefault(9097), {});
      const tmp6 = importDefault(9097);
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
