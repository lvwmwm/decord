// Module ID: 12367
// Function ID: 12368
// Name: onTapCheckpointCard
// Dependencies: [4643, 6221, 12368, 12375, 2]
// Exports: onTapCheckpointCard

// Module 12367 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6221 */;
import Tracking from "Tracking" /* 12368 */;
import openCheckpoint from "openCheckpoint" /* 12375 */;
import ChannelStore from "ChannelStore" /* 4643 */;
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
