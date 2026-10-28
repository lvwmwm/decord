// Module ID: 12767
// Function ID: 12768
// Name: closeCustomKeyboard
// Dependencies: [5195, 2]
// Exports: default

// Module 12767 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5195 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
