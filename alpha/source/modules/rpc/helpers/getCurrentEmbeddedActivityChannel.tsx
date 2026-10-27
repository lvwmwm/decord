// Module ID: 15755
// Function ID: 15756
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4823, 4824, 2]
// Exports: default

// Module 15755 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
