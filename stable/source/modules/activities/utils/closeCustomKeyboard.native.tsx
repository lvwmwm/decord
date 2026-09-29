// Module ID: 13210
// Function ID: 13211
// Name: closeCustomKeyboard
// Dependencies: [4654, 2]
// Exports: default

// Module 13210 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4654 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
