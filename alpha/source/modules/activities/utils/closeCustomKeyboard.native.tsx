// Module ID: 13404
// Function ID: 13405
// Name: closeCustomKeyboard
// Dependencies: [5331, 2]
// Exports: default

// Module 13404 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5331 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
