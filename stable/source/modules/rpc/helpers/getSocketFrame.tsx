// Module ID: 9440
// Function ID: 9441
// Name: getSocketFrame
// Dependencies: [6934, 9441, 2]
// Exports: default

// Module 9440 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9441 */;
import FramesStore from "FramesStore" /* 6934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
