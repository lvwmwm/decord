// Module ID: 14748
// Function ID: 14749
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2040, 2041, 2]
// Exports: default

// Module 14748 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
