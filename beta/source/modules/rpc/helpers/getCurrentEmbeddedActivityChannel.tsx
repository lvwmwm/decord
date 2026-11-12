// Module ID: 16653
// Function ID: 16654
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [5018, 5019, 2]
// Exports: default

// Module 16653 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
