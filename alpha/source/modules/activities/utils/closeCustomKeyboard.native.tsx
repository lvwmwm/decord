// Module ID: 12406
// Function ID: 12407
// Name: closeCustomKeyboard
// Dependencies: [5041, 2]
// Exports: default

// Module 12406 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5041 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
