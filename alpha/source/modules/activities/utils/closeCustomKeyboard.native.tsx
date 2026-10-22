// Module ID: 12640
// Function ID: 12641
// Name: closeCustomKeyboard
// Dependencies: [5145, 2]
// Exports: default

// Module 12640 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5145 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
