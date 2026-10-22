// Module ID: 9801
// Function ID: 9802
// Name: TopEmojisUtils
// Dependencies: [1392, 6711, 6713, 9802, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9801 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9802 */;
import UserStore from "UserStore" /* 1392 */;
import EmojiStore from "EmojiStore" /* 6711 */;
import TopEmojiStore from "TopEmojiStore" /* 6713 */;
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
