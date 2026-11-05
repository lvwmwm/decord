// Module ID: 9479
// Function ID: 9480
// Name: getSocketFrame
// Dependencies: [6984, 9480, 2]
// Exports: default

// Module 9479 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9480 */;
import FramesStore from "FramesStore" /* 6984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
