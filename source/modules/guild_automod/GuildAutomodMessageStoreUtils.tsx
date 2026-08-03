// Module ID: 12902
// Function ID: 12903
// Name: isNotAutomodEmbed
// Dependencies: [693, 2]
// Exports: isNotAutomodEmbed

// Module 12902 (isNotAutomodEmbed)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return type !== require(693) /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== require(693) /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
};
