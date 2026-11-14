// Module ID: 14038
// Function ID: 14039
// Name: closeCustomKeyboard
// Dependencies: [5501, 2]
// Exports: default

// Module 14038 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
