// Module ID: 10198
// Function ID: 10199
// Name: closeCustomKeyboard
// Dependencies: [5228, 2]
// Exports: default

// Module 10198 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
