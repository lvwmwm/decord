// Module ID: 9482
// Function ID: 9483
// Name: TopEmojisUtils
// Dependencies: [1385, 6906, 6908, 9483, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9482 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9483 */;
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
