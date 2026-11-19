// Module ID: 6783
// Function ID: 6784
// Name: getSocketFrame
// Dependencies: [6502, 6784, 2]
// Exports: default

// Module 6783 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 6784 */;
import FramesStore from "FramesStore" /* 6502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
