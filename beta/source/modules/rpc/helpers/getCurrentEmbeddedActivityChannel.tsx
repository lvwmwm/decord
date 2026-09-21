// Module ID: 14751
// Function ID: 14752
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2044, 2045, 2]
// Exports: default

// Module 14751 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
