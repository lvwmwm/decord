// Module ID: 16930
// Function ID: 16931
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [5154, 5155, 2]
// Exports: default

// Module 16930 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
