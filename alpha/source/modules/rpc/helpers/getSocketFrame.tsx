// Module ID: 6811
// Function ID: 6812
// Name: getSocketFrame
// Dependencies: [6531, 6812, 2]
// Exports: default

// Module 6811 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 6812 */;
import FramesStore from "FramesStore" /* 6531 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
