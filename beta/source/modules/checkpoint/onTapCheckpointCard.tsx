// Module ID: 13696
// Function ID: 13697
// Name: onTapCheckpointCard
// Dependencies: [5019, 6602, 13697, 13700, 2]
// Exports: onTapCheckpointCard

// Module 13696 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6602 */;
import Tracking from "Tracking" /* 13697 */;
import openCheckpoint from "openCheckpoint" /* 13700 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
