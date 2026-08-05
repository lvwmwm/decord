// Module ID: 10223
// Function ID: 10224
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10221, 5582, 10222, 2]
// Exports: default

// Module 10223 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10222) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10221)(channelId), children });
  return jsx(require(5582) /* Layer */.LayerScope, { children: null });
};
