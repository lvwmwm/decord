// Module ID: 16263
// Function ID: 16264
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4857, 4858, 2]
// Exports: default

// Module 16263 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
