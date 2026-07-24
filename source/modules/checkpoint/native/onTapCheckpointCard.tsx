// Module ID: 11110
// Function ID: 86386
// Name: onTapCheckpointCard
// Dependencies: [1348, 653, 675, 4324, 2]
// Exports: onTapCheckpointCard

// Module 11110 (onTapCheckpointCard)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("expandLocation").fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  channel = channel.getChannel(message.message.channel_id);
  let obj = importDefault(675);
  obj = { other_user_id: message.authorId };
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(channel));
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};
