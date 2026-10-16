// Module ID: 12651
// Function ID: 12652
// Name: onTapCheckpointCard
// Dependencies: [2068, 1087, 5522, 1267, 5168, 12652, 2]
// Exports: onTapCheckpointCard

// Module 12651 (onTapCheckpointCard)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5168 */;
import CheckpointExperiments from "CheckpointExperiments" /* 5522 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
    const tmp5 = importDefault;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const merged1 = Object.assign(collectGuildAnalyticsMetadata(guild_id));
    track(CHECKPOINT_CARD_CLICKED, obj2);
    tmp5(12652)("message_component");
  }
};
