// Module ID: 7637
// Function ID: 7638
// Name: getSocketFrame
// Dependencies: [6936, 7638, 2]
// Exports: default

// Module 7637 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7638 */;
import FramesStore from "FramesStore" /* 6936 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
