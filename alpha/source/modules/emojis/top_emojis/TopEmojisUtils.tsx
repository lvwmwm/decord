// Module ID: 9830
// Function ID: 9831
// Name: TopEmojisUtils
// Dependencies: [1392, 6723, 6725, 9831, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9830 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9831 */;
import UserStore from "UserStore" /* 1392 */;
import EmojiStore from "EmojiStore" /* 6723 */;
import TopEmojiStore from "TopEmojiStore" /* 6725 */;
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
