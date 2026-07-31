// Module ID: 10443
// Function ID: 10444
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 10441, 5506, 10442, 2]
// Exports: default

// Module 10443 (ChatViewWrapperBase)
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
  obj[0] = jsx(require(10442) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10441)(channelId), children });
  return jsx(require(5506) /* Layer */.LayerScope, { children: null });
};
