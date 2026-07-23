// Module ID: 10401
// Function ID: 80161
// Name: ChatViewWrapperBase
// Dependencies: [31, 33, 10399, 5449, 10400, 2]
// Exports: default

// Module 10401 (ChatViewWrapperBase)
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
  const obj = { children: jsx(require(10400) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10399)(channelId), children }) };
  return jsx(require(5449) /* Layer */.LayerScope, { children: jsx(require(10400) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10399)(channelId), children }) });
};
