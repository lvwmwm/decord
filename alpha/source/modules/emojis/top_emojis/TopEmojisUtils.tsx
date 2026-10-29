// Module ID: 9897
// Function ID: 9898
// Name: TopEmojisUtils
// Dependencies: [1389, 6783, 6785, 9898, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9897 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9898 */;
import UserStore from "UserStore" /* 1389 */;
import EmojiStore from "EmojiStore" /* 6783 */;
import TopEmojiStore from "TopEmojiStore" /* 6785 */;
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
