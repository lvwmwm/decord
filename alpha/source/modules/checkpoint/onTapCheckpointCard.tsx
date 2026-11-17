// Module ID: 13116
// Function ID: 13117
// Name: onTapCheckpointCard
// Dependencies: [5159, 6746, 13117, 13124, 2]
// Exports: onTapCheckpointCard

// Module 13116 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6746 */;
import Tracking from "Tracking" /* 13117 */;
import openCheckpoint from "openCheckpoint" /* 13124 */;
import ChannelStore from "ChannelStore" /* 5159 */;
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
