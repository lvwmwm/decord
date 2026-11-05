// Module ID: 13665
// Function ID: 13666
// Name: onTapCheckpointCard
// Dependencies: [4992, 6575, 13666, 13669, 2]
// Exports: onTapCheckpointCard

// Module 13665 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6575 */;
import Tracking from "Tracking" /* 13666 */;
import openCheckpoint from "openCheckpoint" /* 13669 */;
import ChannelStore from "ChannelStore" /* 4992 */;
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
