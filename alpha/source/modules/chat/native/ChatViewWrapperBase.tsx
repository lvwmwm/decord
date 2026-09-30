// Module ID: 11108
// Function ID: 11109
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11106, 6773, 11107, 2]
// Exports: default

// Module 11108 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 6773 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11106 */;
import StickyWrapper from "StickyWrapper" /* 11107 */;
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
