// Module ID: 9402
// Function ID: 9403
// Name: TopEmojisUtils
// Dependencies: [1386, 6757, 6759, 9403, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9402 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9403 */;
import UserStore from "UserStore" /* 1386 */;
import EmojiStore from "EmojiStore" /* 6757 */;
import TopEmojiStore from "TopEmojiStore" /* 6759 */;
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
