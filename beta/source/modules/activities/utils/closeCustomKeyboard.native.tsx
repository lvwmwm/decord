// Module ID: 13409
// Function ID: 13410
// Name: closeCustomKeyboard
// Dependencies: [5323, 2]
// Exports: default

// Module 13409 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5323 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
