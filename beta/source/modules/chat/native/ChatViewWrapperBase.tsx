// Module ID: 11653
// Function ID: 11654
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11651, 7433, 11652, 2]
// Exports: default

// Module 11653 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7433 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11651 */;
import StickyWrapper from "StickyWrapper" /* 11652 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  return jsx(LayerScope.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsDefault(channelId), children }) });
};
