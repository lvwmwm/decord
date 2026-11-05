// Module ID: 13412
// Function ID: 13413
// Name: closeCustomKeyboard
// Dependencies: [5333, 2]
// Exports: default

// Module 13412 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5333 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
