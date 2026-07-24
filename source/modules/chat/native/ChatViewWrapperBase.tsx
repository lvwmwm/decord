// Module ID: 10430
// Function ID: 80353
// Name: ChatViewWrapperBase
// Dependencies: [31, 33, 10428, 5449, 10429, 2]
// Exports: default

// Module 10430 (ChatViewWrapperBase)
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
  const obj = { children: jsx(require(10429) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10428)(channelId), children }) };
  return jsx(require(5449) /* Layer */.LayerScope, { children: jsx(require(10429) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10428)(channelId), children }) });
};
