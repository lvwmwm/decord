// Module ID: 9403
// Function ID: 9404
// Name: TopEmojisUtils
// Dependencies: [1390, 5994, 5997, 9404, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9403 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9404 */;
import UserStore from "UserStore" /* 1390 */;
import EmojiStore from "EmojiStore" /* 5994 */;
import TopEmojiStore from "TopEmojiStore" /* 5997 */;
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
