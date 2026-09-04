// Module ID: 13687
// Function ID: 13688
// Name: isNotAutomodEmbed
// Dependencies: [690, 2]
// Exports: isNotAutomodEmbed

// Module 13687 (isNotAutomodEmbed)
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 690 */;

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
};
