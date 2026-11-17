// Module ID: 7306
// Function ID: 7307
// Name: getSocketFrame
// Dependencies: [7027, 7307, 2]
// Exports: default

// Module 7306 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7307 */;
import FramesStore from "FramesStore" /* 7027 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
