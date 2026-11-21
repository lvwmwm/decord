// Module ID: 10780
// Function ID: 10781
// Name: closeCustomKeyboard
// Dependencies: [5098, 2]
// Exports: default

// Module 10780 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
