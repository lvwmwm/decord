// Module ID: 10998
// Function ID: 10999
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10996, 5940, 10997, 2]
// Exports: default

// Module 10998 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 5940 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 10996 */;
import StickyWrapper from "StickyWrapper" /* 10997 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};
