// Module ID: 15610
// Function ID: 15611
// Name: GuildAutomodMessageStoreUtils
// Dependencies: [1095, 2]
// Exports: isNotAutomodEmbed

// Module 15610 (GuildAutomodMessageStoreUtils)
import MessageEmbedTypes from "MessageEmbedTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export function isNotAutomodEmbed(type) {
  type = type.type;
  const tmp3 = type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  return tmp3;
}
