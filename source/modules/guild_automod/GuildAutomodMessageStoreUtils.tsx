// Module ID: 12754
// Function ID: 99359
// Name: isNotAutomodEmbed
// Dependencies: [670, 2]
// Exports: isNotAutomodEmbed

// Module 12754 (isNotAutomodEmbed)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  let tmp = type !== require(670) /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_MESSAGE;
  if (tmp) {
    tmp = type !== require(670) /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  }
  return tmp;
};
