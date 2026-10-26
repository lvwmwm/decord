// Module ID: 15718
// Function ID: 15719
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4822, 4823, 2]
// Exports: default

// Module 15718 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
