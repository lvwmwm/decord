// Module ID: 11361
// Function ID: 11362
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11359, 7156, 11360, 2]
// Exports: default

// Module 11361 (ChatViewWrapperBase)
import noopAll from "noop" /* 19 */;
import Layer from "Layer" /* 7156 */;
import useChatViewPointerEventsAndroidDefault from "useChatViewPointerEventsAndroid" /* 11359 */;
import StickyWrapper from "StickyWrapper" /* 11360 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsAndroidDefault(channelId);
  return jsx(Layer.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsAndroidDefault(channelId), children }) });
};
