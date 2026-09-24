// Module ID: 10481
// Function ID: 10482
// Name: TopEmojisUtils
// Dependencies: [1376, 5710, 5713, 10482, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10481 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10482 */;
import UserStore from "UserStore" /* 1376 */;
import EmojiStore from "EmojiStore" /* 5710 */;
import TopEmojiStore from "TopEmojiStore" /* 5713 */;

require = fn;
const size = fn(2);
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
        const topEmojis = TopEmojisActionCreators.fetchTopEmojis(guildId);
      }
    }
  }
};
