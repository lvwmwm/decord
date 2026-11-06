// Module ID: 10083
// Function ID: 10084
// Name: TopEmojisUtils
// Dependencies: [1385, 6876, 6878, 10084, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10083 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10084 */;
import UserStore from "UserStore" /* 1385 */;
import EmojiStore from "EmojiStore" /* 6876 */;
import TopEmojiStore from "TopEmojiStore" /* 6878 */;
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
