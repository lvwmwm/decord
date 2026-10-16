// Module ID: 9668
// Function ID: 9669
// Name: TopEmojisUtils
// Dependencies: [1392, 6206, 6209, 9669, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9668 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9669 */;
import UserStore from "UserStore" /* 1392 */;
import EmojiStore from "EmojiStore" /* 6206 */;
import TopEmojiStore from "TopEmojiStore" /* 6209 */;
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
