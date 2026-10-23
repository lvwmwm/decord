// Module ID: 9256
// Function ID: 9257
// Name: getSocketFrame
// Dependencies: [6773, 9257, 2]
// Exports: default

// Module 9256 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9257 */;
import FramesStore from "FramesStore" /* 6773 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
