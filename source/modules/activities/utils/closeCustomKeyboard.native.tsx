// Module ID: 10631
// Function ID: 82694
// Name: closeCustomKeyboard
// Dependencies: [4024, 2]
// Exports: default

// Module 10631 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(4024) /* getHighestActiveScreenIndex */.getBestActiveInputForChannelId(channelId);
  if (null != bestActiveInputForChannelId) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
