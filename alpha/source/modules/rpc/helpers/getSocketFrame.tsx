// Module ID: 9233
// Function ID: 9234
// Name: getSocketFrame
// Dependencies: [6760, 9234, 2]
// Exports: default

// Module 9233 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9234 */;
import FramesStore from "FramesStore" /* 6760 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
