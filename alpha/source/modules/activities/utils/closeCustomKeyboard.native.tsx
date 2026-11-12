// Module ID: 13933
// Function ID: 13934
// Name: closeCustomKeyboard
// Dependencies: [5438, 2]
// Exports: default

// Module 13933 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5438 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
