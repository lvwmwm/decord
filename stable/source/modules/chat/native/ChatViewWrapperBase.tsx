// Module ID: 11498
// Function ID: 11499
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11496, 7259, 11497, 2]
// Exports: default

// Module 11498 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7259 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11496 */;
import StickyWrapper from "StickyWrapper" /* 11497 */;
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
