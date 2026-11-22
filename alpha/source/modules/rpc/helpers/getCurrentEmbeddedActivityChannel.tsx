// Module ID: 15686
// Function ID: 15687
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4761, 4762, 2]
// Exports: default

// Module 15686 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
