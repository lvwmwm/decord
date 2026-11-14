// Module ID: 14250
// Function ID: 14251
// Name: onTapCheckpointCard
// Dependencies: [5155, 6748, 14251, 14258, 2]
// Exports: onTapCheckpointCard

// Module 14250 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6748 */;
import Tracking from "Tracking" /* 14251 */;
import openCheckpoint from "openCheckpoint" /* 14258 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/onTapCheckpointCard.tsx");

export function onTapCheckpointCard(arg0) {
  let authorId;
  let message;
  ({ message, authorId } = arg0);
  const obj = CheckpointExperiments;
  if (obj.getIsCheckpointEnabled("onTapCheckpointCard")) {
    const tmpResult = Tracking;
    const result = tmpResult.trackCheckpoint2026CardClicked(authorId, ChannelStore.getChannel(message.channel_id));
    const tmpResult2 = openCheckpoint;
    tmpResult2.openCheckpoint("message_component");
  }
}
