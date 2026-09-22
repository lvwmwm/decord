// Module ID: 14754
// Function ID: 14755
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2041, 2042, 2]
// Exports: default

// Module 14754 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import ChannelStore from "ChannelStore" /* 2042 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
