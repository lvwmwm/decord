// Module ID: 9306
// Function ID: 9307
// Name: getSocketFrame
// Dependencies: [6840, 9307, 2]
// Exports: default

// Module 9306 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9307 */;
import FramesStore from "FramesStore" /* 6840 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
