// Module ID: 12500
// Function ID: 12501
// Name: closeCustomKeyboard
// Dependencies: [5081, 2]
// Exports: default

// Module 12500 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5081 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
