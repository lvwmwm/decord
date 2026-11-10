// Module ID: 13423
// Function ID: 13424
// Name: closeCustomKeyboard
// Dependencies: [5325, 2]
// Exports: default

// Module 13423 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5325 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
