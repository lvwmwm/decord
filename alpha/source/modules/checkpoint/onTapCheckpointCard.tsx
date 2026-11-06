// Module ID: 13640
// Function ID: 13641
// Name: onTapCheckpointCard
// Dependencies: [5019, 6595, 13641, 13644, 2]
// Exports: onTapCheckpointCard

// Module 13640 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6595 */;
import Tracking from "Tracking" /* 13641 */;
import openCheckpoint from "openCheckpoint" /* 13644 */;
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
