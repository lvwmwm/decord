// Module ID: 9190
// Function ID: 9191
// Name: getSocketFrame
// Dependencies: [6726, 9191, 2]
// Exports: default

// Module 9190 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9191 */;
import FramesStore from "FramesStore" /* 6726 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
