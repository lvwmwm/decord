// Module ID: 12397
// Function ID: 12398
// Name: onTapCheckpointCard
// Dependencies: [4641, 6219, 12398, 12405, 2]
// Exports: onTapCheckpointCard

// Module 12397 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6219 */;
import Tracking from "Tracking" /* 12398 */;
import openCheckpoint from "openCheckpoint" /* 12405 */;
import ChannelStore from "ChannelStore" /* 4641 */;
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
