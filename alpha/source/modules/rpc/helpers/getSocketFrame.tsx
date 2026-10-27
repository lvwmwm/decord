// Module ID: 9257
// Function ID: 9258
// Name: getSocketFrame
// Dependencies: [6776, 9258, 2]
// Exports: default

// Module 9257 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9258 */;
import FramesStore from "FramesStore" /* 6776 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
