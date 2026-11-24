// Module ID: 6902
// Function ID: 6903
// Name: getSocketFrame
// Dependencies: [6623, 6903, 2]
// Exports: default

// Module 6902 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 6903 */;
import FramesStore from "FramesStore" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
