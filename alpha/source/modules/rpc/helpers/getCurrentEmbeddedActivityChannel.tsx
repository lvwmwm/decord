// Module ID: 15981
// Function ID: 15982
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4855, 4856, 2]
// Exports: default

// Module 15981 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4855 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
