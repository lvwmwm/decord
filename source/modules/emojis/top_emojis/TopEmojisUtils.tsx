// Module ID: 8583
// Function ID: 8584
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1903, 5175, 5178, 8584, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 8583 (maybeFetchTopEmojisByGuild)
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
        const topEmojis = require(8584) /* fetchTopEmojis */.fetchTopEmojis(guildId);
        const obj = require(8584) /* fetchTopEmojis */;
      }
    }
  }
};
