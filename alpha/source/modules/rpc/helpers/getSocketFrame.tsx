// Module ID: 7232
// Function ID: 7233
// Name: getSocketFrame
// Dependencies: [6956, 7233, 2]
// Exports: default

// Module 7232 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7233 */;
import FramesStore from "FramesStore" /* 6956 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
