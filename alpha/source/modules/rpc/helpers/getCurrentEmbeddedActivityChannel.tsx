// Module ID: 16651
// Function ID: 16652
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [4990, 4991, 2]
// Exports: default

// Module 16651 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4990 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
