// Module ID: 12537
// Function ID: 12538
// Name: closeCustomKeyboard
// Dependencies: [5120, 2]
// Exports: default

// Module 12537 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
