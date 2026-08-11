// Module ID: 13745
// Function ID: 13746
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1390, 1391, 2]
// Exports: default

// Module 13745 (getCurrentEmbeddedActivityChannel)
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
