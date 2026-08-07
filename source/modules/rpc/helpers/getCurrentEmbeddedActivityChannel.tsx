// Module ID: 13665
// Function ID: 13666
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1371, 1372, 2]
// Exports: default

// Module 13665 (getCurrentEmbeddedActivityChannel)
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
