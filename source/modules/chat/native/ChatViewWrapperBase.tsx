// Module ID: 10295
// Function ID: 10296
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10293, 5755, 10294, 2]
// Exports: default

// Module 10295 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10294) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10293)(channelId), children });
  return jsx(require(5755) /* Layer */.LayerScope, { children: null });
};
