// Module ID: 15888
// Function ID: 15889
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4891, 4892, 2]
// Exports: default

// Module 15888 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4891 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
