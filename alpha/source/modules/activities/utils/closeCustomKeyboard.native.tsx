// Module ID: 13386
// Function ID: 13387
// Name: closeCustomKeyboard
// Dependencies: [5353, 2]
// Exports: default

// Module 13386 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5353 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
