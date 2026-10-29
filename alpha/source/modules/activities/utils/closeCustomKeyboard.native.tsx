// Module ID: 12984
// Function ID: 12985
// Name: closeCustomKeyboard
// Dependencies: [5196, 2]
// Exports: default

// Module 12984 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
