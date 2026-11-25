// Module ID: 9501
// Function ID: 9502
// Name: TopEmojisUtils
// Dependencies: [1386, 6852, 6854, 9502, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9501 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9502 */;
import UserStore from "UserStore" /* 1386 */;
import EmojiStore from "EmojiStore" /* 6852 */;
import TopEmojiStore from "TopEmojiStore" /* 6854 */;
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
