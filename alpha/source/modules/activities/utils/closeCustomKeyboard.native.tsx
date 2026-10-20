// Module ID: 12554
// Function ID: 12555
// Name: closeCustomKeyboard
// Dependencies: [5120, 2]
// Exports: default

// Module 12554 (closeCustomKeyboard)
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
