// Module ID: 8692
// Function ID: 8693
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1922, 5216, 5219, 8693, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 8692 (maybeFetchTopEmojisByGuild)
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
        const topEmojis = require(8693) /* fetchTopEmojis */.fetchTopEmojis(guildId);
        const obj = require(8693) /* fetchTopEmojis */;
      }
    }
  }
};
