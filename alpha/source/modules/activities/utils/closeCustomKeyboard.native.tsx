// Module ID: 12429
// Function ID: 12430
// Name: closeCustomKeyboard
// Dependencies: [5044, 2]
// Exports: default

// Module 12429 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
