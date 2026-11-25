// Module ID: 10155
// Function ID: 10156
// Name: closeCustomKeyboard
// Dependencies: [5197, 2]
// Exports: default

// Module 10155 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5197 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
