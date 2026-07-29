// Module ID: 10655
// Function ID: 10656
// Name: closeCustomKeyboard
// Dependencies: [4048, 2]
// Exports: default

// Module 10655 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(4048) /* getBestActiveInput */.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
