// Module ID: 11298
// Function ID: 11299
// Name: closeCustomKeyboard
// Dependencies: [4946, 2]
// Exports: default

// Module 11298 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4946 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
