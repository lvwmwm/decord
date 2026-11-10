// Module ID: 9413
// Function ID: 9414
// Name: getSocketFrame
// Dependencies: [6904, 9414, 2]
// Exports: default

// Module 9413 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9414 */;
import FramesStore from "FramesStore" /* 6904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
