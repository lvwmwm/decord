// Module ID: 10359
// Function ID: 10360
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 558, 576, 10357, 6835, 10358, 2]

// Module 10359 (ChatViewWrapperBase)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import LayerScope2 from "LayerScope" /* 6835 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 10357 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatViewWrapperBase(channelId) {
  let children;
  let stickyHeader;
  let style;
  const obj = react2;
  const cResult = obj.c(5);
  ({ children, stickyHeader, style } = channelId);
  const tmp4 = useChatViewPointerEventsDefault(channelId.channelId);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === stickyHeader) {
        let tmp5;
        if (cResult[3] === style) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
    }
  }
  const LayerScope = tmp(6835).LayerScope;
  const tmp6 = <LayerScope>{null}</LayerScope>;
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = stickyHeader;
  cResult[3] = style;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  useChatViewPointerEventsDefault(channelId);
  const LayerScope = LayerScope2.LayerScope;
  return <LayerScope>{null}</LayerScope>;
});
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default tmp3;
