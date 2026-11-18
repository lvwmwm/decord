// Module ID: 8975
// Function ID: 8976
// Name: TopEmojisUtils
// Dependencies: [1388, 6481, 6483, 8976, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 8975 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 8976 */;
import UserStore from "UserStore" /* 1388 */;
import EmojiStore from "EmojiStore" /* 6481 */;
import TopEmojiStore from "TopEmojiStore" /* 6483 */;
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
