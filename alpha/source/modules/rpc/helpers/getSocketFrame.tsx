// Module ID: 9326
// Function ID: 9327
// Name: getSocketFrame
// Dependencies: [6846, 9327, 2]
// Exports: default

// Module 9326 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9327 */;
import FramesStore from "FramesStore" /* 6846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
