// Module ID: 10336
// Function ID: 10337
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10334, 5715, 10335, 2]
// Exports: default

// Module 10336 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10335) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10334)(channelId), children });
  return jsx(require(5715) /* Layer */.LayerScope, { children: null });
};
