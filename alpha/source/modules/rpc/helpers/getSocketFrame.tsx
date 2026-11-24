// Module ID: 7511
// Function ID: 7512
// Name: getSocketFrame
// Dependencies: [6810, 7512, 2]
// Exports: default

// Module 7511 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7512 */;
import FramesStore from "FramesStore" /* 6810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
