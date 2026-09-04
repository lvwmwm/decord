// Module ID: 11293
// Function ID: 11294
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11291, 7096, 11292, 2]
// Exports: default

// Module 11293 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 7096 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 11291 */;
import StickyWrapper from "StickyWrapper" /* 11292 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};
