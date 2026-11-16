// Module ID: 11426
// Function ID: 11427
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11424, 5770, 11425, 2]
// Exports: default

// Module 11426 (ChatViewWrapperBase)
import Fragment from "Fragment" /* 21 */;
import LayerScope2 from "LayerScope" /* 5770 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11424 */;
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
