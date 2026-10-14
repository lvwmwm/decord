// Module ID: 12173
// Function ID: 12174
// Name: closeCustomKeyboard
// Dependencies: [4987, 2]
// Exports: default

// Module 12173 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4987 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
