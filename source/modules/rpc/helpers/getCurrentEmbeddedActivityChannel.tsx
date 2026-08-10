// Module ID: 13737
// Function ID: 13738
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1371, 1372, 2]
// Exports: default

// Module 13737 (getCurrentEmbeddedActivityChannel)
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
