// Module ID: 9432
// Function ID: 9433
// Name: TopEmojisUtils
// Dependencies: [1390, 5987, 5990, 9433, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9432 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9433 */;
import UserStore from "UserStore" /* 1390 */;
import EmojiStore from "EmojiStore" /* 5987 */;
import TopEmojiStore from "TopEmojiStore" /* 5990 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != UserStore.getCurrentUser()) {
      const topEmojisMetadata = EmojiStore.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!TopEmojiStore.getIsFetching(guildId)) {
        const obj = TopEmojisActionCreators;
        const topEmojis = obj.fetchTopEmojis(guildId);
      }
    }
  }
};
