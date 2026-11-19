// Module ID: 10718
// Function ID: 10719
// Name: closeCustomKeyboard
// Dependencies: [4977, 2]
// Exports: default

// Module 10718 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4977 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
