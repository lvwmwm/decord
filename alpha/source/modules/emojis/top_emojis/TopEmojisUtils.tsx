// Module ID: 9653
// Function ID: 9654
// Name: TopEmojisUtils
// Dependencies: [1390, 6203, 6206, 9654, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9653 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9654 */;
import UserStore from "UserStore" /* 1390 */;
import EmojiStore from "EmojiStore" /* 6203 */;
import TopEmojiStore from "TopEmojiStore" /* 6206 */;
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
