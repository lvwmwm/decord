// Module ID: 12912
// Function ID: 100310
// Name: trackAckMessages
// Dependencies: [1348, 5868, 1838, 4326, 653, 4325, 2]
// Exports: default

// Module 12912 (trackAckMessages)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id, location) {
  channel = channel.getChannel(channel_id);
  const obj = { channel_id };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  obj.location = location;
  guildsArray = guildsArray.getGuildsArray();
  obj.guild_unread_statuses = guildsArray.map((id) => {
    const mentionCount = outer1_3.getMentionCount(id.id);
    const hasUnreadResult = outer1_3.hasUnread(id.id);
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + outer1_5.isMuted(id.id) + "," + outer1_5.resolveGuildUnreadSetting(id);
  });
  require(4325) /* _createForOfIteratorHelperLoose */.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};
