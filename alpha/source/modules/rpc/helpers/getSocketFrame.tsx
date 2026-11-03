// Module ID: 9454
// Function ID: 9455
// Name: getSocketFrame
// Dependencies: [6966, 9455, 2]
// Exports: default

// Module 9454 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9455 */;
import FramesStore from "FramesStore" /* 6966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
