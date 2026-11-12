// Module ID: 14143
// Function ID: 14144
// Name: onTapCheckpointCard
// Dependencies: [5092, 6685, 14144, 14148, 2]
// Exports: onTapCheckpointCard

// Module 14143 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6685 */;
import Tracking from "Tracking" /* 14144 */;
import openCheckpoint from "openCheckpoint" /* 14148 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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
