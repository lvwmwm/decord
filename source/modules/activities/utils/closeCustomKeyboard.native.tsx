// Module ID: 11004
// Function ID: 11005
// Name: closeCustomKeyboard
// Dependencies: [4114, 2]
// Exports: default

// Module 11004 (closeCustomKeyboard)
const result = require("set").fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(4114) /* getBestActiveInput */.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
