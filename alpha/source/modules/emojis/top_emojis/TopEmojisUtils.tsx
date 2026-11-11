// Module ID: 9483
// Function ID: 9484
// Name: TopEmojisUtils
// Dependencies: [1385, 6906, 6908, 9484, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9483 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9484 */;
import UserStore from "UserStore" /* 1385 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import TopEmojiStore from "TopEmojiStore" /* 6908 */;
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
