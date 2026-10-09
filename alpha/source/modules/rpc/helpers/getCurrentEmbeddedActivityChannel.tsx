// Module ID: 14649
// Function ID: 14650
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2063, 2064, 2]
// Exports: default

// Module 14649 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
