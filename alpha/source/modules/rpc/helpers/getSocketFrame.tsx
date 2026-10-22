// Module ID: 9226
// Function ID: 9227
// Name: getSocketFrame
// Dependencies: [6761, 9227, 2]
// Exports: default

// Module 9226 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9227 */;
import FramesStore from "FramesStore" /* 6761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
