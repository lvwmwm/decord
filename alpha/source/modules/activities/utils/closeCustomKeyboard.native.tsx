// Module ID: 12720
// Function ID: 12721
// Name: closeCustomKeyboard
// Dependencies: [5160, 2]
// Exports: default

// Module 12720 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5160 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
