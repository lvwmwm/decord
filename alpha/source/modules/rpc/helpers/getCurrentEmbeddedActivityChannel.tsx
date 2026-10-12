// Module ID: 14726
// Function ID: 14727
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2064, 2065, 2]
// Exports: default

// Module 14726 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
