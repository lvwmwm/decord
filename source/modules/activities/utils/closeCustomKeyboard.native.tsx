// Module ID: 9547
// Function ID: 9548
// Name: closeCustomKeyboard
// Dependencies: [4425, 2]
// Exports: default

// Module 9547 (closeCustomKeyboard)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4425 */;

const result = set.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = getBestActiveInput.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
