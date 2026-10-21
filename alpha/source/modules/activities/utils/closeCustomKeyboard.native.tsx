// Module ID: 12610
// Function ID: 12611
// Name: closeCustomKeyboard
// Dependencies: [5141, 2]
// Exports: default

// Module 12610 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5141 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
