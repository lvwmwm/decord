// Module ID: 13937
// Function ID: 13938
// Name: closeCustomKeyboard
// Dependencies: [5438, 2]
// Exports: default

// Module 13937 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5438 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
