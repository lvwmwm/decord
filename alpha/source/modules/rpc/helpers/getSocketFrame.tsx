// Module ID: 9217
// Function ID: 9218
// Name: getSocketFrame
// Dependencies: [6754, 9218, 2]
// Exports: default

// Module 9217 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9218 */;
import FramesStore from "FramesStore" /* 6754 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
