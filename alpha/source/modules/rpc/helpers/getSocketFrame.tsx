// Module ID: 15077
// Function ID: 15078
// Name: getSocketFrame
// Dependencies: [10713, 15078, 2]
// Exports: default

// Module 15077 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15078 */;
import FramesStore from "FramesStore" /* 10713 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
