// Module ID: 13185
// Function ID: 13186
// Name: closeCustomKeyboard
// Dependencies: [4623, 2]
// Exports: default

// Module 13185 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
