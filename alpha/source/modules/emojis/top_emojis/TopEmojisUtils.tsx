// Module ID: 9945
// Function ID: 9946
// Name: TopEmojisUtils
// Dependencies: [1383, 6796, 6798, 9946, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9945 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9946 */;
import UserStore from "UserStore" /* 1383 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import TopEmojiStore from "TopEmojiStore" /* 6798 */;
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
