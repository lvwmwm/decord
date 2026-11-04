// Module ID: 9472
// Function ID: 9473
// Name: getSocketFrame
// Dependencies: [6981, 9473, 2]
// Exports: default

// Module 9472 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9473 */;
import FramesStore from "FramesStore" /* 6981 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
