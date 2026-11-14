// Module ID: 9549
// Function ID: 9550
// Name: TopEmojisUtils
// Dependencies: [1388, 6969, 6971, 9550, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9549 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9550 */;
import UserStore from "UserStore" /* 1388 */;
import EmojiStore from "EmojiStore" /* 6969 */;
import TopEmojiStore from "TopEmojiStore" /* 6971 */;
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
