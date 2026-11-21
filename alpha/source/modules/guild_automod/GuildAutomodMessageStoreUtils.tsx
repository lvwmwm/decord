// Module ID: 15044
// Function ID: 15045
// Name: GuildAutomodMessageStoreUtils
// Dependencies: [1093, 2]
// Exports: isNotAutomodEmbed

// Module 15044 (GuildAutomodMessageStoreUtils)
import MessageEmbedTypes from "MessageEmbedTypes" /* 1093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export function isNotAutomodEmbed(type) {
  type = type.type;
  const tmp3 = type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  return tmp3;
}
