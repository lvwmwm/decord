// Module ID: 12711
// Function ID: 12712
// Name: closeCustomKeyboard
// Dependencies: [4751, 2]
// Exports: default

// Module 12711 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
