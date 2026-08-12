// Module ID: 10383
// Function ID: 10384
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10381, 5754, 10382, 2]
// Exports: default

// Module 10383 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10382) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10381)(channelId), children });
  return jsx(require(5754) /* Layer */.LayerScope, { children: null });
};
