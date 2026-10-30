// Module ID: 11228
// Function ID: 11229
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11226, 5606, 11227, 2]
// Exports: default

// Module 11228 (ChatViewWrapperBase)
import Fragment from "Fragment" /* 21 */;
import LayerScope2 from "LayerScope" /* 5606 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11226 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  useChatViewPointerEventsDefault(channelId);
  const LayerScope = LayerScope2.LayerScope;
  return <LayerScope>{null}</LayerScope>;
};
