// Module ID: 8949
// Function ID: 8950
// Name: TopEmojisUtils
// Dependencies: [1386, 6454, 6456, 8950, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 8949 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 8950 */;
import UserStore from "UserStore" /* 1386 */;
import EmojiStore from "EmojiStore" /* 6454 */;
import TopEmojiStore from "TopEmojiStore" /* 6456 */;
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
