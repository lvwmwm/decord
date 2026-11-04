// Module ID: 13654
// Function ID: 13655
// Name: onTapCheckpointCard
// Dependencies: [4990, 6223, 13655, 13658, 2]
// Exports: onTapCheckpointCard

// Module 13654 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6223 */;
import Tracking from "Tracking" /* 13655 */;
import openCheckpoint from "openCheckpoint" /* 13658 */;
import ChannelStore from "ChannelStore" /* 4990 */;
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
