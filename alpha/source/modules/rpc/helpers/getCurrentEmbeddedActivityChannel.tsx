// Module ID: 15543
// Function ID: 15544
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4799, 4800, 2]
// Exports: default

// Module 15543 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4799 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
