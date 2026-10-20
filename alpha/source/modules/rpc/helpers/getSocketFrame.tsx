// Module ID: 9178
// Function ID: 9179
// Name: getSocketFrame
// Dependencies: [6723, 9179, 2]
// Exports: default

// Module 9178 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9179 */;
import FramesStore from "FramesStore" /* 6723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
