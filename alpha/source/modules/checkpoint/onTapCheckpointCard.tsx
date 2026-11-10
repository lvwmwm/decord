// Module ID: 13678
// Function ID: 13679
// Name: onTapCheckpointCard
// Dependencies: [4991, 6572, 13679, 13682, 2]
// Exports: onTapCheckpointCard

// Module 13678 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6572 */;
import Tracking from "Tracking" /* 13679 */;
import openCheckpoint from "openCheckpoint" /* 13682 */;
import ChannelStore from "ChannelStore" /* 4991 */;
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
