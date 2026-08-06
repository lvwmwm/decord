// Module ID: 8566
// Function ID: 8567
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1903, 5158, 5161, 8567, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 8566 (maybeFetchTopEmojisByGuild)
import mergeGuildAvatar from "mergeGuildAvatar";
import getEmojiToGroupId from "getEmojiToGroupId";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != currentUser.getCurrentUser()) {
      topEmojisMetadata = topEmojisMetadata.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!isFetching.getIsFetching(guildId)) {
        const topEmojis = require(8567) /* fetchTopEmojis */.fetchTopEmojis(guildId);
        const obj = require(8567) /* fetchTopEmojis */;
      }
    }
  }
};
