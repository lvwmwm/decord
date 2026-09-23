// Module ID: 13267
// Function ID: 13268
// Name: closeCustomKeyboard
// Dependencies: [4693, 2]
// Exports: default

// Module 13267 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4693 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
