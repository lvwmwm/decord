// Module ID: 11624
// Function ID: 11625
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11622, 7401, 11623, 2]
// Exports: default

// Module 11624 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7401 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11622 */;
import StickyWrapper from "StickyWrapper" /* 11623 */;
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
