// Module ID: 13806
// Function ID: 13807
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1390, 1391, 2]
// Exports: default

// Module 13806 (getCurrentEmbeddedActivityChannel)
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};
