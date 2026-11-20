// Module ID: 14040
// Function ID: 14041
// Name: closeCustomKeyboard
// Dependencies: [5491, 2]
// Exports: default

// Module 14040 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5491 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
