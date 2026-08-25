// Module ID: 10404
// Function ID: 10405
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10402, 5821, 10403, 2]
// Exports: default

// Module 10404 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 5821 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 10402 */;
import StickyWrapper from "StickyWrapper" /* 10403 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};
