// Module ID: 10251
// Function ID: 10252
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10249, 5597, 10250, 2]
// Exports: default

// Module 10251 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10250) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10249)(channelId), children });
  return jsx(require(5597) /* Layer */.LayerScope, { children: null });
};
