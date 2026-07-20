// Module ID: 12564
// Function ID: 96682
// Name: isNotAutomodEmbed
// Dependencies: []
// Exports: isNotAutomodEmbed

// Module 12564 (isNotAutomodEmbed)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  let tmp = type !== require(dependencyMap[0]).MessageEmbedTypes.AUTO_MODERATION_MESSAGE;
  if (tmp) {
    tmp = type !== require(dependencyMap[0]).MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  }
  return tmp;
};
