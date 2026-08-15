// Module ID: 9304
// Function ID: 9305
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1922, 6727, 6730, 9305, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9304 (maybeFetchTopEmojisByGuild)
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
        const topEmojis = require(9305) /* fetchTopEmojis */.fetchTopEmojis(guildId);
        const obj = require(9305) /* fetchTopEmojis */;
      }
    }
  }
};
