// Module ID: 13216
// Function ID: 13217
// Name: closeCustomKeyboard
// Dependencies: [4657, 2]
// Exports: default

// Module 13216 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
