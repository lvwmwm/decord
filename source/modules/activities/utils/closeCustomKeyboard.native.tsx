// Module ID: 10592
// Function ID: 82568
// Name: closeCustomKeyboard
// Dependencies: [3990, 2]
// Exports: default

// Module 10592 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(3990) /* getHighestActiveScreenIndex */.getBestActiveInputForChannelId(channelId);
  if (null != bestActiveInputForChannelId) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
