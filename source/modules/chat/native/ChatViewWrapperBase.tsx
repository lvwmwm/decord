// Module ID: 10567
// Function ID: 10568
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10565, 7126, 10566, 2]
// Exports: default

// Module 10567 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10566) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10565)(channelId), children });
  return jsx(require(7126) /* Layer */.LayerScope, { children: null });
};
