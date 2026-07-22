// Module ID: 11073
// Function ID: 86147
// Name: onTapCheckpointCard
// Dependencies: []
// Exports: onTapCheckpointCard

// Module 11073 (onTapCheckpointCard)
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/checkpoint/native/onTapCheckpointCard.tsx");

export const onTapCheckpointCard = function onTapCheckpointCard(message) {
  const channel = channel.getChannel(message.message.channel_id);
  let obj = importDefault(dependencyMap[2]);
  obj = { other_user_id: message.authorId };
  const merged = Object.assign(arg1(dependencyMap[3]).collectChannelAnalyticsMetadata(channel));
  const obj3 = arg1(dependencyMap[3]);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(arg1(dependencyMap[3]).collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_CARD_CLICKED, obj);
};
