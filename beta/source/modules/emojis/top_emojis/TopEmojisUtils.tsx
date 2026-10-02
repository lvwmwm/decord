// Module ID: 9646
// Function ID: 9647
// Name: TopEmojisUtils
// Dependencies: [1378, 5772, 5775, 9647, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9646 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9647 */;
import UserStore from "UserStore" /* 1378 */;
import EmojiStore from "EmojiStore" /* 5772 */;
import TopEmojiStore from "TopEmojiStore" /* 5775 */;
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
