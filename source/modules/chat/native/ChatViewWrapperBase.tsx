// Module ID: 10365
// Function ID: 80027
// Name: ChatViewWrapperBase
// Dependencies: [31, 33, 10363, 5449, 10364, 2]
// Exports: default

// Module 10365 (ChatViewWrapperBase)
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
  const obj = { children: jsx(require(10364) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10363)(channelId), children }) };
  return jsx(require(5449) /* Layer */.LayerScope, { children: jsx(require(10364) /* StickyWrapper */.StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(10363)(channelId), children }) });
};
