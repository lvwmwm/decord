// Module ID: 12890
// Function ID: 12891
// Name: onTapCheckpointCard
// Dependencies: [4821, 1087, 6023, 1267, 5697, 12891, 2]
// Exports: onTapCheckpointCard

// Module 12890 (onTapCheckpointCard)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5697 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6023 */;
import openCheckpoint from "openCheckpoint" /* 12891 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

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
