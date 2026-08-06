// Module ID: 10254
// Function ID: 10255
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10252, 5636, 10253, 2]
// Exports: default

// Module 10254 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10253) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10252)(channelId), children });
  return jsx(require(5636) /* Layer */.LayerScope, { children: null });
};
