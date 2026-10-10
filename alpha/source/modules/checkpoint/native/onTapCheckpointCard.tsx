// Module ID: 11605
// Function ID: 11606
// Name: onTapCheckpointCard
// Dependencies: [2065, 1085, 1265, 5107, 2]
// Exports: onTapCheckpointCard

// Module 11605 (onTapCheckpointCard)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
