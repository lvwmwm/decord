// Module ID: 12435
// Function ID: 12436
// Name: closeCustomKeyboard
// Dependencies: [5044, 2]
// Exports: default

// Module 12435 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
