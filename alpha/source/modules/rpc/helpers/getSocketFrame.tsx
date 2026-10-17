// Module ID: 9162
// Function ID: 9163
// Name: getSocketFrame
// Dependencies: [6295, 9163, 2]
// Exports: default

// Module 9162 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9163 */;
import FramesStore from "FramesStore" /* 6295 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
