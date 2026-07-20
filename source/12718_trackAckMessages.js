// Module ID: 12718
// Function ID: 97621
// Name: trackAckMessages
// Dependencies: []
// Exports: default

// Module 12718 (trackAckMessages)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id, location) {
  const channel = channel.getChannel(channel_id);
  const obj = { channel_id };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  obj.location = location;
  const guildsArray = guildsArray.getGuildsArray();
  obj.guild_unread_statuses = guildsArray.map((id) => {
    const mentionCount = closure_3.getMentionCount(id.id);
    const hasUnreadResult = closure_3.hasUnread(id.id);
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + closure_5.isMuted(id.id) + "," + closure_5.resolveGuildUnreadSetting(id);
  });
  location(dependencyMap[5]).trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};
