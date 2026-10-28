// Module ID: 9289
// Function ID: 9290
// Name: getSocketFrame
// Dependencies: [6810, 9290, 2]
// Exports: default

// Module 9289 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9290 */;
import FramesStore from "FramesStore" /* 6810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
