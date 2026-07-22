// Module ID: 10816
// Function ID: 84003
// Name: closeCustomKeyboard
// Dependencies: []
// Exports: default

// Module 10816 (closeCustomKeyboard)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(dependencyMap[0]).getBestActiveInputForChannelId(channelId);
  if (null != bestActiveInputForChannelId) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
