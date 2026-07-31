// Module ID: 10669
// Function ID: 10670
// Name: closeCustomKeyboard
// Dependencies: [4052, 2]
// Exports: default

// Module 10669 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(4052) /* getBestActiveInput */.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
