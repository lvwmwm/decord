// Module ID: 9293
// Function ID: 9294
// Name: getSocketFrame
// Dependencies: [6833, 9294, 2]
// Exports: default

// Module 9293 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9294 */;
import FramesStore from "FramesStore" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
