// Module ID: 15558
// Function ID: 15559
// Name: MoreButton
// Dependencies: [19, 21, 9093, 9117, 9114, 1236, 8331, 2]
// Exports: default

// Module 15558 (MoreButton)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("openChannelLongPressActionSheet").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj = { children: null };
      obj = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1236).intl;
      obj[0] = intl.string(channel(1236).t["UKOtz+"]);
      obj[1] = importDefault(8331);
      obj[2] = tmp;
      obj[0] = jsx(channel(9114).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(importDefault(9117), { accessibilityLabel: null, source: null, onPress: null });
      const tmp6 = importDefault(9117);
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};
