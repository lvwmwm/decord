// Module ID: 9759
// Function ID: 9760
// Name: TopEmojisUtils
// Dependencies: [1392, 6676, 6678, 9760, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9759 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9760 */;
import UserStore from "UserStore" /* 1392 */;
import EmojiStore from "EmojiStore" /* 6676 */;
import TopEmojiStore from "TopEmojiStore" /* 6678 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
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
};
