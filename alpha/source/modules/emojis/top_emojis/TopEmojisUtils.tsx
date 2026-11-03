// Module ID: 10076
// Function ID: 10077
// Name: TopEmojisUtils
// Dependencies: [1385, 6916, 6918, 10077, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10076 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10077 */;
import UserStore from "UserStore" /* 1385 */;
import EmojiStore from "EmojiStore" /* 6916 */;
import TopEmojiStore from "TopEmojiStore" /* 6918 */;
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
