// Module ID: 12399
// Function ID: 12400
// Name: closeCustomKeyboard
// Dependencies: [4308, 2]
// Exports: default

// Module 12399 (closeCustomKeyboard)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4308 */;

const result = set.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
