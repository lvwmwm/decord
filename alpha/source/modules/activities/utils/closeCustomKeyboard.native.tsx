// Module ID: 12517
// Function ID: 12518
// Name: closeCustomKeyboard
// Dependencies: [5081, 2]
// Exports: default

// Module 12517 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5081 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
