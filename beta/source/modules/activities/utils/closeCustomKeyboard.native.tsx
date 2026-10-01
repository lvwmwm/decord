// Module ID: 12444
// Function ID: 12445
// Name: closeCustomKeyboard
// Dependencies: [4701, 2]
// Exports: default

// Module 12444 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
