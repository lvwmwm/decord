// Module ID: 14036
// Function ID: 14037
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1390, 1391, 2]
// Exports: default

// Module 14036 (getCurrentEmbeddedActivityChannel)
import closure_0 from "participantFromServer" /* 1390 */;
import closure_1 from "ensureGuildLoaded" /* 1391 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
