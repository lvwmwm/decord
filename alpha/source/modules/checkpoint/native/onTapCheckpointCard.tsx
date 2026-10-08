// Module ID: 11626
// Function ID: 11627
// Name: onTapCheckpointCard
// Dependencies: [2063, 1085, 1264, 5105, 2]
// Exports: onTapCheckpointCard

// Module 11626 (onTapCheckpointCard)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(authorId) {
  authorId = authorId.authorId;
  const channel = ChannelStore.getChannel(authorId.message.channel_id);
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_CARD_CLICKED = AnalyticEvents.CHECKPOINT_CARD_CLICKED;
  const obj = { other_user_id: authorId };
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
  let guild_id;
  const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
  AppAnalyticsUtils;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(collectGuildAnalyticsMetadata(guild_id));
  track(CHECKPOINT_CARD_CLICKED, obj);
};
