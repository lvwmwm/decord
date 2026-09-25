// Module ID: 12426
// Function ID: 12427
// Name: closeCustomKeyboard
// Dependencies: [4697, 2]
// Exports: default

// Module 12426 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4697 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
