// Module ID: 12137
// Function ID: 12138
// Name: closeCustomKeyboard
// Dependencies: [4985, 2]
// Exports: default

// Module 12137 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
