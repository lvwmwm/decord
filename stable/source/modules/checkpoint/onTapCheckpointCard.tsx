// Module ID: 13697
// Function ID: 13698
// Name: onTapCheckpointCard
// Dependencies: [5019, 6602, 13698, 13701, 2]
// Exports: onTapCheckpointCard

// Module 13697 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6602 */;
import Tracking from "Tracking" /* 13698 */;
import openCheckpoint from "openCheckpoint" /* 13701 */;
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
