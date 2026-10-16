// Module ID: 15417
// Function ID: 15418
// Name: getSocketFrame
// Dependencies: [10947, 15418, 2]
// Exports: default

// Module 15417 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15418 */;
import FramesStore from "FramesStore" /* 10947 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
