// Module ID: 13664
// Function ID: 13665
// Name: onTapCheckpointCard
// Dependencies: [4989, 6570, 13665, 13668, 2]
// Exports: onTapCheckpointCard

// Module 13664 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6570 */;
import Tracking from "Tracking" /* 13665 */;
import openCheckpoint from "openCheckpoint" /* 13668 */;
import ChannelStore from "ChannelStore" /* 4989 */;
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
