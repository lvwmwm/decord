// Module ID: 10826
// Function ID: 84052
// Name: closeCustomKeyboard
// Dependencies: [3989, 2]
// Exports: default

// Module 10826 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(3989) /* getHighestActiveScreenIndex */.getBestActiveInputForChannelId(channelId);
  if (null != bestActiveInputForChannelId) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
