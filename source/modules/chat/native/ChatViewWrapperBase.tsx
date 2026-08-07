// Module ID: 10270
// Function ID: 10271
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10268, 5655, 10269, 2]
// Exports: default

// Module 10270 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10269) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10268)(channelId), children });
  return jsx(require(5655) /* Layer */.LayerScope, { children: null });
};
