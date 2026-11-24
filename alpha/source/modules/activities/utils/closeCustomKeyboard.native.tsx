// Module ID: 10056
// Function ID: 10057
// Name: closeCustomKeyboard
// Dependencies: [5102, 2]
// Exports: default

// Module 10056 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
