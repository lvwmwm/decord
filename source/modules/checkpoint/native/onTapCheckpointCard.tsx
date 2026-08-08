// Module ID: 11345
// Function ID: 11346
// Name: onTapCheckpointCard
// Dependencies: [1372, 676, 698, 4498, 2]
// Exports: onTapCheckpointCard

// Module 11345 (onTapCheckpointCard)
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("expandEventProperties").fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  channel = channel.getChannel(message.message.channel_id);
  let obj = importDefault(698);
  obj = { other_user_id: message.authorId };
  const merged = Object.assign(require(4498) /* collectGuildAnalyticsMetadata */.collectChannelAnalyticsMetadata(channel));
  const obj3 = require(4498) /* collectGuildAnalyticsMetadata */;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(require(4498) /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};
