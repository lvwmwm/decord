// Module ID: 10903
// Function ID: 10904
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10901, 6577, 10902, 2]
// Exports: default

// Module 10903 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 6577 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 10901 */;
import StickyWrapper from "StickyWrapper" /* 10902 */;
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
