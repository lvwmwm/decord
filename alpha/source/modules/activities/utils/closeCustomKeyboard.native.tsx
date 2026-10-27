// Module ID: 12712
// Function ID: 12713
// Name: closeCustomKeyboard
// Dependencies: [5159, 2]
// Exports: default

// Module 12712 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5159 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
