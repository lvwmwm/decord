// Module ID: 10581
// Function ID: 10582
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10579, 5568, 10580, 2]
// Exports: default

// Module 10581 (ChatViewWrapperBase)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useChatViewPointerEventsAndroid").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  const obj = { children: null };
  obj[0] = jsx(require(10580) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10579)(channelId), children });
  return jsx(require(5568) /* Layer */.LayerScope, { children: null });
};
