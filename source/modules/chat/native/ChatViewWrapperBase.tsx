// Module ID: 10309
// Function ID: 10310
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10307, 5776, 10308, 2]
// Exports: default

// Module 10309 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10308) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10307)(channelId), children });
  return jsx(require(5776) /* Layer */.LayerScope, { children: null });
};
