// Module ID: 8537
// Function ID: 8538
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1874, 5128, 5131, 8538, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 8537 (maybeFetchTopEmojisByGuild)
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
        const topEmojis = require(8538) /* fetchTopEmojis */.fetchTopEmojis(guildId);
        const obj = require(8538) /* fetchTopEmojis */;
      }
    }
  }
};
