// Module ID: 9865
// Function ID: 9866
// Name: TopEmojisUtils
// Dependencies: [1389, 6760, 6762, 9866, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9865 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9866 */;
import UserStore from "UserStore" /* 1389 */;
import EmojiStore from "EmojiStore" /* 6760 */;
import TopEmojiStore from "TopEmojiStore" /* 6762 */;
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
