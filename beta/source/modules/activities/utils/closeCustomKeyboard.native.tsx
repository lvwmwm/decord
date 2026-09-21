// Module ID: 13180
// Function ID: 13181
// Name: closeCustomKeyboard
// Dependencies: [4625, 2]
// Exports: default

// Module 13180 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
