// Module ID: 12696
// Function ID: 12697
// Name: closeCustomKeyboard
// Dependencies: [4745, 2]
// Exports: default

// Module 12696 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
