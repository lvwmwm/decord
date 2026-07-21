// Module ID: 12571
// Function ID: 96705
// Name: isNotAutomodEmbed
// Dependencies: [6842, 6843]
// Exports: isNotAutomodEmbed

// Module 12571 (isNotAutomodEmbed)
import arrayIncludes from "arrayIncludes";

const result = arrayIncludes.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  let tmp = type !== require(dependencyMap[0]).MessageEmbedTypes.AUTO_MODERATION_MESSAGE;
  if (tmp) {
    tmp = type !== require(dependencyMap[0]).MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  }
  return tmp;
};
