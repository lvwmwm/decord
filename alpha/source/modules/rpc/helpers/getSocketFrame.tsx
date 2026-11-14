// Module ID: 7296
// Function ID: 7297
// Name: getSocketFrame
// Dependencies: [7019, 7297, 2]
// Exports: default

// Module 7296 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7297 */;
import FramesStore from "FramesStore" /* 7019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
