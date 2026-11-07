// Module ID: 10067
// Function ID: 10068
// Name: TopEmojisUtils
// Dependencies: [1385, 6851, 6853, 10068, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10067 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10068 */;
import UserStore from "UserStore" /* 1385 */;
import EmojiStore from "EmojiStore" /* 6851 */;
import TopEmojiStore from "TopEmojiStore" /* 6853 */;
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
