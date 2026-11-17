// Module ID: 11458
// Function ID: 11459
// Name: closeCustomKeyboard
// Dependencies: [5495, 2]
// Exports: default

// Module 11458 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
