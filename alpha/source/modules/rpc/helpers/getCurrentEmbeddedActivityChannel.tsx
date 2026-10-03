// Module ID: 14306
// Function ID: 14307
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2050, 2051, 2]
// Exports: default

// Module 14306 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
