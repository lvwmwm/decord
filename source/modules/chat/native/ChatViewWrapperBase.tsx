// Module ID: 11222
// Function ID: 11223
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11220, 5949, 11221, 2]
// Exports: default

// Module 11222 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 5949 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 11220 */;
import StickyWrapper from "StickyWrapper" /* 11221 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};
