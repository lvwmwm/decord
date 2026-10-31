// Module ID: 13170
// Function ID: 13171
// Name: closeCustomKeyboard
// Dependencies: [5207, 2]
// Exports: default

// Module 13170 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5207 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
