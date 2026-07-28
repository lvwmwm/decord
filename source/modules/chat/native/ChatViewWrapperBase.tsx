// Module ID: 10405
// Function ID: 80156
// Name: ChatViewWrapperBase
// Dependencies: [31, 33, 10403, 5484, 10404, 2]
// Exports: default

// Module 10405 (ChatViewWrapperBase)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useChatViewPointerEventsAndroid").fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  const obj = { children: jsx(require(10404) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10403)(channelId), children }) };
  return jsx(require(5484) /* Layer */.LayerScope, { children: jsx(require(10404) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10403)(channelId), children }) });
};
