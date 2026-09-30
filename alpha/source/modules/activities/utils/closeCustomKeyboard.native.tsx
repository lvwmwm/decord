// Module ID: 12645
// Function ID: 12646
// Name: closeCustomKeyboard
// Dependencies: [4731, 2]
// Exports: default

// Module 12645 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
