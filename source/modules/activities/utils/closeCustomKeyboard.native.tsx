// Module ID: 11031
// Function ID: 11032
// Name: closeCustomKeyboard
// Dependencies: [4207, 2]
// Exports: default

// Module 11031 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(4207) /* getBestActiveInput */.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
