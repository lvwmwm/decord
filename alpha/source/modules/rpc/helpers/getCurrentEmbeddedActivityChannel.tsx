// Module ID: 14005
// Function ID: 14006
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [2043, 2044, 2]
// Exports: default

// Module 14005 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ChannelStore from "ChannelStore" /* 2044 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
