// Module ID: 14361
// Function ID: 14362
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1385, 1386, 2]
// Exports: default

// Module 14361 (getCurrentEmbeddedActivityChannel)
import closure_0 from "participantFromServer" /* 1385 */;
import closure_1 from "ensureGuildLoaded" /* 1386 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
