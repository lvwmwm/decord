// Module ID: 10740
// Function ID: 10741
// Name: closeCustomKeyboard
// Dependencies: [5008, 2]
// Exports: default

// Module 10740 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
