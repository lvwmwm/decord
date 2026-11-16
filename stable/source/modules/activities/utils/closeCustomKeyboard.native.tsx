// Module ID: 13441
// Function ID: 13442
// Name: closeCustomKeyboard
// Dependencies: [5355, 2]
// Exports: default

// Module 13441 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
