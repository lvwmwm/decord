// Module ID: 12615
// Function ID: 12616
// Name: closeCustomKeyboard
// Dependencies: [4701, 2]
// Exports: default

// Module 12615 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
