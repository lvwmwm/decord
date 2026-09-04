// Module ID: 11871
// Function ID: 11872
// Name: onTapCheckpointCard
// Dependencies: [1386, 673, 695, 4708, 2]
// Exports: onTapCheckpointCard

// Module 11871 (onTapCheckpointCard)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4708 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import { AnalyticEvents } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  channel = channel.getChannel(message.message.channel_id);
  let obj = expandEventPropertiesDefault;
  obj = { other_user_id: message.authorId };
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel));
  const obj3 = collectGuildAnalyticsMetadata;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};
