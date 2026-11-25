// Module ID: 7606
// Function ID: 7607
// Name: getSocketFrame
// Dependencies: [6905, 7607, 2]
// Exports: default

// Module 7606 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7607 */;
import FramesStore from "FramesStore" /* 6905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};
