// Module ID: 15407
// Function ID: 15408
// Name: getSocketFrame
// Dependencies: [10950, 15408, 2]
// Exports: default

// Module 15407 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15408 */;
import FramesStore from "FramesStore" /* 10950 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
