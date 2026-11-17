// Module ID: 9561
// Function ID: 9562
// Name: TopEmojisUtils
// Dependencies: [1388, 6977, 6979, 9562, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9561 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9562 */;
import UserStore from "UserStore" /* 1388 */;
import EmojiStore from "EmojiStore" /* 6977 */;
import TopEmojiStore from "TopEmojiStore" /* 6979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export function maybeFetchTopEmojisByGuild(guildId) {
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
}
