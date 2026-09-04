// Module ID: 10207
// Function ID: 10208
// Name: maybeFetchTopEmojisByGuild
// Dependencies: [1921, 5419, 5422, 10208, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10207 (maybeFetchTopEmojisByGuild)
import fetchTopEmojis from "fetchTopEmojis" /* 10208 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "getEmojiToGroupId" /* 5419 */;
import closure_4 from "initialize" /* 5422 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

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
        const topEmojis = fetchTopEmojis.fetchTopEmojis(guildId);
        const obj = fetchTopEmojis;
      }
    }
  }
};
