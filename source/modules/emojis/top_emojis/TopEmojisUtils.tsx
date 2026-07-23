// Module ID: 9332
// Function ID: 72944
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1849, 4991, 4994, 9333, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9332 (maybeFetchTopEmojisByGuild)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

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
        const topEmojis = require(9333) /* fetchTopEmojis */.fetchTopEmojis(guildId);
        const obj = require(9333) /* fetchTopEmojis */;
      }
    }
  }
};
