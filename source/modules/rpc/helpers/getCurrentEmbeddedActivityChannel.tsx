// Module ID: 14089
// Function ID: 14090
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1386, 1387, 2]
// Exports: default

// Module 14089 (getCurrentEmbeddedActivityChannel)
import closure_0 from "participantFromServer" /* 1386 */;
import closure_1 from "ensureGuildLoaded" /* 1387 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
