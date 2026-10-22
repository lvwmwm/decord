// Module ID: 15672
// Function ID: 15673
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4820, 4821, 2]
// Exports: default

// Module 15672 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
