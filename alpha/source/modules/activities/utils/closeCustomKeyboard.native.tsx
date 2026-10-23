// Module ID: 12670
// Function ID: 12671
// Name: closeCustomKeyboard
// Dependencies: [5157, 2]
// Exports: default

// Module 12670 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5157 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
