// Module ID: 9425
// Function ID: 9426
// Name: getSocketFrame
// Dependencies: [6926, 9426, 2]
// Exports: default

// Module 9425 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9426 */;
import FramesStore from "FramesStore" /* 6926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
