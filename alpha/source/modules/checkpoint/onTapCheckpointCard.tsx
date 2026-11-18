// Module ID: 12414
// Function ID: 12415
// Name: onTapCheckpointCard
// Dependencies: [4672, 6248, 12415, 12422, 2]
// Exports: onTapCheckpointCard

// Module 12414 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6248 */;
import Tracking from "Tracking" /* 12415 */;
import openCheckpoint from "openCheckpoint" /* 12422 */;
import ChannelStore from "ChannelStore" /* 4672 */;
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
