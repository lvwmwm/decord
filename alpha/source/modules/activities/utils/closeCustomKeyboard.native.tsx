// Module ID: 12656
// Function ID: 12657
// Name: closeCustomKeyboard
// Dependencies: [4730, 2]
// Exports: default

// Module 12656 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4730 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
