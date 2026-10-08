// Module ID: 9365
// Function ID: 9366
// Name: TopEmojisUtils
// Dependencies: [1389, 5992, 5995, 9366, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9365 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9366 */;
import UserStore from "UserStore" /* 1389 */;
import EmojiStore from "EmojiStore" /* 5992 */;
import TopEmojiStore from "TopEmojiStore" /* 5995 */;
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
