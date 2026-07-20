// Module ID: 10809
// Function ID: 83956
// Name: closeCustomKeyboard
// Dependencies: [0, 0]
// Exports: default

// Module 10809 (closeCustomKeyboard)
import result from "result";

result = result.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = require(dependencyMap[0]).getBestActiveInputForChannelId(channelId);
  if (null != bestActiveInputForChannelId) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
