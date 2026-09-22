// Module ID: 9677
// Function ID: 9678
// Name: closeCustomKeyboard
// Dependencies: [4502, 2]
// Exports: default

// Module 9677 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
