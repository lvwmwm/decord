// Module ID: 10425
// Function ID: 10426
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10423, 5502, 10424, 2]
// Exports: default

// Module 10425 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10424) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10423)(channelId), children });
  return jsx(require(5502) /* Layer */.LayerScope, { children: null });
};
