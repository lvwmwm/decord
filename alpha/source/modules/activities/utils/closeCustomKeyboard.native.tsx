// Module ID: 11124
// Function ID: 11125
// Name: closeCustomKeyboard
// Dependencies: [4945, 2]
// Exports: default

// Module 11124 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4945 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const obj = ChatInputUtils;
  const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
