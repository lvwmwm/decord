// Module ID: 12965
// Function ID: 12966
// Name: onTapCheckpointCard
// Dependencies: [4824, 1084, 6038, 1264, 5712, 12966, 2]
// Exports: onTapCheckpointCard

// Module 12965 (onTapCheckpointCard)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5712 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6038 */;
import openCheckpoint from "openCheckpoint" /* 12966 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(arg0) {
  let authorId;
  let message;
  ({ message, authorId } = arg0);
  const obj = CheckpointExperiments;
  if (obj.getIsCheckpointEnabled("onTapCheckpointCard")) {
    const channel = ChannelStore.getChannel(message.channel_id);
    const obj2 = { other_user_id: authorId };
    const track = AnalyticsUtilsDefault.track;
    const CHECKPOINT_CARD_CLICKED = AnalyticEvents.CHECKPOINT_CARD_CLICKED;
    AnalyticsUtilsDefault;
    const tmpResult = AppAnalyticsUtils;
    const merged = Object.assign(tmpResult.collectChannelAnalyticsMetadata(channel));
    let guild_id;
    const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
    AppAnalyticsUtils;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged1 = Object.assign(collectGuildAnalyticsMetadata(guild_id));
    track(CHECKPOINT_CARD_CLICKED, obj2);
    const tmpResult4 = openCheckpoint;
    tmpResult4.openCheckpoint("message_component");
  }
};
