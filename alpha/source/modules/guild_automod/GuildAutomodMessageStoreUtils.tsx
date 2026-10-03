// Module ID: 13572
// Function ID: 13573
// Name: GuildAutomodMessageStoreUtils
// Dependencies: [1107, 2]
// Exports: isNotAutomodEmbed

// Module 13572 (GuildAutomodMessageStoreUtils)
import MessageEmbedTypes from "MessageEmbedTypes" /* 1107 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  const tmp3 = type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  return tmp3;
};
