// Module ID: 12798
// Function ID: 99534
// Name: isNotAutomodEmbed
// Dependencies: [670, 2]
// Exports: isNotAutomodEmbed

// Module 12798 (isNotAutomodEmbed)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  let tmp = type !== require(670) /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_MESSAGE;
  if (tmp) {
    tmp = type !== require(670) /* MessageEmbedTypes */.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
  }
  return tmp;
};
