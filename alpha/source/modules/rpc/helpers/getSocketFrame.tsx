// Module ID: 9407
// Function ID: 9408
// Name: getSocketFrame
// Dependencies: [6901, 9408, 2]
// Exports: default

// Module 9407 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9408 */;
import FramesStore from "FramesStore" /* 6901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
