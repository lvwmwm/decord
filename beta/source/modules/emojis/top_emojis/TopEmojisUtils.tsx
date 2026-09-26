// Module ID: 10575
// Function ID: 10576
// Name: TopEmojisUtils
// Dependencies: [1372, 5708, 5711, 10576, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10575 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10576 */;
import UserStore from "UserStore" /* 1372 */;
import EmojiStore from "EmojiStore" /* 5708 */;
import TopEmojiStore from "TopEmojiStore" /* 5711 */;

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
