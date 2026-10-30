// Module ID: 13135
// Function ID: 13136
// Name: closeCustomKeyboard
// Dependencies: [5202, 2]
// Exports: default

// Module 13135 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
