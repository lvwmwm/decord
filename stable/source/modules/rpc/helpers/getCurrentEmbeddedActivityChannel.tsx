// Module ID: 15497
// Function ID: 15498
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2067, 2068, 2]
// Exports: default

// Module 15497 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
