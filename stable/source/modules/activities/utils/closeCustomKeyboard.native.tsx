// Module ID: 12442
// Function ID: 12443
// Name: closeCustomKeyboard
// Dependencies: [4703, 2]
// Exports: default

// Module 12442 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4703 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
