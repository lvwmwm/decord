// Module ID: 10364
// Function ID: 80022
// Name: ChatViewWrapperBase
// Dependencies: [31, 33, 10362, 5449, 10363, 2]
// Exports: default

// Module 10364 (ChatViewWrapperBase)
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
  const obj = { children: jsx(require(10363) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10362)(channelId), children }) };
  return jsx(require(5449) /* Layer */.LayerScope, { children: jsx(require(10363) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10362)(channelId), children }) });
};
