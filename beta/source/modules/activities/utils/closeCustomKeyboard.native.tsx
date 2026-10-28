// Module ID: 12742
// Function ID: 12743
// Name: closeCustomKeyboard
// Dependencies: [5191, 2]
// Exports: default

// Module 12742 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
