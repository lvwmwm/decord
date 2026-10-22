// Module ID: 12651
// Function ID: 12652
// Name: closeCustomKeyboard
// Dependencies: [5145, 2]
// Exports: default

// Module 12651 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5145 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
